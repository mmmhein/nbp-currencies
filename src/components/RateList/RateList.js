import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import { rate } from '../../types';
import Button from '../Button';
import Rate from '../Rate';
import List from '../List';
import Overlay from '../Overlay';

function RateList({ rates, pending, addFollowedRate, fetchRates }) {
  useEffect(() => {
    if (isEmpty(rates)) {
      fetchRates();
    }
  }, [fetchRates, rates]);

  const renderList = () => (
    <List>
      {rates.map((rate, id) => (
        <Rate key={id} rate={rate}>
          <Button onClick={() => addFollowedRate({ id, ...rate })} grey>
            Ulubione
          </Button>
        </Rate>
      ))}
    </List>
  );

  return <>{pending ? <Overlay>Pobieranie kursów walut</Overlay> : renderList()}</>;
}

RateList.propTypes = {
  rates: PropTypes.arrayOf(rate),
  pending: PropTypes.bool.isRequired,
  addFollowedRate: PropTypes.func.isRequired,
  fetchRates: PropTypes.func.isRequired
};

export default RateList;
