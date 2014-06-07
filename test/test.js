'use strict';

/**
 * Module dependencies.
 */
var assert = require('power-assert');
var contributions = require('../github-contributions.js');

describe('github-contributions', function () {
    describe('fetch()', function () {
        var status = 0;

        it('Response should be status 200', function (done) {
            contributions.fetch('kubosho', function(res, statusCode) {
                done();
                assert(statusCode === 200);
            })
        });

        it('Response should be status 404', function (done) {
            contributions.fetch('_', function(res, statusCode) {
                done();
                assert(statusCode === 404);
            })
        });
    });
});
