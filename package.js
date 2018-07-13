Package.describe({
  name: 'clinical:ihealth-cloud-api',
  summary: "Support for iHealth devices",
  version: "1.1.0",
  git: 'http://github.com/clinical-meteor/ihealth-cloud-api',
  documentation: 'README.md'

});

Package.onUse(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.addFiles("ihealth_client.js", 'client');
  api.addFiles("ihealth_server.js", 'server');
  api.addFiles("ihealth.js");
});

