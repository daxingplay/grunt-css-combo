/**
 * css combo tool for grunt.
 * @author: daxingplay<daxingplay@gmail.com>
 * @time: 12-12-13 16:27
 * @description:
 */

var CSSCombo = require('css-combo');

module.exports = function(grunt) {

    grunt.registerTask('grunt-css-combo', 'Compile your css modules using CSS Combo.', function() {
        grunt.log.write(grunt.helper('grunt-css-combo'));
        CSSCombo.build(this.data);
    });

    grunt.registerHelper('grunt-css-combo', function() {
        return 'CSS Combo: A CSS module compiler.';
    });

};