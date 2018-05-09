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

const os = require('os');
const fs = require('fs');

const jsyaml = require('js-yaml');

// Look here by default
const DEFAULT_CONFIG_LOCATION = `${os.homedir()}/.kube/config`;

function loadConfig (options) {
  return new Promise((resolve, reject) => {
    options = options || {};

    // use the default location or a user defined location
    const configLocation = options.configLocation ? options.configLocation : DEFAULT_CONFIG_LOCATION;

    // First, load the config file from the location.
    fs.readFile(configLocation, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      // Second, parse yaml file to JSON
      const jsonConfig = jsyaml.safeLoad(data);

      // Third, find the current context in the config, and then get the user for that context and the cluster
      const currentContext = jsonConfig.contexts.filter((v) => {
        return v.name === jsonConfig['current-context'];
      })[0];

      const currentUser = jsonConfig.users.filter((u) => {
        return u.name === currentContext.context.user;
      })[0];

      const currentCluster = jsonConfig.clusters.filter((c) => {
        return c.name === currentContext.context.cluster;
      })[0];

      // Merge those bits together into a new object
      const config = Object.assign({},
        {apiVersion: jsonConfig.apiVersion},
        {context: currentContext.context},
        {user: currentUser.user},
        {cluster: currentCluster.cluster.server}
      );

      // resolve the promise with the config obejct
      return resolve(config);
    });
  });
}

module.exports = loadConfig;
