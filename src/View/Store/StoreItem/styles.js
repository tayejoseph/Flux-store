import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    div.img--container {
        
    }
    div.text-content {
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
        p.status {
            font-size: ${rem('14px')},
            line-height: ${rem('16px')};letter-spacing: 0px;
            color: ${(props) => (props.published ? '#47C479' : '#FF5E5E')};
            background-color: ${(props) =>
              props.published ? '#E2FFEC' : '#FFE9E9'};
            opacity: 1;
            padding: 0.5em;
        }
    }


`
