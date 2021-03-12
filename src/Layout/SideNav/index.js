import React from 'react'
import { IoMdWallet, IoMdBasket, IoMdCall } from 'react-icons/io'
import { FaGift } from 'react-icons/fa'
import { RiArrowUpDownFill, RiArrowLeftUpLine } from 'react-icons/ri'
import { FiArrowUpRight } from 'react-icons/fi'
import { ImCreditCard } from 'react-icons/im'
import fluxLogo from '../../assets/Flux Logo@2x.png'
import UserAvatar from '../../assets/autumn-goodman-vTL_qy03D1I-unsplash (1)@2x.png'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { doesRouteMatch } from '../../helpers'
import Container from './styles'

const SideNav = () => {
  const location = useLocation()

  return (
    <Container className="dashboard--sideNav">
      <header>
        <Link to="/">
          <div className="img--container">
            <img src={fluxLogo} alt="Flux Logo" />
          </div>
        </Link>
        <hr />
        <Link to="/">
          <div className="img--container">
            <img src={UserAvatar} alt={'User Avatar'} />
          </div>
        </Link>
        <p className="u--typo__normal">
          Hi <span>Julia</span>
        </p>
      </header>
      <hr />
      <nav>
        <ol>
          <li>
            <NavLink
              to="/dashboard/wallet"
              className={
                doesRouteMatch('wallet', location.pathname) ? 'active' : ''
              }
            >
              <IoMdWallet />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cards"
              className={
                doesRouteMatch('cards', location.pathname) ? 'active' : ''
              }
            >
              <ImCreditCard />
              Cards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/gifts?tab=created"
              className={
                doesRouteMatch('gifts', location.pathname) ? 'active' : ''
              }
            >
              <FaGift />
              Gifts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                doesRouteMatch('store', location.pathname) ? 'active' : ''
              }
              to={{
                pathname: '/dashboard/store/newUser',
              }}
            >
              <IoMdBasket />
              Flux Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/requestMoney?tab=sent">
              <RiArrowLeftUpLine />
              Request Money
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/dashboard/sendMoney?tab=sent">
              <FiArrowUpRight />
              Send Money
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                doesRouteMatch('airtimeTopUp', location.pathname)
                  ? 'active'
                  : ''
              }
              to={{
                pathname: '/dashboard/airtimeTopUp',
                state: { background: location },
              }}
            >
              <IoMdCall />
              Airtime Topup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                doesRouteMatch('dataTopUp', location.pathname) ? 'active' : ''
              }
              to={{
                pathname: '/dashboard/dataTopUp',
                state: { background: location },
              }}
            >
              <RiArrowUpDownFill />
              Data Topup
            </NavLink>
          </li>
        </ol>
      </nav>
    </Container>
  )
}

export default SideNav
