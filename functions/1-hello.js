// domain/.netlify/functions/1-hello
// localhost:8888/

// in node we use exports
// event
// context where the function is running , not used in this course

// const person = { name: 'john' };

exports.handler = async (event, context, cb) => {
  // console.log(event);
  return {
    statusCode: 200,
    // always a string or an object to stringify
    body: 'Hello world Supra supra supra cool',
    // body: JSON.stringify(person),
  };
};
