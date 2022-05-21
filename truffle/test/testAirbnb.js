const {
  expectRevert,
  expectEvent,
} = require("@openzeppelin/test-helpers");
const Airbnb = artifacts.require("Airbnb");

contract("Airbnb", ([owner, user, user2]) => {
  let airbnb;
  const data = [
    {
      name: "Apartment In China Town",
      city: "New York",
      lat: "40.716867",
      long: "73.99005",
      unoDescription: "3 Guests · 2 beds · 2 Rooms",
      dosDescription: "Wifi · Kitchen · Living Area",
      imgUrl:
        "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
      maxGuests: "3",
      pricePerDay: "1",
      datesBooked: [],
    },
  ];

  describe("testing adding rental...", () => {
    before(async () => {
      airbnb = await Airbnb.new({ from: owner });
    });
    it("should adding rental successfully", async () => {
      const rental1 = data[0];
      const tx = await airbnb.addRentals(
        rental1.name,
        rental1.city,
        rental1.lat,
        rental1.long,
        rental1.unoDescription,
        rental1.dosDescription,
        rental1.imgUrl,
        rental1.maxGuests,
        rental1.pricePerDay,
        rental1.datesBooked,
        { from: owner }
      );
      expectEvent(tx, "rentalCreated", {
        ...rental1,
        id: "0",
        renter: owner,
      });
    });

    it("should reject adding rental - Only owner of smart contract can put up rentals", async () => {
      const rental1 = data[0];

      await expectRevert(
        airbnb.addRentals(
          rental1.name,
          rental1.city,
          rental1.lat,
          rental1.long,
          rental1.unoDescription,
          rental1.dosDescription,
          rental1.imgUrl,
          rental1.maxGuests,
          rental1.pricePerDay,
          rental1.datesBooked,
          { from: user }
        ),
        "Only owner of smart contract can put up rentals"
      );
    });
  });

  describe("testing getting rental...", () => {
    it("should return rental", async () => {
      const rental = await airbnb.rentals("0");
      expect(rental.name).to.be.eq(data[0].name);
      expect(rental.city).to.be.eq(data[0].city);
      expect(rental.lat).to.be.eq(data[0].lat);
      expect(rental.long).to.be.eq(data[0].long);
      expect(rental.unoDescription).to.be.eq(
        data[0].unoDescription
      );
    });
  });

  describe("testing adding dates booked...", () => {
    const newBookings = ["2020-2-2"];
    const newBookings2 = ["2020-2-4"];
    const rentalId = "0";

    it("should book a rental", async () => {
      const tx = await airbnb.addDatesBooked(
        rentalId,
        newBookings,
        {
          from: user,
          value: 10 ** 18,
        }
      );

      expectEvent(tx, "newDatesBooked", {
        datesBooked: newBookings,
        id: rentalId,
        booker: user,
        city: data[0].city,
        imgUrl: data[0].imgUrl,
      });
    });

    it("should reject booking a rental - No such Rental", async () => {
      await expectRevert(
        airbnb.addDatesBooked("1", newBookings, {
          from: user,
          value: 10 ** 18,
        }),
        "No such Rental"
      );
    });

    it("should reject booking a rental - Already Booked For Requested Date", async () => {
      await expectRevert(
        airbnb.addDatesBooked("0", newBookings, {
          from: user,
          value: 10 ** 18,
        }),
        "Already Booked For Requested Date"
      );
    });

    it("should reject booking a rental - Please submit the asking price in order to complete the purchase", async () => {
      await expectRevert(
        airbnb.addDatesBooked("0", newBookings2, {
          from: user,
          value: 10 ** 16,
        }),
        "Please submit the asking price in order to complete the purchase"
      );
    });
  });
});
