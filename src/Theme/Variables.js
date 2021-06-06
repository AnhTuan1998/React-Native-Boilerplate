/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  mainColor: '#2C3382',
  subMainColor: '#345472',
  colorGradient: ['#2C3382', '#7682FD'],
  mainTextColor: '#fff',
  subTextColor: '#666666',
  primaryColor: '#00A0E3',
  primaryColorFade: 'rgba(0, 160, 227, 0.8)',
  primaryColorFade2: 'rgba(0, 160, 227, 0.4)',
  mask: 'rgba(0, 160, 227, 0.5)',
  secondaryColor: '#06512D',
  underlayColor: 'rgba(49, 125, 235, 1)',
  textColor: '#363C4D',
  textColorArticle: '#0099FF',
  tabBackgroundColor: '#363C4D',
  backgroundColor: '#EBEBF3',
  likedColor: '#F2547D',
  pinkColor: '#F2547D',
  cupColor: '#FEC107',
  divider: 'rgba(0,0,0,0.05)',
  borderStyle: 'solid',
  borderWidth: 1,
  lightBackground: '#fff',
  inactiveColor: '#8293A9',
  smallSizeText: 12,
  defaultPadding: 16,
  defaultMargin: 16,
  defaultRadius: 4,
  radius: 2,
  shadow: {
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  leftIcon: 'arrow-left',
  lightOverlay: 'rgba(255, 255, 224, 0.8)',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}
