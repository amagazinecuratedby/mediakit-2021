import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function AboutAPublisher({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="bg-beige text-red font-serif p-21 md:p-30 pseudo-border-red overflow-hidden gap-y-21 md:gap-y-30">
      <div
        className={`${!fullBtn ? "col-span-12 2xl:col-span-3" : "col-span-12"}`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          <span className="italic">About</span> A PUBLISHER
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 2xl:col-span-9 gap-y-21 md:gap-y-30"
          >
            <div className="col-span-12 3md:col-span-6">
              <p>
                Today A PUBLISHER has expanded beyond producing the print title
                A MAGAZINE <span className="italic">curated by</span> to include
                the creation of custom editorial content, exhibitions, events,
                copywriting services and creative consulting.
              </p>
            </div>
            <div className="col-span-12 3md:col-span-6">
              <p className="mb-21">
                A MAGAZINE <span className="italic">curated by</span>
              </p>
              <p className="mb-42 indent">
                A dedicated print magazine guest edited by an independent
                fashion designer or the creative director of a fashion house.
                Entirely unique yet immediately recognisable with our signature
                ‘A’ cover design, each issue joins a canon of collectible
                magazines featuring some of the greatest names in 21st century
                avant-garde fashion.
              </p>
              <p className="mb-21 ">
                A PROJECT <span className="italic">curated by</span>
              </p>
              <p className="mb-42 indent">
                A thematic editorial project developed in total collaboration
                with a brand or house focusing on a specific topic. The format
                of (subject)
                <span className="italic">curated by</span> (designer/brand) is
                employed to create a synergy with our core product, while
                differentiating each print and digital project as a singular,
                mono-branded entity and invaluable marketing tool for corporate
                gifting and traditional distribution.
              </p>
              <p className="mb-21">
                CONTENT <span className="italic">curated for</span>
              </p>
              <p className="mb-42 indent">
                Endless possibilities, for the here & now. Custom editorial and
                advertorial content, copywriting services and creative
                consulting for print and digital projects from the A MAGAZINE{" "}
                <span className="italic">team</span>.
              </p>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
