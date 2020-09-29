const f = require('../file-with-const-global');
it('imported files can have constants called "global"', () => {
  expect(f()).toEqual(123);
});
