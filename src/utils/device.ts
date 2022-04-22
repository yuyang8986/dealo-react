const size = {
    mobile: '375px',
    mobilelarge: '415px',
    tablet: '768px',
    laptop:'1024px',
    desktop:'1440px'
}

const device = {
    mobileSMax: `(max-width: ${size.mobile})`,
    mobileLMax: `(max-width: ${size.mobilelarge})`,
    tabletMax: `(max-width: ${size.tablet})`,
    laptopMax: `(max-width: ${size.laptop})`,
    desktopMax: `(max-width: ${size.desktop})`,
    desktopLargeMin: `(min-width: ${size.desktop})`
};

export default device;