import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    cursor: pointer;
    padding-bottom: 1.5em;
    /* margin-bottom: 1em; */
    div.img--container {      
        height: ${rem('141px')}; 
        margin-bottom: 0.5em;
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 5px;
        opacity: 1;
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


`
