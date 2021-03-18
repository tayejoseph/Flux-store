import styled, { css } from 'styled-components'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  outline: none;
  ${(props) => css`
    padding: 0.9em 1.8em;
    user-select: none;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    border-radius: ${props.rounded ? '100px' : '5px'};
    ${
      props.primary &&
      css`
        border: 2px solid ${props.theme.primary};
        background-color: ${({ theme }) => theme.primary};
        color: #fff;
        &:hover,
        &:focus {
          background: transparent;
          border-color: ${({ theme }) => theme.primary};
          color: ${({ theme }) => theme.primary};
          outline: none;
        }
        &:disabled {
          background: ${({ theme }) => theme.disabled}!important;
          border-color: ${({ theme }) => theme.disabled}!important;
          color: #fff !important;
        }
      `
    }
    ${
      props.secondary &&
      css`
        border: 2px solid !important;
        border-color: ${({ theme }) => theme.primary};
        background: transparent;
        color: ${props.theme.primary};
        &:hover,
        &:focus {
          background: ${({ theme }) => theme.primary};
          border-color: ${({ theme }) => theme.primary};
          color: white;
        }
        &:disabled {
          background: transparent !important;
          color: ${props.theme.disabled}!important;
          /* border-color: ${props.theme.disabled}!important; */
        }
      `
    }
    ${
      props.tertiary &&
      css`
        background-color: transparent;
        border-color: transparent;
        color: ${({ theme }) => theme.primary};
        &:hover,
        &:focus {
          border-color: transparent;
        }
      `
    }
    ${
      props.icon &&
      css`
        padding: 0px;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.primary};
        .icon {
          font-size: 1.2em;
        }
      `
    }

    /* iconRight */
    ${
      props.iconRight &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-right: 0.3em;
          font-size: 1.2em;
        }
      `
    }

  /* IconLeft */
    ${
      props.iconLeft &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-left: 0.3em;
          font-size: 1.2em;
        }
      `
    }

     &.btn--money {
        padding: 0.2em 0.3em;
        background: #E2FFEC;
        .icon {
            color: #47C479;
        }
    }
    &.btn--edit {
        padding: 0.2em 0.3em;
        background: #E2EDFF;
        border: 1px solid #E2EDFF;
        .icon {
            color: #4187FF;
        }
    }
    &.btn--delete {
        padding: 0.2em 0.3em;
        background: #FFE9E9;
        color: #FF5E5E;
        border: 1px solid #FFE9E9;
        .icon {
            color: #FF5E5E;
        }
    }
    &.btn--copy {
        padding: 0.2em 0.3em;
        background: #F9F6FB;
        color: #855AAF;
        border: 1px solid #F9F6FB;
        .icon {
            color: #855AAF;
        }
    }
  

    `}
`
