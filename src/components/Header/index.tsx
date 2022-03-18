import { HeaderContainer, HeaderContent } from "./styles";

import Logo from '../../../assets/logo.svg'

type HeaderProps = {
    handleModal: () => void;
};

export function Header(props: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Logo" />
                <button type="button" onClick={props.handleModal}>
                    Nova transação
                </button>
            </HeaderContent>
        </HeaderContainer>
    );
}