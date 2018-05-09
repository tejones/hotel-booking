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

const fs = require('fs');
const {promisify} = require('util');

const readFileAsync = promisify(fs.readFile);

// Look here by default
const KUBERNETES_SERVICE_ACCOUNT_TOKEN_PATH = '/var/run/secrets/kubernetes.io/serviceaccount/token';
const KUBERNETES_SERVICE_ACCOUNT_CA_CRT_PATH = '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt';
const KUBERNETES_SERVICE_ACCOUNT_NAMESPACE_PATH = '/var/run/secrets/kubernetes.io/serviceaccount/namespace';

async function loadServiceAccountConfig (options) {
  options = options || {};

  const host = process.env.KUBERNETES_SERVICE_HOST;
  const port = process.env.KUBERNETES_SERVICE_PORT;

  // Check to see if that CA_CRT_PATH is there and if it is load it as a string
  // set this as user.ca

  // Check and load the TOKEN
  // set that is the user.token property

  // Check and load the NAMESPACE
  // set this as context.namespace

  let ca;
  let token;
  let namespace;

  const fileOptions = {encoding: 'utf8'};

  // Just quick and dirty for now
  try {
    ca = await readFileAsync(KUBERNETES_SERVICE_ACCOUNT_CA_CRT_PATH, fileOptions);
    token = await readFileAsync(KUBERNETES_SERVICE_ACCOUNT_TOKEN_PATH, fileOptions);
    namespace = await readFileAsync(KUBERNETES_SERVICE_ACCOUNT_NAMESPACE_PATH, fileOptions);
  } catch (err) {
    return Promise.reject(err);
  }

  // Merge those bits together into a new object
  const config = Object.assign({},
    {apiVersion: 'v1'},
    {context: {namespace: namespace}},
    {
      user: {
        token: token,
        ca: ca
      }
    },
    {cluster: `https://${host}:${port}`}
  );

  // resolve the promise with the config obejct
  return config;
}

module.exports = loadServiceAccountConfig;
