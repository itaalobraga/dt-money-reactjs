import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { ModalContainer } from './components/ModalContainer';
import { useState } from 'react';
import { TransactionsContextProvider} from './TransactionsContext'

export function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleModalOpen() {
        setModalIsOpen(true);
    }

    function handleModalClose() {
        setModalIsOpen(false);
    }

    return (
        <TransactionsContextProvider>
            <Header handleModal={handleModalOpen} />
            <Dashboard />
            <ModalContainer
                isOpen={modalIsOpen}
                onRequestClose={handleModalClose}
            />
            <GlobalStyle />
        </TransactionsContextProvider>
    );
}
