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

/**
 * The CorePoint model module.
 * @module model/CorePoint
 * @version 1.0
 */
class CorePoint {
    /**
     * Constructs a new <code>CorePoint</code>.
     * @alias module:model/CorePoint
     */
    constructor() { 
        
        CorePoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CorePoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CorePoint} obj Optional instance to populate.
     * @return {module:model/CorePoint} The populated <code>CorePoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CorePoint();

            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], 'Number');
            }
            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CorePoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CorePoint</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} column
 */
CorePoint.prototype['column'] = undefined;

/**
 * NOTICE: INDEX, NOT REAL LINE NUMBER
 * @member {Number} row
 */
CorePoint.prototype['row'] = undefined;






export default CorePoint;

