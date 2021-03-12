import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    div.modal--container {                
        width: 602px;
        height: 485px;
    }
    div.productForm--container {
        header {
            display: flex;
            align-items: center;
            padding: 0px 2em;
            height: 63px;
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 10px 10px 0px 0px;
            opacity: 1;
        }
        main { 
            display: flex;
            aside {
                width: 198px;                
                box-shadow: 1.5px 0px 2px -1px #00000029;
            }
            form {
                height: 341px;
                overflow-y: auto;
                width: calc(100% - 198px);
                padding: 1.5em 2em;
                div.hide--section {
                    visibility: hidden;
                    pointer-events: none;
                    position: absolute;
                    top: 10000vh;
                }
           
            }
        }
        footer {
            height: 81px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 1.5em;
            box-shadow: 0px 0px 2px #00000029;
            border-radius: 0px 0px 10px 10px;
            div {
                &.next--container {
                    display: flex;
                    width: 100%;
                    justify-content: flex-end;
                }
                button:last-child {
                    margin-left: 1em;
                }
            }
        }
    }

`
