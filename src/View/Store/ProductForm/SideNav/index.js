import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './styles'

const SideNav = () => {
  const { pathname, state } = useLocation()
  console.log(useLocation())
  return (
    <Container>
      <nav>
        <Link
          className={`${(!state || state?.section === 'infoForm') && 'active'}`}
          to={{
            pathname,
            state: { section: 'infoForm' },
          }}
        >
          <span className="u--typo__normal u--color__light">
            Product Details
          </span>
        </Link>
        <Link
          className={`${state?.section === 'uploadForm' && 'active'}`}
          to={{
            pathname,
            state: { section: 'uploadForm' },
          }}
        >
          <span className="u--typo__normal u--color__light">
            Product Images
          </span>
        </Link>
      </nav>
    </Container>
  )
}

export default SideNav
