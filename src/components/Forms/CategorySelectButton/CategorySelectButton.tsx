import React from 'react';
import { Container, Category, Icon } from './styles';

interface ICategorySelector {
  title: string;
  onPress: () => void;
}

export default function CategorySelectButton({
  title,
  onPress,
}: ICategorySelector) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down"></Icon>
    </Container>
  );
}
