import styled from "styled-components";

export const TableContainer = styled.div`
    padding: 0 10rem;
    margin: 4rem 2rem 0;

    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    table {
        border-spacing: 0 0.5rem;

        width: 100%;

        th {
            color: var(--text-body);

            font-weight: 600;

            padding: 1rem 2rem;

            text-align: center;
        }

        td {
            text-align: center;

            padding: 1rem 2rem;

            background-color: var(--shape);

            color: var(--text-body);

            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--red);
            }
        }
    }
`;