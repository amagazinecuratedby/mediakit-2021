import { AnimatePresence, motion } from "framer-motion"

import AuthScreen from "../components/AuthScreen"
import Header from "../components/Header"
import Helmet from "react-helmet"
import React from "react"
import SectionsGroup from "../components/SectionsGroup"
import axios from "axios"

export default function Index() {
  const [isAuth, setIsAuth] = React.useState(false)
  const [authError, setAuthError] = React.useState(false)

  async function auth(e, psw) {
    e.preventDefault()

    try {
      await axios.post("/.netlify/functions/auth", { psw })

      return setIsAuth(true)
    } catch (error) {
      setAuthError(true)

      return setTimeout(() => setAuthError(false), 1500)
    }
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      {/* <AnimatePresence initial={false}>
        {!isAuth && <AuthScreen action={auth} authError={authError} />}
      </AnimatePresence> */}
      {/* <AnimatePresence>
        {isAuth && ( */}
      <motion.section key="sections-group">
        <SectionsGroup />
      </motion.section>
      {/* )}
      </AnimatePresence> */}
    </>
  )
}
