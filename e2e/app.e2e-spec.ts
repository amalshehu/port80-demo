import { GiphyPage } from './app.po';

describe('giphy App', () => {
  let page: GiphyPage;

  beforeEach(() => {
    page = new GiphyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
