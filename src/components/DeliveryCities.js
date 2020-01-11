import React from 'react';

import { Dropdown } from 'semantic-ui-react';

import { cityOptions } from '../cityOptions';

const DeliveryCities = () => {
  return (
    <div className='deliveryCities'>
      <Dropdown
        placeholder='Rechercher votre ville'
        fluid
        search
        selection
        options={cityOptions}
      />
    </div>
  );
};

export default DeliveryCities;
