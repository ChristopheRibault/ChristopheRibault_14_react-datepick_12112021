import getDates from './getDates';

describe('getDate', () => {
  it('Should return month', () => {
    expect(getDates('December 17, 1995').month)
      .toEqual(11);
  });

  it('Should return year', () => {
    expect(getDates('December 18, 1995').year)
      .toEqual(1995);
  });
});
