import { MedxPage } from './app.po';

describe('medx App', function() {
  let page: MedxPage;

  beforeEach(() => {
    page = new MedxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
