import React from "react"

export default function Section({ className, children }) {
  return (
    <section className={`grid grid-cols-12 gap-x-16 ${className}`}>
      {children}
    </section>
  )
}
