import Styled from 'styled-components'
import { rem, rgba } from 'polished'
import scrollBar from '../../base/scrollBar'

export default Styled.div`
    div.gift--content {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 3px #00000029;
        max-width: ${rem('562px')};
        header {
            padding-top: 1em;
            border-bottom: 1px solid ${rgba('#E1E1E1', 0.1)};
        }
        div.gift--table__container {
            overflow: auto;
            div.flux--table__container {
                width: ${rem('562px')};
            }
            thead {
                border-radius: 0px;
            }
            td.action--cell, th.action--cell {
                text-align: center;
            }
            tbody {
                ${scrollBar}
                height: 50vh;
            }
        }
    }
`
