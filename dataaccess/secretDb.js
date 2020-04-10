module.exports = ({myDb}) => {
  const findAll = ({ api_key }) => {
      const db = await myDb()
      return await db.findOne();
  };
  return Object.freeze({
    findAll,
  });
};
