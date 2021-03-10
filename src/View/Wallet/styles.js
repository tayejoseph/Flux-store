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
        header, footer {
            background: #fff;
        }
        header {
            padding: 1.5em;
            height: ${rem('93px')};
            box-shadow: 0px 0px 3px #00000029;
        
            border-radius: 10px 10px 0px 0px;
        }
        div.table--container {
            /* table {
                width: 100%;
                background: #fff;
                thead {
                   background: #FFFFFF 0% 0% no-repeat padding-box;
                    box-shadow: 0px 0px 3px #00000029;
                    border-radius: 10px 10px 0px 0px;
                    opacity: 1; 
                    th.caption {
                        padding-top: 1.5em;
                        font-weight: bold;
                        font-size: ${rem('16px')};
                    }
                    th:not(.caption) {                    
                        color: #222222;
                        opacity: 0.5;
                        font-weight: normal;
                    }
                }
                tbody {
                    overflow-y: auto;
                    box-shadow: 0px 0px 2px #00000029;
                    height: 10vh;
                    overflow: hidden;
                }
                th, td {
                    text-align: left;
                    color: #222222;
                    font-weight: 450;
                    font-size: ${rem('14px')};
                    padding: 0.8em 0px;
                }
                td {
                    border-bottom: 1px solid ${rgba('#E1E1E1', 0.5)};
                }
                th:first-child, td:first-child {
                    width: 25%;
                    padding-left: 1.5em;
                }
            } */
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
