import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, main {
        background-color: ${({ theme }) => theme.color.bgColor};
        color: ${({ theme }) => theme.color.textColor};
    }
    ::-webkit-scrollbar {
        width: 5px; /* 세로축 스크롤바 길이 */
        height: 5px; /* 가로축 스크롤바 길이 */
    }
    ::-webkit-scrollbar-track-piece {
        background-color: ${({ theme }) => theme.color.bgColor};
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: lightgray;
    }
    @media ${({ theme }) => theme.device.tablet} {
        html {
            font-size: 15px;
        }
    }

    @media ${({ theme }) => theme.device.mobile}{
        html {
            font-size: 13px;
        }
    }

    @media ${({ theme }) => theme.device.smallMobile} {
        html {
            font-size: 11px;
        }
    }
`;
