import { rem } from 'polished'
export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const DIMENSIONS = {
  dashboardSideWidth: rem('245px'),
  mobileTopNavHeight: '56px',
}

const theme = {
  primary: '#855AAF',
  secondary: '#7B0073',
  bgColor: '#FCFCFC',
  disabled: '#B2B2B2',
  maxWidth: '1200px',
  mNavHeight: rem('94px'),
  smNavHeight: rem('76px'),
  fontFamily: `
  'Caros Text',-apple-system,BlinkMacSystemFont,"Helvetica Neue",
  "Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif
  `,
}

export default () => theme
