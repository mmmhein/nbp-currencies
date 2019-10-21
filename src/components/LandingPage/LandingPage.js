import React from 'react';

import FollowedRateList from '../FollowedRateList';
import InfoBanner from '../InfoBanner';
import Content from '../Content';

function LandingPage() {
  return (
    <article>
      <InfoBanner>
        <strong data-testid="info-banner-favorite">Ulubione waluty</strong>
      </InfoBanner>
      <Content>
        <FollowedRateList />
      </Content>
    </article>
  );
}

export default LandingPage;
