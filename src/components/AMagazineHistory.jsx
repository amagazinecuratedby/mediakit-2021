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
      className={`font-serif p-20 md:p-30 pseudo-border-red gap-y-20 md:gap-y-30 overflow-hidden${
        isActive ? " bg-red text-beige" : " bg-beige text-red"
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
                N°A featuring Dirk Van Saene was the first ever A MAGAZINE,
                initiated by Walter Van Beirendonck and art directed by Paul
                Boudens for the 2001 Landed-Geland fashion festival in Antwerp.
                Before the name A MAGAZINE{" "}
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
            <div className="col-span-12 lg:col-span-6 grid grid-cols-4 xs:grid-rows-3 sm:grid-rows-2 gap-x-32 gap-y-32 font-sans text-11 leading-tight">
              <div className="col-span-4 sm:col-span-2 row-span-2">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2002
                  </figcaption>
                  <img src="A.jpg" className="max-w-full w-full shadow-lg" />
                </figure>
                <p>
                  <span>A</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Dirk Van Saene
                  </span>
                </p>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2002
                  </figcaption>
                  <img src="B.jpg" className="max-w-full w-full shadow-lg" />
                </figure>
                <p>
                  <span>B</span>
                  <span className="font-serif">
                    N°B Featuring
                    <br />
                    Bernard Willhelm
                  </span>
                </p>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2002
                  </figcaption>
                  <img src="C.jpg" className="max-w-full w-full shadow-lg" />
                </figure>
                <p>
                  <span>C</span>
                  <span className="font-serif">
                    N°C Featuring
                    <br />
                    Hussein Chalayan
                  </span>
                </p>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2003
                  </figcaption>
                  <img src="D.jpg" className="max-w-full w-full shadow-lg" />
                </figure>
                <p>
                  <span>D</span>
                  <span className="font-serif">
                    N°D Featuring
                    <br />
                    Olivier Theyskens
                  </span>
                </p>
              </div>
              <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2003
                  </figcaption>
                  <img src="E.jpg" className="max-w-full w-full shadow-lg" />
                </figure>
                <p>
                  <span>E</span>
                  <span className="font-serif">
                    N°E Featuring
                    <br />
                    Viktor & Rolf
                  </span>
                </p>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-8 gap-x-32 gap-y-32 font-sans text-11 leading-tight">
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2004
                  </figcaption>
                  <img src="01.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#1</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Maison Martin Margiela
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2005
                  </figcaption>
                  <img src="02.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#2</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Yohji Yamamoto
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2005
                  </figcaption>
                  <img src="03.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#3</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Haider Ackermann
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2006
                  </figcaption>
                  <img src="04.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#4</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Jun Takahashi
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2007
                  </figcaption>
                  <img src="05.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#5</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Martine Sitbon
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2007
                  </figcaption>
                  <img src="06.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#6</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Veronique Branquinho
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2008
                  </figcaption>
                  <img src="07.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#7</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Kris Van Assche
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2008
                  </figcaption>
                  <img src="08.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#8</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Riccardo Tisci
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2009
                  </figcaption>
                  <img src="09.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#9</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Proenza Schouler
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2010
                  </figcaption>
                  <img src="10.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#10</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Giambattista Valli
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2011
                  </figcaption>
                  <img src="11.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#11</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Rodarte
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2013
                  </figcaption>
                  <img src="12.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#12</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Stephen Jones
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2014
                  </figcaption>
                  <img src="13.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#13</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Iris Van Herpen
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2015
                  </figcaption>
                  <img src="14.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#14</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Delfina Delettrez
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2016
                  </figcaption>
                  <img src="15.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#15</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Thom Browne
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2016
                  </figcaption>
                  <img src="16.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#16</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Alessandro Michele
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2017
                  </figcaption>
                  <img src="17.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#17</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Eckhaus Latta
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2018
                  </figcaption>
                  <img src="18.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#18</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Simone Rocha
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2019
                  </figcaption>
                  <img src="19.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#19</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Kim Jones
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2019
                  </figcaption>
                  <img src="20.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#20</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Pierpaolo Piccioli
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2020
                  </figcaption>
                  <img src="21.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#21</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Lucie and Luke Meier
                  </span>
                </p>
              </div>
              <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
                <figure className="relative">
                  <figcaption className="absolute transform -rotate-90 origin-bottom-left bottom-0">
                    2021 Limited Edition Reprint
                  </figcaption>
                  <img src="22.jpg" className="max-w-full w-full" />
                </figure>
                <p>
                  <span>A#1</span>
                  <span className="font-serif">
                    A MAGAZINE <span className="italic">curated by</span>
                    <br />
                    Maison Martin Margiela
                  </span>
                </p>
              </div>
            </div>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
