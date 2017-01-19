module.exports = {
  description: 'Adds deep-equal Bower package to project',
  normalizeEntityName: function () {},
  afterInstall: function () {
    return this.addBowerPackageToProject('deep-equal', '0.0.0');
  }
};
