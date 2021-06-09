const password = process.env.ACCESS_PASSWORD

exports.handler = (event, context) => {
  const body = JSON.parse(event.body)
  const psw = body.psw.replace(" ", "")

  if (psw && psw === password) {
    console.log("canedio")
    return { statusCode: 200 }
  }

  console.log("cane, dio?")

  return { statusCode: 500 }
}
