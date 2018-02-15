import { BrACDPage } from './app.po';

describe('br-acd App', () => {
  let page: BrACDPage;

  beforeEach(() => {
    page = new BrACDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
