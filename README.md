# grunt-css-combo

[![Build Status](https://travis-ci.org/daxingplay/grunt-css-combo.png?branch=master)](https://travis-ci.org/daxingplay/grunt-css-combo)
[![NPM version](https://badge.fury.io/js/grunt-css-combo.png)](http://badge.fury.io/js/grunt-css-combo)

> Grunt plugin for css combo

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-combo --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-combo');
```

## The "css_combo" task

### Overview
In your project's Gruntfile, add a section named `css_combo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_combo: {
    options: {
      debug: false,
      compress: false
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.debug
Type: `Boolean`
Default value: `false`

Whether to turn on the debug logs or not.

#### options.punctuation
Type: `Boolean`
Default value: `false`

Whether to compress css file or not. I recommend you to minify your css files using cssmin yourself.

### Usage Examples

```js
grunt.initConfig({
  css_combo: {
    options: {},
    files: {
      'dest/index.combo.css': ['src/index.css'],
    },
  },
})
```

You can refer test/css_combo_test.js for example.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
