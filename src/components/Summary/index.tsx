import { SummaryCard, SummaryContainer } from './styles';
import Entries from '../../../assets/income.svg';
import Out from '../../../assets/outcome.svg';
import Total from '../../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }
        return acc;
    }, 0);

    console.log('acc/PrevValue + transaction.amount/NextValue', totalDeposits);

    const totalWithdraw = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'withdraw') {
            return (acc += transaction.amount);
        }
        return acc;
    }, 0);

    const totalTrans = totalDeposits - totalWithdraw;

    return (
        <SummaryContainer>
            <SummaryCard>
                <div>
                    <span>Entradas</span>
                    <img src={Entries} alt="Entradas" />
                </div>
                <span>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(totalDeposits)}
                </span>
            </SummaryCard>
            <SummaryCard>
                <div>
                    <span>Saídas</span>
                    <img src={Out} alt="Saídas" />
                </div>
                <span>-
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(totalWithdraw)}
                </span>
            </SummaryCard>
            <SummaryCard>
                <div>
                    <span>Total</span>
                    <img src={Total} alt="Total" />
                </div>
                <span>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(totalTrans)}
                </span>
            </SummaryCard>
        </SummaryContainer>
    );
}
