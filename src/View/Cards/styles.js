import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`    
    flex: 1;
    height: 100%;
    div.card__content {
        max-width: ${rem('562px')};
        table.flux--table {
            th.action--cell, td.action--cell {
                text-align: center;
            }
            button.btn--edit {
                margin: 0 1em;               
            }
        }
    }
`
