import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    height: 100vh;
    box-shadow: 0px 0px 5px #00000029;
    background-color: #FFFFFF;
    
    hr {
        margin: 0px;
        border: none;
        border-bottom: 1px solid #E1E1E1;
    }
    header {
        display: flex;
        padding: 1em 0.8em;
        align-items: center;
        div.img--container {            
            width: 32px;
            height: 32px;
            background: red;
            border: 50%;
            overflow: hidden;
        }
    }
    
    
    ol {
        padding: 0px;
        li {
            list-style: none;
            padding-left: 1em;
            a {
                display: block;
                display: flex;
                align-items: center;
                padding: 1em;
                font-weight: normal;
                color: #222222;
                text-decoration: none;
                transition: all 0.3s;
                font-size: ${rem('14px')};
                opacity: 0.5;
                .icon {
                    font-size: 1.2em;
                    margin-right: 1em;
                }
                &.active {
                    opacity: 1;
                    color: ${({ theme }) => theme.primary}; 
                    background: #F9F6FB;
                }
            }
        }
    }
`
