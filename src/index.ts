import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // static method: can be used without creating an instance of the Class
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(
  0,
  "asdasfas222",
  "",
  "hello data",
  123456
);

// blockchain 에 추가될 데이터는 block 으로만 한정시킬 수 있음
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

// latest item of the chain
const getLatestBlcok = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
