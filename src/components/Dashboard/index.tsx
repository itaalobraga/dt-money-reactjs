import { DashboardContainer } from './styles';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export function Dashboard() {
    return (
        <DashboardContainer>
            <Summary />
            <TransactionsTable />
        </DashboardContainer>
    );
}
