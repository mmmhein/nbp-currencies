import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ROOT_PATH } from '../../../constants/routes';
import Header from '../Header';

describe('COMPONENT - Header', () => {
  it('renders correctly', () => {
    const props = {
      followedRates: [],
      location: {
        pathname: ROOT_PATH
      }
    };

    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={[props.location.pathname]}>
        <Header {...props} />
      </MemoryRouter>
    );

    expect(container.querySelector('button')).toBeNull();
  });

  it('renders correctly with button "remove rates"', () => {
    const props = {
      followedRates: [
        {
          id: 0,
          currency: 'Euro',
          code: 'EURO',
          mid: 4.0
        }
      ],
      location: {
        pathname: ROOT_PATH
      }
    };

    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={[props.location.pathname]}>
        <Header {...props} />
      </MemoryRouter>
    );

    expect(container.querySelector('button')).toBeDefined();
  });
});
