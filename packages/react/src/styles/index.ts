import {
  colors,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  space,
  fontWeights,
} from '@my-g-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  theme,
  createTheme,
  config,
  globalCss,
  keyframes,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
