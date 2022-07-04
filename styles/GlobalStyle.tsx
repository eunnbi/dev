import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @media ${({ theme }) => theme.device.laptop}{
        main {
            margin-left: 0;
        }
    }
    @media ${({ theme }) => theme.device.tablet} {
        html {
            font-size: 15px;
        }
    }

    @media ${({ theme }) => theme.device.mobile}, (max-height: 600px) {
        html {
            font-size: 13px;
        }
    }

    @media ${({ theme }) => theme.device.smallMobile}, (max-height: 300px) {
        html {
            font-size: 11px;
        }
    }
`;
