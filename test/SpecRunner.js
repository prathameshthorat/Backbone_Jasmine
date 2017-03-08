require.config({
  //baseUrl: "/app",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: '../bower_components/jquery/jquery.min',
    underscore: '../bower_components/underscore/underscore-min',
    backbone: '../bower_components/backbone/backbone-min',
    i18next: '../bower_components/i18next/i18next.min',
    text: '../bower_components/text/text',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    spec: '../../test'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    i18next:{
      deps: ["jquery"],
      exports : "i18next"
    },
    bootstrap:{
      deps: ["jquery"]
    }
  }
});

require(['jquery', 'index'], function($, index) {
  var jasmineEnv = jasmine.getEnv(),
      htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(function() {
    require(index.specs, function() {
      jasmineEnv.execute();
    });
  });
});