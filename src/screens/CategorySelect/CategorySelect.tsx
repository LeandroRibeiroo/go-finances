import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { categories } from '../../utils/categories';
import {
  Category,
  Container,
  Header,
  Icon,
  Name,
  Separator,
  Title,
  Footer,
} from './styles';

interface ICategory {
  key: string;
  name: string;
}

interface ICategorySelect {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  closeSelect: () => void;
}

export default function CategorySelect({
  category,
  setCategory,
  closeSelect,
}: ICategorySelect) {
  function handleCategorySelect(category: ICategory) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          onPress={closeSelect}
          activeOpacity={0.7}
          title="Selecionar"
        />
      </Footer>
    </Container>
  );
}
