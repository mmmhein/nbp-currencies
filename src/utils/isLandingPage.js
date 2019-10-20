import { ROOT_PATH } from '../constants/routes';

function isLandingPage(path) {
  return path === ROOT_PATH;
}

export default isLandingPage;
