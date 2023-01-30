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

import ApiClient from '../ApiClient';
import CoreSpan from './CoreSpan';
import ObjectValueUnit from './ObjectValueUnit';

/**
 * The Sibyl2FunctionWithPath model module.
 * @module model/Sibyl2FunctionWithPath
 * @version 1.0
 */
class Sibyl2FunctionWithPath {
    /**
     * Constructs a new <code>Sibyl2FunctionWithPath</code>.
     * @alias module:model/Sibyl2FunctionWithPath
     */
    constructor() { 
        
        Sibyl2FunctionWithPath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sibyl2FunctionWithPath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sibyl2FunctionWithPath} obj Optional instance to populate.
     * @return {module:model/Sibyl2FunctionWithPath} The populated <code>Sibyl2FunctionWithPath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sibyl2FunctionWithPath();

            if (data.hasOwnProperty('bodySpan')) {
                obj['bodySpan'] = CoreSpan.constructFromObject(data['bodySpan']);
            }
            if (data.hasOwnProperty('extras')) {
                obj['extras'] = ApiClient.convertToType(data['extras'], Object);
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [ObjectValueUnit]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('receiver')) {
                obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
            }
            if (data.hasOwnProperty('returns')) {
                obj['returns'] = ApiClient.convertToType(data['returns'], [ObjectValueUnit]);
            }
            if (data.hasOwnProperty('span')) {
                obj['span'] = CoreSpan.constructFromObject(data['span']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sibyl2FunctionWithPath</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sibyl2FunctionWithPath</code>.
     */
    static validateJSON(data) {
        // validate the optional field `bodySpan`
        if (data['bodySpan']) { // data not null
          CoreSpan.validateJSON(data['bodySpan']);
        }
        // ensure the json data is a string
        if (data['lang'] && !(typeof data['lang'] === 'string' || data['lang'] instanceof String)) {
            throw new Error("Expected the field `lang` to be a primitive type in the JSON string but got " + data['lang']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                ObjectValueUnit.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['receiver'] && !(typeof data['receiver'] === 'string' || data['receiver'] instanceof String)) {
            throw new Error("Expected the field `receiver` to be a primitive type in the JSON string but got " + data['receiver']);
        }
        if (data['returns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['returns'])) {
                throw new Error("Expected the field `returns` to be an array in the JSON data but got " + data['returns']);
            }
            // validate the optional field `returns` (array)
            for (const item of data['returns']) {
                ObjectValueUnit.validateJsonObject(item);
            };
        }
        // validate the optional field `span`
        if (data['span']) { // data not null
          CoreSpan.validateJSON(data['span']);
        }

        return true;
    }


}



/**
 * @member {module:model/CoreSpan} bodySpan
 */
Sibyl2FunctionWithPath.prototype['bodySpan'] = undefined;

/**
 * which contains language-specific contents
 * @member {Object} extras
 */
Sibyl2FunctionWithPath.prototype['extras'] = undefined;

/**
 * language
 * @member {String} lang
 */
Sibyl2FunctionWithPath.prototype['lang'] = undefined;

/**
 * @member {String} name
 */
Sibyl2FunctionWithPath.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ObjectValueUnit>} parameters
 */
Sibyl2FunctionWithPath.prototype['parameters'] = undefined;

/**
 * @member {String} path
 */
Sibyl2FunctionWithPath.prototype['path'] = undefined;

/**
 * @member {String} receiver
 */
Sibyl2FunctionWithPath.prototype['receiver'] = undefined;

/**
 * @member {Array.<module:model/ObjectValueUnit>} returns
 */
Sibyl2FunctionWithPath.prototype['returns'] = undefined;

/**
 * @member {module:model/CoreSpan} span
 */
Sibyl2FunctionWithPath.prototype['span'] = undefined;






export default Sibyl2FunctionWithPath;
