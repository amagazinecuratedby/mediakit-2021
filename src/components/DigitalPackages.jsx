import { AnimatePresence, motion } from "framer-motion"

import React from "react"
import Section from "./Section.jsx"

export default function DigitalPackages({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="col-span-12 py-30 border-t border-beige gap-y-30 overflow-hidden">
      <div
        className={`${!fullBtn ? "col-span-12 2xl:col-span-3" : "col-span-12"}`}
      >
        <button type="button" className="w-full" onClick={() => action(order)}>
          A MAGAZINE <span className="italic">digital packages rates</span>
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.p
              key="paragraph"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-345 mt-30"
            >
              In addition to the print advertising space, we offer digital
              content packages throughout the year.
            </motion.p>
          )}
        </AnimatePresence>
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
              <div className="col-span-12 2md:col-span-5 2xl:col-span-6">
                <p>
                  Photo shoot or video content produced by A PUBLISHER featuring
                  Brand partner’s collection, accessories, products accompanied
                  by short text articles.
                </p>
              </div>
              <div className="col-span-12 2md:col-span-7 2xl:col-span-6">
                <p className="mb-30 w-full flex">
                  PRODUCED ADVERTORIAL{" "}
                  <span className="ml-auto flex-0-auto">€ 8,000</span>
                </p>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Website</li>
                  <li className="italic mb-30">
                    <span>1 x </span>written article + image/video gallery on
                    amagazinecuratedby.com/curatedfor
                  </li>
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">3 x Instagram Feed Posts</li>
                  <li className="italic">
                    <span>1 x </span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
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
            <div className="col-span-12 grid grid-cols-12 gap-x-16 border-t border-beige pt-30 gap-y-21">
              <div className="col-span-12 2md:col-span-5 2xl:col-span-6 flex flex-col">
                <p className="mb-30">
                  Rediffusion and social media promotion of Brand partner’s
                  provided visual assets with A MAGAZINE tone-of-voice.
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
                <p className="uppercase mb-30">Sponsored Editorial</p>
                <p className="border-t border-beige pt-30 w-full flex">
                  OPTION 1 <span className="ml-auto flex-0-auto">€ 6,000</span>
                </p>
                <p className="italic mb-30">
                  Brand partner’s visual assets accompanied by short text or
                  long-form article written by A Magazine team or contributing
                  editor.
                </p>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Website Article</li>
                  <li className="italic mb-30">
                    <span>1 x </span>long-form (600 words +) article +
                    image/video gallery on amagazinecuratedby.com/curatedfor
                  </li>
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">
                    <span>2 x </span>Instagram Feed Posts
                  </li>
                  <li className="italic">
                    <span>1 x </span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
                    <br />
                    Direct Link to Brand partner website or to A MAGAZINE
                    website
                  </li>
                  <li className="italic">
                    <span>2 x </span>24h Instagram Stories dedication of images
                    / video
                  </li>
                </ul>
                <p className="border-t border-beige mt-30 pt-30 w-full flex">
                  OPTION 2 <span className="ml-auto flex-0-auto">€ 3,000</span>
                </p>
                <p className="italic mb-30">
                  Brand partner’s visual assets published on Instagram
                  accompanied by editorial captions.
                </p>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">
                    <span>2 x </span>Instagram Feed Posts
                  </li>
                  <li className="italic">
                    <span>1 x </span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
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
