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
    instance = new OpenapiForSibyl2Server.ScopeApi();
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

  describe('ScopeApi', function() {
    describe('apiV1FileGet', function() {
      it('should call apiV1FileGet successfully', function(done) {
        //uncomment below and update the code to test apiV1FileGet
        //instance.apiV1FileGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RepoDelete', function() {
      it('should call apiV1RepoDelete successfully', function(done) {
        //uncomment below and update the code to test apiV1RepoDelete
        //instance.apiV1RepoDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RepoGet', function() {
      it('should call apiV1RepoGet successfully', function(done) {
        //uncomment below and update the code to test apiV1RepoGet
        //instance.apiV1RepoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RevDelete', function() {
      it('should call apiV1RevDelete successfully', function(done) {
        //uncomment below and update the code to test apiV1RevDelete
        //instance.apiV1RevDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV1RevGet', function() {
      it('should call apiV1RevGet successfully', function(done) {
        //uncomment below and update the code to test apiV1RevGet
        //instance.apiV1RevGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));