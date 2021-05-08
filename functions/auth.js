const password = process.env.ACCESS_PASSWORD

module.exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const psw = body.psw?.replace(" ", "")

  if (psw && psw === password) {
    return callback(null, { statusCode: 200 })
  }

  return callback(null, { statusCode: 500 })
}
