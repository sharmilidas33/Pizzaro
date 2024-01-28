import { Dimensions } from "react-native";
const {height, width } = Dimensions.get('window');

const COLORS = {
    primary : '#ff884a',
    secondary: '#ffb400',
    tertiary :'#f0d437',

    gray: '#83829A',
    gray2: '#C1C0C8',

    black: '#1E1E1E', 
    white: '#FFFFFF',
    lightwhite: '#FEFEFE', 
    offwhite: '#F5F5F5', 
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 44,
    height,
    width
};

const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.04,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 5.04,
        elevation: 5,
    }
}

  const FONTFAMILY = {
    courgette_regular: 'Courgette-Regular',
  
    poppins_black: 'Poppins-Black',
    poppins_blackitalic: 'Poppins-BlackItalic',
  
    poppins_bold: 'Poppins-Bold',
    poppins_bolditalic: 'Poppins-BoldItalic',
  
    poppins_extrabold: 'Poppins-ExtraBold',
    poppins_extrabolditalic: 'Poppins-ExtraBoldItalic',
  
    poppins_extralight: 'Poppins-ExtraLight',
    poppins_extralightitalic: 'Poppins-ExtraLightItalic',
  
    poppins_italic: 'Poppins-Italic',
    poppins_light: 'Poppins-Light',
    poppins_lightitalic: 'Poppins-LightItalic',
  
    poppins_medium: 'Poppins-Medium',
    poppins_mediumitalic: 'Poppins-MediumItalic',
  
    poppins_regular: 'Poppins-Regular',
  
    poppins_semibold: 'Poppins-SemiBold',
    poppins_semibolditalic: 'Poppins-SemiBoldItalic',
  
    poppins_thin: 'Poppins-Thin',
    poppins_thinitalic: 'Poppins-ThinItalic',
  };

export{ COLORS, SIZES, SHADOWS, FONTFAMILY };