import React from "react"
import { motion } from "framer-motion"

export default function Section({
  className,
  children,
  action,
  order,
  isActive,
  accordion,
}) {
  return (
    <motion.section
      initial={accordion ? "collapsed" : undefined}
      animate={accordion ? "open" : undefined}
      exit={accordion ? "collapsed" : undefined}
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={`grid grid-cols-12 gap-x-16 ${className}`}
    >
      {children}
    </motion.section>
  )
}
