import { createGlobalStyle } from 'styled-components'
import { rem, rgba, normalize } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
    html, body {
      padding: 0px;
      margin: 0px;
      font-weight: normal;

      ${maxQuery('lg')} {
        font-size: 90%;
      }
      ${maxQuery('sm')} {
        font-size: 80%;
      }
       #nprogress .bar {
        background: ${({ theme }) => theme.primary};
        height: 3px;
      }

      #nprogress .peg {
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}, 0 0 ${({
  theme,
}) => theme.primary};
            }

      #nprogress .spinner-icon {
        border-top-color: ${({ theme }) => theme.primary};
        border-left-color: ${({ theme }) => theme.primary};
      }
    }
    body {
        font-family: ${({ theme }) => theme.fontFamily};
        &.lock-scroll {
              overflow-y: hidden!important;
              height: 100vh;
          }
       img {
         width: 100%;
         height: 100%;
       }

      hr {
          border-top: none;
          border-bottom: 1px solid ${rgba('#E1E1E1', 0.5)};
          margin: 1em 0px;
      }
    
      /* reset */
      h1, h2, h3, h4 {
        margin: 0px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      /* Typography */
      .u--typo__headline {
        font-size: ${rem('20px')};
        line-height: ${rem('25px')};
        font-weight: bold;
      }
      .u--typo__title {
        font-size: ${rem('16px')};
        line-height: ${rem('20px')};
        font-weight: bold;
      }
      .u--typo__smBody {
        font-size: ${rem('13px')};
        line-height: ${rem('15px')};
        letter-spacing: 0.13px;
      }
      .u--typo__lgBody {
        font-size: ${rem('16px')};
        line-height: ${rem('20px')};
      }
      .u--typo__btn, .u--typo__normalBold {
        font-size: ${rem('14px')};
        line-height: ${rem('16px')};
        font-weight: medium;
      }
      .u--typo__normal {
        font-weight: normal;
        font-size: ${rem('14px')};
        line-height: ${rem('20px')};
        letter-spacing: 0px;
      }
      .u--typo__caption {
        font-size: ${rem('13px')};
        line-height: ${rem('16px')};
      }
      .u--typo__center {
        text-align: center!important;
      }
      /* color */
      .u--color__dark {        
        color: #222222;
        opacity: 1;
      }
      .u--color__light {
        opacity: 0.7;
        color: #222222;
      }
      .u--color__lighter {
        opacity: 0.5;
        color: #222222;
      }

      /* Status */
      .status--txt__pending {
          color: #FFCC00!important;
          &:before {
            content: "+"
          }
      }
      .status--txt__debit, .status--txt__fund  {
          /* color: #47C479!important; */
          &:before {
            content: "+"
          }
      }
      .status--txt__withdraw, .status--txt__fluxtransfer, .status--txt__airtime, .status--txt__buycrypto {
          /* color: #FF5E5E!important; */
          &:before {
            content: "-"
          }
      }
      .u--color__success {
          color: #47C479!important;
      }

       .u--color__failed {
          color: #FF5E5E!important;
      }

      .u--color__pending {
          color: #FFCC00!important;
      }
      .status--txt__failed2 {
          color: #FF5E5E!important;
      }
      .status--container__pending {
          background: #FFFBC5!important;
          color: #FFCC00!important;
      }
      .status--container__success {
          background: #E2FFEC!important;
          color: #47C479!important;
      }
      .status--container__failed {
          background: #FFE9E9!important;
          color: #FF5E5E!important;
      }
      .helper--text {
        color: #AEAEAE;
      }

      .u--status__error {
        color: #FF5E5E!important;
      }
}
`
