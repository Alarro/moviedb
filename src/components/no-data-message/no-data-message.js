import { Alert } from 'antd';

import React from 'react';

const NoDataMessage = () => (
  <div className='alert'>
    <Alert
      message='По вашему запросу ничего не найдено! Попробуйте найти другой фильм'
      type='error'
    />
  </div>
);

export default NoDataMessage;