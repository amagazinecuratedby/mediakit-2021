import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function SelectedStores({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-30 border-t border-black gap-y-30 overflow-hidden">
      <div
        className={`${!fullBtn ? "col-span-12 2xl:col-span-3" : "col-span-12"}`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          A MAGAZINE <span className="italic">selected stores</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 2xl:col-span-9 gap-y-30"
          >
            <div className="col-span-12 lg:col-span-6">
              <p className="mb-24">
                In recent years, a solid partnership with global distributors
                has been complimented by new direct retailer relationships with
                art and design bookstores, concept stores, museum shops and
                other multi-brand retailers worldwide.
              </p>
              <p>
                These strong connections enable a greater presence in local
                markets, especially in secondary locations that are growing
                focal areas for us in a time where online shipping costs from
                Europe remain prohibitive for readers in the far reaches of the
                globe. These partnerships continue to generate discovery,
                interest, local marketing activations and events outside of
                fashion weeks and the major fashion capitals.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-8 gap-x-12 text-21 leading-27">
              <ul className="col-span-8 sm:col-span-4">
                <li>
                  11o – <span className="italic">Copenhagen</span>
                </li>
                <li>
                  Amen – <span className="italic">Madrid</span>
                </li>
                <li>
                  Athenaeum – <span className="italic">Amsterdam</span>
                </li>
                <li>
                  Casa Bosques – <span className="italic">Mexico</span>
                </li>
                <li>
                  Casa Magazine – <span className="italic">NYC</span>
                </li>
                <li>
                  Copyright – <span className="italic">Antwerp & Ghent</span>
                </li>
                <li>
                  Dizpositiv Books – <span className="italic">Bucharest</span>
                </li>
                <li>
                  Do You Read Me?! – <span className="italic">Berlin</span>
                </li>
                <li>
                  Dorbeetle Studio –{" "}
                  <span className="italic">China (online)</span>
                </li>
                <li>
                  Dover Street Market{" "}
                  <span className="italic">(worldwide)</span>
                </li>
                <li>
                  Edicola Erno – <span className="italic">Rome</span>
                </li>
                <li>
                  Epel – <span className="italic">Seoul</span>
                </li>
                <li>
                  Frabs Magazine –{" "}
                  <span className="italic">Italy (online)</span>
                </li>
                <li>
                  Idea Now – <span className="italic">UK (online)</span>
                </li>
                <li>
                  Import News –{" "}
                  <span className="italic">NYC, LA, San Francisco</span>
                </li>
                <li>
                  Inprint – <span className="italic">Australia (online)</span>
                </li>
                <li>
                  Lebigmag – <span className="italic">Moscow</span>
                </li>
                <li>
                  Love Note Magazines – <span className="italic">Vilnius</span>
                </li>
                <li>
                  Lucy Martin – <span className="italic">Taiwan</span>
                </li>
                <li>
                  Mag Nation – <span className="italic">Auckland</span>
                </li>
                <li>
                  MoMu – <span className="italic">Antwerp</span>
                </li>
                <li>
                  Not Just A Library – <span className="italic">Taipei</span>
                </li>
              </ul>
              <ul className="col-span-8 sm:col-span-4">
                <li>
                  Ofr – <span className="italic">Paris</span>
                </li>
                <li>
                  One Half In – <span className="italic">China (online)</span>
                </li>
                <li>
                  Palais de Tokyo – <span className="italic">Paris</span>
                </li>
                <li>
                  Papercut – <span className="italic">Stockholm</span>
                </li>
                <li>
                  Post Nothing Magazine – <span className="italic">Bogotá</span>
                </li>
                <li>
                  Print Matters – <span className="italic">Zurich</span>
                </li>
                <li>
                  Readellion – <span className="italic">Ukraine (online)</span>
                </li>
                <li>
                  Reading Room – <span className="italic">Milan</span>
                </li>
                <li>
                  Roden Gray – <span className="italic">Vancouver</span>
                </li>
                <li>
                  Rosa Wolf – <span className="italic">Berlin</span>
                </li>
                <li>
                  Saint-Martin Bookshop –{" "}
                  <span className="italic">Brussels</span>
                </li>
                <li>
                  Shelf – <span className="italic">Shanghai</span>
                </li>
                <li>
                  Shreeji – <span className="italic">London</span>
                </li>
                <li>
                  Skwat – <span className="italic">Tokyo</span>
                </li>
                <li>
                  Smoke Signals – <span className="italic">San Francisco</span>
                </li>
                <li>
                  Soop Soop – <span className="italic">Toronto</span>
                </li>
                <li>
                  Tambourine – <span className="italic">Madrid</span>
                </li>
                <li>
                  Tate Modern – <span className="italic">London</span>
                </li>
                <li>
                  The Broken Arm – <span className="italic">Paris</span>
                </li>
                <li>
                  Tom Greyhound – <span className="italic">Paris</span>
                </li>
                <li>
                  Tsum – <span className="italic">Moscow</span>
                </li>
                <li>
                  Under the Cover – <span className="italic">Lisbon</span>
                </li>
              </ul>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
