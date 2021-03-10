import React from 'react'
import { IoMdWallet, IoMdBasket, IoMdCall } from 'react-icons/io'
import { FaGift } from 'react-icons/fa'
import { RiArrowUpDownFill, RiArrowLeftUpLine } from 'react-icons/ri'
import { FiArrowUpRight } from 'react-icons/fi'
import { ImCreditCard } from 'react-icons/im'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Container from './styles'

const SideNav = () => {
  const location = useLocation()
  return (
    <Container className="dashboard--sideNav">
      <header>
        <Link to="/">
          <div className="img--container"></div>
        </Link>
        <Link to="/">
          <div className="img--container"></div>
        </Link>
      </header>
      <hr />
      <nav>
        <ol>
          <li>
            <NavLink to="/dashboard/wallet">
              <IoMdWallet />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cards">
              <ImCreditCard />
              Cards
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/gifts?tab=created">
              <FaGift />
              Gifts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: '/dashboard/store/newUser',
                // state: { background: location },
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
