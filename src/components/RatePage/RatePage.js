import React from 'react';
import RateItemsList from '../RateItemsList';

class RatePage extends React.Component {
  componentDidMount() {
    this.props.fetchRates();
  }

  handleClickTest = id => this.props.removeItemFavoriteRate(id);

  render() {
    return (
      <article>
        <h1>CurrenciesPage</h1>
        <section>
          <RateItemsList />
        </section>
      </article>
    );
  }
}

export default RatePage;
