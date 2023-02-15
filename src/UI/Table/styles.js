import Styled from "styled-components";
import { rem, rgba } from "polished";

export default Styled.div`
    table.flux-table {
        width: 100%;
        background: #fff;
        div.spinner-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        thead {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 2px #00000029;
            border-radius: 10px 10px 0px 0px;
            opacity: 1; 
            th.caption {
                padding-top: 1.5em;
            }
            th:not(.caption) {                    
                color: #222222;
                opacity: 0.5;
            }
        }
        tbody {
            /* box-shadow: 0px 0px 2px #00000029; */
            display: block;
            overflow: auto;
        }
        p.error-msg {
            margin-top: 3em;
            text-align: center;
        }
        thead tr, tbody tr {
            display: table;
            width: 100%;
            table-layout: fixed; //even columns width , fix width of table too
        }
        th, td {
            text-align: left;
            color: #222222;
            font-weight: normal;
            font-size: ${rem("14px")};
            line-height: ${rem("20px")};
            padding: 0.8em 0px;
            vertical-align: center;
        }
        tbody tr {
            border-bottom: 1px solid ${rgba("#E1E1E1", 0.5)};
        }

        th:first-child:not(.table-tab_container), td:first-child {
            padding-left: 1.5em;
        }
    }
  footer.flux-table_footer {
        width: 100%;
        background: #ffff;
        height: ${rem("53px")};
        padding: 1em 1.5em;
        box-shadow: 0px 0px 3px #00000029;
        border-radius: 0px 0px 10px 10px;
    }
`;
