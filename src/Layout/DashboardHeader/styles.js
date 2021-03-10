import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`    
    height: ${rem('142px')};
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em 2em;
    box-shadow: 0px 0px 2px #00000029;
    border-radius: 10px;
    margin-bottom: 1.5em;
    div.flux--row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div.btn--tray button:not(:last-child) {
            margin-right: 1.5em
        }
    }
`
