import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"
import Carousel from "./Carousel.jsx"

export default function SelectedCities({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-20 md:py-30 gap-y-20 md:gap-y-30 border-t border-black overflow-hidden gap-x-0">
      <div
        className={`${!fullBtn ? "col-span-12 xl:col-span-3" : "col-span-12"}`}
      >
        <button
          type="button"
          className="w-full"
          onClick={(e) => action(e, order)}
        >
          A MAGAZINE <span className="italic">selected cities</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30 pb-21 md:pb-30"
          >
            <div className="hidden md:grid md:col-span-6 lg2:col-span-3 grid-cols-8">
              <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                North &amp; South America
              </p>
              <ul className="col-span-4 text-21 leading-27">
                <li>Atlanta </li>
                <li>Bogotá</li>
                <li>Boston</li>
                <li>Chicago </li>
                <li>Dallas</li>
                <li>Houston</li>
                <li>Los Angeles </li>
                <li>Mexico</li>
                <li>Miami</li>
              </ul>
              <ul className="col-span-4 text-21 leading-27">
                <li>Montreal</li>
                <li>New York </li>
                <li>Palm Springs</li>
                <li>Philadelphia </li>
                <li>Portland</li>
                <li>San Francisco </li>
                <li>São Paulo</li>
                <li>Toronto </li>
                <li>Vancouver </li>
              </ul>
            </div>
            <div className="hidden md:grid md:col-span-6 lg2:col-span-3 grid-cols-8">
              <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                Asia &amp; Oceania
              </p>
              <ul className="col-span-4 text-21 leading-27">
                <li>Auckland</li>
                <li>Beijing</li>
                <li>Chongqing</li>
                <li>Dubai</li>
                <li>Guangzhou</li>
                <li>Hangzhou</li>
                <li>Hong Kong</li>
                <li>Jakarta</li>
                <li>Kyoto</li>
              </ul>
              <ul className="col-span-4 text-21 leading-27">
                <li>Kuala Lumpur</li>
                <li>Melbourne</li>
                <li>Nagoya</li>
                <li>New Delhi</li>
                <li>Osaka</li>
                <li>Seoul</li>
                <li>Shanghai</li>
                <li>Singapore</li>
                <li>Sydney</li>
              </ul>
            </div>
            <div className="hidden md:grid md:col-span-12 lg2:col-span-6 grid-cols-8">
              <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                Europe &amp; Africa
              </p>
              <ul className="col-span-2 sm:col-span-2 text-21 leading-27">
                <li>Amsterdam</li>
                <li>Antwerp</li>
                <li>Athens</li>
                <li>Barcelona</li>
                <li>Berlin</li>
                <li>Birmingham</li>
                <li>Brussels</li>
                <li>Bucharest</li>
                <li>Cape Town</li>
              </ul>
              <ul className="col-span-2 order-2 sm:order-1 sm:col-span-2 text-21 leading-27">
                <li>Copenhagen</li>
                <li>Dusseldorf</li>
                <li>Florence</li>
                <li>Geneva</li>
                <li>Kiev</li>
                <li>Lausanne</li>
                <li>Lisbon</li>
                <li>London</li>
                <li>Madrid</li>
              </ul>
              <ul className="col-span-2 order-1 sm:order-2 sm:col-span-2 text-21 leading-27">
                <li>Malmö</li>
                <li>Manchester</li>
                <li>Marseille</li>
                <li>Milan</li>
                <li>Moscow</li>
                <li>Munich</li>
                <li>Nottingham</li>
                <li>Oslo</li>
                <li>Paris</li>
              </ul>
              <ul className="col-span-2 order-3 sm:col-span-2 text-21 leading-27">
                <li>Porto</li>
                <li>Rome</li>
                <li>St. Petersburg</li>
                <li>Stockholm</li>
                <li>Valencia</li>
                <li>Venice</li>
                <li>Vienna</li>
                <li>Vilnius</li>
                <li>Zurich</li>
              </ul>
            </div>
            <Carousel
              items={4}
              showDots
              dotsTheme="dark"
              className="col-span-12 md:hidden"
            >
              <ul className="flex space-x-16 items-end">
                <li className="grid grid-cols-8 min-w-screen-padded">
                  <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                    North &amp; South America
                  </p>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Atlanta </li>
                    <li>Bogotá</li>
                    <li>Boston</li>
                    <li>Chicago </li>
                    <li>Dallas</li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Houston</li>
                    <li>Los Angeles </li>
                    <li>Mexico</li>
                    <li>Miami</li>
                    <li>Montreal</li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>New York </li>
                    <li>Palm Springs</li>
                    <li>Philadelphia </li>
                    <li>Portland</li>
                    <li>San Francisco </li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>São Paulo</li>
                    <li>Toronto </li>
                    <li>Vancouver </li>
                  </ul>
                </li>
                <li className="grid grid-cols-8 min-w-screen-padded">
                  <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                    Asia &amp; Oceania
                  </p>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Auckland</li>
                    <li>Beijing</li>
                    <li>Chongqing</li>
                    <li>Dubai</li>
                    <li>Guangzhou</li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Hangzhou</li>
                    <li>Jakarta</li>
                    <li>Kyoto</li>
                    <li>Kuala Lumpur</li>
                    <li>Melbourne</li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Nagoya</li>
                    <li>New Delhi</li>
                    <li>Osaka</li>
                    <li>Seoul</li>
                    <li>Shanghai</li>
                  </ul>
                  <ul className="col-span-2 text-21 leading-27">
                    <li>Singapore</li>
                    <li>Sydney</li>
                  </ul>
                </li>
                <li className="grid grid-cols-8 min-w-screen-padded">
                  <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                    Europe &amp; Africa
                  </p>
                  <ul className="col-span-2 sm:col-span-2 text-21 leading-27">
                    <li>Amsterdam</li>
                    <li>Antwerp</li>
                    <li>Athens</li>
                    <li>Barcelona</li>
                    <li>Berlin</li>
                  </ul>
                  <ul className="col-span-2 sm:col-span-2 text-21 leading-27">
                    <li>Birmingham</li>
                    <li>Brussels</li>
                    <li>Bucharest</li>
                    <li>Cape Town</li>
                    <li>Cologne</li>
                  </ul>
                  <ul className="col-span-2 order-2 sm:order-1 sm:col-span-2 text-21 leading-27">
                    <li>Copenhagen</li>
                    <li>Dusseldorf</li>
                    <li>Florence</li>
                    <li>Geneva</li>
                    <li>Kiev</li>
                  </ul>
                  <ul className="col-span-2 order-2 sm:order-1 sm:col-span-2 text-21 leading-27">
                    <li>Lausanne</li>
                    <li>Lisbon</li>
                    <li>London</li>
                    <li>Madrid</li>
                    <li>Malmö</li>
                  </ul>
                </li>
                <li className="grid grid-cols-8 min-w-screen-padded">
                  <p className="italic uppercase col-span-8 mb-20 md:mb-30">
                    Europe &amp; Africa
                  </p>
                  <ul className="col-span-2 order-1 sm:order-2 sm:col-span-2 text-21 leading-27">
                    <li>Manchester</li>
                    <li>Marseille</li>
                    <li>Milan</li>
                    <li>Moscow</li>
                    <li>Munich</li>
                  </ul>
                  <ul className="col-span-2 order-1 sm:order-2 sm:col-span-2 text-21 leading-27">
                    <li>Nottingham</li>
                    <li>Oslo</li>
                    <li>Paris</li>
                    <li>Porto</li>
                    <li>Rome</li>
                  </ul>
                  <ul className="col-span-2 order-3 sm:col-span-2 text-21 leading-27">
                    <li>St. Petersburg</li>
                    <li>Stockholm</li>
                    <li>Valencia</li>
                    <li>Venice</li>
                    <li>Vienna</li>
                  </ul>
                  <ul className="col-span-2 order-3 sm:col-span-2 text-21 leading-27">
                    <li>Vilnius</li>
                    <li>Zurich</li>
                  </ul>
                </li>
              </ul>
            </Carousel>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
