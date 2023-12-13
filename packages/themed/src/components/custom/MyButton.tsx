// import { Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';

const MyButton = (props: any) => {
  return (
    // <Button>
    //   <ButtonText>MyButton</ButtonText>
    // </Button>
    <div {...props}>MyButton</div>
  );
};

export default MyButton;
