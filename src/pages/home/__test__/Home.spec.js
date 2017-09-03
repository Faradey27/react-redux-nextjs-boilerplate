/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import HomeDriver from './Home.driver';

describe('Home Page', () => {
  let driver = null;

  beforeEach(() => {
    driver = new HomeDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().get.isOk()).toBeTruthy();
  });

  it('should render with correct text', () => {
    expect(driver.when.created().get.text()).toBe('Home Page');
  });
});
