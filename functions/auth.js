const password = process.env.ACCESS_PASSWORD

exports.handler = (event, context) => {
  const body = JSON.parse(event.body)
  const psw = body.psw?.replace(" ", "")

  if (psw && psw === password) {
    return { statusCode: 200 }
  }

  return { statusCode: 500 }
}
