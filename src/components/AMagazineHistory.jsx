import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function AMagazineHistory({ order, action, isActive }) {
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
      className={`font-serif p-20 md:p-30 pseudo-border-red pseudo-border-red--both gap-y-20 md:gap-y-30 overflow-hidden${
        isActive
          ? " bg-red text-beige"
          : " bg-beige text-red hover:bg-red hover:text-beige"
      }`}
    >
      <div
        className={`${!fullBtn ? "col-span-12 xl:col-span-3" : "col-span-12"}`}
      >
        <button
          type="button"
          className="w-full"
          onClick={(e) => action(e, order)}
        >
          A MAGAZINE <span className="italic">history</span>
        </button>
      </div>
      <AnimatePresence>
        {isActive && (
          <Section
            accordion
            motionKey={`bottomLvl${order}`}
            isActive={isActive}
            className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30 mb-20 md:mb-30"
          >
            <div className="col-span-12 lg:col-span-6">
              <p className="mb-25">
                <span className="italic">N°A</span> featuring Dirk Van Saene was
                the first ever A MAGAZINE, initiated by Walter Van Beirendonck
                and art directed by Paul Boudens for the 2001 Landed-Geland
                fashion festival in Antwerp. Before the name A MAGAZINE{" "}
                <span className="italic">curated by</span> was created in 2004,
                each issue was named after a letter of the alphabet, beginning
                with the iconic red ‘A’ for Antwerp, a historic symbol of the
                Belgian city. The project was incited by the designer Walter Van
                Beirendonck, who invited Dirk Van Saene to be the first featured
                designer. Both are members of the famed ‘Antwerp Six’.
              </p>
              <p>
                It was followed by <span className="italic">N°B, N°C, N°D</span>{" "}
                and <span className="italic">N°E</span> magazines before a
                change in ownership and direction saw the birth of A MAGAZINE{" "}
                <span className="italic">curated by</span> Maison Martin
                Margiela in 2004.
              </p>
            </div>
            <div className="md:col-span-12 lg:col-span-6 hidden invisible md:grid md:visible grid-cols-4 md:grid-rows-2 gap-x-60 gap-y-40 font-sans text-11 leading-tight">
              <div className="col-span-4 sm:col-span-2 row-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="A.jpg" className="max-w-full w-full shadow-3xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°A</span> MAGAZINE{" "}
                      <span className="italic">curated by</span>
                      <br />
                      Dirk Van Saene
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="B.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      B
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°B</span> Featuring
                      <br />
                      Bernard Willhelm
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="C.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      C
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°C</span> Featuring
                      <br />
                      Hussein Chalayan
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2003
                    </figcaption>
                    <img src="D.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      D
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°D</span> Featuring
                      <br />
                      Olivier Theyskens
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2003
                    </figcaption>
                    <img src="E.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      E
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°E</span> Featuring
                      <br />
                      Viktor & Rolf
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-span-12 overflow-grid-27 grid grid-cols-8 gap-x-60 gap-y-40 font-sans text-11 leading-tight">
              <div className="col-span-1 sm:col-span-2 md:hidden md:invisible">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="A.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°A</span> MAGAZINE{" "}
                      <span className="italic">curated by</span>
                      <br />
                      Dirk Van Saene
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 md:hidden md:invisible">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="B.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      B
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°B</span> Featuring
                      <br />
                      Bernard Willhelm
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 md:hidden md:invisible">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2002
                    </figcaption>
                    <img src="C.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      C
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°C</span> Featuring
                      <br />
                      Hussein Chalayan
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 md:hidden md:invisible">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2003
                    </figcaption>
                    <img src="D.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      D
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°D</span> Featuring
                      <br />
                      Olivier Theyskens
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 md:hidden md:invisible">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2003
                    </figcaption>
                    <img src="E.jpg" className="max-w-full w-full shadow-2xl" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      E
                    </span>
                    <span className="font-serif">
                      <span className="italic">N°E</span> Featuring
                      <br />
                      Viktor & Rolf
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/martin-margiela/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2004
                    </figcaption>
                    <img src="01.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#1
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Maison Martin Margiela
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/yohji-yamamoto/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2005
                    </figcaption>
                    <img src="02.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#2
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Yohji Yamamoto
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/haider-ackermann/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2005
                    </figcaption>
                    <img src="03.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#3
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Haider Ackermann
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/jun-takahashi/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2006
                    </figcaption>
                    <img src="04.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#4
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Jun Takahashi
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/martine-sitbon/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2007
                    </figcaption>
                    <img src="05.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#5
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Martine Sitbon
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/veronique-branquinho/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2007
                    </figcaption>
                    <img src="06.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#6
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Veronique Branquinho
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/kris-van-assche/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2008
                    </figcaption>
                    <img src="07.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#7
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Kris Van Assche
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/riccardo-tisci/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2008
                    </figcaption>
                    <img src="08.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#8
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Riccardo Tisci
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/proenza-schouler/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2009
                    </figcaption>
                    <img src="09.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#9
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Proenza Schouler
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/giambattista-valli/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2010
                    </figcaption>
                    <img src="10.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#10
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Giambattista Valli
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/rodarte/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2011
                    </figcaption>
                    <img src="11.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#11
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Rodarte
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/issue-3/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2013
                    </figcaption>
                    <img src="12.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#12
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Stephen Jones
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/iris-van-herpen/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2014
                    </figcaption>
                    <img src="13.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#13
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Iris Van Herpen
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/delfina-delettrez/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2015
                    </figcaption>
                    <img src="14.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#14
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Delfina Delettrez
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/thom-browne/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2016
                    </figcaption>
                    <img src="15.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#15
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Thom Browne
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/alessandro-michele/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2016
                    </figcaption>
                    <img src="16.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#16
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Alessandro Michele
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/eckhaus-latta/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2017
                    </figcaption>
                    <img src="17.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#17
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Eckhaus Latta
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/simone-rocha/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2018
                    </figcaption>
                    <img src="18.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#18
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Simone Rocha
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/kim-jones/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2019
                    </figcaption>
                    <img src="19.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#19
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Kim Jones
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/pierpaolo-piccioli/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2019
                    </figcaption>
                    <img src="20.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#20
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Pierpaolo Piccioli
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/lucie-and-luke-meier/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2020
                    </figcaption>
                    <img src="21.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#21
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Lucie and Luke Meier
                    </span>
                  </p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2 2md:col-span-1 row-span-1">
                <a
                  href="https://amagazinecuratedby.com/collection/martin-margiela/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover:opacity-75"
                >
                  <figure className="relative">
                    <figcaption className="absolute -left-8 transform -rotate-90 origin-bottom-left bottom-0">
                      2021 Limited Edition Reprint
                    </figcaption>
                    <img src="22.jpg" className="max-w-full w-full" />
                  </figure>
                  <p className="pt-8 relative">
                    <span className="inline-block absolute -left-10 transform -translate-x-full">
                      A#1
                    </span>
                    <span className="font-serif">
                      A MAGAZINE <span className="italic">curated by</span>
                      <br />
                      Maison Martin Margiela
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
