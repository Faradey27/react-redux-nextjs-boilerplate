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

  it('should render widgets with data from server(nextjs)', (done) => {
    const EXPECTED_NUMBER_OF_WIDGETS = 2;

    driver.when.created().when.doServerDataLoad();
    setTimeout(() => {
      expect(driver.get.numberOfWidgets()).toBe(EXPECTED_NUMBER_OF_WIDGETS);
      done();
    });
  });
});
