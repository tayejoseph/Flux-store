import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery } from '../../helpers'
import scrollBar from '../../base/scrollBar'

export default Styled.div`
   header {       
        min-height: ${rem('118px')};
        box-shadow: 0px 0px 2px #00000029;
        border-radius: 10px;
        padding: 1.2em 2em;
        display: flex;
        background: #fff;
        flex-direction: column;
        justify-content: space-between;
   }


`
