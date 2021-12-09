import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface CustomInputProps extends TextInputProps {}

export default function Input({
  ...rest
}: CustomInputProps) {
  return <Container {...rest} />;
}
