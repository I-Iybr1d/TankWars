import { AngularThreePage } from './app.po';

describe('angular-three App', () => {
  let page: AngularThreePage;

  beforeEach(() => {
    page = new AngularThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
