import {Button, ConfigProvider} from 'antd';
import React, {useState} from 'react';
import App from './App';

import light from './tokens/apiece-apart.json';
import dark from './tokens/dark.json';

const ThemedApp = () => {

  const [token, setToken] = useState(light);

  return (
    <ConfigProvider theme={{token}}>
      <Button onClick={() => token === light ? setToken(dark) : setToken(light)}
              style={{margin: 20}}>
        Change theme
      </Button>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                 colorPrimaryBorderHover: 'red',
                 colorPrimaryHover: 'black',
                 colorPrimary: 'red',
                 colorTextBase: '#4096ff',
                 colorTextDescription: '#4096ff',
                 colorTextLabel:  '#4096ff',
                 colorPrimaryText: '#4096ff',
                 colorText: 'red',
                 colorPrimaryTextHover: 'orange',
              }
            }
          }}
        >
        <Button type='primary'>
          THIS IS BUTTON
        </Button>
      </ConfigProvider>
      <App/>
    </ConfigProvider>
  );
};

export default ThemedApp;
