import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    div.gift--table__container {
        max-width: ${rem('562px')};
        td.action--cell, th.action--cell {
            text-align: center;
        }
        tbody {
            height: 50vh;
        }
    }
`
