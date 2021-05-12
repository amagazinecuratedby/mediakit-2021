import AuthScreen from "../components/AuthScreen"
import Header from "../components/Header"
import Helmet from "react-helmet"
import React from "react"
import SectionsGroup from "../components/SectionsGroup"

export default function Index() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <SectionsGroup />
      {/* <AuthScreen /> */}
    </>
  )
}
