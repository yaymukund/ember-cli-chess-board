module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject(
      'chesslib=http://registry.npmjs.org/chesslib/-/chesslib-0.9.10.tgz'
    );
  }
};
