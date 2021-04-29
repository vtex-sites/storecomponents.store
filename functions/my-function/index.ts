import { randomFruit } from './random'

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `Today's fruit is ${randomFruit()}`,
    headers: {
      'Content-Type': 'text/plain',
    },
  }
}
