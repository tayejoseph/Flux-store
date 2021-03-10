import styled, { css } from 'styled-components'
import { rem } from 'polished'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  ${(props) => css`
    padding: 0.9em 1.8em;
    user-select: none;
    font-weight: medium;
    font-size: ${rem('14px')};
    line-height: ${rem('16px')};
    transition: all 0.2s ease-in-out;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    border-radius: ${props.rounded ? '100px' : '5px'};
    outline: none;

    ${
      props.primary &&
      css`
        border: 2.2px solid ${props.theme.primary};
        background-color: ${({ theme }) => theme.primary};
        color: #fff;
        &:hover,
        &:focus {
          background: transparent;
          border-color: ${({ theme }) => theme.primary};
          color: ${({ theme }) => theme.primary};
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
        border: 1.5px solid !important;
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
          border-color: ${props.theme.disabled}!important;
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
        margin: 0 1em;
        .icon {
            color: #4187FF;
        }
    }
    &.btn--delete {
        padding: 0.2em 0.3em;
        background: #FFE9E9;
        .icon {
            color: #FF5E5E;
        }
    }
  

    `}
`
