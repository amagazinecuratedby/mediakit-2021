import { AnimatePresence, motion } from "framer-motion"

import AMagazineHistory from "./AMagazineHistory.jsx"
import AboutAPublisher from "./AboutAPublisher.jsx"
import BrandEnvironment from "./BrandEnvironment.jsx"
import DigitalPackages from "./DigitalPackages.jsx"
import Instagram from "./Instagram.jsx"
import OurAudience from "./OurAudience.jsx"
import PrintDigital from "./PrintDigital.jsx"
import React from "react"
import Section from "./Section.jsx"
import SelectedCities from "./SelectedCities.jsx"
import SelectedContributors from "./SelectedContributors.jsx"
import SelectedStores from "./SelectedStores.jsx"
import Website from "./Website.jsx"

// add smoothscroll

export default function SectionsGroup() {
  const [topLevel, setTopLevel] = React.useState(null)
  const [bottomLevel, setBottomLevel] = React.useState(null)

  function topLevelHandler(index) {
    if (index !== topLevel) {
      return setTopLevel(index)
    }

    return setTopLevel(null)
  }

  function bottomLevelHandler(index) {
    if (index && index !== bottomLevel) {
      return setBottomLevel(index)
    }

    return setBottomLevel(null)
  }

  React.useEffect(() => {
    if (!topLevel && bottomLevel) {
      setTimeout(() => bottomLevelHandler(null), 400)
    }
  }, [topLevel])

  return (
    <>
      <Section className="bg-beige text-red p-30 gap-y-30">
        <div className="font-serif col-span-12 3md:col-span-7 text-29 leading-34">
          <p className="text-37 leading-39 mb-42">
            A MAGAZINE <span className="italic">curated by</span>
            <br />
            is published by A PUBLISHER
          </p>
          <p className="mb-42 indent">
            A MAGAZINE <span className="italic">curated by</span> is a unique
            magazine concept that explores the universe of a different fashion
            designer invited as the ‘guest curator’ of each issue. In
            collaboration with our editorial team, the guest curator develops
            innovative, personalised content to express their aesthetic and
            cultural values. Each issue celebrates the designer’s ethos: their
            people, their passions, their stories, emotions, fascinations,
            spontaneity and authenticity.
          </p>
          <p className="indent">
            A MAGAZINE <span className="italic">curated by</span> is a + / – 200
            page printed magazine that is launched alongside tailored digital
            content, behind the scenes films, physical events, exhibitions and
            advertorial content. Conceived as Belgium’s first fashion magazine,
            A MAGAZINE <span className="italic">curated by</span> has
            diversified to work with fashion designers across the globe, gaining
            international acclaim for its unprecedented access to the most
            inspiring minds of today.
          </p>
        </div>
        <div className="col-span-12 text-center 3md:col-span-5 3md:text-left 3md:pl-1/10">
          <img
            src="margiela-big.jpg"
            alt="A Magazine curated by - Maison Martin Margiela 2021 Cover"
            className="w-full max-w-500 shadow-2xl inline-block"
          />
        </div>
      </Section>
      <AboutAPublisher
        order={1}
        action={bottomLevelHandler}
        isActive={bottomLevel === 1}
      />
      <AMagazineHistory
        order={2}
        action={bottomLevelHandler}
        isActive={bottomLevel === 2}
      />
      <SelectedContributors
        order={3}
        action={bottomLevelHandler}
        isActive={bottomLevel === 3}
      />
      <Section
        className={`text-black font-serif p-30 gap-y-30 overflow-hidden ${
          topLevel === 1 ? " bg-greyTeal pb-0" : " bg-white"
        }`}
      >
        <div className="col-span-12 font-sans">
          <button
            type="button"
            className="uppercase text-18 w-full"
            onClick={() => topLevelHandler(1)}
          >
            II. Audience &amp; Distribution
          </button>
        </div>
        <AnimatePresence>
          {topLevel === 1 && (
            <Section
              accordion
              isActive
              motionKey="topLvl1"
              className="col-span-12"
            >
              <div className="col-span-12 2md:col-span-7 text-29 leading-34">
                <p className="mb-30">
                  Throughout our twenty year history, A MAGAZINE has built an
                  engaged community of faithful readers, collectors and
                  followers around the globe – one that continues to grow with
                  each new issue through the union of a designer or fashion
                  house’s audience with our own.
                </p>
                <img
                  src="planisphere.jpg"
                  alt="A MAGAZINE curated by Communities map"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="col-span-12 2md:col-span-5 2md:pl-1/10">
                <ul className="flex-list-50 mb-30">
                  <li>
                    <span className="uppercase">Frequency</span>
                    <span>Biannual</span>
                  </li>
                  <li>
                    <span className="uppercase">
                      50+ countries
                      <br />
                      worldwide
                    </span>
                    <span>
                      Europe 48%
                      <br />
                      America 18%
                      <br />
                      Asia 25%
                      <br />
                      Rest of the world 9%
                    </span>
                  </li>
                  <li>
                    <span className="uppercase">
                      Average print run per project
                    </span>
                    <span>20,000 copies</span>
                  </li>
                  <li>
                    <span className="uppercase">Readership</span>
                    <span>100,000</span>
                  </li>
                  <li>
                    <span className="uppercase">Language</span>
                    <span>English</span>
                  </li>
                </ul>
                <p className="mb-30">
                  A MAGAZINE is sold online at{" "}
                  <a
                    href="https://amagazinecuratedby.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    amagazinecuratedby.com
                  </a>{" "}
                  and through the following distributors:
                </p>
                <ul>
                  <li>Boutique Mags/WhiteCirc</li>
                  <li>Export Press</li>
                  <li>Idea Books</li>
                  <li>IPS</li>
                  <li>KD Presse</li>
                  <li>Twelve Books</li>
                </ul>
              </div>
              <SelectedCities />
              <SelectedStores
                order={5}
                action={bottomLevelHandler}
                isActive={bottomLevel === 5}
              />
              <OurAudience
                order={6}
                action={bottomLevelHandler}
                isActive={bottomLevel === 6}
              />
            </Section>
          )}
        </AnimatePresence>
      </Section>
      <Section
        className={`text-black font-serif p-30 gap-y-30 overflow-hidden ${
          topLevel === 2 ? " bg-greyTeal" : " bg-white"
        }`}
      >
        <div className="col-span-12 font-sans">
          <button
            type="button"
            className="uppercase text-18 w-full"
            onClick={() => topLevelHandler(2)}
          >
            III. Website &amp; Social Media
          </button>
        </div>
        <AnimatePresence>
          {topLevel === 2 && (
            <Section
              accordion
              isActive
              motionKey="topLvl2"
              className="col-span-12"
            >
              <Instagram />
              <Website />
            </Section>
          )}
        </AnimatePresence>
      </Section>
      <Section
        className={`font-serif p-30 gap-y-30 overflow-hidden${
          topLevel === 3 ? " bg-dark text-beige pb-0" : " bg-white text-black"
        }`}
      >
        <div className="col-span-12 font-sans">
          <button
            type="button"
            className="uppercase text-18 w-full"
            onClick={() => topLevelHandler(3)}
          >
            IV. Media Placement Rates
          </button>
        </div>
        <AnimatePresence>
          {topLevel === 3 && (
            <Section
              accordion
              isActive
              motionKey="topLvl3"
              className="col-span-12"
            >
              <PrintDigital
                order={9}
                action={bottomLevelHandler}
                isActive={bottomLevel === 9}
              />
              <DigitalPackages
                order={10}
                action={bottomLevelHandler}
                isActive={bottomLevel === 10}
              />
              <BrandEnvironment
                order={11}
                action={bottomLevelHandler}
                isActive={bottomLevel === 11}
              />
            </Section>
          )}
        </AnimatePresence>
      </Section>
      <Section
        className={`text-black font-serif p-30 gap-y-30 overflow-hidden${
          topLevel === 4 ? " bg-greyTeal" : " bg-white"
        }`}
      >
        <div
          className={`font-sans${
            topLevel === 4 ? " col-span-12 2xl:col-span-3" : " col-span-12"
          }`}
        >
          <button
            type="button"
            className="uppercase text-18 w-full"
            onClick={() => topLevelHandler(4)}
          >
            V. Team
          </button>
        </div>
        <AnimatePresence>
          {topLevel === 4 && (
            <Section
              accordion
              isActive
              motionKey="topLvl4"
              className="col-span-12 2xl:col-span-9 pb-30"
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
                      Mike Meiré –{" "}
                      <span className="italic">Meiré und Meiré</span>
                    </span>
                  </li>
                  <li>
                    <span className="uppercase">Moving Image</span>
                    <span>Alexandre Silberstein</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 2md:col-span-6">
                <p className="mb-30">
                  A PUBLISHER collaborates on its different platforms with a
                  global network of journalists and creatives from Paris,
                  London, Milan, Berlin, New York, Tokyo, Shanghai, Delhi.
                </p>
                <ul className="mb-84">
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
                <p>
                  Please enquire with our team for our most recent distribution,
                  website and social media data.
                </p>
              </div>
            </Section>
          )}
        </AnimatePresence>
      </Section>
    </>
  )
}
