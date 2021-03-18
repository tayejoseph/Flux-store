import React from 'react'
import { IoMdSettings, IoMdArrowRoundBack } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '../../UI'
import Container from './styles'

const DashboardHeader = ({
  title,
  sectionAction,
  middleContent,
  navType = 'full',
}) => {
  const location = useLocation()
  const history = useHistory()
  return (
    <Container
      className={`dashboard--header ${
        navType === 'full' ? 'full--nav' : 'sm--nav'
      }`}
    >
      {navType === 'full' ? (
        <>
          <div className="flux--row">
            <h2 className={'u--typo__headline'}>{title}</h2>
            <div className="btn--tray">
              <Button
                icon
                onClick={() =>
                  history.push('/dashboard/settings', {
                    background: location,
                  })
                }
              >
                <IoMdSettings />
              </Button>
              <Button
                icon
                onClick={() =>
                  history.push('/dashboard/notification/fluxWallet')
                }
              >
                <FaBell />
              </Button>
            </div>
          </div>
          {middleContent && middleContent}
          <div className="header--action">{sectionAction && sectionAction}</div>
        </>
      ) : (
        <nav>
          <Button
            className="back--btn"
            icon
            iconRight
            onClick={() => history.goBack()}
          >
            <IoMdArrowRoundBack />
            Go Back
          </Button>
          <div className="btn--tray">
            <Button
              icon
              onClick={() =>
                history.push('/dashboard/settings', {
                  background: location,
                })
              }
            >
              <IoMdSettings />
            </Button>
            <Button
              icon
              onClick={() => history.push('/dashboard/notification/fluxWallet')}
            >
              <FaBell />
            </Button>
          </div>
        </nav>
      )}
    </Container>
  )
}

export default DashboardHeader
