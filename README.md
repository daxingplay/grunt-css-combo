# grunt-css-combo

[CSS Combo](https://github.com/daxingplay/css-combo)工具的[grunt](https://github.com/gruntjs/grunt)插件

## 如何开始
在终端中`cd`到你的项目目录（你的`grunt.js`所在目录），然后使用`npm install grunt-css-combo`来安装插件

然后在你的配置文件 `grunt.js` 中引入该插件:

```js
grunt.loadNpmTasks('grunt-css-combo');
```

## 文档

使用很简单，直接用CSS Combo的配置即可。所以建议您直接移步CSS Combo的文档[KSP](https://github.com/daxingplay/css-combo)的文档.

```js
grunt.initConfig({

    'css-combo':{
        file1:{
            'target': 'xxx.source.css',
            'output': 'xxx.css',
            'inputEncoding': 'utf-8',
            'outputEncoding': 'gbk',
            'compress': true,
            'debug': false
        },

        file2: {
            ...
        }
    }
});
```
然后我们可以便可以通过grunt命令来执行

```bash
$ grunt css-combo
```
或者执行其中单个
```bash
$ grunt css-combo:file1
```

## License
Copyright (c) 2012 daxingplay
Licensed under the MIT license.