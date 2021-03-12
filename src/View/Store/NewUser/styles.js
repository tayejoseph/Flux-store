import Styled from 'styled-components'

export default Styled.div`
    div.modal--container {  
        width: 373px;
        height: 485px;
    }
    div.newuser--container {
        height: 485px;
        display: flex;
        flex-direction: column;
        flex: 1;
        div.carousel {
            flex: 1;
            display: flex;
            flex-direction: column;
            div.carousel--item {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 2em;
                padding-top: 3em;
                .icon {
                    font-size: 1.8em;
                    color: ${({ theme }) => theme.primary};
                }
                div.notification--bell {
                    position: relative;
                    display: inline-block;
                    &:after {
                        position: absolute;
                        content: "";
                        display: block;
                        background: #FF5E5E;
                        border-radius: 50%;
                        border: 2px solid #fff;                        
                        width: 9px;
                        height: 9px;
                        top:0px;
                        right: 0px;
                    }
                }
                div.img--container {
                    height: 120px;
                    background: red;
                    width: 100%;
                }
                div {
                    text-align: center;
                    p {
                        margin: 0px;
                        margin-top: 0.5em;
                    }
                }
            }
            div.coursel--action {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1em;
                button {
                    font-size: 1.5em;
                    background: #F9F6FB;
                    border-radius: 3px;
                    &:disabled {
                        opacity: 0.7;
                    }
                }
                div.active--indicator {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 1.5em;
                    span {
                        width: 10px;   
                        border-radius: 50%;      
                        height: 10px;
                        display: block;
                        border: 1px solid ${({ theme }) => theme.primary};
                        border: 1px solid #855AAF;
                        opacity: 1;
                        &:nth-child(2) {
                            margin: 0px 0.5em;
                        }
                        &.active {
                            background: ${({ theme }) => theme.primary};
                        }
                    }
                }
            }
        }
        footer {        
            width: 373px;
            height: 81px;
            box-shadow: 0px 0px 1px #00000029;
            border-radius: 0px 0px 10px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`
