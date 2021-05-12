import React from "react"
import Section from "./Section.jsx"

export default function SelectedCities() {
  return (
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
        <p className="italic uppercase col-span-8 mb-24">Asia &amp; Oceania</p>
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
        <p className="italic uppercase col-span-8 mb-24">Europe &amp; Africa</p>
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
  )
}
