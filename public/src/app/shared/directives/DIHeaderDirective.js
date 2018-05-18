(function() {
  'use strict';

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .directive('diHeader', DIHeader);

  /** @ngInject */
  function DIHeader (){
    return {
      restrict: 'E',
      templateUrl: 'app/shared/views/header.html',
      scope: true,
      controllerAs: 'header',
      controller: function ($scope, $log, $state, $stateParams, $document) {
        var vm = this;
        vm.showBlock = false;
        vm.showDropdown = false;
        vm.showUserbar = false;

        vm.isMobile = IS_MOBILE;
        vm.subMenuVisible = false;
        vm.notifcationCounter = 4;

        vm.menu = [
          {
            title: 'How it works',
            link: '/how-it-works',
            state: 'howItWorks'
          }
        ];

        vm.subMenu = [
          {
            title: 'About Us',
            link: '/about-us',
            state: 'aboutUs',
            isShown: true
          },
          {
            title: 'Contact Us',
            link: '/contact-us',
            state: 'contactUs',
            isShown: true
          },
          {
            title: 'Blog',
            link: '/blog',
            isShown: true
          },
          {
            title: 'FAQs',
            link: '/faq',
            isShown: true
          }
        ];

        vm.userBar = [
          {
            title: 'My Rating',
            link: '/my-rating',
            state: 'myRating'
          },
          {
            title: 'My Cars',
            link: '/my-cars',
            state: 'myCars'
          },
          {
            title: 'My Offers',
            link: '/my-offers',
            state: 'myOffers'
          },
          {
            title: 'Offer History',
            link: '/offer-history',
            state: 'offerHistory'
          },
          {
            title: 'My Details',
            link: '/my-details',
            state: 'myDetails'
          }
        ];

        vm.trigDropdown = function () {
          vm.showDropdown = !vm.showDropdown;
        };

        vm.hideDropdown = function () {
          vm.showDropdown = false;
        };

        vm.hideUserbar = function () {
          vm.showUserbar = false;
        };

        vm.trigUserbar = function () {
          vm.showUserbar = !vm.showUserbar;
        };

        vm.toggleMenu = function () {
          vm.showBlock = !vm.showBlock;
        };

        vm.hideMenu = function () {
          vm.showBlock = false;
        };

      }
    };
  }

})();
