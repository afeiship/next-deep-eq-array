var nx = require('next-js-core2');
require('../src/next-deep-eq-array');


test('nx.deepEqArray', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.deepEqArray(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});

