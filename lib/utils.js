'use strict';

module.exports = {
    chunk: function (collection, num) {
        var bases = collection;
        var results = [];

        for(var i = 0, l = bases.length; i < Math.ceil(l / num); i++) {
            var j = i * num;
            var s = bases.slice(j, j + num);
            results.push(s);
        }

        return results;
    },

    toJSON: function (collection) {
        collection = this.chunk(collection, 7);

        var obj = Object.create(null);

        for (var i = 0, l = collection.length; i < l; i++) {
            obj[i] = collection[i];
        }

        return JSON.stringify(obj);
    }
}
