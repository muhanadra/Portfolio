/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';
  //TODO replace myData variable with a JQUERY $.getJSON request
  var myData = [
    {
      "projects": [{
            "title": "Feedreader Unit Testing",
            "url": "/projects/feedreader unit testing",
            "link": "http://neo0rabie.github.io/frontend-nanodegree-feedreader/",
            "github": "https://github.com/neo0rabie/frontend-nanodegree-feedreader",
            "imgSrc": "images/feedreader.png",
            "bp": ["Test Driven Development", "Unit Testing", "Google Reader API", "Jasmine"],
            "description": "A web-based application that reads RSS feeds using Google Feed API, This application is part of Udacity Front-end nano-degree program. As A student I wrote all the required tests to test the funactionality of this app using Jasmine liberary"
        },
        {
            "title": "Filming locations",
            "url": "/projects/filming-locations",
            "link": "http://neo0rabie.github.io/neighborhood-map/",
            "github": "https://github.com/neo0rabie/eighborhood-map/",
            "imgSrc": "images/location.png",
            "bp": ["Google Map Api", "KnockOut liberary", "Data Binding", "Javascript Design Patterns", "Seperation of concern", "MVC"],
            "description": "An Application that uses Google Maps Api to show the filming locations of Richard Linklater Before Sunrise trilogy."
        },
        {
            "title": "Frogger Arcade Game",
            "url": "/projects/frogger-arcade-game",
            "link": "http://neo0rabie.github.io/frontend-nanodegree-arcade-game/",
            "github": "https://github.com/neo0rabie/frontend-nanodegree-arcade-game",
            "imgSrc": "images/frogger.png",
            "bp": ["Object Oriented Programming", "Git", "HTML5 Canvas"],
            "description": "A remake of the classic arcade game to test my skills in Object Oriented Programming as part of Udacity Front-end nano-degree program"
        },
        {
            "title": "Mobile Website Optimization",
            "url": "/projects/mobile-website-optimization",
            "link": "http://neo0rabie.github.io/frontend-nanodegree-mobile-portfolio/",
            "github": "https://github.com/neo0rabie/frontend-nanodegree-mobile-portfolio",
            "imgSrc": "images/udacity.png",
            "bp": ["Web Optimization", "Critical Rendering Path", "Optimize JavaScript Execution", "Simplify paint complexity and reduce paint areas"],
            "description": "A Mobile Portfolio, Optimized to have a score of 96 in Google PageSpeed, and a framerate of 60hz for animation"
        },
        {
            "title": "Azm Technologies",
            "url": "/projects/azm-technologies",
            "link": "http://www.azmtech.org/",
            "github": "https://github.com/neo0rabie",
            "imgSrc": "images/azm.png",
            "status": "Under Development",
            "description": "AZM is an Innovative IT Saudi company That provides professional IT services in the Fields of networking infrastructure, Data Center and DRC solutions, Security, Software Development, Integration, Consultation and Manpower Supply."
        }]
    },
    {
      "games": [{
            "title": "Minesweaper",
            "link": "http://neo0rabie.github.io/minesweaper",
            "github": "Beginner",
            "imgSrc": "images/interative-design.svg",
            "status": "Under Development",
            "description": "My version of the classic game created with Web components and Polymer and Material Design"
        },
        {
            "title": "Frogger Arcade Game",
            "link": "http://neo0rabie.github.io/frontend-nanodegree-arcade-game/",
            "github": "https://github.com/neo0rabie/frontend-nanodegree-arcade-game",
            "imgSrc": "images/frogger.png",
            "status": "New",
            "description": "A remake of the classic arcade game to test my skills in Object Oriented Programming as part of Udacity Front-end nano-degree program"
        },
        {
            "title": "Rubik Cube",
            "link": "http://neo0rabie.github.io/",
            "github": "https://github.com/neo0rabie/",
            "imgSrc": "images/interative-design.svg",
            "status": "Under Development",
            "description": "Experiencing with three.js liberary, the 3D javascript liberary."
        }]
    },
    {
      "skills": [{
            "title": "Javascript",
            "Year": "2012",
            "level": "Very Good",
            "class": "cc-symbol cc-symbol-icon-javascript",
            "imgSrc": "img/javascript.jpg",
            "description": "You can't call yourself a front-end developer without javascript, or can you? Not quiet the js ninja yet but I am getting there."
        },
        {
            "title": "HTML5",
            "Year": "2011",
            "level": "Very Good",
            "class": "cc-symbol cc-symbol-icon-html",
            "imgSrc": "img/html.jpg",
            "description": "More semantic elements and awesome APIs, what's not to love."
        },
        {
            "title": "CSS3",
            "Year": "2011",
            "level": "Very Good",
            "class": "cc-symbol cc-symbol-icon-css",
            "imgSrc": "img/css3.jpg",
            "description": "The main tool against native apps, and also clean and nice styling is nice don't you think?"
        },
        {
            "title": "PHP",
            "Year": "2012",
            "level": "Beginner",
            "class": "cc-symbol cc-symbol-icon-php",
            "imgSrc": "img/php.jpg",
            "description": "A lot of tutorials and some experience with developing Drupal modules and manipulating Wordpress templates."
        },
        {
            "title": "Python",
            "Year": "2014",
            "level": "Beginner",
            "class": "cc-symbol cc-symbol-icon-python",
            "imgSrc": "img/python.jpg",
            "description": "Just started learning Python as part of Udacity Full-stack Nano degree Program. Have I told you I love Udacity?"
        },
        {
            "title": "Polymer",
            "Year": "2014",
            "level": "Good",
            "icon": "polymer",
            "ironClass": "lg-icon",
            "imgSrc": "img/polymer.jpg",
            "description": "Web components and future of the of web, I believe early adopters have a lot to gain."
        },
        {
            "title": "Angular JS",
            "Year": "2014",
            "level": "Good",
            "imgIcon": "images/angularjs.svg",
            "imgSrc": "images/angularjs.svg",
            "description": "The Rock star of JS libraries, with such a huge base of users and support nothing much can go wrong."
        },
        {
            "title": "Drupal",
            "Year": "2012",
            "level": "Very Good",
            "class": "fa fa-drupal",
            "imgSrc": "img/drupal.jpg",
            "description": "My Content Management, or framework, of choice. All the early sites I build was with Drupal and I owe its community a lot for their help and support."
        },
        {
            "title": "Git",
            "Year": "2014",
            "level": "Good",
            "class": "fa fa-git-square",
            "imgSrc": "img/git.jpg",
            "description": "Developing was a nightmare till I discovered Git, I've no idea how people can live without it."
        },
        {
            "title": "Gulp",
            "Year": "2014",
            "level": "Good",
            "icon": "socialmedia:gulp",
            "ironClass": "lgx-icon",
            "description": "Building tools are the SDK of web developments. which do make it harder for beginners but the benefits are just too great to pass."
        },
        {
            "title": "Adobe Illustrator",
            "Year": "2010",
            "level": "Good",
            "icon": "socialmedia:illustrator",
            "ironClass": "lgx-icon",
            "imgSrc": "img/git.jpg",
            "description": "I know the basics to get by. create my svgs and play around with vectors."
        },
        {
            "title": "Adobe Photoshop",
            "Year": "2006",
            "level": "Very Good",
            "icon": "socialmedia:photoshop",
            "ironClass": "lgx-icon",
            "imgSrc": "img/photoshop.jpg",
            "description": "The greatest piece of software. OK maybe not the greatest but a great tool to have in your belt non the less."
        }]
    },
    {
        "home": [{
            "title": "Skills",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "code"
        },
        {
            "title": "Contact",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "mail"
        },
        {
            "title": "About",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "account-circle"
        },
        {
            "title": "Projects",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "work"
        },
        {
            "title": "Games",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "hardware:gamepad"
        },
        {
            "title": "Frogger",
            "imgSrc": "images/frogger.png",
            "link": "Add link here",
            "icon": "bug-report"
        },
        {
            "title": "Services",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "gesture"
        },
        {
            "title": "Blog",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here",
            "icon": "create"
        }]
    }
  ];

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Adding the different sections from myData JSON file to to our reference app
  app.projects = myData[0]['projects'];
  app.games = myData[1]['games'];
  app.skills = myData[2]['skills'];
  app.home =  myData[3]['home'];

  app.isOpen = false;

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    setTimeout(alignItem, 100);
    $('.page-header #ink').removeClass('circle');

  });

  var alignItem = function() {
    var targetedItem = '.category-item:nth-child(7)';
    var regItem = '.category-item:nth-child(2)';
    var itemH = $(targetedItem).height();
    var itemReg = $(regItem).height();

    if (itemH == itemReg ) {
      $(targetedItem).css('top', 0);
      $('.category-list').css('overflow', 'auto');
    }
    else {
      var verticalLift = $(targetedItem).height() / -2;
      $(targetedItem).css('top', verticalLift);
      $('.category-list').scrollTop( 0 );
      $('.category-list').css('overflow', 'hidden');
    }
  };
  setTimeout(alignItem, 100);
  $(window).resize(alignItem);
  // TODO Use position absolute and remove alignItem function
  setInterval(alignItem, 500);

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);
