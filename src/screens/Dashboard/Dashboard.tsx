import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  Transaction,
  ITransaction,
} from '../../components/Transaction';
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  TransactionList,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles';

export interface IDataList extends ITransaction {
  id: string;
}

export function Dashboard() {
  const data: IDataList[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '22/10/2021',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Desenvolvimento de site',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '12/11/2021',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '07/11/2021',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://github.com/LeandroRibeiroo.png',
              }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Leandro</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="última entrada dia 11 de novembro de 2021"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 14.000,00"
          lastTransaction="última saída dia 11 de novembro de 2021"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 3.400,00"
          lastTransaction="última entrada dia 11 de novembro de 2021"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Transaction data={item} />
          )}
        />
      </Transactions>
    </Container>
  );
}
