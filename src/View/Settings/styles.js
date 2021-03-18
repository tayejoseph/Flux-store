import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery } from '../../helpers'
import ScrollBar from '../../base/scrollBar'

export default Styled.div`
    div.modal--container {                
        width: ${rem('602px')};
        height: ${rem('485px')};
        ${maxQuery('md')} {
            width: 100vw;
            height: 100vh;
            border-radius: 0px;
        }
    }
    div.productForm--container {
        header {
            display: flex;
            align-items: center;
            padding: 0px 2em;
            height: ${rem('63px')};
            box-shadow: 0px 0px 3px #00000029;
            border-radius: 10px 10px 0px 0px;
            opacity: 1;
        }
        main { 
            display: flex;
            ${maxQuery('md')} {
                flex-direction: column;
            }
            aside {
                width: ${rem('198px')};                
                box-shadow: 1.5px 0px 2px -1px #00000029;
                 ${maxQuery('>md')} {
                    width: 100%;
                                box-shadow: 0px 0px 3px #00000029;

                }
            }
            form {                
                ${ScrollBar};
                height: ${rem('341px')};
                overflow-y: auto;
                width: calc(100% - ${rem('198px')});
                padding: 1.5em 2em;
                ${maxQuery('md')} {
                    width: 100%;
                    height: 75vh;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    div.input--group {
                        margin-bottom: 2.5em;
                    }
                }
                div.hide--section {
                    visibility: hidden;
                    pointer-events: none;
                    position: absolute;
                    top: 10000vh;
                }
           
            }
        }
        footer {
            height: ${rem('81px')};
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
