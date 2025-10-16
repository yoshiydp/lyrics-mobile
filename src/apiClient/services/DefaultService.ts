/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get all data
     * Returns all mock data defined in /src/data directory.
     * @returns any OK
     * @throws ApiError
     */
    public static getData(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data',
        });
    }
    /**
     * Get memo data
     * Returns mock data for MEMO_DATA.
     * @returns any OK
     * @throws ApiError
     */
    public static getMemo(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/memo',
        });
    }
    /**
     * Get profile data
     * Returns mock data for PROFILE_DATA.
     * @returns any OK
     * @throws ApiError
     */
    public static getProfile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/profile',
        });
    }
    /**
     * Get project data
     * Returns mock data for PROJECT_DATA.
     * @returns any OK
     * @throws ApiError
     */
    public static getProject(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/project',
        });
    }
    /**
     * Get record data
     * Returns mock data for RECORD_DATA.
     * @returns any OK
     * @throws ApiError
     */
    public static getRecord(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/record',
        });
    }
    /**
     * Get track data
     * Returns mock data for TRACK_DATA.
     * @returns any OK
     * @throws ApiError
     */
    public static getTrack(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/track',
        });
    }
}
