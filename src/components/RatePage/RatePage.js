import React from 'react';
import RateList from '../RateList';
import Content from '../Content';
import InfoBanner from '../InfoBanner';

class RatePage extends React.Component {
  componentDidMount() {
    this.props.fetchRates();
  }

  render() {
    return (
      <article>
        <InfoBanner grey>
          <strong>Exchange rates</strong>
        </InfoBanner>
        <Content>
          <RateList />
        </Content>
      </article>
    );
  }
}

export default RatePage;
