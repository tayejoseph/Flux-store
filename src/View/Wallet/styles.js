import Styled from "styled-components";
import { rem } from "polished";
import { maxQuery } from "../../helpers";
import scrollBar from "../../base/scrollBar";

export default Styled.div`
    flex: 1;
    height: 100%;
    div.dashboard-header {        
        height: ${rem("301px")};
        div.wallet-middle_content {
            display: flex;
            align-items: center;
            max-width: 100vw;
            overflow-x: auto;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        div.wallet-action {
            button:not(:last-child) {
                margin-right: 1em;
            }
        }
    }

    div.transaction-container {
        max-width: ${rem("1002px")};
        background: #fff;
        flex: 1;
        border-radius: 10px;
        box-shadow: 0px 0px 3px #00000029;
        header.transaction-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 1.5em 2em;
           padding-bottom: 0.2em;
           button {
               background: #855AAF1A;
               color: #855AAF;
               border: none;
               font-weight: bold;
               font-size: 14px;
               padding: 0.5em 1.2em;
               ${maxQuery("sm")} {
                   display: none;
               }
           }
        }
        thead {
            border-radius: 0px;
        }
        thead, tr {
           padding-left: 0.5em;
        }
        div.table-container {
            overflow: auto;
            div.flux-table_container {
                width: ${rem("1002px")};
            }
        }
        tbody {
            height: 45vh;
            ${scrollBar}
            ${maxQuery("md")} {
                height: 34vh;
            }
            td.transaction-type {
                text-transform: capitalize;
            }
            span[class^="status-container"] {
                border-radius: 5px;
                padding: 0.4em 0.5em;
                font-weight: 100;
                display: inline-block;
                width: ${rem("76px")};           
            }
        }

        footer.flux-table_footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            div.table-nav {
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
            div.nav-text_container {
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

`;
