'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var oxfordPluginYAML = require('../index.js');

describe('Unit Test', function () {
  var spy;

  beforeEach(function () {
    spy = sinon.spy();
  });

  it('should accept a file path string', function () {
    oxfordPluginYAML.method.call(spy, './fixtures/test.yml');
    expect(spy).to.have.been.calledWith({ message: 'hello world!' });
  });

  it('should accept an array of file path strings', function () {
    oxfordPluginYAML.method.call(spy, [
      './fixtures/test-a.yml',
      './fixtures/test-b.yml'
    ]);

    expect(spy).to.have.been.calledWith([
      { 'message-A': 'this is message A!' },
      { 'message-B': 'this is message B!' }
    ]);
  });

  it('should throw an error for invalid param type', function () {
    var func = oxfordPluginYAML.method.bind(spy, {});
    expect(func).to.throw('failed to import yaml file');
    expect(spy).to.not.have.been.called;
  })
});
