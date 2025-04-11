import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    min-height: 10rem;
    padding: 0 3rem;
    background-color: ${({theme}) => theme.mode === 'light' ? 'var(--primary-color)' : 'var(--primary-color-dark)'};
    border-bottom: .8rem solid var(--detail-color-dark);
    transition: all 250ms ease-in-out;

    @media (max-width: 30rem) {
        padding: 0 1.75rem;
    }
`;

export const LogoLink = styled(Link)`
    display: inline;
    width: fit-content;
`;

export const ImageLogo = styled.img`
    max-width: 15rem;

    @media (max-width: 30rem) {
        max-width: 12rem;
    }

    @media (max-width: 25rem) {
        max-width: 10rem;
    }
`;

export const CirclePokeball = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: var(--detail-color-light);
    border: .8rem solid var(--detail-color-dark);
    border-radius: 50%;
    position: absolute;
    top: calc(10rem - 2rem);
    right: calc(50% - 2.5rem);
`;