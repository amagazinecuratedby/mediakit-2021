import React from "react"
import { motion } from "framer-motion"

export default function Section({
  className,
  children,
  action,
  order,
  isActive,
  accordion,
  motionKey,
}) {
  return (
    <motion.section
      motionKey={motionKey}
      initial={accordion ? "collapsed" : undefined}
      animate={accordion ? "open" : undefined}
      exit={accordion ? "collapsed" : undefined}
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`grid grid-cols-12 gap-x-16 ${className}`}
    >
      {children}
    </motion.section>
  )
}
