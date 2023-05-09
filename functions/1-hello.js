// domain/.netlify/functions/1-hello
// localhost:8888/

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Supra supra supra cool',
  };
};
