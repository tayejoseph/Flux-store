import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    height: 27.5rem;
    div.content--container{
        flex: 1;
       div.card--container {
           display: flex;
           padding-top: 2em;
           padding-bottom: 2em;
           flex-direction: column;
           align-items: center;
               div.card--item {
                border: 1px solid ${({ theme }) => theme.primary};
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: ${rem('313px')};
                height: ${rem('56px')};
                padding: 0px 1em;
                div:first-child {
                    flex: 0.2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                div:nth-child(2) {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    p {
                        padding: 0px;
                        margin: 0px;
                        color: black;
                        font-weight: bold;
                        opacity: 1;
                    }
                }
                div:last-child {
                    flex: 0.2;    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
                button.remove--btn {
                    color: #FF5E5E;
                    .icon {
                        font-size: 1.2rem;
                    }
                }
                &:not(:last-child) {
                    margin-bottom: 0.6em;
                }
            }
       }
       div.addCard--btn__container {
            display: flex;
            justify-content: center;
            align-items:center;
            button {
                align-self: center;
                .icon {
                    margin-right: 0.2em;
                    font-size: 1.3rem
                }
            }
    }
   div.transfer--container {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-top: 1.5em;
        align-items:center;
        div.accNo--container {
                width: ${rem('313px')};
                height: ${rem('143px')};
                border: 1px solid ${({ theme }) => theme.primary};
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1.5em 0px;
                justify-content: space-between;
                p {
                    margin: 0px;
                }
        }
    }
}
    footer {
        div.summary--container {
            display: flex;
            justify-content: space-between;
            padding: 0px 2em;
            padding-bottom: 0.5em;
        }
        div.btn--container {
            height: ${rem('81px')};
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 1px #00000029;
            border-radius: 0px 0px 10px 10px;
                    button {
                width: ${rem('316px')};
            }
        }
    }
   }
`
