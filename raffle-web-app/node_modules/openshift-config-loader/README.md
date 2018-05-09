[![Build Status](https://travis-ci.org/bucharest-gold/openshift-config-loader.svg?branch=master)](https://travis-ci.org/bucharest-gold/openshift-config-loader)  [![Coverage Status](https://coveralls.io/repos/github/bucharest-gold/openshift-config-loader/badge.svg?branch=master)](https://coveralls.io/github/bucharest-gold/openshift-config-loader?branch=master)

### Openshift Config Loader

[![Greenkeeper badge](https://badges.greenkeeper.io/bucharest-gold/openshift-config-loader.svg)](https://greenkeeper.io/)

Node.js based client for loading an Openshift config file.

Defaults to the ~/.kube/config file

### Example Usage

Install the dependecy

    npm install openshift-config-loader

Code:

    'use strict';

    const openshiftConfigLoader = require('openshift-config-loader');

    openshiftConfigLoader().then((config) => {
      console.log(config);
    });

#### How It Works

First, the config loader will look, by default, a file named `~/.kube/config` .  If it can't find it, then the config loader will try loading the config as a service account.

You can turn off the service account lookup by either passing an `options` object with the property `options.tryServiceAccount` equal to `false` or set an environment variable named `KUBERNETES_AUTH_TRYSERVICEACCOUNT` equal to false


For Example:

    const options = {
      tryServiceAccount: false
    };

    openshiftConfigLoader(options).then((config) => {
      console.log(config);
    });
