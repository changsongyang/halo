/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.11-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SearchOption
 */
export interface SearchOption {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SearchOption
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof SearchOption
     */
    'filterExposed'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchOption
     */
    'filterPublished'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchOption
     */
    'filterRecycled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchOption
     */
    'highlightPostTag'?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchOption
     */
    'highlightPreTag'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchOption
     */
    'includeCategoryNames'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchOption
     */
    'includeOwnerNames'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchOption
     */
    'includeTagNames'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchOption
     */
    'includeTypes'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SearchOption
     */
    'keyword': string;
    /**
     * 
     * @type {number}
     * @memberof SearchOption
     */
    'limit'?: number;
}

