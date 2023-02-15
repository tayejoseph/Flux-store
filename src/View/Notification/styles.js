import Styled from "styled-components";
import { rem } from "polished";
import { maxQuery } from "../../helpers";
import scrollBar from "../../base/scrollBar";

export default Styled.div`
   header.transaction-header {      
        height: ${rem("100px")};
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 10px;
        padding: 1em 2em;
        display: flex;
        background: #fff;
        flex-direction: column;
        justify-content: space-between;
   }

   div.notification-container {
         margin-top: 1.2em;
         header {
            max-width: ${rem("581px")};
            height: ${rem("57px")};
            background: #FFFFFF;
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 10px 10px 0px 0px;
         }
         div.content-container {
            display: flex;
            aside {
               width: ${rem("182px")};
               height: ${rem("510px")};
               background: #FFFFFF;
               padding-left: 2em;
               padding-top: 0.5em;
               box-shadow: 0px 0px 2px #00000029;
               ${maxQuery("md")} {
                  height: 60vh;
               }
               a {
                  display: block;
                  text-decoration: none;
                  padding: 1em 0px;
                  padding-left: 1.5em;
                  font-size: ${rem("14px")};
                  color: #222222;
                  opacity: 0.5;
                  &:not(:first-child) {
                     margin-bottom: 0.5em;
                  }
                  &:hover {
                     color: ${({ theme }) => theme.primary}
                  }
                  &.active {
                     background: #F9F6FB;
                     border-radius: 3px 0px 0px 3px;
                     opacity: 1;
                     color: ${({ theme }) => theme.primary}
                  }
               }
            }
            main {
               background: #FFFFFF;
               height: ${rem("510px")};  
               ${maxQuery("md")} {
                  height: 60vh;
               }
               overflow: auto;
               ${scrollBar}
               width: ${rem("399px")};
               box-shadow: 0px 0px 2px #00000029;
               div.notification-item {
                  height: ${rem("103px")};                    
                  padding: 1.5em 2em;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                     p {
                        margin: 0px;
                     }
                  &:not(:last-child) {
                     border-bottom: 1px solid #eee;
                  }
                  div.top-item {
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                     p {
                        strong {
                           font-weight: 900;
                        }
                        &:first-child {
                           color: ${({ theme }) => theme.primary};
                        }
                        &:last-child {                           
                           color: #AEAEAE;
                        }
                     }
                  }
               }

            }
         }
         footer {
            background: #FFFFFF;
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 0px 0px 10px 10px;
            max-width: ${rem("581px")};
            height: ${rem("53px")};
         }
   }

`;
