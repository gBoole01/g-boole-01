import { createTheme } from '@nextui-org/react'

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$blue400',
      primaryLightContrast: '$blue600',
      primary: '$blue700',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$blue500',
      code: '$blue700',
      codeLight: '#d3d3d3',
    },
    space: {},
    fonts: {},
  },
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$blue400',
      primaryLightContrast: '$blue600',
      primary: '$blue700',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$blue500',
      code: '$blue700',
      codeLight: '#d3d3d3',
    },
    space: {},
    fonts: {},
  },
})
