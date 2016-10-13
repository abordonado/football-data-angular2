import { FootballDataAngular2Page } from './app.po';

describe('football-data-angular2 App', function() {
  let page: FootballDataAngular2Page;

  beforeEach(() => {
    page = new FootballDataAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
