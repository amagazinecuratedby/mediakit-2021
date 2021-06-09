const password = process.env.ACCESS_PASSWORD

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const psw = body.psw.replace(" ", "")

  if (psw && psw === password) {
    console.log("canedio")
    return callback(null, { statusCode: 200 })
  }

  console.log("cane, dio?")

  return callback(null, { statusCode: 500 })
}
