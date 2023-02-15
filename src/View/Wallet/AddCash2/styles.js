import Styled from "styled-components";
import { rem, rgba } from "polished";

export default Styled.div`
    background: #ffff;
    border-radius: 10px;
    box-shadow: 0px 0px 2px #00000029;
    height: 100%;
    div.modal-container {
        height: ${rem("485px")};
        width: ${rem("373px")};
    }
    
    header {
        display: flex;
        flex-direction: column;
        padding: 0px 2em;
        padding-top: 1em;
        div.cash-header_container {
            margin-top: 2em;
            p {
                padding: 0px;
                margin-top: 0.7em;
                margin-bottom: 0px;
            }
        }
    }
    p, label {
        color: #222222;
        font-size: ${rem("14px")};
        opacity: 0.5;
    }
    hr {
        border-top: none;
        border-bottom: 1px solid ${rgba("#E1E1E1", 0.5)};
        margin: 1.5em 0px;
    }

    form {
        padding: 2em;
        padding-top: 0px;
        max-width: ${rem("400px")};
        div.input-group {
            label {
                margin-bottom: 0.5em;
            }
        }
        div.account-summary, div.total-container {
            p {
                margin: 0px;
                &:nth-child(even) {
                    text-align: right;
                }
            }
            div.flux-row {
                display: flex;
                align-items: center;
                padding: 0px;
                margin: 0px;
                justify-content: space-between;
                &:not(:last-child) {
                    margin-bottom: 1em;
                }
            }
        }
        div.total-container {
            margin-bottom: 1.5em;
            p {
                font-weight: bold;
                color: #222222;
                opacity: 1;
            }
        }
    }
`;
