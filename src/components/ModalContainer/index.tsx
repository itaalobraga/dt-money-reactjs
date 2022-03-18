import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';

import { ModalCss } from '../../styles/modalStyle';
import Entry from '../../../assets/income.svg';
import Out from '../../../assets/outcome.svg';

import { ModalBtn, FormContainer, FormBtnArea, FormBtn } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

Modal.setAppElement('#root');

type ModalContainerProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};

export function ModalContainer({
    isOpen,
    onRequestClose,
}: ModalContainerProps) {
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    // Parametro "e" esperando receber um argumento do tipo "FormEvent" importado com o react.
    async function handleSendNewTransaction(e: FormEvent) {
        e.preventDefault();

        await createTransaction({
            title: title,
            type: type,
            amount: amount,
            category: category,
        });

        setTitle('')
        setCategory('')
        setAmount(0)
        setType('deposit')
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Modal-Overlay"
        >
            <FormContainer
                onSubmit={(event) => handleSendNewTransaction(event)}
            >
                <h1>Cadastrar transação</h1>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
                <FormBtnArea>
                    <FormBtn
                        type="button"
                        value={type}
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        colorActive="green"
                    >
                        <img src={Entry} alt="Entrada" />
                        <span>Entrada</span>
                    </FormBtn>
                    <FormBtn
                        type="button"
                        value={type}
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        colorActive="red"
                    >
                        <img src={Out} alt="Saída" />
                        <span>Saída</span>
                    </FormBtn>
                </FormBtnArea>
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </FormContainer>
            <ModalBtn type="button" onClick={onRequestClose} />
            <ModalCss />
        </Modal>
    );
}
