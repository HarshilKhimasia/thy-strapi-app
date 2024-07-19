'use strict';

/**
 * schedule-a-tour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-a-tour.schedule-a-tour');
