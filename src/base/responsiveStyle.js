import { createGlobalStyle } from 'styled-components'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    div.app--container {
        section {
        	div.rayi--row {
                display: flex;
                width: 100%;
                justify-content: space-between;
                ${maxQuery('md')} {
                    flex-direction: column;
                }
                div.rayi--col {
                    width: 45%;
                    ${maxQuery('md')} {
                        width: 100%;
                    }
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
`
