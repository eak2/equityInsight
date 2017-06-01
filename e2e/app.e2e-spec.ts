import { EquityinsightPage } from './app.po';

describe('equityinsight App', function() {
  let page: EquityinsightPage;

  beforeEach(() => {
    page = new EquityinsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
