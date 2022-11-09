import { AnimatePresence } from "framer-motion"
import Carousel from "./Carousel.jsx"
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
            className="col-span-12 xl:col-span-9 gap-x-30 gap-y-20 md:gap-y-30 mb-20 md:mb-30"
          >
            <div className="col-span-12 lg:col-span-6">
              <p>
                <span className="italic">N°A</span> featuring Dirk Van Saene was
                the first ever A MAGAZINE, initiated by Walter Van Beirendonck
                and art directed by Paul Boudens for the 2001 Landed-Geland
                fashion festival in Antwerp. Before the name A MAGAZINE{" "}
                <span className="italic">curated by</span> was created in 2004,
                each issue was named after a letter of the alphabet, beginning
                with the iconic red ‘A’ for Antwerp, a historic symbol of the
                Belgian city.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="mb-20 md:hidden md:invisible">
                The project was incited by the designer Walter Van Beirendonck,
                who invited Dirk Van Saene to be the first featured designer.
                Both are members of the famed ‘Antwerp Six’.
              </p>
              <p className="md:hidden md:invisible">
                It was followed by <span className="italic">N°B, N°C, N°D</span>{" "}
                and <span className="italic">N°E</span> magazines before a
                change in ownership and direction saw the birth of A MAGAZINE{" "}
                <span className="italic">curated by</span> Maison Martin
                Margiela in 2004.
              </p>
              <p className="hidden invisible md:block md:visible">
                The project was incited by the designer Walter Van Beirendonck,
                who invited Dirk Van Saene to be the first featured designer.
                Both are members of the famed ‘Antwerp Six’. It was followed by{" "}
                <span className="italic">N°B, N°C, N°D</span> and{" "}
                <span className="italic">N°E</span> magazines before a change in
                ownership and direction saw the birth of A MAGAZINE{" "}
                <span className="italic">curated by</span> Maison Martin
                Margiela in 2004.
              </p>
            </div>
            <div className="col-span-12 overflow-grid-27 hidden grid-cols-8 gap-x-30 gap-y-40 font-sans text-14 leading-tight md:grid">
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/erdem/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="A24.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2022 - A#24</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Erdem
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/francesco-risso/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="A23.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2022 - A#23</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Francesco Risso
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/grace-wales-bonner/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="23.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2021 - A#22</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Grace Wales Bonner
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/martin-margiela/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="22.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">
                        2021 Limited Edition Reprint — A#1
                      </span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Maison Martin Margiela
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/lucie-and-luke-meier/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="21.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span>2020 — A#21</span>
                      <span className="font-serif block pt-8">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Lucie and Luke Meier
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/pierpaolo-piccioli/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="20.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2019 — A#20</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Pierpaolo Piccioli
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/kim-jones/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="19.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2019 — A#19</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Kim Jones
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/simone-rocha/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="18.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2018 — A#18</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Simone Rocha
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/eckhaus-latta/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="17.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2017 — A#17</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Eckhaus Latta
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/alessandro-michele/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="16.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2016 — A#16</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Alessandro Michele
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/thom-browne/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="15.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2016 — A#15</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Thom Browne
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/delfina-delettrez/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="14.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2015 — A#14</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Delfina Delettrez
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/iris-van-herpen/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="13.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2014 — A#13</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Iris Van Herpen
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/issue-3/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="12.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2013 — A#12</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Stephen Jones
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/rodarte/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="11.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2011 — A#11</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Rodarte
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/giambattista-valli/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="10.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2010 — A#10</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Giambattista Valli
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/proenza-schouler/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="09.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2009 — A#9</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Proenza Schouler
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/riccardo-tisci/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="08.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2008 — A#8</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Riccardo Tisci
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/kris-van-assche/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="07.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2008 — A#7</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Kris Van Assche
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/veronique-branquinho/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="06.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2007 — A#6</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Veronique Branquinho
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/martine-sitbon/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="05.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2007 — A#5</span>
                      <span className="font-serif block pt-8">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Martine Sitbon
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/jun-takahashi/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="04.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2006 — A#4</span>
                      <span className="font-serif block pt-8">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Jun Takahashi
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/haider-ackermann/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="03.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2005 — A#3</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Haider Ackermann
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/yohji-yamamoto/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="02.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2005 — A#2</span>
                      <span className="font-serif pt-8 block">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Yohji Yamamoto
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/collection/martin-margiela/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img
                      src="01.jpg"
                      className="max-w-full w-full shadow-3xl"
                    />
                    <figcaption className="pt-10">
                      <span className="block">2004 — A#1</span>
                      <span className="font-serif block pt-8">
                        A MAGAZINE <span className="italic">curated by</span>
                        <br />
                        Maison Martin Margiela
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img src="E.jpg" className="max-w-full w-full shadow-3xl" />
                    <figcaption className="pt-10">
                      <span className="block">2003 — E</span>
                      <span className="font-serif pt-8 block">
                        <span className="italic">N°E</span> Featuring
                        <br />
                        Viktor & Rolf
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img src="D.jpg" className="max-w-full w-full shadow-3xl" />
                    <figcaption className="pt-10">
                      <span className="block">2003 — D</span>
                      <span className="font-serif block pt-8">
                        <span className="italic">N°D</span> Featuring
                        <br />
                        Olivier Theyskens
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img src="C.jpg" className="max-w-full w-full shadow-3xl" />
                    <figcaption className="pt-10">
                      <span className="block">2002 — C</span>
                      <span className="font-serif pt-8 block">
                        <span className="italic">N°C</span> Featuring
                        <br />
                        Hussein Chalayan
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img src="B.jpg" className="max-w-full w-full shadow-3xl" />
                    <figcaption className="pt-10">
                      <span className="block">2002 — B</span>
                      <span className="font-serif block pt-8">
                        <span className="italic">N°B</span> Featuring
                        <br />
                        Bernard Willhelm
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  href="https://amagazinecuratedby.com/history/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                >
                  <figure className="relative">
                    <img src="A.jpg" className="max-w-full w-full shadow-3xl" />
                    <figcaption className="pt-10">
                      <span className="block">2002 — A</span>
                      <span className="font-serif block pt-8">
                        <span className="italic">N°A</span> MAGAZINE{" "}
                        <span className="italic">curated by</span>
                        <br />
                        Dirk Van Saene
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
            <Carousel
              items={27}
              showDots
              dotsTheme="light"
              className="col-span-12 md:hidden"
            >
              <div className="flex space-x-30 items-end md:hidden font-sans text-14 leading-tight">
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/erdem/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="A24.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2022 - A#24</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Erdem
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/francesco-risso/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="A23.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2022 - A#23</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Francesco Risso
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/grace-wales-bonner/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="23.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2021 - A#22</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Grace Wales Bonner
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/martin-margiela/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="22.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">
                          2021 Limited Edition Reprint — A#1
                        </span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Maison Martin Margiela
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/lucie-and-luke-meier/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="21.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span>2020 — A#21</span>
                        <span className="font-serif block pt-8">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Lucie and Luke Meier
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/pierpaolo-piccioli/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="20.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2019 — A#20</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Pierpaolo Piccioli
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/kim-jones/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="19.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2019 — A#19</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Kim Jones
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/simone-rocha/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="18.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2018 — A#18</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Simone Rocha
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/eckhaus-latta/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="17.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2017 — A#17</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Eckhaus Latta
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/alessandro-michele/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="16.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2016 — A#16</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Alessandro Michele
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/thom-browne/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="15.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2016 — A#15</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Thom Browne
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/delfina-delettrez/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="14.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2015 — A#14</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Delfina Delettrez
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/iris-van-herpen/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="13.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2014 — A#13</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Iris Van Herpen
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/issue-3/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="12.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2013 — A#12</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Stephen Jones
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/rodarte/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="11.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2011 — A#11</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Rodarte
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/giambattista-valli/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="10.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2010 — A#10</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Giambattista Valli
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/proenza-schouler/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="09.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2009 — A#9</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Proenza Schouler
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/riccardo-tisci/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="08.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2008 — A#8</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Riccardo Tisci
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/kris-van-assche/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="07.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2008 — A#7</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Kris Van Assche
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/veronique-branquinho/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="06.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2007 — A#6</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Veronique Branquinho
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/martine-sitbon/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="05.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2007 — A#5</span>
                        <span className="font-serif block pt-8">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Martine Sitbon
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/jun-takahashi/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="04.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2006 — A#4</span>
                        <span className="font-serif block pt-8">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Jun Takahashi
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/haider-ackermann/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="03.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2005 — A#3</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Haider Ackermann
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/yohji-yamamoto/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="02.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2005 — A#2</span>
                        <span className="font-serif pt-8 block">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Yohji Yamamoto
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/collection/martin-margiela/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="01.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2004 — A#1</span>
                        <span className="font-serif block pt-8">
                          A MAGAZINE <span className="italic">curated by</span>
                          <br />
                          Maison Martin Margiela
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/history/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="E.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2003 — E</span>
                        <span className="font-serif pt-8 block">
                          <span className="italic">N°E</span> Featuring
                          <br />
                          Viktor & Rolf
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/history/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="D.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2003 — D</span>
                        <span className="font-serif block pt-8">
                          <span className="italic">N°D</span> Featuring
                          <br />
                          Olivier Theyskens
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/history/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="C.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2002 — C</span>
                        <span className="font-serif pt-8 block">
                          <span className="italic">N°C</span> Featuring
                          <br />
                          Hussein Chalayan
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/history/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="B.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2002 — B</span>
                        <span className="font-serif block pt-8">
                          <span className="italic">N°B</span> Featuring
                          <br />
                          Bernard Willhelm
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="w-full flex-1-auto max-w-300">
                  <a
                    href="https://amagazinecuratedby.com/history/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity opacity-100 hover-hover:hover:opacity-75"
                  >
                    <figure className="relative">
                      <img
                        src="A.jpg"
                        className="max-w-full w-full shadow-3xl"
                      />
                      <figcaption className="pt-10">
                        <span className="block">2002 — A</span>
                        <span className="font-serif block pt-8">
                          <span className="italic">N°A</span> MAGAZINE{" "}
                          <span className="italic">curated by</span>
                          <br />
                          Dirk Van Saene
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </Carousel>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
