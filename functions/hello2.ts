import faker from 'faker'

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      product: `${faker.commerce.product()} ${faker.commerce.product()}`,
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      department: faker.commerce.department(),
      price: faker.commerce.price(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
