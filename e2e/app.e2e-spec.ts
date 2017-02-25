import { Week4t2MediaPlayerPage } from './app.po';

describe('week4t2-media-player App', function() {
  let page: Week4t2MediaPlayerPage;

  beforeEach(() => {
    page = new Week4t2MediaPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
