// import { Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';

export const MyButton = (props: any) => {
  return (
    // <Button>
    //   <ButtonText>MyButton</ButtonText>
    // </Button>
    <div {...props}>MyButton</div>
  );
};
