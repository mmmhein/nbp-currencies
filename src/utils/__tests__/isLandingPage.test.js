import isLandingPage from '../isLandingPage';
import { ROOT_PATH, RATES_PATH } from '../../constants/routes';

describe('FUNC - isLandingPage', () => {
  it('return "true" when path is correct', () => {
    expect(isLandingPage(ROOT_PATH)).toEqual(true);
  });

  it('return "false" when path is wrong', () => {
    expect(isLandingPage(RATES_PATH)).toEqual(false);
  });
});
