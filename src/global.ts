import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #228A95;
        --color-blue2: #187680;
        --color-secondary: #EF9C4B;
        --color-orange2: #fd8030;
        --color-selection: #EFDF4B23;
        --color-font: #777777;
        --color-background: #F8F8F8;
        --color-white: #FFFFFF;
        --color-gray2: #E6E6E6;
        --color-gray3: #E5E5E5;
        --color-opacity: #00000029;
        --color-gray-dark: #707070;

        --font-family: 'Open Sans', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
    }

    body {
        background: var(--color-white);
    }
`;

export default GlobalStyle;