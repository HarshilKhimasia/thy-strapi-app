'use strict';

/**
 * all-policy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::all-policy.all-policy');
