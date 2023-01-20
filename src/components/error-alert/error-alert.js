import { Alert } from 'antd';

import React from 'react';

const AlertMessage = () => (
  <div className='alert'>
    <Alert
      message='Turn on your VPN, please. Realities of Russia ;)'
      type='error'
    />
  </div>
);

export default AlertMessage;