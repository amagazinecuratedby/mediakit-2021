import React from "react"
import Section from "./Section.jsx"

export default function Instagram() {
  return (
    <Section className="col-span-12 py-20 md:py-30 border-t border-black gap-y-20 md:gap-y-30 overflow-hidden">
      <div className="col-span-12 xl:col-span-3">
        <p>
          A MAGAZINE <span className="italic">instagram</span>
        </p>
      </div>
      <Section className="col-span-12 xl:col-span-9 gap-y-20 md:gap-y-30 pb-21 md:pb-30">
        <div className="col-span-12">
          <p>
            <a
              href="https://www.instagram.com/amagazinecuratedby"
              target="_blank"
              rel="noopener noreferrer"
              className="italic transition-opacity opacity-100 hover:opacity-75"
            >
              @amagazinecuratedby
            </a>
          </p>
        </div>
        <div className="col-span-12 2md:col-span-6">
          <ul className="flex-list-30">
            <li className="mb-20 md:mb-30">
              CORE TARGET AUDIENCE <span>20 - 60 yo</span>
            </li>
            <li>
              FEMALE <span>60%</span>
            </li>
            <li className="mb-20 md:mb-30">
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
        <div className="col-span-12 2md:col-span-6">
          <ul className="flex-list-30">
            <li className="mb-20 md:mb-30">
              INSTAGRAM AUDIENCE GROWTH <span>20% per annum</span>
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
    </Section>
  )
}
