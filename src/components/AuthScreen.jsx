import BgA from "../icons/bg-a.jsx"
import React from "react"

export default function AuthScreen({ action, authError }) {
  const [psw, setPsw] = React.useState(null)

  return (
    <section className="bg-greyTeal flex-grow overflow-hidden relative">
      <BgA />
      <form
        onSubmit={(e) => action(e, psw)}
        className="font-sans absolute top-40p left-1/2 transform -translate-x-1/2 md:transform-none md:left-60p w-max"
      >
        <input
          type="password"
          name="psw"
          m
          id="psw"
          placeholder="Password"
          onChange={(e) => setPsw(e.target.value)}
          className="bg-white uppercase font-sans text-18 py-4 px-8 placeholder-grey"
        />
        <button type="submit" className="uppercase font-sans text-18 ml-21">
          Enter
        </button>
      </form>
    </section>
  )
}
