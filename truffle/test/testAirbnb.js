const Airbnb = artifacts.require("Airbnb");

contract("Airbnb", ([owner, user, user2]) => {
  let airbnb;

  beforeEach(async () => {
    airbnb = await Airbnb.new();
  });

  describe("testing token contract...", () => {});
});
