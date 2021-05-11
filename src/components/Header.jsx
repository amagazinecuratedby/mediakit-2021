import React from "react"

export default function Header() {
  return (
    <header className="font-sans uppercase bg-black text-white text-18 py-21 px-30">
      <h1 className="font-serif text-30 leading-30">
        A MAGAZINE <span className="italic normal-case">Media Kit 2021</span>
      </h1>
      <a href="#" rel="noopener">
        Go on our website
      </a>
      <p>
        For any enquiries, don't hesitate to{" "}
        <a href="#" rel="noopener" className="underline hover:no-underline">
          contact us
        </a>
      </p>
    </header>
  )
}
