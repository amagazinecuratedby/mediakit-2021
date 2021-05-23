import Arrow from "../icons/arrow"
import Mail from "../icons/mail"
import React from "react"

export default function Header() {
  return (
    <header className="font-sans uppercase bg-dark text-white text-18 sticky top-0 z-10">
      <div className="grid grid-cols-12 gap-x-16 py-20 px-20 md:px-30">
        <h1 className="font-serif text-30 leading-30 col-span-9 3md:col-span-4">
          A MAGAZINE{" "}
          <span className="italic normal-case">
            Media Kit <i className="hidden xs:inline-block">2021</i>
          </span>
        </h1>
        <p className="col-span-8 w-full text-right hidden invisible 3md:block 3md:visible">
          Visit{" "}
          <a
            href="https://amagazinecuratedby.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            amagazinecuratedby.com
          </a>
          <span className="inline-block mx-8">|</span>
          <a
            href="mailto:info@amagazinecuratedby.com"
            rel="noopener"
            className="underline hover:no-underline"
          >
            Contact
          </a>{" "}
          our team
        </p>
        <p className="col-span-3 w-full flex justify-end items-baseline 3md:hidden 3md:invisible">
          <a
            href="https://amagazinecuratedby.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-20"
          >
            <Arrow />
          </a>
          <a href="#" rel="noopener" className="underline hover:no-underline">
            <Mail />
          </a>
        </p>
      </div>
    </header>
  )
}
