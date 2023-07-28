'use strict';

/**
 * dubai-ambassador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dubai-ambassador.dubai-ambassador');
