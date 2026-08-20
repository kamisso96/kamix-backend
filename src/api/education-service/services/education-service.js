'use strict';

/**
 * education-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::education-service.education-service');
