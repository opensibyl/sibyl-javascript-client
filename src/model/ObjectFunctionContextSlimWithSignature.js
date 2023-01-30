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
 * The ObjectFunctionContextSlimWithSignature model module.
 * @module model/ObjectFunctionContextSlimWithSignature
 * @version 1.0
 */
class ObjectFunctionContextSlimWithSignature {
    /**
     * Constructs a new <code>ObjectFunctionContextSlimWithSignature</code>.
     * @alias module:model/ObjectFunctionContextSlimWithSignature
     */
    constructor() { 
        
        ObjectFunctionContextSlimWithSignature.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectFunctionContextSlimWithSignature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectFunctionContextSlimWithSignature} obj Optional instance to populate.
     * @return {module:model/ObjectFunctionContextSlimWithSignature} The populated <code>ObjectFunctionContextSlimWithSignature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectFunctionContextSlimWithSignature();

            if (data.hasOwnProperty('bodySpan')) {
                obj['bodySpan'] = CoreSpan.constructFromObject(data['bodySpan']);
            }
            if (data.hasOwnProperty('calls')) {
                obj['calls'] = ApiClient.convertToType(data['calls'], ['String']);
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
            if (data.hasOwnProperty('reverseCalls')) {
                obj['reverseCalls'] = ApiClient.convertToType(data['reverseCalls'], ['String']);
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('span')) {
                obj['span'] = CoreSpan.constructFromObject(data['span']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ObjectFunctionContextSlimWithSignature</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ObjectFunctionContextSlimWithSignature</code>.
     */
    static validateJSON(data) {
        // validate the optional field `bodySpan`
        if (data['bodySpan']) { // data not null
          CoreSpan.validateJSON(data['bodySpan']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['calls'])) {
            throw new Error("Expected the field `calls` to be an array in the JSON data but got " + data['calls']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['reverseCalls'])) {
            throw new Error("Expected the field `reverseCalls` to be an array in the JSON data but got " + data['reverseCalls']);
        }
        // ensure the json data is a string
        if (data['signature'] && !(typeof data['signature'] === 'string' || data['signature'] instanceof String)) {
            throw new Error("Expected the field `signature` to be a primitive type in the JSON string but got " + data['signature']);
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
ObjectFunctionContextSlimWithSignature.prototype['bodySpan'] = undefined;

/**
 * @member {Array.<String>} calls
 */
ObjectFunctionContextSlimWithSignature.prototype['calls'] = undefined;

/**
 * which contains language-specific contents
 * @member {Object} extras
 */
ObjectFunctionContextSlimWithSignature.prototype['extras'] = undefined;

/**
 * language
 * @member {String} lang
 */
ObjectFunctionContextSlimWithSignature.prototype['lang'] = undefined;

/**
 * @member {String} name
 */
ObjectFunctionContextSlimWithSignature.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ObjectValueUnit>} parameters
 */
ObjectFunctionContextSlimWithSignature.prototype['parameters'] = undefined;

/**
 * @member {String} path
 */
ObjectFunctionContextSlimWithSignature.prototype['path'] = undefined;

/**
 * @member {String} receiver
 */
ObjectFunctionContextSlimWithSignature.prototype['receiver'] = undefined;

/**
 * @member {Array.<module:model/ObjectValueUnit>} returns
 */
ObjectFunctionContextSlimWithSignature.prototype['returns'] = undefined;

/**
 * @member {Array.<String>} reverseCalls
 */
ObjectFunctionContextSlimWithSignature.prototype['reverseCalls'] = undefined;

/**
 * @member {String} signature
 */
ObjectFunctionContextSlimWithSignature.prototype['signature'] = undefined;

/**
 * @member {module:model/CoreSpan} span
 */
ObjectFunctionContextSlimWithSignature.prototype['span'] = undefined;






export default ObjectFunctionContextSlimWithSignature;
