import Web3 from "web3";
import {  setAlert } from "./store";
const getEtheriumContract = async () => {};

const connectWallet = async () => {};

const isWallectConnected = async () => {
};


//---UPLOAD TO IPFS FUNCTION
const uploadToPinata = async () => {};

const getAllNFTs = async () => {};

const mintNFT = async () => {};

const buyNFT = async ({ id, cost }) => {};

const updateNFTPrice = async ({ id, cost }) => {};

const reportError = (error) => {
  setAlert(JSON.stringify(error), "red");
  throw new Error("No ethereum object.");
};

export {};
