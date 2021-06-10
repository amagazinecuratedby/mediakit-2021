import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function PrintDigital({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-20 md:py-30 border-t border-beige overflow-hidden gap-y-20 md:gap-y-30">
      <div
        className={`${!fullBtn ? "col-span-12 xl:col-span-3" : "col-span-12"}`}
      >
        <button
          type="button"
          className="w-full"
          onClick={(e) => action(e, order)}
        >
          A MAGAZINE <span className="italic">print + digital rates</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30 pb-20 md:pb-30"
          >
            <div className="col-span-12 grid grid-cols-12 gap-x-16 gap-y-20">
              <div className="col-span-12 2md:col-span-5 2md:col-start-8 flex flex-col order-first 2md:order-last">
                <p className="mb-20 md:mb-30 hidden invisible 2md:block 2md:visible">
                  For each bi-annual issue of A MAGAZINE, print advertising
                  insertions are accompanied by a complimentary digital
                  integration and sponsored promotion.
                </p>
                <ul className="text-20 leading-27 mt-auto hidden invisible 2md:block 2md:visible">
                  <li>* SP: Single Page</li>
                  <li>* DPS: Double Page Spread</li>
                  <li>* OBC: Outside Back Cover</li>
                  <li>* IFC: Inside Front Cover</li>
                  <li>* IBC: Inside Back Cover</li>
                </ul>
              </div>
              <div className="col-span-12 2md:col-span-6">
                <p className="uppercase mb-20 md:mb-30">
                  Print Media Placement Rates
                </p>
                <ul>
                  <li className="flex">
                    - OBC <span className="ml-auto flex-0-auto">€ 20,000</span>
                  </li>
                  <li className="flex">
                    - IFC, DPS{" "}
                    <span className="ml-auto flex-0-auto">€ 18,000</span>
                  </li>
                  <li className="flex">
                    - IBC, DPS{" "}
                    <span className="ml-auto flex-0-auto">€ 16,000</span>
                  </li>
                  <li className="flex">
                    - IBC SP{" "}
                    <span className="ml-auto flex-0-auto">€ 13,000</span>
                  </li>
                  <li className="flex">
                    - 1 DPS with premium placement 1/2/3{" "}
                    <span className="ml-auto flex-0-auto">€ 15,000</span>
                  </li>
                  <li className="flex">
                    - 1 DPS{" "}
                    <span className="ml-auto flex-0-auto">€ 12,000</span>
                  </li>
                  <li className="flex">
                    - 2 DPS{" "}
                    <span className="ml-auto flex-0-auto">€ 20,000</span>
                  </li>
                  <li className="flex">
                    - SP Next to Masthead, TOC, Editor’s Letter{" "}
                    <span className="ml-auto flex-0-auto">€ 9,000</span>
                  </li>
                  <li className="flex">
                    - SP <span className="ml-auto flex-0-auto">€ 6,000</span>
                  </li>
                </ul>
                <ul className="text-20 leading-27 mt-30 mb-20 2md:hidden 2md:invisible">
                  <li>* SP: Single Page</li>
                  <li>* DPS: Double Page Spread</li>
                  <li>* OBC: Outside Back Cover</li>
                  <li>* IFC: Inside Front Cover</li>
                  <li>* IBC: Inside Back Cover</li>
                </ul>
                <p className="2md:hidden 2md:invisible">
                  For each bi-annual issue of A MAGAZINE, print advertising
                  insertions are accompanied by a complimentary digital
                  integration and sponsored promotion.
                </p>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-x-16 border-t border-beige 2md:pt-30 gap-y-20">
              <div className="col-span-12 2md:col-span-5 2md:col-start-8 flex flex-col order-first 2md:order-last">
                <p className="mb-20 md:mb-30 hidden invisible 2md:block 2md:visible">
                  Each print media placement rate includes the following digital
                  integration.
                </p>
                <p className="hidden mb-30 2md:block">
                  Brand partner’s visual assets are published on our website
                  accompanied by short text or long-form article written by A
                  MAGAZINE team or contributing editor and on Instagram
                  accompanied by editorial captions.
                </p>
                <p className="text-20 leading-27 mt-auto hidden invisible 2md:block 2md:visible">
                  Seasonal timing / posting dates to be defined in consultation
                  with the Brand partner.
                </p>
                <p className="text-20 leading-27 hidden invisible 2md:block 2md:visible">
                  All advertising enquiries to{" "}
                  <a
                    href="mailto:advertising@amagazinecuratedby.com"
                    className="italic transition-opacity opacity-100 hover:opacity-75"
                  >
                    advertising@amagazinecuratedby.com
                  </a>
                </p>
              </div>
              <div className="col-span-12 2md:col-span-6">
                <p className="w-full flex mb-20 md:mb-30">
                  VALUE-ADDED DIGITAL INTEGRATION
                  <br />
                  EDITORIAL CONTENT
                  <span className="ml-auto flex-0-auto italic">incl.</span>
                </p>
                <ul>
                  <li className="uppercase">- Website</li>
                  <li className="italic mb-20 md:mb-30">
                    1 x written article + image/video gallery on
                    amagazinecuratedby.com/curatedfor
                  </li>
                </ul>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">
                    <span>1 x </span>Instagram Feed Post
                  </li>
                  <li className="italic">
                    <span>1 x </span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 100,000 impressions reach,
                    <br />
                    Direct Link to Brand partner website or to A MAGAZINE
                    website
                  </li>
                  <li className="italic">
                    <span>2 x </span>24h Instagram Stories dedication of images
                    / video
                  </li>
                </ul>
                <p className="mt-20 mb-20 md:mb-30 2md:hidden 2md:invisible">
                  Each print media placement rate includes the following digital
                  integration.
                </p>
                <p className="mb-20 2md:hidden">
                  Brand partner’s visual assets are published on our website
                  accompanied by short text or long-form article written by A
                  MAGAZINE team or contributing editor and on Instagram
                  accompanied by editorial captions.
                </p>
                <p className="text-20 leading-27 2md:mb-30 2md:hidden 2md:invisible">
                  Seasonal timing / posting dates to be defined in consultation
                  with the Brand partner.
                </p>
                <p className="text-20 leading-27 2md:hidden 2md:invisible">
                  All advertising enquiries to{" "}
                  <a
                    href="mailto:advertising@amagazinecuratedby.com"
                    className="italic transition-opacity opacity-100 hover:opacity-75"
                  >
                    advertising@amagazinecuratedby.com
                  </a>
                </p>
              </div>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
