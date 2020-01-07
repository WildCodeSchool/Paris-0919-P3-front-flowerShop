import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const cityOptions = [
  { key: 'af', value: 'af', text: 'Champs-sur-Marne' },
  { key: 'ax', value: 'ax', text: 'Croissy Beaubourg' },
  { key: 'al', value: 'al', text: 'Émerainville' },
  { key: 'dz', value: 'dz', text: 'Lognes' },
  { key: 'as', value: 'as', text: 'Noisiel' },
  { key: 'ad', value: 'ad', text: 'Torcy' },
  { key: 'ao', value: 'ao', text: 'Bussy-Saint-Georges' },
  { key: 'ai', value: 'ai', text: 'Bussy-Saint-Martin' },
  { key: 'ag', value: 'ag', text: 'Chanteloup-en-Brie' },
  { key: 'ar', value: 'ar', text: 'Collégien' },
  { key: 'am', value: 'am', text: 'Conches-sur-Gondoire' },
  { key: 'aw', value: 'aw', text: 'Thorigny-sur-Marne' },
  { key: 'au', value: 'au', text: 'Montévrain' },
  { key: 'at', value: 'at', text: 'Saint-Thibault-des-Vignes' },
  { key: 'az', value: 'az', text: 'Bailly-Romainvilliers' },
  { key: 'bs', value: 'bs', text: 'Chessy' },
  { key: 'bh', value: 'bh', text: 'Coupvray' },
  { key: 'bd', value: 'bd', text: 'Magny-le-Hongre' },
  { key: 'bb', value: 'bb', text: 'Serris' },
  { key: 'by', value: 'by', text: 'Villeneuve le Comte' },
  { key: 'be', value: 'be', text: 'Noisy-le-Grand' },
  { key: 'bz', value: 'bz', text: 'Bry-sur-Marne' },
  { key: 'bj', value: 'bj', text: 'Villiers-sur-Marne' }
];

const DeliveryCities = () => {
  return (
    <Dropdown
      placeholder='Rechercher votre ville'
      fluid
      search
      selection
      options={cityOptions}
    />
  );
};

export default DeliveryCities;
