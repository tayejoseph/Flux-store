import Styled from 'styled-components'
import scrollBar from '../../base/scrollBar'

export default Styled.div`
    div.modal--container {
        form {
            padding-top: 0.5em;      
            div.form--inputs {
                padding: 1.5em;
                max-height: 21.8rem;
                ${scrollBar};
                overflow-y: auto;
            }
            div.radio--btn__container {
                font-weight: bold;
            }
            footer {
                padding: 0px;
                padding: 1.5em;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 1px #00000029;
                border-radius: 0px 0px 10px 10px;
            }
        }
    }
`
