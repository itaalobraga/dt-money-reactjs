import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type TransactionsContextProviderProps = {
    children: ReactNode;
}

type TransactionsProps = {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
};

type CreateTransactionProps = Omit<TransactionsProps, "id" | "createdAt">


type TransactionsContextProps = {
    transactions: TransactionsProps[];
    createTransaction: (transaction: CreateTransactionProps) => Promise<void>;
}; 

export const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
);


export function TransactionsContextProvider( {children} : TransactionsContextProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
        async function getTransactions() {
            const response = await api.get('/transactions');
            const data = await response.data;
            setTransactions(data)
        }
        getTransactions();
    }, []);

    async function createTransaction(transaction: CreateTransactionProps) {

        const newTransaction = {
            title: transaction.title,
            amount: transaction.amount,
            type: transaction.type,
            category: transaction.category,
            createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date())
        };

        const response = await api.post('/transactions', newTransaction)
        setTransactions([...transactions, response.data])
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}