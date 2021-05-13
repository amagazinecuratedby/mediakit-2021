import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function BrandEnvironment({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (!isActive && !fullBtn) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-30 border-t border-beige overflow-hidden gap-y-30">
      <div
        className={`${fullBtn ? "col-span-12 2xl:col-span-3" : "col-span-12"}`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          A MAGAZINE <span className="italic">brand environment</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 2xl:col-span-9"
          >
            <div className="col-span-12 grid grid-cols-12 gap-x-16 uppercase">
              <ul className="order-0 col-span-12 sm:col-span-6 3md:col-span-3">
                <li>Absolut</li>
                <li>BDDW</li>
                <li>Balenciaga</li>
                <li>Birkenstock</li>
                <li>Blue Mountain School</li>
                <li>Bombay Sapphire</li>
                <li>Bottega Veneta</li>
                <li>Carhartt</li>
                <li>Carven</li>
                <li>Chanel</li>
                <li>Chloé</li>
                <li>Christian Dior</li>
                <li>Chrysler</li>
                <li>Cointreau</li>
                <li>Colette</li>
              </ul>
              <ul className="order-2 col-span-12 sm:col-span-6 3md:order-1 3md:col-span-3">
                <li>Comme Des Garçons</li>
                <li>Delvaux</li>
                <li>Diesel</li>
                <li>Evian</li>
                <li>Fendi</li>
                <li>Givenchy</li>
                <li>Gucci</li>
                <li>Helena Rubinstein</li>
                <li>Hermès</li>
                <li>J.Crew</li>
                <li>Jil Sander</li>
                <li>Kenzo</li>
                <li>Lancôme</li>
                <li>Longchamp</li>
                <li>Louis Vuitton</li>
              </ul>
              <ul className="order-1 col-span-12 sm:col-span-6 3md:order-2 3md:col-span-3">
                <li>L’Oréal</li>
                <li>MSGM</li>
                <li>Marc Jacobs</li>
                <li>Mini Cooper</li>
                <li>Moncler</li>
                <li>Moynat</li>
                <li>Moët & Chandon</li>
                <li>NARS</li>
                <li>Nike</li>
                <li>OAMC</li>
                <li>Opening Ceremony</li>
                <li>Paco Rabanne</li>
                <li>Piasa</li>
                <li>Piper Heidsieck</li>
                <li>Prada</li>
              </ul>
              <ul className="order-3 col-span-12 sm:col-span-6 3md:order-0 3md:col-span-3">
                <li>Repossi</li>
                <li>Rimowa</li>
                <li>Roberto Cavalli</li>
                <li>Saint Laurent</li>
                <li>Sonia Rykiel</li>
                <li>Supreme</li>
                <li>Swarovski</li>
                <li>Tag Heuer</li>
                <li>Tiffany & Co.</li>
                <li>Undercover</li>
                <li>Uniqlo</li>
                <li>Valentino</li>
                <li>Van Cleef & Arpels</li>
                <li>Y-3</li>
              </ul>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
