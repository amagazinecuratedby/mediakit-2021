import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section"

export default function Team({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section
      className={`text-black font-serif px-20 md:px-30 pt-25 md:pt-35 overflow-hidden${
        isActive ? " bg-greyTeal" : " bg-white"
      }`}
    >
      <div
        className={`font-sans pb-25 md:pb-35${
          !fullBtn ? " col-span-12 xl:col-span-3" : " col-span-12"
        }`}
      >
        <button
          type="button"
          className="uppercase text-18 w-full"
          onClick={() => action(order)}
        >
          V. Team
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            isActive
            motionKey="topLvl4"
            className="col-span-12 xl:col-span-9 pb-40 md:pb-60 gap-y-20 md:gap-y-30"
          >
            <div className="col-span-12 2md:col-span-6">
              <ul className="flex-list-50">
                <li>
                  <span className="uppercase">Publisher</span>
                  <span>Evence-Charles Coppée</span>
                </li>
                <li>
                  <span className="uppercase">Editor in Chief</span>
                  <span>
                    Dan Thawley
                    <br />
                    <span className="text-21">
                      +33 (0)6 01 15 45 57
                      <br />
                      <a href="mailto:dan@amagazinecuratedby.com">
                        dan(at)amagazinecuratedby.com
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="uppercase">Managing Editor</span>
                  <span>
                    Thérèse Boon Falleur
                    <br />
                    <span className="text-21">
                      +33 (0)6 87 34 39 35
                      <br />
                      <a href="mailto:therese@amagazinecuratedby.com">
                        therese(at)amagazinecuratedby.com
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="uppercase">Editor at Large</span>
                  <span>Blake Abbie</span>
                </li>
                <li>
                  <span className="uppercase">Art Direction</span>
                  <span>
                    Mike Meiré – <span className="italic">Meiré und Meiré</span>
                  </span>
                </li>
                <li>
                  <span className="uppercase">Moving Image</span>
                  <span>Alexandre Silberstein</span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 2md:col-span-6 flex flex-col">
              <p className="mb-20 md:mb-30">
                A PUBLISHER collaborates on its different platforms with a
                global network of journalists and creatives from Paris, London,
                Milan, Berlin, New York, Tokyo, Shanghai, Delhi.
              </p>
              <ul className="mb-20 md:mb-30">
                <li>
                  <a
                    href="https://www.instagram.com/amagazinecuratedby"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @amagazinecuratedby
                  </a>
                </li>
                <li>
                  <a
                    href="https://amagazinecuratedby.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.amagazinecuratedby.com
                  </a>
                </li>
              </ul>
              <p className="mt-auto">
                Please enquire with our team for our most recent distribution,
                website and social media data.
              </p>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}