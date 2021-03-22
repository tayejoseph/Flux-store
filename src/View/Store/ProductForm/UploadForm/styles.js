import Styled from 'styled-components'
import { maxQuery } from '../../../../helpers'

export default Styled.div`
    padding: 0 1em;
    ${maxQuery('md')} {
        height: 60vh;
    }
    p {
        font-weight: normal; 
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0px;
        color: #222222;
        opacity: 0.7;
    }
    label.upload-container {
        height: 161px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: 2px dashed ${({ theme }) => theme.primary};
        border-radius: 10px;
        ${maxQuery('md')} {
            margin: 4em 0px;
        }
         input {
            visibility: hidden;
        }
        .icon {
            color: ${({ theme }) => theme.primary};
            font-size: 1.5em;
        }
        p {
            font-size: 12px;
        }
    }
    div.smImg--row {
        display: flex;
        margin: 1.5em 0px;
        margin-bottom: 2em;
        div.smImg--container {            
            width: 48px;
            height: 48px;
            border-radius: 10px;
            opacity: 1;
            position: relative;
            border: 1px solid #E1E1E1;
            span {
                overflow: hidden;
                width: 48px;
                height: 48px;
                border-radius: 10px;
                box-shadow: 0px 0px 2px #00000029;
                border: 1px solid #E1E1E1;
                img {
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                margin: 0 1em;
            }
            button {
                background: ${({ theme }) => theme.primary};
                color: #fff;
                position: absolute;
                right: -10px;
                top: -10px;
                border-radius: 50%;
                display: flex;
                font-size: 1em;
                align-items: center;
                justify-content: center;
                border: 4px solid #fff;
            }
        }
    }
    p.upload--instruction {
       margin: 0px; 
        opacity: 0.5;
        text-align: center;

    }

`
