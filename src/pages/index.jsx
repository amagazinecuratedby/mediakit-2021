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
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>MediaKit • A Magazine Curated by</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://mediakit.amagazinecuratedby.com/" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="A Magazine Curated By is a fashion magazine that explores the universe of a chosen fashion designer in each issue. We invite a guest curator – an international fashion designer, group or house – to develop innovative, personalised content to express their aesthetic and cultural values. Each issue celebrates this designer’s ethos: their people, their passion, their stories, emotions, fascinations, spontaneity and authenticity."
        />
        <meta name="copyright" content="A MAGAZINE curated by" />
        <meta name="language" content="en" />
      </Helmet>
      <Header />
      <AnimatePresence initial={false}>
        {!isAuth && <AuthScreen action={auth} authError={authError} />}
      </AnimatePresence>
      <AnimatePresence>
        {isAuth && (
          <motion.section key="sections-group">
            <SectionsGroup />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
