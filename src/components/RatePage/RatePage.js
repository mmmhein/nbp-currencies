import React from 'react';
import RateList from '../RateList';
import Content from '../Content';
import InfoBanner from '../InfoBanner';

function RatePage() {
  return (
    <article>
      <InfoBanner>
        <strong>Kursy walut</strong>
      </InfoBanner>
      <Content>
        <RateList />
      </Content>
    </article>
  );
}

export default RatePage;
