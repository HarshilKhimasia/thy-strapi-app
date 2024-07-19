'use strict';

/**
 * all-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-policy.all-policy');
