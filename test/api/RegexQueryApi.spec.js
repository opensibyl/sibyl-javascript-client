/**
 * openapi for sibyl2 server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiForSibyl2Server);
  }
}(this, function(expect, OpenapiForSibyl2Server) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiForSibyl2Server.RegexQueryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RegexQueryApi', function() {
    describe('apiV1RegexClazzGet', function() {
      it('should call apiV1RegexClazzGet successfully', function(done) {
        //uncomment below and update the code to test apiV1RegexClazzGet
        //instance.apiV1RegexClazzGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RegexFuncGet', function() {
      it('should call apiV1RegexFuncGet successfully', function(done) {
        //uncomment below and update the code to test apiV1RegexFuncGet
        //instance.apiV1RegexFuncGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RegexFuncctxGet', function() {
      it('should call apiV1RegexFuncctxGet successfully', function(done) {
        //uncomment below and update the code to test apiV1RegexFuncctxGet
        //instance.apiV1RegexFuncctxGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
