import React from "react"
import Section from "./Section.jsx"

export default function Website() {
  return (
    <Section className="col-span-12 pt-20 md:pt-30 pb-40 md:pb-60 border-t border-black gap-y-20 md:gap-y-30 overflow-hidden">
      <div className="col-span-12 xl:col-span-3">
        <p>
          A MAGAZINE <span className="italic">website</span>
        </p>
      </div>
      <Section className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30">
        <div className="col-span-12 lg:col-span-6">
          <p className="mb-25">
            <a
              href="https://amagazinecuratedby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              www.amagazinecuratedby.com
            </a>{" "}
            is a multi­service platform that encapsulates an archival collection
            component and a dynamic creative news section. Each issue of A
            MAGAZINE <span className="italic">curated by</span> has its
            dedicated page where the theme of the magazine and its contributors
            are presented alongside the table of contents and visual excerpts.
            Our collection of A PROJECT{" "}
            <span className="italic">curated by</span> will soon be accessible
            on this space too.
          </p>
          <p>
            The news section invites regular contributors to extend our curated
            perspective to current events and stories taking place in fashion,
            art and incidental creative fields, as well as our curators,
            contributors and supporting brands and partners, offering a
            distinctive outlook and insightful angle on outreached spaces and
            unexplored topics.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img
            src="ordinateur.jpg"
            alt="A MAGAZINE curated by website"
            style={{ maxHeight: "260px" }}
            className="max-w-full w-auto h-auto"
          />
        </div>
      </Section>
    </Section>
  )
}
