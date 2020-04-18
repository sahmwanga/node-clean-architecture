module.exports = (db) => {
  /**
   *
   * @param {object} api_key
   */
  const findByApiKey = async ({ api_key }) => {
    return await db.UserSecretKey.findOne({
      where: { api_key, status: 1 },
      raw: true,
    });
  };

  const createUserApiKey = async (payload) => {
    return await db.UserSecretKey.create(payload);
  };

  return Object.freeze({
    findByApiKey,
    createUserApiKey,
  });
};
