exports.handler = (req, res) => {
  const { name = 'World' } = req.query

  res.status(200).send(`Hello ${name}!`)
}
