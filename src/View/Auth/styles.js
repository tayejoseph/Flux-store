import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.primary};
    form {    
        position: relative;
        width: ${rem('394px')};
        box-shadow: 0px 0px 42px #00000029;
        background: #fff;
        text-align: center;
        padding: 2.5em;
        padding-bottom: 2em;
        padding-top: 3.5em;
        border-radius: 10px;
        header {
            div.img--container {   
                position: absolute;
                top: -25px;   
                background: #fff;
                border-radius: 50%;
                left: 50%;
                padding: 0.8em;
                transform: translateX(-50%);  
                img {        
                    width: ${rem('58px')};
                    height: ${rem('58px')};
                }
            }
            p {
                color: #646464;
                margin: 0px;
                margin-top: 0.4em;
            }
            hr {
                width: 20%;
                position: relative;
                left: 50%;
                margin: 0px;
                margin-top: 0.8em;
                margin-bottom: 1em;
                transform: translateX(-50%);
            }
        }
        div.input--group {
            margin-bottom: 1.2em;
        }
        label {
            font-size: ${rem('14px')};
            color: #222222;
            opacity: 1;
        }
        label.showPassword--container {
            display: flex;
            align-items: center;
            div.flux--radion__btn {
                margin-right: 0.8em;
            }
        } 
        button.aut--btn {
            margin-top: 2em;
        }
        button.forgotPassword--btn {
            margin-top: 1em;
        }
    }
    form + p {
        text-align: center;
        color:#fff;
        a {
            color: #fff;
            margin-left: 0.3em;
        }
    }

`
