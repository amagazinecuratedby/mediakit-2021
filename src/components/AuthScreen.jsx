import React from "react"
import axios from "axios"

export default function AuthScreen() {
  const [psw, setPsw] = React.useState(null)

  async function auth(e) {
    e.preventDefault()

    try {
      await axios.post("/.netlify/functions/auth", { psw })
      console.log("success")
    } catch (error) {
      alert("error!")
    }
  }

  return (
    <form onSubmit={auth}>
      <input
        type="password"
        name="psw"
        id="psw"
        onChange={(e) => setPsw(e.target.value)}
      />
      <button type="submit">Validate</button>
    </form>
  )
}
