module.exports.buildMakeSecret = () => {
  return async ({ payload } = {}) => {
    const { api_key } = payload;
    if (!api_key) {
      throw new Error("Invalid/missing api key");
    }
    return Object.freeze({
      getApiKey: () => api_key,
    });
  };
};
