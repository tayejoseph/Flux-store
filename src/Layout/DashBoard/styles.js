import Styled from 'styled-components'
import { DIMENSIONS } from '../../base/theme'

export default Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    div.dashboard--sideNav {
        width: 245px;
    }
    main.dashboard--main {
        padding: 1em 1.5em;
        width: calc(100vw - ${DIMENSIONS.dashboardSideWidth});
        background: #F9F9F9;
    }

`
