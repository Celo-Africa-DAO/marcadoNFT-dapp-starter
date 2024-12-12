import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from "./store";
import abi from "./abis/MarcadoNFT.json";
import { pinata_secret_api_key, pinata_api_key, jwtToken } from "./constants";

const { ethereum } = window;
window.web3 = new Web3(ethereum);
window.web3 = new Web3(window.web3.currentProvider);

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

export {
};
