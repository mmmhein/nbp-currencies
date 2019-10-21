import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ROOT_PATH, RATES_PATH } from '../../../constants/routes';
import App from '../App';

jest.mock('../../FollowedRateList', () => 'FollowedRateList');
jest.mock('../../RateList', () => 'RateList');

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const { getByTestId } = renderWithRedux(
      <MemoryRouter initialEntries={[ROOT_PATH]}>
        <App />
      </MemoryRouter>
    );

    expect(getByTestId('info-banner-favorite')).toHaveTextContent('Ulubione waluty');
  });

  it('renders correctly "/rates" route', () => {
    const { getByTestId } = renderWithRedux(
      <MemoryRouter initialEntries={[`/${RATES_PATH}`]}>
        <App />
      </MemoryRouter>
    );

    expect(getByTestId('info-banner-rates')).toHaveTextContent('Kursy walut');
  });
});
