import BgA from "../icons/bg-a.jsx"
import React from "react"

export default function AuthScreen({ action, authError }) {
  const [psw, setPsw] = React.useState(null)

  return (
    <section className="bg-greyTeal flex-grow overflow-hidden relative">
      <BgA /> // max-width 1010
      <form onSubmit={(e) => action(e, psw)} className="uppercase font-sans">
        <input
          type="password"
          name="psw"
          m
          id="psw"
          placeholder="Password"
          onChange={(e) => setPsw(e.target.value)}
          className="bg-white"
        />
        <button type="submit">Enter</button>
      </form>
    </section>
  )
}
