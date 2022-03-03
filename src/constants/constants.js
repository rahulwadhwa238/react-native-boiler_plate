//USAGE:     import { Colors, Icons, hp, wp, nf, Fonts } from '../../constants/constants'

import { Dimensions, PixelRatio, Platform } from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/



//FONT SCALING
//Usage: nf(16)
const scale = SCREEN_WIDTH / 375;
const normalizeFont = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

//DYNAMIC DIMENSION CONSTANTS   
//Usage: wp(5), hp(20)
const widthPercentageToDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};

const widthFromPixel = (widthPx, w = 414) => {
    const scale = SCREEN_WIDTH / w;
    const newSize = widthPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};

const heightFromPixel = (heightPx, h = 736) => {
    const scale = SCREEN_HEIGHT / h;
    const newSize = heightPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};
export {
    normalizeFont as nf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthFromPixel as wpx,
    heightFromPixel as hpx,
};