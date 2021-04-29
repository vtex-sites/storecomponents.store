import faker from 'faker'

exports.handler = async (event: any) => {
  return {
    statusCode: 200,
    body: {
      product: `${faker.commerce.product()} ${faker.commerce.product()}`,
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      department: faker.commerce.department(),
      price: faker.commerce.price(),
    },
  }
}
