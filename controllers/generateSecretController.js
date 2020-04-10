module.exports.generateSecretController = ({ addSecret }) => {
  return async (req, res, next) => {
    try {
      const payload = req.body;
      const secret = await addSecret({ payload });
      console.log(secret);
      return res.json(secret);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  };
};
