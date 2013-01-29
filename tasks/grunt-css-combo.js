/**
 * css combo tool for grunt.
 * @author: daxingplay<daxingplay@gmail.com>
 * @time: 12-12-13 16:27
 * @description:
 */

var CSSCombo = require('css-combo');

module.exports = function(grunt) {

    grunt.registerMultiTask('css-combo', 'Compile your css modules using CSS Combo.', function() {
//        grunt.log.write(grunt.helper('css-combo'));

        CSSCombo.build(this.data, function(e, report){
            if(e){
                grunt.log.fatal('Build error with file ' + report.target + ':' + e);
            }else{
                grunt.log.writeln('Build file ' + report.target + ' succeed.');
            }
        });
    });

    grunt.registerHelper('css-combo', function() {
        return 'CSS Combo: A CSS module compiler.';
    });

};