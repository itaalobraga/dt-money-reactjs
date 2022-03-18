import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';

export const ModalCss = createGlobalStyle`

    .Modal {
        position: relative;

        border-radius: 0.3rem;

        padding: 3rem 4rem;

        background-color: var(--background);
    }

    .Modal-Overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${transparentize(0.5, '#000000')};
    }

`;
