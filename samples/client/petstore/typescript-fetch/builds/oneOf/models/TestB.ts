/* tslint:disable */
/* eslint-disable */
/**
 * testing oneOf without discriminator
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TestB
 */
export interface TestB {
    /**
     * 
     * @type {string}
     * @memberof TestB
     */
    bar: string;
}

/**
 * Check if a given object implements the TestB interface.
 */
export function instanceOfTestB(value: object): value is TestB {
    if (!('bar' in value) || value['bar'] === undefined) return false;
    return true;
}

export function TestBFromJSON(json: any): TestB {
    return TestBFromJSONTyped(json, false);
}

export function TestBFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestB {
    if (json == null) {
        return json;
    }
    return {
        
        'bar': json['bar'],
    };
}

  export function TestBToJSON(json: any): TestB {
      return TestBToJSONTyped(json, false);
  }

  export function TestBToJSONTyped(value?: TestB | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bar': value['bar'],
    };
}

