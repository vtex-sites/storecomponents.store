exports.handler = async (event) => {
  let name = '@channel!!!!!!!!!'

  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name
  }

  return {
    statusCode: 200,
    body: `Hi ${name}`,
  }
} 
