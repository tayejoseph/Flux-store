import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    cursor: pointer;
    padding-bottom: 1.5em;
    position: relative;
    /* margin-bottom: 1em; */
    button.shop--item__btn {
        position: absolute;
        right: 1em;
        top: 1em;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        /* background: blue; */
        justify-content: center;
        backdrop-filter: blur(7px);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        .icon {
            color: #fff;
            font-size: 1.5em;
        }
    }
    div.img--container {      
        height: ${rem('141px')}; 
        margin-bottom: 0.5em;
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 5px;
        opacity: 1;
        /* background: blue; */
    }
    div.text--content {
        p {
            margin: 0px;
            &:not(:last-child) {
                margin-bottom: 0.3em;
            }
        }
        p.productName {
            font-weight: normal; 
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #222222;
            opacity: 0.7;
        }
        p.price {
            font-weight: bold; 
            font-size: ${rem('14px')},
            line-height: ${rem('16px')};
            letter-spacing: 0px;
            color: #222222;
            opacity: 1;
        }
        p.publish--status {
            display: inline-block;
            border-radius: 5px;
            margin-top: 0.2em;
            color: ${(props) => (props.published ? '#47C479' : '#FF5E5E')};
            background-color: ${(props) =>
              props.published ? '#E2FFEC' : '#FFE9E9'};
            padding: 0.5em;
        }
    }

    div.storeItem--action__container {
        position: absolute;
        z-index: 1;
        top: 2.5em;
        right: 0px;
        ol {
            padding: 0px;
            background: #fff;
            font-weight: 180;
            list-style: none;   
            box-shadow: 0px 1px 6px #00000029;
            border-radius: 10px;         
            width: ${rem('186px')};
            /* height: ${rem('161px')}; */
            li {
                padding: 0.8em 0px;
                padding-left: 1em;
                &:not(:last-child) {
                    border-bottom: 1px solid #E1E1E1;
                }
            }
        }
    }


`
