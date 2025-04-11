import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: .25rem solid var(--detail-color-dark);
    background-color: ${({theme}) => theme.mode === 'light' ? 'var(--primary-color)' : 'var(--primary-color-dark)'};
    padding: 1rem 3rem;
    transition: all 250ms ease-in-out;

    @media (max-width: 40rem) {
        flex-direction: column;
        padding: 1rem 1rem;
    }
`;

export const Register = styled.p`
    font-size: .65rem;
    text-align: center;

    @media (max-width: 40rem) {
        margin-top: 1rem;
    }
`;

export const TrademarkRegister = styled.span`
    font-family: sans-serif;
    margin-right: .2rem;
`;

export const Author = styled.p`
    font-size: .75rem;
    text-align: center;
    margin-top: .5rem;
`;

export const PerfilLink = styled.a`
    display: inline;
    color: var(--secondary-color);
    transition: 250ms ease-in;

    &:hover {
        color: var(--text-color);
    }
`;

export const ImgHeart = styled.img`
    width: 1rem;
`;