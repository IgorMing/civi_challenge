import React from 'react';
import { TextProps } from 'react-native';
import Styled from './styles';

const Text: React.FC<TextProps> = (props) => {
  const { children, ...textProps } = props;
  return <Styled {...textProps}>{children}</Styled>;
};

export default Text;
