/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
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
 * @interface FileSchemaTestClass
 */
export interface FileSchemaTestClass {
    /**
     * 
     * @type {any}
     * @memberof FileSchemaTestClass
     */
    file?: any;
    /**
     * 
     * @type {Array<any>}
     * @memberof FileSchemaTestClass
     */
    files?: Array<any>;
}

/**
 * Check if a given object implements the FileSchemaTestClass interface.
 */
export function instanceOfFileSchemaTestClass(value: object): value is FileSchemaTestClass {
    return true;
}

export function FileSchemaTestClassFromJSON(json: any): FileSchemaTestClass {
    return FileSchemaTestClassFromJSONTyped(json, false);
}

export function FileSchemaTestClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileSchemaTestClass {
    if (json == null) {
        return json;
    }
    return {
        
        'file': json['file'] == null ? undefined : json['file'],
        'files': json['files'] == null ? undefined : json['files'],
    };
}

  export function FileSchemaTestClassToJSON(json: any): FileSchemaTestClass {
      return FileSchemaTestClassToJSONTyped(json, false);
  }

  export function FileSchemaTestClassToJSONTyped(value?: FileSchemaTestClass | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'file': value['file'],
        'files': value['files'],
    };
}

