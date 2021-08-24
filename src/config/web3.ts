import Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import { networks } from "../utils";

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "990b68b61853f6418233b1f502a220a8770bb38849d9bd8fc552ed55f5899365";

const NETWORK_ID = process.env.NETWORK_ID || 1;

const network = networks[NETWORK_ID];
const web3 = new Web3();
const httpProvider = new Web3.providers.HttpProvider(network.node);
web3.eth.setProvider(httpProvider);
const account = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

export const seaport = new OpenSeaPort(web3.eth.currentProvider, {
  networkName: network.name as Network,
});

export { web3 };
