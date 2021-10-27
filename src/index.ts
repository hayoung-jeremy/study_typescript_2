class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
