import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    div.modal--container {
        width: ${rem('375px')};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div.content--container {
        width: ${rem('345px')};
        margin-bottom: 1em;
        background: #FFFFFF;
        border: 1px solid #22222233;
        border-radius: 5px;
        opacity: 1;
        margin-top: 1em;
        div.card--type__container {
            padding: 0px 1em;
            label.card--option__item {
                display: flex;
                flex: 1;
                &:not(:last-child) {
                    margin-bottom: 0.6em;
                }
                div.col--1 span {
                    background: #EEEAF5;
                    width: 1.2em;
                    height: 1.3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: "#7B5CAD";
                    /* padding: 0.1em 0.3em; */
                    border-radius: 4px;
                }
                
                div.col--1, div.col--3 {
                    flex: 0.1;
                    display: flex;
                    
                    align-items: flex-start;

                }
                div.col--3  {
                    div {
                        margin: 0px;
                    }
                    justify-content: flex-end;
                }
                div.col--2 {
                    flex: 0.8;
                    
                }
            }
        }
        hr {
            background-color: #22222233;
        }
        footer {
            padding: 0px 1em;
            div.imgs--container {
                display: flex;
                padding-bottom: 1em;
                justify-content: space-between;
                div.card--container {
                    position: relative;
                    img {                    
                        width: ${rem('83px')};
                        height: ${rem('56px')};
                    }
                    &.active {
                        .icon {
                            display: block;
                        }
                    }
                    .icon {
                        display: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        border-radius: 50%;
                        font-size: 1.2rem;
                        background: #fff;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }
    div.btn--container {
        padding: 0px 1em;
        padding-bottom: 1em;
    }
`
