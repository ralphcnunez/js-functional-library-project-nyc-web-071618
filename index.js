fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      newValues= Object.values(array)
      newKeys = Object.keys(array)
      for (i = 0; i < newArray.length; i++)
        alert(newValues[i], newKeys[i], array)
        return array
    },

    map: function(array, callback) {
        newArray = Object.values(array)
        const arr = []
        for (let i = 0; i < newArray.length; i++)
        arr.push(callback(newArray[i]))
      return arr
    },

    reduce: function(array, callback, acc = 0) {
      const newArray = Object.values(array)
      for (i = 0; i < newArray.length; i++) {
      acc = callback(acc, newArray[i], newArray);
        };
      return acc
    },

    find: function(array, predicate) {
    const newArray = Object.values(array);
     for (i = 0; i < newArray.length; i++) {
       if (predicate(newArray[i])) {
         return newArray[i];
       }
     }
    },

    filter: function(array, predicate) {
      const newArray = Object.values(array);
       let answer = []
       for (i = 0; i < newArray.length; i++) {
          if (predicate(newArray[i])) {
            answer.push(newArray[i])
          }
       }
       return answer;
    },

    size: function(array) {
      const newArray = Object.values(array);
      return newArray.length
    },

    first: function(array, n=false) {
    return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n=false) {
      return n ? array.slice(array.length-n, array.length) : array[array.length-1];

    },

    compact: function(array) {
      const bad = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(elements => !bad.has(elements))
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection))
      return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, [isSorted]=false, [callback]) {

    },

    keys: function() {

    },

    values: function() {

    },

      functions: function(obj) {
        const functionNames = []
        for (let key in obj) {
          if (typeof obj[key] === "function"){
            functionNames.push(key)
        }
      }
    },

    giveMeMore: function() {

    },

  }
})()

fi.libraryMethod()
