System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "content/*": "src/content/*.js",
    "shared/": "src/shared/",
    "forms/*": "src/forms/*.js",
    "rentta/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-animate": "github:angular/bower-angular-animate@1.5.0",
    "angular-aria": "github:angular/bower-angular-aria@1.5.0",
    "angular-material": "github:angular/bower-material@master",
    "angular-material-icons": "npm:angular-material-icons@0.6.0",
    "angular-messages": "github:angular/bower-angular-messages@1.5.0",
    "css": "github:systemjs/plugin-css@0.1.20",
    "json": "github:systemjs/plugin-json@0.1.0",
    "mongoose": "github:gavinaiken/mongoose-browser@4.0.2",
    "ngmap": "github:allenhwkim/angularjs-google-maps@1.16.7",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.91",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91",
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:angular-material-icons@0.6.0": {
      "angular": "npm:angular@1.5.0"
    }
  }
});
