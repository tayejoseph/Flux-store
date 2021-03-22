import styled from 'styled-components'
import { rem } from 'polished'

export default styled.div.attrs({
  className: 'input--group',
})`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
  input:not([type='checkbox']),
  select {
    height: ${rem('56px')};
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #aeaeae;
    border-radius: 4px;
    letter-spacing: 0.14px;
    padding: 0 1em;
    border-radius: 4px;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 200;
    &:active,
    &:focus {
      outline: none;
      border: 1.5px solid #855aaf;
    }
    &:invalid:not([value='']) {
      color: #222222;
      border: 1.5px solid #ff5e5e;
    }
  }

  input::placeholder {
    color: #aeaeae;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 200;
  }
  label {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: ${rem('14px')};
    line-height: ${rem('20px')};
    letter-spacing: 0px;
    color: #222222;
    opacity: 0.5;
    margin-bottom: 0.5em;
  }
  p.error-msg {
    text-align: left;
    margin: 0px;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }
`
