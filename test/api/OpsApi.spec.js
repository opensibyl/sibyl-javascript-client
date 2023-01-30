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
    instance = new OpenapiForSibyl2Server.OpsApi();
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

  describe('OpsApi', function() {
    describe('opsMonitorUploadGet', function() {
      it('should call opsMonitorUploadGet successfully', function(done) {
        //uncomment below and update the code to test opsMonitorUploadGet
        //instance.opsMonitorUploadGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('opsPingGet', function() {
      it('should call opsPingGet successfully', function(done) {
        //uncomment below and update the code to test opsPingGet
        //instance.opsPingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('opsVersionGet', function() {
      it('should call opsVersionGet successfully', function(done) {
        //uncomment below and update the code to test opsVersionGet
        //instance.opsVersionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));