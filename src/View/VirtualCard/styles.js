import Styled from "styled-components";
import { rem } from "polished";
import { maxQuery } from "../../helpers";

export default Styled.div`    
    flex: 1;
    height: 100%;
    div.card {
        ${maxQuery("415px")} {
        margin-top: 1.5em;
        }
        width: ${rem("343px")};
        height: ${rem("197px")};
        position: relative;
        * {
            z-index: 2;
            position: relative;
            color: #fff;
        }
        div.card-content {
            width: ${rem("343px")};
            height: ${rem("197px")};
            display: flex;
            padding: 1.5em;
            padding-top: 2em;
            flex-direction: column;
            justify-content: space-between;
            h2.title {                
                letter-spacing: -1.51px;
                font-style: italic;
                span {
                    color: #FC6190;
                }
            }
            p {
                font-style: italic;
                font-weight: 100;
                letter-spacing: -0.83px;
            }
            button {
                display: flex;
                align-items: center;
                background: #604091;
                border-radius: 10px;
                opacity: 1;
                padding: 0.5em 1em;
                backdrop-filter: blur(2px);
                -webkit-backdrop-filter: blur(2px);
                span {
                    padding: 0.2em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    margin-right: 0.5em;
                    background-color: #7F66A7;
                }
            }
        }
    }
    img.cardImg {
        position: absolute;
        z-index: 1;
    }
    img.illustration {
        position: absolute;
        top: -0.5em;
        right: 0.5em;
        width: ${rem("97px")};
        height: ${rem("96px")};
    }
`;
