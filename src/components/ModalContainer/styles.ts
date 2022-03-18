import { Props } from 'react-modal';
import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    h1 {
        margin-bottom: 1rem;

        color: var(--text-title);

        font-size: 1.5rem;
    }

    input {
        background: #e7e9ee;

        border: 1px solid #d7d7d7;
        border-radius: 0.3rem;

        padding: 1.25rem 1.5rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    > button {
        background-color: var(--green);
        color: var(--shape);

        border: 0;
        border-radius: 0.3rem;

        padding: 1.25rem 12.3rem;

        font-weight: 600;
    }
`;

export const FormBtnArea = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
`;

type FormBtnProps = {
    isActive: boolean;
    colorActive: 'green' | 'red'
};

const colors = {
    green: '#12A454',
    red: '#E62E4D',
};

export const FormBtn = styled.button<FormBtnProps>`
    display: flex;
    align-items: center;
    gap: 1.12rem;

    width: 100%;

    border: 0.094rem solid #969cb3;
    border-radius: 5px;

    background-color: ${(props) =>
        props.isActive ? transparentize(.9, colors[props.colorActive]) : 'var(--background)'};
    color: var(--text-title);

    padding: 1.3rem 4.3rem;

    transition: .4s;

    img {
        max-width: 1.25rem;
    }
`;

export const ModalBtn = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    background-image: url('../../../assets/close.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;

    width: 1.25rem;
    height: 1.25rem;

    border: 0;

    transition: 0.4s;

    &:hover {
        filter: brightness(0.5);
    }
`;
