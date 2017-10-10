import { LuxLockFrontendEchatPage } from './app.po';

describe('lux-lock-frontend-echat App', () => {
  let page: LuxLockFrontendEchatPage;

  beforeEach(() => {
    page = new LuxLockFrontendEchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
