import React, { useState } from 'react';
import { Button } from '@mantine/core';
import  Modal  from './Modal';
import ActionGrid from './ActionsGrid';

export function ToolsButton() {
  console.log(ActionGrid);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => { console.log("Opening modal2"); setOpened(true); }}>Tools</Button>
      <Modal
        isOpen={opened}
      >
        {console.log('abriu')};
        <ActionGrid/>
      </Modal>
    </>
  );
}

export default ToolsButton;
