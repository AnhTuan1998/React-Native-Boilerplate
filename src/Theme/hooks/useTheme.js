import Fonts from '@/Theme/Fonts'
import Gutters from '@/Theme/Gutters'
import Images from '@/Theme/Images'
import Layout from '@/Theme/Layout'
import * as DefaultVariables from '@/Theme/Variables'

export default function () {
  // Build the default theme
  const baseTheme = {
    Fonts: Fonts(DefaultVariables),
    Gutters: Gutters(DefaultVariables),
    Images: Images(DefaultVariables),
    Layout: Layout(DefaultVariables),
    ...DefaultVariables,
  }
  return baseTheme
}
