const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'netflix_gpt',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

