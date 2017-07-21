import { GeocachePage } from './app.po';

describe('geocache App', () => {
  let page: GeocachePage;

  beforeEach(() => {
    page = new GeocachePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
