exports.handler = async (event) => {
  if (!event.queryStringParameters?.x || !event.queryStringParameters?.y) {
    return {
      statusCode: 400,
      body: 'Please inform x and y on querystring',
    }
  }

  if (event.queryStringParameters.y === 0) {
    throw new Error('Unhandled exception: dividend cannot be zero')
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      value: event.queryStringParameters.x / event.queryStringParameters.y,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
