import Styled, { keyframes } from 'styled-components'
import { rgba, rem } from 'polished'
import { maxQuery } from '../../helpers'

const slideIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export default Styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    /* animation: ${slideIn} 0.2s ease-in-out; */
    top: 0px;
    left: 0px;
    z-index: 999;
    background: ${rgba('#707070', 0.5)};
    backdrop-filter: blur(0.7px);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(0.7px);

    div.modal--container {
        background: #FFFFFF;
        box-shadow: 0px 0px 30px #00000029;
        border-radius: 10px;
        width: 720px;
        position: relative;
        ${maxQuery('md')} {
            width: 100vw;
            height: 100vh;
            border-radius: 0px;
        }
        button.close-btn {
            position: absolute;
            top: 0.3em;
            right: 0.3em;
            z-index: 1000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.1em;
            font-size: 1em;
            background: ${({ theme }) => theme.primary};
            color: #fff;
            border: 6px solid #F9F6FB;
            ${maxQuery('md')} {
                position: fixed; 
            }
        }
        h2.modal--title {
            margin-top: 1.5em;
            padding: 0 1.5em;
        }
    }
    div.modal--close__relative button.close-btn {
            top: 1.2em;
            right: 1.2em;
    }
    div.modal--size__sm {        
        width: ${rem('373px')};
        /* height: ${rem('485px')}; */
    }

    div.modal--size__md {        
        width: ${rem('811px')};
        height: ${rem('485px')};
    }
`
