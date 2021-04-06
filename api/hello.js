exports.handler = async (event) => {
  let name = 'World'

  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name
  }

  return {
    statusCode: 200,
    body: `Hello ${name}`,
  }
}
