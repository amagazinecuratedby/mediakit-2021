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
    <Section className="col-span-12 py-20 md:py-30 border-t border-beige gap-y-20 md:gap-y-30 overflow-hidden">
      <div
        className={`${!fullBtn ? "col-span-12 xl:col-span-3" : "col-span-12"}`}
      >
        <button
          type="button"
          className="w-full"
          onClick={(e) => action(e, order)}
        >
          A MAGAZINE <span className="italic">digital rates</span>
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
              className="max-w-345 mt-20 md:mt-30"
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
            className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30 pb-20 md:pb-30"
          >
            <div className="col-span-12 grid grid-cols-12 gap-x-16 gap-y-20">
              <div className="col-span-12 2md:col-span-5 2md:col-start-8 order-first 2md:order-last">
                <p className="invisible hidden 2md:visible 2md:block">
                  Photo shoot or video content produced by A PUBLISHER featuring
                  Brand partner’s collection, accessories, products accompanied
                  by short text articles.
                </p>
              </div>
              <div className="col-span-12 2md:col-span-6">
                <p className="mb-20 md:mb-30 w-full flex">
                  PRODUCED ADVERTORIAL{" "}
                  <span className="ml-auto flex-0-auto">€ 8,000</span>
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
                    <span>3 x</span>Instagram Feed Posts
                  </li>
                  <li className="italic">
                    <span>1 x</span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
                    <br />
                    Direct Link to Brand partner website or to A MAGAZINE
                    website
                  </li>
                  <li className="italic">
                    <span>2 x</span>24h Instagram Stories dedication of images /
                    video
                  </li>
                </ul>
                <p className="mt-20 md:mt-30 2md:invisible 2md:hidden">
                  Photo shoot or video content produced by A PUBLISHER featuring
                  Brand partner’s collection, accessories, products accompanied
                  by short text articles.
                </p>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-x-16 border-t border-beige 2md:pt-30 gap-y-20">
              <div className="col-span-12 order-first 2md:order-2 2md:col-span-5 2md:col-start-8">
                <p className="mb-20 md:mb-30 hidden invisible 2md:block 2md:visible">
                  Rediffusion and social media promotion of Brand partner’s
                  provided visual assets with A MAGAZINE tone-of-voice.
                </p>
                <p className="hidden 2md:block mb-30">
                  Brand partner’s visual assets are published on our website
                  accompanied by short text or long-form article written by A
                  MAGAZINE team or contributing editor and on Instagram
                  accompanied by editorial captions.
                </p>
              </div>
              <div className="col-span-12 2md:col-span-6 2md:order-1">
                <p className="uppercase mb-20 2md:mb-30">Sponsored Editorial</p>
                <p className="mb-20 w-full flex 2md:mb-30">
                  OPTION 1 <span className="ml-auto flex-0-auto">€ 6,000</span>
                </p>
                <ul>
                  <li className="uppercase">- Website Article</li>
                  <li className="italic mb-20 md:mb-30">
                    1 x long-form (600 words +) article + image/video gallery on
                    amagazinecuratedby.com/curatedfor
                  </li>
                </ul>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">
                    <span>2 x</span>Instagram Feed Posts
                  </li>
                  <li className="italic">
                    <span>1 x</span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
                    <br />
                    Direct Link to Brand partner website or to A MAGAZINE
                    website
                  </li>
                  <li className="italic">
                    <span>2 x</span>24h Instagram Stories dedication of images /
                    video
                  </li>
                </ul>
              </div>
              <div className="col-span-12 2md:col-span-6 2md:order-3">
                <p className="mb-20 2md:mb-30 w-full flex">
                  OPTION 2 <span className="ml-auto flex-0-auto">€ 3,000</span>
                </p>
                <ul className="flex-list-fixed">
                  <li className="uppercase">- Social Media</li>
                  <li className="italic">
                    <span>2 x</span>Instagram Feed Posts
                  </li>
                  <li className="italic">
                    <span>1 x</span>Sponsored Instagram Feed Post
                    <br />
                    Minimum 200,000 impressions reach,
                    <br />
                    Direct Link to Brand partner website or to A MAGAZINE
                    website
                  </li>
                  <li className="italic">
                    <span>2 x</span>24h Instagram Stories dedication of images /
                    video
                  </li>
                </ul>
                <p className="mb-20 mt-20 2md:hidden 2md:invisible">
                  Rediffusion and social media promotion of Brand partner’s
                  provided visual assets with A MAGAZINE tone-of-voice.
                </p>
                <p className="mb-20 2md:hidden">
                  Brand partner’s visual assets are published on our website
                  accompanied by short text or long-form article written by A
                  MAGAZINE team or contributing editor and on Instagram
                  accompanied by editorial captions.
                </p>
                <p className="text-20 leading-27 2md:hidden 2md:invisible">
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
              <div className="order-4 col-span-5 col-start-8 flex-col mt-20 pt-30 hidden invisible 2md:flex 2md:visible">
                <p className="text-20 leading-27 mt-auto">
                  Seasonal timing / posting dates to be defined in consultation
                  with the Brand partner.
                </p>
                <p className="text-20 leading-27">
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
