import React from 'react';
import FollowedRateList from '../FollowedRateList';
import InfoBanner from '../InfoBanner';
import Content from '../Content';

function LandingPage() {
  return (
    <article>
      <InfoBanner>
        <strong>Favorite currencies</strong>
      </InfoBanner>
      <Content>
        <FollowedRateList />
      </Content>
    </article>
  );
}

export default LandingPage;
