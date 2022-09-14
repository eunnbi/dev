import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    main {
        background-color: ${({ theme }) => theme.color.bgColor};
        color: ${({ theme }) => theme.color.textColor};
        transition: all 0.3s ease-in-out;
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
