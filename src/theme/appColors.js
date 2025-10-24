import { Dimensions } from "react-native"

const width = Dimensions.get('window').width;

export const appColors = {

    primary: '#EAEFFE',
    secondary: '#9787F3',
    tertiary: '#2D274B',

    transparentBackground: '#00000080',

    light: '#ffffff',
    lighterBackground: '#F1F1F1',
    lightBackgroundColor: '#f5f5f5',
    CheckboxBorderColor: '#F9F9F9',
    lightGrey: '#D3D3D3',
    lighterGrey: '#DCDCDC',
    borderColor: '#dddddd',
    lightBorderColor: '#D1D0CE',
    stepperUnfinishedColor: '#aaaaaa',
    inputColor: '#999999',
    rightIconColor: '#8c8c8c',
    greyColor: '#808080',
    darkGreyColor: '#7c7c7c',
    lightFontColor: '#707070',
    iconColor: '#4b4a4a',
    lightDark: '#414141',
    dark: '#292929',

    lightRed: '#ffeaee',
    cherryRed: '#e75f61',
    darkRed: '#de3a3b',
    red: '#FF0000',
    error: '#E40808',

    lightGreen: '#dfedd4',
    mayGreen: '#459330',
    green: '#4bab4f',
    activeColor: '#02a302',
    success: '#03B029',

    warning: '#ffcc33',
    pendingColor: '#faad14',

    linkColor: '#3BB9FF',
    facebook: '#4267B2',

}

export const appFonts = {

    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',

    headerFontSize: width > 900 ? 22 : width > 600 ? 20 : 18, // pageheader

    largerFontSize: width > 900 ? 20 : width > 600 ? 18 : 16,

    mediumFontSize: width > 900 ? 19 : width > 600 ? 17 : 15, // button, normal text
    inputFontSize: width > 900 ? 19 : width > 600 ? 17 : 15, // input, form input placeholder

    smallerFontSize: width > 900 ? 18 : width > 600 ? 16 : 14, // label
    labelFontSize: width > 900 ? 18 : width > 600 ? 16 : 14, // label

    tinyFontSize: width > 900 ? 17 : width > 600 ? 15 : 13,

    smallHeaderFontSize: width > 900 ? 16 : width > 600 ? 14 : 12,
    errorFontSize: width > 900 ? 15 : width > 600 ? 13 : 12, // error, tooltip, search placeholder

    tarBarTextSize: width > 900 ? 14 : width > 600 ? 12 : 11,
    badgeFontSize: width > 900 ? 13 : width > 600 ? 11 : 10
}

export const AppColors = {
    appColors: appColors,
    appFonts: appFonts,
}
