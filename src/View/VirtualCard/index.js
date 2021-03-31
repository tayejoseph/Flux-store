import React, { useState } from 'react'
import { Route, useHistory, useRouteMatch, Switch } from 'react-router'
import { IoMdTrash } from 'react-icons/io'
import { RiAddLine } from 'react-icons/ri'
import { MdAdd } from 'react-icons/md'
import cardImg from '../../assets/card.png'
import cardIllust from '../../assets/cardIllust.svg'
import { MdEdit } from 'react-icons/md'
import { FaMoneyBillWave } from 'react-icons/fa'
import { Button, Table, Modal } from '../../UI'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'
import CardIntro from './CardIntro'
import CardForm from './CardForm'

const VirtualCard = () => {
  const history = useHistory()
  const { path } = useRouteMatch()

  return (
    <Container>
      <DashboardHeader
        // title={'Flux Cards'}
        middleContent={
          <div>
            <div className="cad">
              <img src={cardImg} alt="card" className="cardImg" />
              <img
                src={cardIllust}
                alt="cardIllustration"
                className="illustration"
              />
              <div className="card--content">
                <h2 className="title">
                  Flux Cards<span>.</span>
                </h2>
                <p className="u--typo__lgBody">
                  Set up your own Naira or Dollar <br />
                  cards.
                </p>
                <Button onClick={() => history.push(`${path}/cardIntro`)}>
                  <span>
                    <MdAdd />
                  </span>
                  Create Card
                </Button>
              </div>
            </div>
          </div>
        }
      />
      <Route path={`${path}/cardIntro`} component={CardIntro} />
      <Route path={`${path}/cardForm`} component={CardForm} />
    </Container>
  )
}

export default VirtualCard
