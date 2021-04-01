import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`    
    &.full--nav {    
        min-height: ${rem('142px')};
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5em 2em;
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 10px;
        margin-bottom: 1.2em;
        div.flux--row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          
        }
    }
    &.sm--nav {
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            button.back--btn {
            .icon {
                font-weight: bold;
                margin-right: 0.8em;
            }
            }
        }
    }
    div.btn--tray {
        button {
            .icon {
                font-size: 1.3em;
            }
            &:not(:last-child) {
            margin-right: 2em
        }
    }
`
