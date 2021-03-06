// Can create multiple data sets here!

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    // lightTextDesc: true,
    topLine: 'About Us',
    headline: 'The Family Behind Jack Mobile Home Park',
    description: 'Being in the mobile home business for over 20 years, we strive to provide affordable housing and a friendly relationship between us and our tennants. Scroll down to view our listings or create an account here.',
    buttonLabel: 'Create Account',
    // true: image will be on the left and text will be on the right
    // false: image will be on the right and the text will be on the left
    imgStart: false,
    img: require('../../images/Parents.jpg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    page: '/signin',
    // topLight: true
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    // darkText: true,
    topLine: 'Listings',
    headline: 'Browse Our Beautiful And Affordable Mobile Homes',
    description: 'Click the button below to view all of our available listings.',
    buttonLabel: 'See Listings',
    // true: image will be on the left and text will be on the right
    // false: image will be on the right and the text will be on the left
    imgStart: false,
    img: require('../../images/svg-2.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true,
    page: '/listings',
    // topLineColor: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    // lightTextDesc: true,
    topLine: 'Contact Us',
    headline: 'Get Started By Creating An Account Or Contacting Us',
    description: 'Phone Number: (352)-390-7495',
    buttonLabel: 'Create Account',
    // true: image will be on the left and text will be on the right
    // false: image will be on the right and the text will be on the left
    imgStart: false,
    img: require('../../images/svg-7.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true,
    page: '/signin'
};