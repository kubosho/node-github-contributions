'use strict';

/**
 * Module dependencies.
 */
var request = require('superagent'),
    utils = require('./utils');

module.exports = {
    fetch: function (user, callback) {
        var URI = 'https://github.com/users/' + user + '/contributions_calendar_data';

        request.get(URI)
               .end(function (res) {
                   return callback(utils.toJSON(res.body));
               });
    }
}
