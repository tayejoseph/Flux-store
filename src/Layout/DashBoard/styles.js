import Styled from 'styled-components'
import { DIMENSIONS } from '../../base/theme'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    header.nav--mobile {   
        height: ${DIMENSIONS.mobileTopNavHeight};
        background: #FFFFFF;
        box-shadow: 0px 1px 6px #00000029;
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        align-items: center;
        padding: 0 1em;
        width: 100vw;
        .icon {
            font-size: 30px;
        }
        ${minQuery('>lg')} {
            display: none;
        }
    }
    aside.side--nav {
        height: 100vh;
        z-index: 999;
        box-shadow: 0px 0px 5px #00000029;
        ${maxQuery('lg')} {
            width: 100vw;
            position: fixed;
            display: none;
            backdrop-filter: blur(4px);
        }
        &.open--menu__mobile {
            display: block;
            div.dashboard--sideNav {
                box-shadow: 0px 0px 5px #00000029;
            }
        }
    }
    main.dashboard--main {
        padding: 1em 1.5em;
        width: calc(100vw - ${DIMENSIONS.dashboardSideWidth});
        background: #F9F9F9;
        ${maxQuery('lg')} {
            padding-top: calc(${DIMENSIONS.mobileTopNavHeight} + 1em);
            width: 100vw;
            padding-left: 1em;
            padding-right: 1em;
        }
    }

`
