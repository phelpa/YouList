import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <header className="bg-white black-80 tc pv4">
      <a className="bg-black-80 ba b--black dib pa3 w2 h2 br-100" href="/"></a>
      <h1 className="mt2 mb0 baskerville i fw1 f1">YouList</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">
        your own customized video list, create your annotations
      </h2>
    </header>
  )
}

export default Nav
