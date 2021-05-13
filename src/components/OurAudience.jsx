import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function OurAudience({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (!isActive && !fullBtn) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-30 border-t border-black gap-y-30 overflow-hidden">
      <div
        className={`${
          fullBtn ? "col-span-12 lg:col-span-5 2xl:col-span-4" : "col-span-12"
        }`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          <span className="italic">About</span> OUR AUDIENCE
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 lg:col-span-7 2xl:col-span-4"
          >
            <div className="col-span-12">
              <p className="mb-24">
                Our audience consists of highly informed readers and consumers
                whose primary interests revolve around the worlds of fashion,
                contemporary art and design – aesthetes who equally appreciate
                the magazine’s elevated creative and intellectual content as
                they do its premium production quality as a collectible,
                book­like object. 
              </p>
              <p>
                Whilst some readers purchase individual designer issues in line
                with their personal tastes in fashion, others are avid fans of
                the magazine as a concept, choosing to collect every issue to
                complete their personal collections. Online sales reflect this
                as readers often add an archive issue to their purchases, whilst
                bookstores around the world continue to stock back issues in
                small quantities for new readers who discover the concept for
                the first time.
              </p>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
