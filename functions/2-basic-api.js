const items = require('../assets/data');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    //body: 'our basic api',
    body: JSON.stringify(items),
  };
};
