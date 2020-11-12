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
import JSONTree from 'react-json-tree';

const AccordianCard = ({ title, containerData }) => {
  const [active, setActive] = useState(false);
  const handleToggle = useCallback(() => setActive(active => !active), []);

  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };

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
              <JSONTree
                data={containerData}
                // theme={theme}
                invertTheme={false}
                theme={{
                  extend: theme,
                  // underline keys for literal values
                  valueLabel: {
                    textDecoration: 'underline',
                  },
                  // switch key for objects to uppercase when object is expanded.
                  // `nestedNodeLabel` receives additional argument `expandable`
                  nestedNodeLabel: ({ style }, keyPath, nodeType, expanded) => ({
                    style: {
                      ...style,
                      textTransform: expanded ? 'uppercase' : style.textTransform,
                    },
                  }),
                }}
                labelRenderer={([key]) => <strong>{key}</strong>}
              />
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
