import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Stack,
  Button,
  Icon,
  Collapsible,
  TextContainer,
} from '@shopify/polaris';
import { CaretUpMinor, CaretDownMinor } from '@shopify/polaris-icons';

const AccordianCard = ({ title, containerData }) => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive(active => !active), []);

  return (
    <div>
      <Card sectioned>
        <Stack vertical>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Card.Header title={title} />
            <Card.Header>
              <div
                onClick={handleToggle}
                ariaExpanded={active}
                ariaControls="basic-collapsible"
                style={{ cursor: 'pointer' }}
              >
                {active && <Icon source={CaretUpMinor} />}
                {!active && <Icon source={CaretDownMinor} />}
              </div>
            </Card.Header>
          </div>
          <Collapsible
            open={active}
            id="basic-collapsible"
            transition={{ duration: '150ms', timingFunction: 'ease' }}
          >
            <div style={{ padding: '20px' }}>
              <TextContainer>{containerData}</TextContainer>
            </div>
          </Collapsible>
        </Stack>
      </Card>
    </div>
  );
};

AccordianCard.propTypes = {
  title: PropTypes.string,
  containerData: PropTypes.object,
};
export default AccordianCard;
