import Styled from 'styled-components'
import { rem, rgba } from 'polished'

export default Styled.div`
    flex: 1;
    height: 100%;
    div.dashboard--header {        
        height: ${rem('301px')};
        div.wallet--middle__content {
            display: flex;
            align-items: center;
        }
        div.wallet--action {
            button:not(:last-child) {
                margin-right: 1em;
            }
        }
    }

    div.transaction--container {
        max-width: ${rem('1002px')};
        flex: 1;
        header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding-right: 2em;
           button {
               background: #855AAF1A;
               color: #855AAF;
               border: none;
               font-weight: bold;
               font-size: 14px;
               padding: 0.5em 1.2em;
           }
        }
        thead, tr {
           padding-left: 0.5em;
        }
        tbody {
            height: 45vh;
        }

        footer.flux--table__footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            div.table--nav {
                display: flex;
                align-items: center;
                height: 26px;
                button {
                    background: #F9F6FB;
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    width: 27px;
                    align-items: center;
                    border-radius: 3px;
                }
            div.nav--text__container {
                color: #222222;
                width: 42px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #AEAEAE;
                border-radius: 3px;
                margin: 0 0.5em;
            }
            }
        }
    }

`
