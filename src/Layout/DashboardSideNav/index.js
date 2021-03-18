import React from 'react'
import { IoMdWallet, IoMdBasket, IoMdCall } from 'react-icons/io'
import { FaGift } from 'react-icons/fa'
import { RiArrowUpDownFill, RiArrowLeftUpLine } from 'react-icons/ri'
import { FiArrowUpRight } from 'react-icons/fi'
import { ImCreditCard } from 'react-icons/im'
import fluxLogo from '../../assets/Flux Logo@2x.png'
import UserAvatar from '../../assets/autumn-goodman-vTL_qy03D1I-unsplash (1)@2x.png'
import { Link, useLocation } from 'react-router-dom'
import { doesRouteMatch } from '../../helpers'
import Container from './styles'

const SideNav = ({ className }) => {
  const location = useLocation()

  const backgroundPathname = location.state?.background

  return (
    <Container className={`dashboard--sideNav ${className}`}>
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
            <Link
              to="/dashboard/wallet/summary"
              className={
                doesRouteMatch('wallet', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
            >
              <IoMdWallet />
              Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cards"
              className={
                doesRouteMatch('cards', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
            >
              <ImCreditCard />
              Cards
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/gifts?tab=created"
              className={
                doesRouteMatch('gifts', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
            >
              <FaGift />
              Gifts
            </Link>
          </li>
          <li>
            <Link
              className={
                doesRouteMatch('store', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
              to="/dashboard/store/newUser"
            >
              <IoMdBasket />
              Flux Store
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/requestMoney?tab=sent"
              className={
                doesRouteMatch('requestMoney', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
            >
              <RiArrowLeftUpLine />
              Request Money
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/dashboard/sendMoney?tab=sent"
              className={
                doesRouteMatch('sendMoney', location.pathname) &&
                !backgroundPathname
                  ? 'active'
                  : ''
              }
            >
              <FiArrowUpRight />
              Send Money
            </Link>
          </li>
          <li>
            <Link
              className={backgroundPathname === 'airtimeTopUp' ? 'active' : ''}
              to={{
                pathname: '/dashboard/airtimeTopUp',
                state: { background: location },
              }}
            >
              <IoMdCall />
              Airtime Topup
            </Link>
          </li>
          <li>
            <Link
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
            </Link>
          </li>
        </ol>
      </nav>
    </Container>
  )
}

export default SideNav
