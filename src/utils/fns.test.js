import { random } from './fns';

describe('test random function', () => {
  test('', () => {
    expect(random(5)).not.toBeNaN();
  });
});
