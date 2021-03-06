module.exports = (db) => {
  /**
   *
   * @param {object} api_key
   */
  const findByApiKey = async ({ api_key }) => {
    return await db.tbl_oauth_user_api_keys.findOne({
      where: { api_key, status: 1 },
      raw: true,
    });
  };

  const createUserApiKey = async (payload) => {
    return await db.tbl_oauth_user_api_keys.create(payload);
  };

  return Object.freeze({
    findByApiKey,
    createUserApiKey,
  });
};
