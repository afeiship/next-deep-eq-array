(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isArray = Array.isArray;

  nx.deepEqArray = function(inArray1, inArray2) {
    if (inArray1 === inArray2) {
      return true;
    }

    if (inArray1 && inArray2 && isArray(inArray1) && inArray(inArray2)) {
      var length = inArray1.length;
      if (length != inArray2.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!nx.deepEqArray(inArray1[i], inArray2[i])) {
          return false;
        }
      }
      return true;
    }

    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepEqArray;
  }
})();
