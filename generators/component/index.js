'use strict';
var yeoman = require('yeoman-generator');

var ComponentGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('biu biu biu -->' + this.name + '.');
  },

  writing: function () {
    this.template('component_tmpl', 'src/components/stores/'+ this.name +'/' + this.name + '.jsx');
  }
});

module.exports = ComponentGenerator;
