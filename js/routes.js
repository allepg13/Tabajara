angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.detalhes', {
    url: '/detalhes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalhes.html',
        controller: 'detalhesCtrl'
      }
    }
  })

  .state('menu.contato', {
    url: '/contato',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.serviOs', {
    url: '/serviços',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviOs.html',
        controller: 'serviOsCtrl'
      }
    }
  })

  .state('locais', {
    url: '/locais',
    templateUrl: 'templates/locais.html',
    controller: 'locaisCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/inicio')

  

});