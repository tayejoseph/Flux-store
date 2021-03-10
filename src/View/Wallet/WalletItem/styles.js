import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    width: ${rem('315px')};
    position: relative;
    display: flex;
    color: #fff;
    flex-direction: column;
    padding: 1.2em 1.6em;
    justify-content: space-between;
    background-image: url(${(props) => props.bgImg});
    background-position: center center;
    height: ${rem('140px')};
    box-shadow: 0px 5px 12px #00000029;
    border-radius: 5px;
    &:first-child {
        &:after {
            content: "";
            position: absolute;        
            width: 16px;
            height: 16px;
            border-radius: 50%;
            top: 1.2em;
            right: 1.6em;
            background: #ffff;
        }
    }
    &:not(:last-child) {
        margin-right: 2em;
    }
    h3.wallet--title {
        font-size: ${rem('14px')};
        margin-bottom: 0.5em;
        font-weight: normal;
    }
    h1.wallet--balance {
        font-size: ${rem('29px')};
        font-weight: normal;
    }
    h3.wallet--type {
        font-size: ${rem('12px')};
        align-self: flex-end;
        font-weight: normal;
    }

`
