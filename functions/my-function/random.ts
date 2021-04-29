const fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Cherry']

const randomIndex = (n: number) => Math.floor(Math.random() * n)

export const randomFruit = () => fruits[randomIndex(fruits.length)]
