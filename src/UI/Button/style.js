import styled, { css } from "styled-components";

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  outline: none;
  ${(props) => css`
    padding: 0.9em 1.8em;
    user-select: none;
    width: ${props.full ? "100%" : "fit-content"};
    display: ${props.full ? "block" : "inline-block"};
    border-radius: ${props.rounded ? "100px" : "5px"};
    ${props.primary &&
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
    `}
    ${props.secondary &&
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
    `}
    ${props.tertiary &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${({ theme }) => theme.primary};
      &:hover,
      &:focus {
        border-color: transparent;
      }
    `}
    ${props.icon &&
    css`
      padding: 0px;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.primary};
      .icon {
        font-size: 1.2em;
      }
    `}

    /* iconRight */
    ${props.iconRight &&
    css`
      display: flex;
      align-items: center;
      .icon {
        margin-right: 0.3em;
        font-size: 1.2em;
      }
    `}

  /* IconLeft */
    ${props.iconLeft &&
    css`
      display: flex;
      align-items: center;
      .icon {
        margin-left: 0.3em;
        font-size: 1.2em;
      }
    `}

     &.btn-money {
      padding: 0.2em 0.3em;
      background: #e2ffec;
      .icon {
        color: #47c479;
      }
    }
    &.btn-edit {
      padding: 0.2em 0.3em;
      background: #e2edff;
      border: 1px solid #e2edff;
      .icon {
        color: #4187ff;
      }
    }
    &.btn-delete {
      padding: 0.2em 0.3em;
      background: #ffe9e9;
      color: #ff5e5e;
      border: 1px solid #ffe9e9;
      .icon {
        color: #ff5e5e;
      }
    }
    &.btn-copy {
      padding: 0.2em 0.3em;
      background: #f9f6fb;
      color: #855aaf;
      border: 1px solid #f9f6fb;
      .icon {
        color: #855aaf;
      }
    }
    /* notification */
    &.notification-badge {
      position: relative;
      &:after {
        content: "";
        top: -2px;
        right: 0%;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ff5e5e;
        border: 1.6px solid #fff;
      }
    }
  `}
`;
