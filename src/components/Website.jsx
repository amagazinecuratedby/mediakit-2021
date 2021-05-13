import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function Website({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (!isActive && !fullBtn) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-30 border-t border-black gap-y-30 overflow-hidden">
      <div
        className={`${fullBtn ? "col-span-12 2xl:col-span-4" : "col-span-12"}`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          A MAGAZINE <span className="italic">website</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 2xl:col-span-8 gap-y-30"
          >
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-24">
                <a
                  href="https://amagazinecuratedby.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic"
                >
                  www.amagazinecuratedby.com
                </a>{" "}
                is a multi­service platform that encapsulates an archival
                collection component and a dynamic creative news section. Each
                issue of A MAGAZINE <span className="italic">curated by</span>{" "}
                has its dedicated page where the theme of the magazine and its
                contributors are presented alongside pictures and visual
                references. Our collection of A PROJECT
                <span className="italic">curated by</span> will soon be
                accessible on this space too.
              </p>
              <p>
                The news section invites regular contributors to extend our
                curated perspective to current events and stories taking place
                in fashion, art and incidental creative fields, as well as our
                curators, contributors and supporting brands and partners,
                offering a distinctive outlook and insightful angle on
                outreached spaces and unexplored topics.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img
                src="ordinateur.jpg"
                alt="A MAGAZINE curate by website"
                className="max-w-full h-auto"
              />
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
