const {
  expectRevert,
  expectEvent,
} = require("@openzeppelin/test-helpers");
const Airbnb = artifacts.require("Airbnb");

contract("Airbnb", ([owner, user, user2]) => {
  describe("testing adding rental...", () => {
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
});
