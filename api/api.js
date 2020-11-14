const axios = require('axios')
const queryString = require('query-string')

exports.handler = async (
  {
    headers,
    path: rawPath,
    httpMethod,
    body,
    queryStringParameters,
  },
  _
) => {
  const headersToSend = { ...headers }
  headersToSend['x-forwarded-host'] = headers.host

  const path = rawPath.replace('/.netlify/functions', '')
  const querystring = queryString.stringify(queryStringParameters)
  const response = await axios({
    method: httpMethod,
    url: `https://storecomponents.vtexcommercestable.com.br${path}?${querystring}`,
    data: body,
    headers: headersToSend,
  })

  return {
    statusCode: Number(response.status),
    body: JSON.stringify(response.data),
  }
}
