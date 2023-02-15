import styled from "styled-components";
import { rem } from "polished";

export default styled.div`
  width: ${rem("313px")};
  height: ${rem("180px")};
  box-shadow: 0px 5px 12px #00000029;
  border-radius: 10px;
  opacity: 1;
  color: #ffffff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em 1.5em;
  p {  
    padding: 0px;
    margin: 0px;
  }
  div.walletImg-container {
      display: flex;
    img.flux-logo {
        width: ${rem("22px")};
        height: ${rem("22px")};
        margin-right: 1em;
    }
    img.masterCard-logo {

        width: ${rem("35px")};
        height: ${rem("22px")};
    }
  }
  p.amount {
    font-size: ${rem("28px")};
    letter-spacing: 0px;
    span {
        font-size: ${rem("18px")};
    }
  }
  div.wallet-content {
        p.card-no {
            font-size: ${rem("12px")};
            letter-spacing: ${rem("0.9px")};
            text-shadow: 0px 3px 6px #00000029;
            margin-bottom: 1em;
        }
      div.wallet-last-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
            p.card-name {
                font-weight: medium 
                font-size: ${rem("11px")};
                letter-spacing: 1.1px;
                color: #ffffff;
                text-shadow: 0px 3px 6px #00000029;
            }
            p.card-date {    
                font-size: ${rem("10px")};
                letter-spacing: ${rem("1px")};
                color: #FFFFFF;
                text-shadow: 0px 3px 6px #00000029;
                opacity: 1;   
            }
      }
  }
  
`;
