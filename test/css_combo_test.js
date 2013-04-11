'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.css_combo = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/combo1.css');
        var expected = grunt.file.read('test/expected/combo1.css');
        test.equal(grunt.util.normalizelf(actual), grunt.util.normalizelf(expected), 'should combine css modules correctly.');

        test.done();
    },
    custom_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/combo2.css');
        var expected = grunt.file.read('test/expected/combo2.css');
        test.equal(grunt.util.normalizelf(actual), grunt.util.normalizelf(expected), 'should combine css modules correctly.');

        test.done();
    }
};
