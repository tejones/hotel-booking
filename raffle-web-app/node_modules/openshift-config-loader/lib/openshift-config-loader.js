'use strict';

/*
 *
 *  Copyright 2016-2017 Red Hat, Inc, and individual contributors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const kubeConfigLoader = require('./kube-config-loader');
const serviceAccountLoader = require('./service-account-loader');

const KUBERNETES_AUTH_TRYSERVICEACCOUNT = process.env.KUBERNETES_AUTH_TRYSERVICEACCOUNT || true;

/**
  This module will load attempt to load the Openshift configuration

  @param {object} [options] -
  @param {string} [options.tryServiceAccount] - option to turn off looking for a service account. defaults to true
  @returns {Promise}
*/
module.exports = function configLoader (options) {
  options = options || {};

  if (options.tryServiceAccount !== false) {
    options.tryServiceAccount = true;
  }

  // Try loading the config from the kube file
  return kubeConfigLoader(options).catch((err) => {
    // Do we want to check for a Service Account
    if (!options.tryServiceAccount || !KUBERNETES_AUTH_TRYSERVICEACCOUNT) {
      return Promise.reject(err);
    }

    // try loading with the service account
    return serviceAccountLoader(options).catch((err) => {
      // If that fails, then fail
      return Promise.reject(err);
    });
  });
};
