import { AnimatePresence } from "framer-motion"
import React from "react"
import Section from "./Section.jsx"

export default function SelectedContributors({ order, action, isActive }) {
  const [fullBtn, setFullBtn] = React.useState(!isActive)

  React.useEffect(() => {
    if (fullBtn === isActive && isActive) {
      setFullBtn(!isActive)
    } else if (fullBtn === isActive && !isActive) {
      setTimeout(() => setFullBtn(!isActive), 400)
    }
  }, [isActive])

  return (
    <Section className="bg-beige text-red font-serif p-20 md:p-30 overflow-hidden gap-y-20 md:gap-y-30">
      <div
        className={`${!fullBtn ? "col-span-12 xl:col-span-3" : "col-span-12"}`}
      >
        <button
          type="button"
          className="w-full"
          onClick={(e) => action(e, order)}
        >
          A MAGAZINE <span className="italic">selected contributors</span>
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
            <div className="col-span-12 md:col-span-8 mb-20">
              <p>
                As A MAGAZINE <span className="italic">curated by</span>’s guest
                editor changes every time, so do the magazine’s contributors.
                From fashion’s most accomplished creatives to art world stars,
                internationally acclaimed writers and researchers, each issue
                invites an elite level of collaborators.
              </p>
            </div>
            <div className="col-span-12 hidden invisible sm:visible sm:grid grid-cols-10 gap-x-12 text-18 leading-24">
              <ul className="col-span-5 md:col-span-3 lg2:col-span-2 flex-list-fixed">
                <li>
                  <span className="italic">A -</span>Aaron Siskind
                </li>
                <li>
                  <span />
                  Alasdair McLellan
                </li>
                <li>
                  <span />
                  Alexander Fury
                </li>
                <li>
                  <span />
                  Alexandre Desplat
                </li>
                <li>
                  <span />
                  Alister Mackie
                </li>
                <li>
                  <span />
                  Anders Edström
                </li>
                <li>
                  <span />
                  Andrew Bolton
                </li>
                <li>
                  <span />
                  André Leon Talley
                </li>
                <li>
                  <span />
                  Andrée Putman
                </li>
                <li>
                  <span />
                  Ann Demeulemeester
                </li>
                <li>
                  <span />
                  Annie Leibovitz
                </li>
                <li>
                  <span className="italic">B -</span>BLESS
                </li>
                <li>
                  <span />
                  Baz Luhrmann
                </li>
                <li>
                  <span />
                  Bill Owens
                </li>
                <li>
                  <span className="italic">C -</span>Charles Traub
                </li>
                <li>
                  <span />
                  Charlotte Rampling
                </li>
                <li>
                  <span />
                  Chimamanda
                </li>
                <li>
                  <span />
                  Ngozie Adichie
                </li>
                <li>
                  <span />
                  Chloë Sevigny
                </li>
                <li>
                  <span />
                  Cindy Sherman
                </li>
                <li>
                  <span />
                  Coco Capitán
                </li>
                <li>
                  <span />
                  Colin Dodgson
                </li>
                <li>
                  <span />
                  Craig Green
                </li>
                <li>
                  <span />
                  Craig McDean
                </li>
                <li>
                  <span className="italic">D -</span>
                  David Armstrong
                </li>
                <li>
                  <span />
                  David Sims
                </li>
              </ul>
              <ul className="col-span-5 order-3 md:col-span-3 md:order-4 lg2:col-span-2 lg2:order-2 flex-list-fixed">
                <li>
                  <span className="italic">E -</span>Elle Fanning
                </li>
                <li>
                  <span />
                  Ellie Grace Cumming
                </li>
                <li>
                  <span />
                  Ernest Pignon Ernest
                </li>
                <li>
                  <span />
                  Eugene Souleiman
                </li>
                <li>
                  <span className="italic">F -</span>Fabien Baron
                </li>
                <li>
                  <span />
                  Florence Welch
                </li>
                <li>
                  <span />
                  Franca Sozzani
                </li>
                <li>
                  <span className="italic">G -</span>Gia Coppola
                </li>
                <li>
                  <span />
                  Giorgio Moroder
                </li>
                <li>
                  <span />
                  Glen Luchford
                </li>
                <li>
                  <span />
                  Grace Coddington
                </li>
                <li>
                  <span />
                  Guido Palau
                </li>
                <li>
                  <span className="italic">H -</span>Hamish Bowles
                </li>
                <li>
                  <span />
                  Hans Ulrich Obrist
                </li>
                <li>
                  <span className="italic">I -</span>Inez Van Lamsweerde &
                  Vinoodh Matadin
                </li>
                <li>
                  <span />
                  Irving Penn
                </li>
                <li>
                  <span className="italic">J -</span>Jackie Nickerson
                </li>
                <li>
                  <span />
                  Jean-Paul Gaultier
                </li>
                <li>
                  <span />
                  Jefferson Hack
                </li>
                <li>
                  <span />
                  Jerry Stafford
                </li>
                <li>
                  <span />
                  Jo-Ann Furniss
                </li>
                <li>
                  <span />
                  Joe McKenna
                </li>
                <li>
                  <span />
                  Joel Meyerowitz
                </li>
                <li>
                  <span />
                  John Galliano
                </li>
                <li>
                  <span />
                  Julia Hetta
                </li>
              </ul>
              <ul className="col-span-5 order-5 md:col-span-3 md:order-2 lg2:col-span-2 lg2:order-3 flex-list-fixed">
                <li>
                  <span />
                  Julianne Moore
                </li>
                <li>
                  <span />
                  Julien d‘Ys
                </li>
                <li>
                  <span className="italic">K -</span>KAWS
                </li>
                <li>
                  <span />
                  Kahlil Joseph
                </li>
                <li>
                  <span />
                  Karim Sadli
                </li>
                <li>
                  <span />
                  Karl Lagerfeld
                </li>
                <li>
                  <span />
                  Kate Moss
                </li>
                <li>
                  <span />
                  Katerina Jebb
                </li>
                <li>
                  <span />
                  Katie Grand
                </li>
                <li>
                  <span />
                  Kenzo Takada
                </li>
                <li>
                  <span className="italic">L -</span>Leslie Zhang
                </li>
                <li>
                  <span />
                  Lina Scheynius
                </li>
                <li>
                  <span />
                  Lou Stoppard
                </li>
                <li>
                  <span />
                  Luca Guadagnino
                </li>
                <li>
                  <span />
                  Luigi Ballerini
                </li>
                <li>
                  <span />
                  Lutz Huelle
                </li>
                <li>
                  <span className="italic">M -</span>M/M Paris
                </li>
                <li>
                  <span />
                  Madonna
                </li>
                <li>
                  <span />
                  Malcolm McLaren
                </li>
                <li>
                  <span />
                  Manolo Blahnik
                </li>
                <li>
                  <span />
                  Mariacarla Boscono
                </li>
                <li>
                  <span />
                  Marina Abramovic
                </li>
                <li>
                  <span />
                  Mark Borthwick
                </li>
                <li>
                  <span />
                  Matthew Lutz-Kinoy
                </li>
                <li>
                  <span />
                  Melanie Ward
                </li>
                <li>
                  <span />
                  Mert & Marcus
                </li>
              </ul>
              <ul className="col-span-5 order-2 md:col-span-3 md:order-5 lg2:col-span-2 lg2:order-4 flex-list-fixed">
                <li>
                  <span />
                  Michael Bailey-Gates
                </li>
                <li>
                  <span />
                  Michel Gaubert
                </li>
                <li>
                  <span className="italic">N -</span>Nan Goldin
                </li>
                <li>
                  <span />
                  Naomi Campbell
                </li>
                <li>
                  <span />
                  Nick Knight
                </li>
                <li>
                  <span />
                  Nicolas Ouchenir
                </li>
                <li>
                  <span className="italic">O -</span>Olivier Rizzo
                </li>
                <li>
                  <span />
                  Olivier Saillard
                </li>
                <li>
                  <span />
                  Olivier Theyskens
                </li>
                <li>
                  <span />
                  Olivier Wicker
                </li>
                <li>
                  <span />
                  Olivier Zahm
                </li>
                <li>
                  <span className="italic">P -</span>Paolo Roversi
                </li>
                <li>
                  <span />
                  Pat McGrath
                </li>
                <li>
                  <span />
                  Peter Doig
                </li>
                <li>
                  <span />
                  Peter Philips
                </li>
                <li>
                  <span />
                  Petra Collins
                </li>
                <li>
                  <span />
                  Pier Paolo Pasolini
                </li>
                <li>
                  <span />
                  Pierre Debusschere
                </li>
                <li>
                  <span />
                  Pina Bausch
                </li>
                <li>
                  <span className="italic">R -</span>Raf Simons
                </li>
                <li>
                  <span />
                  Rei Kawakubo
                </li>
                <li>
                  <span />
                  Richard Avedon
                </li>
                <li>
                  <span />
                  Rick Owens
                </li>
                <li>
                  <span />
                  Roe Ethridge
                </li>
                <li>
                  <span />
                  Ron Arad
                </li>
                <li>
                  <span className="italic">S -</span>
                  Sarah Moon
                </li>
              </ul>
              <ul className="col-span-5 order-4 md:col-span-3 md:order-3 lg2:col-span-2 lg2:order-5 flex-list-fixed">
                <li>
                  <span />
                  Saskia de Brauw
                </li>
                <li>
                  <span />
                  Shaniqwa Jarvis
                </li>
                <li>
                  <span />
                  Sidival Fila
                </li>
                <li>
                  <span />
                  Slim Aarons
                </li>
                <li>
                  <span />
                  Sofia Coppola
                </li>
                <li>
                  <span />
                  Stevie Wonder
                </li>
                <li>
                  <span />
                  Susannah Frankel
                </li>
                <li>
                  <span />
                  Suzy Menkes
                </li>
                <li>
                  <span className="italic">T -</span>Terry Richardson
                </li>
                <li>
                  <span />
                  Thierry Mugler
                </li>
                <li>
                  <span />
                  Tilda Swinton
                </li>
                <li>
                  <span />
                  Tim Blanks
                </li>
                <li>
                  <span />
                  Tim Burton
                </li>
                <li>
                  <span className="italic">V -</span>
                  Valerie Steele
                </li>
                <li>
                  <span />
                  Vivienne Westwood
                </li>
                <li>
                  <span className="italic">W -</span>
                  Walter Van Beirendonck
                </li>
                <li>
                  <span />
                  William Kentridge
                </li>
                <li>
                  <span />
                  Willy Vanderperre
                </li>
                <li>
                  <span />
                  Wim Wenders
                </li>
                <li>
                  <span className="italic">Y -</span>Yelena Yemchuk
                </li>
                <li>
                  <span className="italic">Z -</span>Zaha Hadid
                </li>
                <li>
                  <span />
                  Zoe Cassavetes
                </li>
                <li>
                  <span />
                  Zoë Ghertner
                </li>
              </ul>
            </div>
            <p className="col-span-12 sm:hidden sm:invisible">
              Annie Leibovitz, Baz Luhrmann, Coco Capitán, David Sims, Eugene
              Souleiman, Florence Welch, Glen Luchford, Hans Ulricht Obrist,
              Irving Penn, Joe McKenna, Katerina Jebb, Luca Guadagnino, Marina
              Abramovic, Nan Goldin, Olivier Theyskens, Paolo Roversi, Rei
              Kawakubo, Slim Aarons, Tilda Swinton, Vivienne Westwood, Wim
              Wenders, Yelena Yemchuk, Zaha Hadid
            </p>
          </Section>
        )}
      </AnimatePresence>
    </Section>
  )
}
