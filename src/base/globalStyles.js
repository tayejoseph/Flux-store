import { createGlobalStyle } from 'styled-components'
import { rem, normalize } from 'polished'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
    html, body {
      padding: 0px;
      margin: 0px;
      font-weight: normal;
      /* font-size: ${rem('14px')}; */
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
    
      /* reset */
      h1, h2, h3, h4 {
        margin: 0px;
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
      .u--typo__lgBody {
        font-size: ${rem('16px')};
        line-height: ${rem('20px')};
      }
      .u--typo__btn {
        font-size: ${rem('14px')};
        line-height: ${rem('16px')};
        font-weight: medium;
      }
      .u--typo__caption {
        font-size: ${rem('13px')};
        line-height: ${rem('16px')};
      }

      /* color */
      .u-dark {        
        font-weight: normal;
        color: #222222;
        opacity: 1;
      }
}
`
