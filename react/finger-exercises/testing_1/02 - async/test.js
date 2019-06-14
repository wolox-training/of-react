import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    const data = await getData(true);
    expect(data).toBe('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect(getData(true)).resolves.toBe('data');
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    try {
      await getData(false);
    } catch (e) {
      expect(e.message).toMatch('error');
    }
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
    expect(getData(false)).rejects.toThrow('error');
  });
});
