import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'
import { Button } from '../../UI'
import Container from './styles'

const DashboardHeader = ({ title, sectionAction, middleContent }) => {
  return (
    <Container className="dashboard--header">
      <div className="flux--row">
        <h2 className={'u--typo__headline'}>{title}</h2>
        <div className="btn--tray">
          <Button icon>
            <IoMdSettings />
          </Button>
          <Button icon>
            <FaBell />
          </Button>
        </div>
      </div>
      {middleContent && middleContent}
      <div className="header--action">{sectionAction && sectionAction}</div>
    </Container>
  )
}

export default DashboardHeader
