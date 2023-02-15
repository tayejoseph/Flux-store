import Styled from "styled-components";
import { rem } from "polished";

export default Styled.div`
    div.modal-container {
        width: ${rem("375px")};
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F9F9F9;
    }
    div.content-container {
        margin-top: 1.8em;
        section {
            background: #FFFFFF;
            box-shadow: 0px 0px 2px #00000029;
            border-radius: 5px;
            padding: 1em;
            padding-bottom: 4em;
            opacity: 1;
            margin-bottom: 8em;
        }
        footer {
            display: flex;
            justify-content: center;
            margin-bottom: 1.8em;
        }
    }
`;
