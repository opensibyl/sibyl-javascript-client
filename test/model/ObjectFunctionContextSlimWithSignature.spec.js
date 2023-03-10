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
    instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
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

  describe('ObjectFunctionContextSlimWithSignature', function() {
    it('should create an instance of ObjectFunctionContextSlimWithSignature', function() {
      // uncomment below and update the code to test ObjectFunctionContextSlimWithSignature
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be.a(OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature);
    });

    it('should have the property bodySpan (base name: "bodySpan")', function() {
      // uncomment below and update the code to test the property bodySpan
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property calls (base name: "calls")', function() {
      // uncomment below and update the code to test the property calls
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property extras (base name: "extras")', function() {
      // uncomment below and update the code to test the property extras
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property lang (base name: "lang")', function() {
      // uncomment below and update the code to test the property lang
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property receiver (base name: "receiver")', function() {
      // uncomment below and update the code to test the property receiver
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property returns (base name: "returns")', function() {
      // uncomment below and update the code to test the property returns
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property reverseCalls (base name: "reverseCalls")', function() {
      // uncomment below and update the code to test the property reverseCalls
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

    it('should have the property span (base name: "span")', function() {
      // uncomment below and update the code to test the property span
      //var instance = new OpenapiForSibyl2Server.ObjectFunctionContextSlimWithSignature();
      //expect(instance).to.be();
    });

  });

}));
