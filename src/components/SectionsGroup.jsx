import AMagazineHistory from "./AMagazineHistory.jsx"
import AboutAPublisher from "./AboutAPublisher.jsx"
import { AnimatePresence } from "framer-motion"
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
import Team from "./Team.jsx"
import Website from "./Website.jsx"
import smoothScroll from "../smoothscroll.js"

// add smoothscroll

export default function SectionsGroup() {
  const [topLevel, setTopLevel] = React.useState(null)
  const [bottomLevel, setBottomLevel] = React.useState(null)

  function topLevelHandler(e, index) {
    setBottomLevel(null)

    if (index !== topLevel) {
      setTopLevel(index)

      return setTimeout(() => smoothScroll(e.target), 500)
    }

    return setTopLevel(null)
  }

  function bottomLevelHandler(e, index) {
    if (index && index !== bottomLevel) {
      setBottomLevel(index)
      return setTimeout(() => {
        smoothScroll(e.target)
      }, 500)
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
      <Section className="bg-beige text-red p-20 md:p-30 gap-y-20 md:gap-y-30">
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
        <div className="col-span-12 text-center mb-40 md:mb-30 3md:col-span-5 3md:text-left 3md:pl-1/10">
          <img
            src="A23-cover.jpg"
            alt="A Magazine curated by - Francesco Risso 2022 Cover"
            className="w-full max-w-500 shadow-3xl inline-block"
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
        className={`text-black font-serif px-20 pt-25 md:px-30 md:pt-35 gap-y-20 md:gap-y-30 overflow-hidden ${
          topLevel === 1 ? " bg-greyTeal" : " bg-white hover:bg-greyTeal"
        }`}
      >
        <div className="col-span-12 font-sans pb-25 md:pb-35">
          <button
            type="button"
            className="uppercase text-24 w-full"
            onClick={(e) => topLevelHandler(e, 1)}
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
              <div className="col-span-12 2md:col-span-7 text-29 leading-34 pb-21 md:pb-30 2md:pb-0">
                <p className="mb-20 md:mb-30">
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
                <ul className="flex-list-50 mb-30 md:hidden md:invisible">
                  <li>
                    <span className="uppercase">Frequency</span>
                    <span>Biannual</span>
                  </li>
                  <li className="mb-0">
                    <span className="uppercase">
                      50+ countries
                      <br />
                      worldwide
                    </span>
                  </li>
                  <li className="mb-0">
                    <span>Europe</span>
                    <span>48%</span>
                  </li>
                  <li className="mb-0">
                    <span>America</span>
                    <span>18%</span>
                  </li>
                  <li className="mb-0">
                    <span>Asia</span>
                    <span>25%</span>
                  </li>
                  <li>
                    <span>Rest of the world</span>
                    <span>9%</span>
                  </li>
                  <li>
                    <span className="uppercase">
                      Average print run
                      <br />
                      per project
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
                <ul className="flex-list-50 hidden invisible md:visible md:block md:mb-48 lg:mb-60">
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
                      Average print run
                      <br />
                      per project
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
                <p className="mb-20 md:mb-30 xl:invisible xl:hidden">
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
                <p className="mb-30 hidden invisible xl:block xl:visible">
                  A MAGAZINE is sold online at{" "}
                  <a
                    href="https://amagazinecuratedby.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    amagazinecuratedby.com
                  </a>
                  <br />
                  and through the following distributors:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.boutiquemags.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      Boutique Mags/WhiteCirc
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.exportpress.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      Export Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ideabooks.nl/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      Idea Books
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ipsdiffusion.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      IPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kdpresse.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      KD Presse
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twelve-books.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="underline transition-opacity opacity-100 hover:opacity-75 hover:no-underline"
                    >
                      Twelve Books
                    </a>
                  </li>
                </ul>
              </div>
              <OurAudience
                order={5}
                action={bottomLevelHandler}
                isActive={bottomLevel === 5}
              />
              <SelectedCities
                order={6}
                action={bottomLevelHandler}
                isActive={bottomLevel === 6}
              />
              <SelectedStores
                order={7}
                action={bottomLevelHandler}
                isActive={bottomLevel === 7}
              />
            </Section>
          )}
        </AnimatePresence>
      </Section>
      <Section
        className={`text-black font-serif px-20 pt-25 md:px-30 md:pt-35 overflow-hidden ${
          topLevel === 2 ? " bg-greyTeal" : " bg-white hover:bg-greyTeal"
        }`}
      >
        <div className="col-span-12 font-sans pb-25 md:pb-35">
          <button
            type="button"
            className="uppercase text-24 w-full"
            onClick={(e) => topLevelHandler(e, 2)}
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
        className={`font-serif px-20 md:px-30 pt-25 md:pt-35 overflow-hidden${
          topLevel === 3
            ? " bg-dark text-beige"
            : " bg-white text-black hover:bg-dark hover:text-beige"
        }`}
      >
        <div className="col-span-12 font-sans pb-25 md:pb-35">
          <button
            type="button"
            className="uppercase text-24 w-full"
            onClick={(e) => topLevelHandler(e, 3)}
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
      <Team order={4} action={topLevelHandler} isActive={topLevel === 4} />
    </>
  )
}
