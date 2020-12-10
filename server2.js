console.log("app is loading ...");
const crypto = require("crypto");
const util = require('util')
const randomBytes = util.promisify(crypto.randomBytes);

(async () => {
  const buf = await randomBytes(256);
  console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
})();
