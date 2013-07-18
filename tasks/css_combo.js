/*
 * grunt-css-combo
 * https://github.com/daxingplay/grunt-css-combo
 *
 * Copyright (c) 2013 daxingplay
 * Licensed under the MIT license.
 */

'use strict';

var csscombo = require('css-combo');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('css_combo', 'Combo your CSS imports.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();
        var done = this.async();

        if( this.files.length > 0 ){
            // Iterate over all specified file groups.
            this.files.forEach(function (f) {
                // Concat specified files.
                var src = f.src.filter(function (filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    } else {
                        return true;
                    }
                });

                csscombo.build(src, f.dest, options, function(err, report){
                    if(!err){
                        // Print a success message.
                        grunt.log.writeln('File "' + f.dest + '" created.');
                    }
                    done(!err);
                });

            });
        }
        else {
            // Print a success message.
            grunt.log.writeln('No CSS file found.');
            done();
        }
    });
};
