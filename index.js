// index.js
const Blockchain = require('./blockchain');
const Block = require('./block');

// Create new blockchain with difficulty level
const myCoin = new Blockchain(2);

console.log("⛏️ Mining block 1...");
myCoin.addBlock(new Block(1, new Date().toISOString(), { from: "Aarya", to: "Vihaan", amount: 4 }));

console.log("⛏️ Mining block 2...");
myCoin.addBlock(new Block(2, new Date().toISOString(), { from: "Vihaan", to: "Aarya", amount: 2 }));

console.log("\n🧱 Full Blockchain:");
console.log(JSON.stringify(myCoin, null, 4));

console.log("\n✅ Is blockchain valid?", myCoin.isChainValid());

// Tampering with data
console.log("\n⚠️ Tampering with blockchain...");
myCoin.chain[1].data = { from: "Aarya", to: "Evil", amount: 1000000 };
myCoin.chain[1].hash = myCoin.chain[1].calculateHash();

console.log("❌ Is blockchain valid after tampering?", myCoin.isChainValid());
