import { KendoAngular2SortablePage } from './app.po';

describe('kendo-angular2-sortable App', function() {
  let page: KendoAngular2SortablePage;

  beforeEach(() => {
    page = new KendoAngular2SortablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
