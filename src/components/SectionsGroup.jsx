import React from "react"
import Section from "./Section.jsx"

export default function SectionsGroup() {
  return (
    <>
      <Section className="bg-beige text-red p-30 gap-y-30">
        <div className="font-serif col-span-12 3md:col-span-7 text-29 leading-34">
          <p className="text-37 leading-39 mb-42">
            A MAGAZINE <span className="italic">curated by</span>
            <br />
            is published by A PUBLISHER
          </p>
          <p className="mb-42 indent">
            A MAGAZINE <span className="italic">curated by</span> is a unique
            magazine concept that explores the universe of a different fashion
            designer invited as the ‘guest curator’ of each issue. In
            collaboration with our editorial team, the guest curator develops
            innovative, personalised content to express their aesthetic and
            cultural values. Each issue celebrates this designer’s ethos: their
            people, their passions, their stories, emotions, fascinations,
            spontaneity and authenticity.
          </p>
          <p className="indent">
            A MAGAZINE <span className="italic">curated by</span> is a + / – 200
            page printed magazine that is launched alongside tailored digital
            content, behind the scenes films, physical events, exhibitions and
            advertorial content. Conceived as Belgium’s first fashion magazine,
            A MAGAZINE <span className="italic">curated by</span> has
            diversified to work with fashion designers across the globe, gaining
            international acclaim for its unprecedented access to the most
            inspiring minds of today.
          </p>
        </div>
        <div className="col-span-12 text-center 3md:col-span-5 3md:text-left">
          <img
            src="margiela-big.jpg"
            alt="A Magazine curated by - Maison Martin Margiela 2021 Cover"
            className="w-full max-w-500 shadow-2xl inline-block"
          />
        </div>
      </Section>
      <Section className="bg-beige text-red font-serif p-30">
        <div className="col-span-12 mb-30 xl:col-span-3">
          <button type="button">
            <span className="italic">About</span> A PUBLISHER
          </button>
        </div>
        <div className="mb-30 col-span-12 3md:col-span-5 xl:col-span-4">
          <p>
            Today A PUBLISHER has expanded beyond producing the print title A
            MAGAZINE <span className="italic">curated by</span>, to include the
            creation of custom editorial content, exhibitions, events,
            copywriting services and creative consulting.
          </p>
        </div>
        <div className="col-span-12 3md:col-span-7 xl:col-span-5">
          <p className="mb-21">
            A MAGAZINE <span className="italic">curated by</span>
          </p>
          <p className="mb-42 indent">
            A dedicated print magazine guest edited by an independent fashion
            designer or the creative director of a fashion house. Entirely
            unique yet immediately recognisable with our signature ‘A’ cover
            design, each issue joins a canon of collectible magazines featuring
            some of the greatest names in 21st century avant-garde fashion.
          </p>
          <p className="mb-21 ">
            A PROJECT <span className="italic">curated by</span>
          </p>
          <p className="mb-42 indent">
            A thematic editorial project developed in total collaboration with a
            brand or house focusing on a specific topic. The format of (subject)
            <span className="italic">curated by</span> (designer/brand) is
            employed to create a synergy with our core product, while
            differentiating each print and digital project as a singular,
            mono-branded entity and invaluable marketing tool for corporate
            gifting and traditional distribution.
          </p>
          <p className="mb-21">
            CONTENT <span className="italic">curated for</span>
          </p>
          <p className="mb-42 indent">
            Endless possibilities, for the here & now. Custom editorial and
            advertorial content, copywriting services and creative consulting
            for print and digital projects from the A MAGAZINE{" "}
            <span className="italic">team</span>.
          </p>
        </div>
      </Section>
      <Section className="bg-red text-beige font-serif p-30 border-t border-red gap-y-30">
        <div className="mb-30 col-span-12 2xl:col-span-3">
          <button type="button">
            A MAGAZINE <span className="italic">history</span>
          </button>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <p className="mb-24">
            N°A featuring Dirk Van Saene was the first ever A MAGAZINE,
            initiated by Walter Van Beirendonck and art directed by Paul Boudens
            for the 2001 Landed Geland fashion festival in Antwerp. Before the
            name A MAGAZINE <span className="italic">curated by</span> was
            created in 2004, each issue was named after a letter of the
            alphabet, beginning with the iconic red ‘A’ for Antwerp, a historic
            symbol of the Belgian city. The project was incited by the designer
            Walter Van Beirendonck, who invited Dirk Van Saene to be its first
            ‘Featuring’ designer. Both were members of the famed ‘Antwerp Six’.
          </p>
          <p>
            It was followed by <span className="italic">N°B, N°C, N°D</span> and{" "}
            <span className="italic">N°E</span> magazines before a change in
            ownership and direction saw the birth of A MAGAZINE{" "}
            <span className="italic">curated by</span> Maison Martin Margiela in
            2004.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4 grid grid-cols-4 xs:grid-rows-3 sm:grid-rows-2 gap-x-30 gap-y-30">
          <div className="col-span-4 sm:col-span-2 row-span-2">
            <img src="A.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
            <img src="B.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
            <img src="C.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
            <img src="D.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-4 xs:col-span-2 sm:col-span-1 row-span-1">
            <img src="E.jpg" className="max-w-full w-full" />
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-8 2xl:col-start-4 grid grid-cols-8 gap-x-30 gap-y-30">
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="01.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="02.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="03.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="04.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="05.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="06.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="07.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="08.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="09.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="10.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="11.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="12.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="13.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="14.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="15.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="16.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="17.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="18.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="19.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="20.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="21.jpg" className="max-w-full w-full" />
          </div>
          <div className="col-span-8 xs:col-span-4 sm:col-span-2 2md:col-span-1 row-span-1">
            <img src="22.jpg" className="max-w-full w-full" />
          </div>
        </div>
      </Section>
      <Section className="bg-beige text-red font-serif p-30 border-t border-red">
        <div className="mb-30 col-span-12 2xl:col-span-3">
          <button type="button">
            A MAGAZINE <span className="italic">selected contributors</span>
          </button>
        </div>
        <div className="col-span-12 md:col-span-8 2xl:col-span-4 mb-21">
          <p>
            As A MAGAZINE <span className="italic">curated by</span>’s guest
            editor changes every time, so do the magazine’s contributors. From
            fashion’s most accomplished creatives to art world stars,
            internationally acclaimed writers and researchers, each issue
            invites an elite level of collaborators.
          </p>
        </div>
        <div className="col-span-12 2xl:col-start-4 2xl:col-span-9 grid grid-cols-10 gap-x-12 text-18 leading-24">
          <ul className="col-span-10 sm:col-span-5 md:col-span-3 lg2:col-span-2 flex-list-fixed">
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
              Coco Capitan
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
              <span className="italic">D -</span>Craig McDean
            </li>
            <li>
              <span />
              David Armstrong
            </li>
            <li>
              <span />
              David Sims
            </li>
          </ul>
          <ul className="col-span-10 sm:col-span-5 sm:order-3 md:col-span-3 md:order-4 lg2:col-span-2 lg2:order-0 flex-list-fixed">
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
              <span className="italic">I -</span>Inez Van Lamsweerde & Vinoodh
              Matadin
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
          <ul className="col-span-10 sm:col-span-5 sm:order-5 md:col-span-3 md:order-2 lg2:col-span-2 lg2:order-0 flex-list-fixed">
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
              Matthew Lutz Kinoy
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
          <ul className="col-span-10 sm:col-span-5 sm:order-2 md:col-span-3 md:order-5 lg2:col-span-2 lg2:order-0 flex-list-fixed">
            <li>
              <span />
              Michael Bailey Gates
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
          <ul className="col-span-10 sm:col-span-5 sm:order-4 md:col-span-3 md:order-3 lg2:col-span-2 lg2:order-0 flex-list-fixed">
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
              <span />
              Valerie Steele
            </li>
            <li>
              <span className="italic">V -</span>Vivienne Westwood
            </li>
            <li>
              <span />
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
      </Section>
      <Section className="bg-greyTeal text-black font-serif p-30 gap-y-30">
        <div className="col-span-12 font-sans">
          <button type="button" className="uppercase text-18">
            III. Audience &amp; Distribution
          </button>
        </div>
        <div className="col-span-12 2md:col-span-8 text-29 leading-34">
          <p>
            Throughout our twenty year history, A MAGAZINE has built an engaged
            community of faithful readers, collectors and followers around the
            globe – one that continues to grow with each new issue in a unique
            exchange with a designer or fashion house’s audience and our own.
          </p>
          <img
            src="planisphere.jpg"
            alt="A MAGAZINE curated by Communities map"
            className="max-w-full h-auto"
          />
        </div>
        <div className="col-span-12 2md:col-span-4">
          <ul className="flex-list-50 mb-30">
            <li>
              <span className="uppercase">Frequency</span>
              <span>Biannual</span>
            </li>
            <li>
              <span className="uppercase">
                50+ countries
                <br />
                worldwide
              </span>
              <span>
                Europe 48%
                <br />
                America 18%
                <br />
                Asia 25%
                <br />
                Rest of the world 9%
              </span>
            </li>
            <li>
              <span className="uppercase">Average print run per project</span>
              <span>20,000 copies</span>
            </li>
            <li>
              <span className="uppercase">Readership</span>
              <span>100,000</span>
            </li>
            <li>
              <span className="uppercase">Language</span>
              <span>English</span>
            </li>
          </ul>
          <p className="mb-30">
            A MAGAZINE is sold online at{" "}
            <a
              href="https://amagazinecuratedby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              amagazinecuratedby.com
            </a>{" "}
            and through the following distributors:
          </p>
          <ul>
            <li>Boutique Mags/WhiteCirc</li>
            <li>Export Press</li>
            <li>Idea Books</li>
            <li>IPS</li>
            <li>KD Presse</li>
            <li>Twelve Books</li>
          </ul>
        </div>
        <Section className="col-span-12 py-30 gap-y-30">
          <div className="col-span-12 2xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">selected cities</span>
            </button>
          </div>
          <div className="col-span-12 sm:col-span-6 lg2:col-span-3 2xl:col-span-2 grid grid-cols-8">
            <p className="italic uppercase col-span-8 mb-24">
              North &amp; South America
            </p>
            <ul className="col-span-4 text-21 leading-27">
              <li>Atlanta </li>
              <li>Bogotá</li>
              <li>Boston</li>
              <li>Chicago </li>
              <li>Dallas</li>
              <li>Houston</li>
              <li>Los Angeles </li>
              <li>Mexico</li>
              <li>Miami</li>
            </ul>
            <ul className="col-span-4 text-21 leading-27">
              <li>Montreal</li>
              <li>New York </li>
              <li>Palm Springs</li>
              <li>Philadelphia </li>
              <li>Portland</li>
              <li>San Francisco </li>
              <li>São Paulo</li>
              <li>Toronto </li>
              <li>Vancouver </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg2:col-span-3 2xl:col-span-2 grid grid-cols-8">
            <p className="italic uppercase col-span-8 mb-24">
              Asia &amp; Oceania
            </p>
            <ul className="col-span-4 text-21 leading-27">
              <li>Auckland</li>
              <li>Beijing</li>
              <li>Chongqing</li>
              <li>Dubai</li>
              <li>Guangzhou</li>
              <li>Hangzhou</li>
              <li>Hong Kong</li>
              <li>Jakarta</li>
              <li>Kyoto</li>
            </ul>
            <ul className="col-span-4 text-21 leading-27">
              <li>Kuala Lampur</li>
              <li>Melbourne</li>
              <li>Nagoya</li>
              <li>New Delhi</li>
              <li>Osaka</li>
              <li>Seoul</li>
              <li>Shanghai</li>
              <li>Singapore</li>
              <li>Sydney</li>
            </ul>
          </div>
          <div className="col-span-12 lg2:col-span-6 2xl:col-span-4 grid grid-cols-8">
            <p className="italic uppercase col-span-8 mb-24">
              Europe &amp; Africa
            </p>
            <ul className="col-span-4 sm:col-span-2 text-21 leading-27">
              <li>Amsterdam</li>
              <li>Antwerp</li>
              <li>Athens</li>
              <li>Barcelona</li>
              <li>Berlin</li>
              <li>Birmingham</li>
              <li>Brussels</li>
              <li>Bucharest</li>
              <li>Cape Town</li>
            </ul>
            <ul className="col-span-4 order-2 sm:order-1 sm:col-span-2 text-21 leading-27">
              <li>Copenhagen</li>
              <li>Dusseldorf</li>
              <li>Florence</li>
              <li>Geneva</li>
              <li>Kiev</li>
              <li>Lausanne</li>
              <li>Lisbon</li>
              <li>London</li>
              <li>Madrid</li>
            </ul>
            <ul className="col-span-4 order-1 sm:order-2 sm:col-span-2 text-21 leading-27">
              <li>Malmö</li>
              <li>Manchester</li>
              <li>Marseille</li>
              <li>Milan</li>
              <li>Moscow</li>
              <li>Munich</li>
              <li>Nottingham</li>
              <li>Oslo</li>
              <li>Paris</li>
            </ul>
            <ul className="order-3 col-span-4 sm:col-span-2 text-21 leading-27">
              <li>Porto</li>
              <li>Rome</li>
              <li>St. Petersburg</li>
              <li>Stockholm</li>
              <li>Valencia</li>
              <li>Venice</li>
              <li>Vienna</li>
              <li>Vilnius</li>
              <li>Zurich</li>
            </ul>
          </div>
        </Section>
        <Section className="col-span-12 py-30 border-t border-black gap-y-30">
          <div className="col-span-12 2xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">selected stores</span>
            </button>
          </div>
          <div className="col-span-12 lg:col-span-5 2xl:col-span-4">
            <p className="mb-24">
              In recent years, a solid partnership with global distributors has
              been complimented by new direct retailer relationships with art
              and design bookstores, concept stores, museum shops and other
              multi-brand retailers worldwide.
            </p>
            <p>
              These strong connections enable a greater presence in local
              markets, especially in secondary locations that are growing focal
              areas for us in a time where online shipping costs from Europe
              remain prohibitive for readers in the far reaches of the globe.
              These partnerships continue to generate local marketing
              activations and events outside of fashion weeks and the major
              fashion capitals.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 2xl:col-span-4 grid grid-cols-8 gap-x-12 text-21 leading-27">
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
                Dover Street Market <span className="italic">(worldwide)</span>
              </li>
              <li>
                Edicola Erno – <span className="italic">Rome</span>
              </li>
              <li>
                Epel – <span className="italic">Seoul</span>
              </li>
              <li>
                Frabs Magazine – <span className="italic">Italy (online)</span>
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
                One half in – <span className="italic">China (online)</span>
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
                Saint-Martin Bookshop – <span className="italic">Brussels</span>
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
        <Section className="col-span-12 py-30 border-t border-black gap-y-30">
          <div className="col-span-12 lg:col-span-5 2xl:col-span-4">
            <button type="button">
              <span className="italic">About</span> OUR AUDIENCE
            </button>
          </div>
          <div className="col-span-12 lg:col-span-7 2xl:col-span-4">
            <p className="mb-24">
              Our audience consists of highly informed readers and consumers
              whose primary interests revolve around the worlds of fashion,
              contemporary art and design – aesthetes who equally appreciate the
              magazine’s elevated creative and intellectual content as they do
              its premium production quality as a collectible, book­like
              object. 
            </p>
            <p>
              Whilst some readers purchase individual designer issues in line
              with their personal tastes in fashion, others are avid fans of the
              magazine as a concept, choosing to collect every issue to complete
              their personal collections. Online sales reflect this as readers
              often add an archive issue to their purchases, whilst bookstores
              around the world continue to stock back issues in small quantities
              for new readers who discover the concept for the first time.
            </p>
          </div>
        </Section>
      </Section>
      <Section className="bg-greyTeal text-black font-serif p-30">
        <div className="col-span-12 font-sans mb-30">
          <button type="button" className="uppercase text-18">
            II. Website &amp; Social Media
          </button>
        </div>
        <Section className="col-span-12 py-30 border-t border-black gap-y-30">
          <div className="col-span-12 2xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">instagram</span>
            </button>
          </div>
          <div className="col-span-12 2xl:col-span-8">
            <p>
              <a
                href="https://www.instagram.com/amagazinecuratedby"
                target="_blank"
                rel="noopener noreferrer"
                className="italic"
              >
                @amagazinecuratedby
              </a>
            </p>
          </div>
          <div className="col-span-12 2md:col-span-6 2xl:col-span-4 2xl:col-start-5">
            <ul className="flex-list-30">
              <li className="mb-30">
                CORE TARGET AUDIENCE <span>20 - 60 yo</span>
              </li>
              <li>
                FEMALE <span>60%</span>
              </li>
              <li className="mb-30">
                MALE <span>40%</span>
              </li>
              <li>AGE SPLIT</li>
              <li>
                15 – 24 <span>15%</span>
              </li>
              <li>
                25 – 34 <span>44%</span>
              </li>
              <li>
                35 – 44 <span>25%</span>
              </li>
              <li>
                45 – 64+ <span>14%</span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 2md:col-span-6 2xl:col-span-4">
            <ul className="flex-list-30">
              <li className="mb-30">
                ANNUAL SOCIAL MEDIA PLATFORMS GROWTH <span>20% per annum</span>
              </li>
              <li>DATA PER MONTH</li>
              <li>
                New visitors <span>20,000</span>
              </li>
              <li>
                Account reached <span>120,000</span>
              </li>
              <li>
                Impressions <span>660,000</span>
              </li>
              <li>
                Content Interactions <span>27,000</span>
              </li>
            </ul>
          </div>
        </Section>
        <Section className="col-span-12 py-30 border-t border-black gap-y-30">
          <div className="col-span-12 xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">website</span>
            </button>
          </div>
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <p className="mb-24">
              <a
                href="https://amagazinecuratedby.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic"
              >
                www.amagazinecuratedby.com
              </a>{" "}
              is a multi­service platform that encapsulates an archival
              collection component and a dynamic creative news section. Each
              issue of A MAGAZINE <span className="italic">curated by</span> has
              its dedicated page where the theme of the magazine and its
              contributors are presented alongside pictures and visual
              references. Our collection of A PROJECT
              <span className="italic">curated by</span> will soon be accessible
              on this space too.
            </p>
            <p>
              The news section invites regular contributors to extend our
              curated perspective to current events and stories taking place in
              fashion, art and incidental creative fields, as well as our
              curators, contributors and supporting brands and partners,
              offering a distinctive outlook and insightful angle on outreached
              spaces and unexplored topics.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-4">
            <img
              src="ordinateur.jpg"
              alt="A MAGAZINE curate by website"
              className="max-w-full h-auto"
            />
          </div>
        </Section>
      </Section>
      <Section className="bg-dark text-beige font-serif p-30">
        <div className="col-span-12 font-sans mb-30">
          <button type="button" className="uppercase text-18">
            IV. Media Placement Rates
          </button>
        </div>
        <Section className="col-span-12 py-30 border-t border-beige gap-y-30">
          <div className="col-span-12 2xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">print + digital rates</span>
            </button>
          </div>
          <div className="col-span-12 2xl:col-span-8 grid grid-cols-8 gap-x-12 gap-y-21">
            <div className="col-span-12 2md:col-span-3 2xl:col-span-4 flex flex-col">
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
            <div className="col-span-12 2md:col-span-5 2xl:col-span-4">
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
          <div className="col-span-12 2xl:col-start-5 2xl:col-span-8 grid grid-cols-8 gap-x-12 border-t border-beige pt-30 gap-y-21">
            <div className="col-span-12 2md:col-span-3 2xl:col-span-4 flex flex-col">
              <p className="mb-30">
                Each print media placement rate includes the following digital
                integration.
              </p>
              <p className="text-20 leading-27 mt-auto mb-30">
                <small>
                  Seasonal timing / posting dates to be defined in consultation
                  with the Brand partner.
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
            <div className="col-span-12 2md:col-span-5 2xl:col-span-4">
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
                  Direct Link to Brand partner website or to A MAGAZINE website
                </li>
                <li className="italic">
                  <span>2 x </span>24h Instagram Stories dedication of images /
                  video
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section className="col-span-12 py-30 border-t border-beige gap-y-30">
          <div className="col-span-6 2xl:col-span-4">
            <button type="button" className="mb-30">
              A MAGAZINE <span className="italic">digital packages rates</span>
            </button>
            <p className="max-w-345">
              In addition to the print advertising space, we offer digital
              content packages throughout the year.
            </p>
          </div>
          <div className="col-span-12 2xl:col-span-8 grid grid-cols-8 gap-x-12 gap-y-21">
            <div className="col-span-12 2md:col-span-3 2xl:col-span-4">
              <p>
                Photo shoot or video content produced by A PUBLISHER featuring
                Brand partner’s collection, accessories, products accompanied by
                short text articles.
              </p>
            </div>
            <div className="col-span-12 2md:col-span-5 2xl:col-span-4">
              <p className="mb-30">PRODUCED ADVERTORIAL € 8,000</p>
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
                  Direct Link to Brand partner website or to A MAGAZINE website
                </li>
                <li className="italic">
                  <span>2 x </span>24h Instagram Stories dedication of images /
                  video
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 2xl:col-start-5 2xl:col-span-8 grid grid-cols-8 gap-x-12 border-t border-beige pt-30 gap-y-21">
            <div className="col-span-12 2md:col-span-3 2xl:col-span-4 flex flex-col">
              <p className="mb-30">
                Rediffusion and social media promotion of Brand partner’s
                provided visual assets with A MAGAZINE tone-of-voice.
              </p>
              <p className="text-20 leading-27 mt-auto mb-30">
                <small>
                  Seasonal timing / posting dates to be defined in consultation
                  with the Brand partner.
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
            <div className="col-span-12 2md:col-span-5 2xl:col-span-4">
              <p className="uppercase mb-30">Sponsored Editorial</p>
              <p className="border-t border-beige pt-30">OPTION 1 € 6,000</p>
              <p className="italic mb-30">
                Brand partner’s visual assets accompanied by short text or
                long-form article written by A Magazine team or contributing
                editor.
              </p>
              <ul className="flex-list-fixed">
                <li className="uppercase">- Website Article</li>
                <li className="italic mb-30">
                  <span>1 x </span>long-form (600 words +) article + image/video
                  gallery on amagazinecuratedby.com/curatedfor
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
                  Direct Link to Brand partner website or to A MAGAZINE website
                </li>
                <li className="italic">
                  <span>2 x </span>24h Instagram Stories dedication of images /
                  video
                </li>
              </ul>
              <p className="border-t border-beige mt-30 pt-30">
                OPTION 2 € 3,000
              </p>
              <p className="italic mb-30">
                Brand partner’s visual assets published on Instagram accompanied
                by editorial captions.
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
                  Direct Link to Brand partner website or to A MAGAZINE website
                </li>
                <li className="italic">
                  <span>2 x </span>24h Instagram Stories dedication of images /
                  video
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section className="col-span-12 py-30 border-t border-beige">
          <div className="col-span-12 mb-30 2xl:col-span-4">
            <button type="button">
              A MAGAZINE <span className="italic">brand environment</span>
            </button>
          </div>
          <div className="col-span-12 2xl:col-span-8 grid grid-cols-8 uppercase">
            <ul className="order-0 col-span-8 sm:col-span-4 3md:col-span-2">
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
            <ul className="order-2 col-span-8 sm:col-span-4 3md:order-1 3md:col-span-2">
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
            <ul className="order-1 col-span-8 sm:col-span-4 3md:order-2 3md:col-span-2">
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
            <ul className="order-3 col-span-8 sm:col-span-4 3md:order-0 3md:col-span-2">
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
      </Section>
      <Section className="bg-greyTeal text-black font-serif p-30 gap-y-30">
        <div className="col-span-12 2xl:col-span-4 font-sans">
          <button type="button" className="uppercase text-18">
            V. Team
          </button>
        </div>
        <div className="col-span-12 2md:col-span-6 2xl:col-span-4">
          <ul className="flex-list-50">
            <li>
              <span className="uppercase">Publisher</span>
              <span>Evence-Charles Coppée</span>
            </li>
            <li>
              <span className="uppercase">Editor in Chief</span>
              <span>
                Dan Thawley
                <br />
                <span className="text-21">
                  +33 (0)6 01 15 45 57
                  <br />
                  <a href="mailto:dan@amagazinecuratedby.com">
                    dan(at)amagazinecuratedby.com
                  </a>
                </span>
              </span>
            </li>
            <li>
              <span className="uppercase">Managing Editor</span>
              <span>
                Thérèse Boon Falleur
                <br />
                <span className="text-21">
                  +33 (0)6 87 34 39 35
                  <br />
                  <a href="mailto:therese@amagazinecuratedby.com">
                    therese(at)amagazinecuratedby.com
                  </a>
                </span>
              </span>
            </li>
            <li>
              <span className="uppercase">Editor at Large</span>
              <span>Blake Abbie</span>
            </li>
            <li>
              <span className="uppercase">Art Direction</span>
              <span>
                Mike Meiré – <span className="italic">Meiré und Meiré</span>
              </span>
            </li>
            <li>
              <span className="uppercase">Moving Image</span>
              <span>Alexandre Silberstein</span>
            </li>
          </ul>
        </div>
        <div className="col-span-12 2md:col-span-6 2xl:col-span-4">
          <p className="mb-30">
            A PUBLISHER collaborates on its different platforms with a global
            network of journalists and creatives from Paris, London, Milan,
            Berlin, New York, Tokyo, Shanghai, Delhi.
          </p>
          <ul className="mb-84">
            <li>
              <a
                href="https://www.instagram.com/amagazinecuratedby"
                target="_blank"
                rel="noopener noreferrer"
              >
                @amagazinecuratedby
              </a>
            </li>
            <li>
              <a
                href="https://amagazinecuratedby.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.amagazinecuratedby.com
              </a>
            </li>
          </ul>
          <p>
            Please enquire with our team for our most recent distribution,
            website and social media data.
          </p>
        </div>
      </Section>
    </>
  )
}
