import { useEffect, useState } from "react";
import { init } from "./Web3Client";

const data = [
  {
    name: "Apartment In China Town",
    city: "New York",
    lat: "40.716867",
    long: "-73.999005",
    unoDescription: "3 Guests · 2 beds · 2 Rooms",
    dosDescription: "Wifi · Kitchen · Living Area",
    imgUrl: "./images/chinaTown.jpg",
    maxGuests: 3,
    pricePerDay: 1,
    datesBooked: [],
  },
  {
    name: "Studio in Central Park",
    city: "New York",
    lat: "40.767589",
    long: "-73.969231",
    unoDescription: "1 Guest · 1 bed",
    dosDescription: "Wifi · Self check-in · Work Station",
    imgUrl: "./images/studioInCentralPark.jpg",
    maxGuests: 1,
    pricePerDay: 1,
    datesBooked: [],
  },
  {
    name: "Tropical Ambiance in London",
    city: "London",
    lat: "51.500075",
    long: "-0.125706",
    unoDescription: "2 Guests · 2 bed · 1 Bath",
    dosDescription: "Wifi · Work Station",
    imgUrl: "./images/tropicalAmbianceInLondon.jpg",
    maxGuests: 1,
    pricePerDay: 1,
    datesBooked: [],
  },
];

export const useWeb3Client = () => {
  const [airbnb, setAirbnb] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    (async () => {
      const { airbnb: airbnbLocal, selectedAccount } =
        await init();
      const currentCounter = Number(
        await airbnbLocal.methods.counter().call()
      );
      console.log({ currentCounter });

      for (let index = 0; index < data.length; index++) {
        const rental = data[index];
        if (currentCounter <= index) {
          console.log({ rental });

          const tx = await airbnbLocal.methods
            .addRentals(
              rental.name,
              rental.city,
              rental.lat,
              rental.long,
              rental.unoDescription,
              rental.dosDescription,
              rental.imgUrl,
              rental.maxGuests,
              rental.pricePerDay,
              rental.datesBooked
            )
            .send({ from: selectedAccount });
          console.log(`${index} rental added successfully`);
          console.log({ tx });
        }
      }

      setAirbnb(airbnbLocal);
      setAccount(selectedAccount);
      console.log("airbnb contract initialized successfully!!!");
    })();
  }, []);
};
