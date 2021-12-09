import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface CustomTouchableOpacity
  extends TouchableOpacityProps {
  title: string;
}

export default function Button({
  title,
  ...rest
}: CustomTouchableOpacity) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
