// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

import { config } from '../config';

export const environment = {
  production: false,
  apiURL: config.webApi,
  // Source: https://github.com/bbachi/keycloak-todos/blob/master/src/environments/environment.ts
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/beatblender',

    // URL of the SPA to redirect the user to after login
    // redirectUri: window.location.origin + '/sample-market',
    redirectUri: window.location.origin,
    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'spa-beatblender',

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email offline_access',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
