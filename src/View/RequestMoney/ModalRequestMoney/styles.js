import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    div.modal--container {
        p {
            font-size: ${rem('14px')};
            letter-spacing: 0px;
            color: #222222;
            opacity: 0.7;
        }
        form {
            div.form--inputs {
                padding: 1em 1.5em;  
                padding-top: 2em;          
            }
            p.instruction--txt {
                margin: 0px;
                margin-bottom: 1em;
            }
            div.recipiantName--container {                                
                width: ${rem('221px')};
                height: ${rem('40px')};           
                border: 1px solid #AEAEAE;
                border-radius: 4px;
                margin-bottom: 1.5em;
                align-self: center;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                    margin: 0px;
                    letter-spacing: 0.14px;
                    color: #AEAEAE;
                }
            }
            footer {
                padding: 0px;
                padding: 1.5em;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 1px #00000029;
                border-radius: 0px 0px 10px 10px;
            }
        }
    }
`
