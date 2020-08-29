import React, { useState, useCallback } from 'react';
import { Popover, ActionList, Button } from '@shopify/polaris';

const Dropdown = () => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive(active => !active), []);

  const activator = (
    <Button onClick={toggleActive} disclosure monochrome outline>
      tx / block
    </Button>
  );

  const handleImportedAction = useCallback(
    () => console.log('Imported action'),
    [],
  );

  const handleExportedAction = useCallback(
    () => console.log('Exported action'),
    [],
  );

  return (
    <Popover active={active} activator={activator} onClose={toggleActive}>
      <ActionList
        items={[
          {
            content: 'Import file',
            onAction: handleImportedAction,
          },
          {
            content: 'Export file',
            onAction: handleExportedAction,
          },
        ]}
      />
    </Popover>
  );
};

export { Dropdown };
