import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 2rem;

    width: 100%;

    padding: 0 11%;

    @media (max-width: 1008px) {
        gap: 4rem;
        flex-wrap: wrap;
    }
`;

export const SummaryCard = styled.div`
    padding: 1.6rem 1.25rem;
    margin-top: -3rem;

    width: 100%;
    height: 8.5rem;

    border-radius: 0.3rem;

    background-color: var(--shape);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 0.8rem;

        span {
            color: var(--text-title);
        }
    }

    > span {
        font-size: 2.1rem;
        font-weight: 500;

        color: var(--text-title);
    }

    &:last-child {
        background-color: var(--green);

        div {
            span {
                color: var(--shape);
            }
        }

        span {
            color: var(--shape);
        }
    }
`;