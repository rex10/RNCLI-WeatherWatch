type ColorType =
    | 'black'
    | 'white'
    | 'grey'
    | 'darkGrey'
    | 'lightGrey'
    | 'lightBlue'
    | 'skyBlue'
    | 'blue500'
export const Colors: Record<ColorType, string> = {
    black: '#1b1c1e',
    white: '#ffffff',
    grey: '#515254',
    darkGrey: '#20232b',
    lightGrey: '#92a0ac',
    lightBlue: '#71f3eb',
    skyBlue: '#5e8fb7',
    blue500: '#0b5970'
};
