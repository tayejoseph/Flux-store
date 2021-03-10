import Styled from 'styled-components'
import { rem } from 'polished'
export default Styled.nav`

ol {
    margin: 0px;
    padding: 0px;
    list-style: none;box-shadow: 0 2.5px 2px -2px #00000029;
    padding: 0.6em 0px; 
    display: flex;
    justify-content: space-evenly;
    li {
        a {
            display: block;
            font-size: ${rem('16px')};
            color: #222222;
            text-decoration: none;
            font-weight: 630;
            opacity: 0.5;
            text-transform: capitalize;
        }
        a.active {
                opacity: 1;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    width: 70%;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 3px;
                    border-radius: 2px;
                    
                    background: ${({ theme }) => theme.primary};
                }
            }
    }
}

`
