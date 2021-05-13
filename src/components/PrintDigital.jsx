import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function PrintDigital({ order, action, isActive }) {
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
          A MAGAZINE <span className="italic">print + digital rates</span>
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
            <div className="col-span-12 grid grid-cols-12 gap-x-16 gap-y-21">
              <div className="col-span-12 2md:col-span-5 2xl:col-span-6 flex flex-col">
                <p className="mb-30">
                  For each bi-annual issue of A MAGAZINE, print advertising
                  insertions are accompanied by a complimentary digital
                  integration and sponsored promotion.
                </p>
                <ul className="text-20 leading-27 mt-auto">
                  <li>* SP: Single Page</li>
                  <li>* DPS: Double Page Spread</li>
                  <li>* OBC: Outside Back Cover</li>
                  <li>* IFC: Inside Front Cover</li>
                  <li>* IBC: Inside Back Cover</li>
                </ul>
              </div>
              <div className="col-span-12 2md:col-span-7 2xl:col-span-6">
                <p className="uppercase mb-30">Print Media Placement Rates</p>
                <ul>
                  <li className="flex">
                    - OBC <span className="italic ml-auto">€ 20,000</span>
                  </li>
                  <li className="flex">
                    - IFC, DPS <span className="italic ml-auto">€ 18,000</span>
                  </li>
                  <li className="flex">
                    - IBC, DPS <span className="italic ml-auto">€ 16,000</span>
                  </li>
                  <li className="flex">
                    - IBC SP <span className="italic ml-auto">€ 13,000</span>
                  </li>
                  <li className="flex">
                    - 1 DPS with premium placement 1/2/3{" "}
                    <span className="italic ml-auto">€ 15,000</span>
                  </li>
                  <li className="flex">
                    - 1 DPS <span className="italic ml-auto">€ 12,000</span>
                  </li>
                  <li className="flex">
                    - 2 DPS <span className="italic ml-auto">€ 20,000</span>
                  </li>
                  <li className="flex">
                    - SP Next to Masthead, TOC, Editor’s Letter{" "}
                    <span className="italic ml-auto">€9,000</span>
                  </li>
                  <li className="flex">
                    - SP <span className="italic ml-auto">€ 6,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-x-16 border-t border-beige pt-30 gap-y-21">
              <div className="col-span-12 2md:col-span-5 2xl:col-span-6 flex flex-col">
                <p className="mb-30">
                  Each print media placement rate includes the following digital
                  integration.
                </p>
                <p className="text-20 leading-27 mt-auto mb-30">
                  <small>
                    Seasonal timing / posting dates to be defined in
                    consultation with the Brand partner.
                  </small>
                </p>
                <p className="text-20 leading-27">
                  <small>
                    All advertising enquiries to{" "}
                    <a
                      href="mailto:advertising@amagazinecuratedby.com"
                      className="italic"
                    >
                      advertising@amagazinecuratedby.com
                    </a>
                  </small>
                </p>
              </div>
              <div className="col-span-12 2md:col-span-7 2xl:col-span-6">
                <p className="uppercase">
                  VALUE-ADDED DIGITAL INTEGRATION EDITORIAL CONTENT
                  <span className="italic">incl.</span>
                </p>
                <p className="italic mb-30">
                  Brand partner’s visual assets accompanied by short text or
                  long-form article written by A MAGAZINE team or contributing
                  editor.
                </p>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Website</li>
                  <li className="italic mb-30">
                    <span>1 x </span>written article + image/video gallery on
                    amagazinecuratedby.com/curatedfor
                  </li>
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">1 x Instagram Feed Post</li>
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
              </div>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}