const password = process.env.ACCESS_PASSWORD

module.exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const psw = body.psw?.replace(" ", "")

  if (psw && psw === password) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: "success" }),
    })
  }

  return callback(null, {
    statusCode: 500,
    body: JSON.stringify({ msg: "error" }),
  })
}
