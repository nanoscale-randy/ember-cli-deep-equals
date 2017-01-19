/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-deep-equals',
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/deep-equal/index.js');
  }
};
