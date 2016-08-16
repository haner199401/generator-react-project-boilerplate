'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {

    this.log(yosay('Welcome to the premium ' + chalk.red('generator-react-project-boilerplate') + ' generator!'));

    //问题
    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Pleace input your project name(react-app):',
      default: 'react-app'
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Pleace input author name:',
      default: 'Haner'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  defaults: function () {

    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      this.mkdir(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

  },

  writing: function () {

    //copy all files
    this.directory(this.sourceRoot(),this.destinationRoot());

    var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
        pkg.name = this.props.projectName;
        pkg.description = this.props.projectDesc;
        pkg.author = this.props.author;

    //改写 package.json
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    //生成babel配置文件
    this.fs.write(this.destinationPath('.babelrc'),JSON.stringify({
      presets: ['react', 'es2015', 'stage-0'],
      plugins: [
        "transform-runtime"
      ],
      env: {
        development: {
        presets: ["react-hmre"]
      }
    }}));

    //gitignore
    this.fs.write(this.destinationPath('.gitignore'),['node_modules/','*.iml','.idea/','.DS_Store','node_modules','npm-debug.log','dist'].join('\n\r'));
  },

  install: function () {
    process.exit();
    // this.installDependencies({
    //   bower: false,
    //   npm: false,
    //   callback: function () {
    //     // process.exit();
    //   }
    // });
  }
});
