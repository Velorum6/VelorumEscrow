import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "velorumEsc9",
  tables: {
    Agreements3: {
      schema: {
        id: "uint256",
        bob: "address",
        alice: "address",
        arbitrator: "address",
        amount: "uint256",
        bobIn: "bool",
        aliceIn: "bool",
      },
      key: ["id"],
      codegen: {
        dataStruct: false,
      },
    },
  },
  systems: {
    EscrowSystem: {
      name: "EscrowSystem",
      openAccess: true,
    }
  }
});