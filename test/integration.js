'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var oxford = require('oxford');
oxford.registerPlugin(require('../index.js'));

describe('Integration Test', function () {
  it('should expose importYAML static method off of oxford', function () {
    expect(oxford.importYAML).to.be.a('function');
  });

  it('should import a yaml file and build an oxford string library', function () {
    var ox = oxford.importYAML('./fixtures/test.yml');
    expect(ox).to.be.an('object');
    expect(ox.get('message')).to.equal('hello world!');
  });

  it('should import yaml files and build an oxford string library', function () {
    var ox = oxford.importYAML([
      './fixtures/test-a.yml',
      './fixtures/test-b.yml'
    ]);

    expect(ox).to.be.an('object');
    expect(ox.get('message-A')).to.equal('this is message A!');
    expect(ox.get('message-B')).to.equal('this is message B!');
  });
});
