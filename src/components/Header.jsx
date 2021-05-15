import React from "react"

export default function Header() {
  return (
    <header className="font-sans uppercase bg-dark text-white text-18 sticky top-0 z-10">
      <div className="container py-20 px-20 md:px-30">
        <h1 className="font-serif text-30 leading-30 col-span-4">
          A MAGAZINE <span className="italic normal-case">Media Kit 2021</span>
        </h1>
        <p className="col-span-8 w-full text-right">
          <a
            href="https://amagazinecuratedby.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go on our website
          </a>
          {"  "}| For any enquiries, don't hesitate to{" "}
          <a href="#" rel="noopener" className="underline hover:no-underline">
            contact us
          </a>
        </p>
      </div>
    </header>
  )
}
