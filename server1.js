console.log("app is loading ...");
const crypto = require("crypto");

crypto.randomBytes(256, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
});
