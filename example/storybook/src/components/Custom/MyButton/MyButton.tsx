import React from 'react';
import { MyButton } from '@custom-ui/themed';

type Props = {
  message: string;
};

const ButtonStory = ({ message }: Props) => {
  return <MyButton />;
};

export default ButtonStory;
