const jwt = require("jsonwebtoken");

const genJWT = (noregistro, curp) => {
  const payload = { noregistro, curp };
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SCRT_JWT_SEED,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          // error
          console.log(err);
          reject(err);
        } else {
          // se creo token
          resolve(token);
        }
      }
    );
  });
};

module.exports={genJWT}