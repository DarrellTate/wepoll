// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCPmqGv2cBrCDEqpawQIm4BpYZt9CHRS6E",
    authDomain: "wepoll-demo.firebaseapp.com",
    databaseURL: "https://wepoll-demo.firebaseio.com",
    projectId: "wepoll-demo",
    storageBucket: "wepoll-demo.appspot.com",
    messagingSenderId: "1020137025831"
  }
};
