import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    padding: 10px 64px 0;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800} fixed;

    overflow-y: auto;

`;


export const Content = styled.div`

background: rgba(120, 120, 120, 0.5);
padding: 10px;
border-radius: 8px;

> #profile {

        height: fit-content;
        width: fit-content;

        border: none;
        border-radius: 50%;

        display: flex;
        margin: 40px auto 30px;

        position: relative;

> img {
        
        height: 150px;
        width: 150px;
        border-radius: 50%;
        filter: brightness(0.5);
        
    }

> p {

        color: #f8f8ff;
        position: absolute;

        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        align-items: center;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

}

}

> div:first-child {

        display: flex;
        justify-content: space-between;

        > a {

                color: ${({ theme }) => theme.COLORS.SALMON };

                text-decoration: none;

                &:hover{

                        text-decoration: underline;

                }
        }
        
    }
    
`;

export const Button = styled.button`

    width: fit-content;
    height: 15px;
    font-size: 30px;

    border: none;

    background: transparent;

`;

export const Info = styled.div`

display: flex;

justify-content: center;
align-items: center;
gap: 3px;

    > p {

        font-size: 80px;
        color: white;
        font-family: 'Courier New', Courier, monospace;

    }

    > div {

        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        > span {

            font-size: 25px;
            opacity: 0.8;

        }

        > p {

            font-size: 20px;

        }

    }



`; 