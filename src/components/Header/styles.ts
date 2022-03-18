import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;

    background-color: var(--blue-light);

`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 90rem;
    width: 100%;

    padding: 2.25rem 11% 8.5rem;

    button {
        background-color: var(--blue);
        color: var(--shape);

        font-weight: 600;

        border: 0;
        border-radius: 0.3rem;

        padding: 0.75rem 2rem;

        transition: 0.4s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
        gap: 4rem;
    }
`;