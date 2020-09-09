import React, { useState, useCallback } from 'react';
import { Popover, ActionList, Button } from '@shopify/polaris';

const Dropdown = ({ title, dropdownMenuList }) => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive(active => !active), []);

  const activator = (
    <Button onClick={toggleActive} disclosure monochrome outline>
      {title}
    </Button>
  );

  return (
    <Popover active={active} activator={activator} onClose={toggleActive}>
      <ActionList items={dropdownMenuList} />
    </Popover>
  );
};

export { Dropdown };
