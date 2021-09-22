import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  ...rest
} : Props) {
  const theme = useTheme();
  
  return (
    <Container 
      {...rest} 
      color={color ? color : theme.colors.main }
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
    >
    { loading 
      ? <ActivityIndicator color={theme.colors.shape} />
      : <Title>{title}</Title>
    }
    </Container>
  );
}