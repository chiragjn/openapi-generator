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
 * Just a string to inform instance is up and running. Make it nullable in hope to get it as pointer in generated model.
 * @export
 * @interface HealthCheckResult
 */
export interface HealthCheckResult {
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResult
     */
    nullableMessage?: string | null;
}

/**
 * Check if a given object implements the HealthCheckResult interface.
 */
export function instanceOfHealthCheckResult(value: object): value is HealthCheckResult {
    return true;
}

export function HealthCheckResultFromJSON(json: any): HealthCheckResult {
    return HealthCheckResultFromJSONTyped(json, false);
}

export function HealthCheckResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthCheckResult {
    if (json == null) {
        return json;
    }
    return {
        
        'nullableMessage': json['NullableMessage'] == null ? undefined : json['NullableMessage'],
    };
}

  export function HealthCheckResultToJSON(json: any): HealthCheckResult {
      return HealthCheckResultToJSONTyped(json, false);
  }

  export function HealthCheckResultToJSONTyped(value?: HealthCheckResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NullableMessage': value['nullableMessage'],
    };
}

