import { AngulardeskPage } from './app.po';

describe('angulardesk App', function() {
  let page: AngulardeskPage;

  beforeEach(() => {
    page = new AngulardeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
