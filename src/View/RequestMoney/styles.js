import Styled from "styled-components";
import { rem, rgba } from "polished";
import scrollBar from "../../base/scrollBar";

export default Styled.div`
    div.transaction-container {
        max-width: ${rem("625px")};
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 3px #00000029;
        header {
            padding-top: 1em;
            border-bottom: 1px solid ${rgba("#E1E1E1", 0.1)};
        }
        div.transaction-table_container {
            overflow: auto;
                  div.flux-table_container {
                width: ${rem("625px")};
            }
            tbody {
                height: 50vh;
                ${scrollBar}
            }
        }
    }

`;
