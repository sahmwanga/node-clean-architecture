const { addSecret, addApikey, validateApikey } = require("../usecases");
const { generateSecretController } = require("./generateSecretController");
const { generateApikeyController } = require("./generateApikeyController");
const { validateApikeyController } = require("./validateApikeyController");

const httpRequest = (controller) => {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
    };
    controller(httpRequest)
      .then((httpResponse) => {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      })
      .catch((e) => console.log(e));
  };
};

const addSecretKey = httpRequest(generateSecretController({ addSecret }));
const apiKey = httpRequest(generateApikeyController({ addApikey }));
const validateKeySecret = httpRequest(
  validateApikeyController({ validateApikey })
);

module.exports = { addSecretKey, apiKey, validateKeySecret };
