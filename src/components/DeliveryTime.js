import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: '9h', value: '9h30 et 12h30' },
  { key: 2, text: '12h', value: '12h30 et 14h30' },
  { key: 3, text: '14h', value: '14h30 et 17h30' },
  { key: 4, text: '17h', value: '17h30 et 20h30' },
  { key: 5, text: '20h', value: '20h30 et 22h00' }
];

export default class DeliveryTime extends React.Component {
  state = { value: '9h30 et 12h30' };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div className='deliveryTime'>
        <i className='clock outline icon'></i>
        <div>
          Commande passée avant{' '}
          <Dropdown
            upward
            floating
            inline
            onChange={this.handleChange}
            options={options}
            value={value}
          />
          {': '}
          <p>Livraison entre {value}</p>
        </div>
      </div>
    );
  }
}
