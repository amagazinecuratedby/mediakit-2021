import BgA from "../icons/bg-a.jsx"
import React from "react"

export default function AuthScreen({ action, authError }) {
  const [psw, setPsw] = React.useState(null)

  return (
    <section className="bg-greyTeal flex-grow overflow-hidden relative">
      <BgA />
      <form
        onSubmit={(e) => action(e, psw)}
        className="font-sans absolute top-10vh left-1/2 transform -translate-x-1/2 md:transform-none md:left-60p md:top-40p w-max"
      >
        {authError ? (
          <p className="uppercase font-sans text-18 inline-block">
            Wrong password, sorry!
          </p>
        ) : (
          <input
            type="password"
            name="psw"
            m
            id="psw"
            placeholder="Password"
            onChange={(e) => setPsw(e.target.value)}
            className="bg-white uppercase font-sans p-12 md:py-4 md:px-10 placeholder-grey"
            style={{ fontSize: "16px" }}
          />
        )}
        <button type="submit" className="uppercase font-sans text-18 ml-21">
          Enter
        </button>
      </form>
    </section>
  )
}
