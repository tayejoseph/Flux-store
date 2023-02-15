import Styled from "styled-components";
import { rem } from "polished";

export default Styled.div`    
    flex: 1;
    height: 100%;
    div.card_content {
        background: #fff;
        max-width: ${rem("562px")};
        border-radius: 10px;
        box-shadow: 0px 0px 3px #00000029;
        header {
            padding: 1.5em;
            padding-bottom: 1em;
        }
        div.table-container {        
            overflow: auto;
            div.flux-table_container {
                width: ${rem("562px")};
                thead {
                    border-radius: 0px;
                }
                th.action-cell, td.action-cell {
                    text-align: center;
                }
                tbody {
                    height: 40vh;
                }
                button.btn-edit {
                    margin: 0 1em;               
                }
            }
        }
    }
`;
