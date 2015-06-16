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
  //TODO replace myData variables with a JQUERY $.getJSON request
  var myData = [
    {
      "projects": [{
            "title": "Feedreader Unit testing",
            "link": "github.com",
            "github": "github.com/neo0rabie",
            "imgSrc": "img/scene01.jpg",
            "bp": ["Test Driven Development", "Unit testing", "Google Reader API", "Jasmine"],
            "description": "A web-based application that reads RSS feeds using Google Feed API, This application is part of Udacity Front-end nano-degree program. As A student I wrote all the required tests to test the funactionality of this app using Jasmine liberary"
        },
        {
            "title": "Filming locations",
            "link": "github.com",
            "github": "github.com/neo0rabie",
            "imgSrc": "img/scene01.jpg",
            "bp": ["Google Map Api", "KnockOut liberary", "Data Binding", "Javascript Design Patterns", "Seperation of concern", "MVC"],
            "description": "An Application that uses Google Map Api to show the filming locations of some of my favorite movies"
        },
        {
            "title": "Frogger Arcade Game",
            "link": "github.com",
            "github": "github.com/neo0rabie",
            "imgSrc": "img/scene01.jpg",
            "bp": ["Object Oriented Programming", "Git", "HTML5 Canvas"],
            "description": "A remake of the classic arcade game to test my skills in Object Oriented Programming as part of Udacity Front-end nano-degree program"
        },
        {
            "title": "Mobile Website Optimization",
            "link": "Shakespeare and Company",
            "github": "I just want to see if you're going to Dissolve into molecules.",
            "imgSrc": "img/scene01.jpg",
            "bp": ["Web Optimization", "Critical Rendering Path", "Optimize JavaScript Execution", "Simplify paint complexity and reduce paint areas"],
            "description": "A Mobile Portfolio, Optimized to have a score of 96 in Google PageSpeed, and a framerate of 60hz for animation"
        },
        {
            "title": "Azm Technologies",
            "link": "Shakespeare and Company",
            "github": "I just want to see if you're going to Dissolve into molecules.",
            "imgSrc": "img/scene01.jpg",
            "description": "Jesse in his final destination in his book tour, Which happens to be Celine best Bookstore in Paris, The Universe must be conspiraying to bring this too together. They just don't know it."
        }]
    },
    {
      "games": [{
            "title": "Minesweaper",
            "link": "Rue Saint-Julien le Pauvre 75005 Paris, France",
            "github": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "1-A fair description of the scene and why you personally connect with it"
        },
        {
            "title": "Frogger Arcade Game",
            "link": "Rue Saint-Julien le Pauvre 75005 Paris, France",
            "github": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "1-A fair description of the scene and why you personally connect with it"
        },
        {
            "title": "Rubik Cube",
            "link": "Rue Saint-Julien le Pauvre 75005 Paris, France",
            "github": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "1-A fair description of the scene and why you personally connect with it"
        }]
    },
    {
      "skills": [{
            "title": "Javascript",
            "Year": "2012",
            "level": "Very Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "Drupal",
            "Year": "2012",
            "level": "Very Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "HTML",
            "Year": "2011",
            "level": "Very Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "CSS",
            "Year": "2011",
            "level": "Very Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "PHP",
            "Year": "2012",
            "level": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "Python",
            "Year": "2014",
            "level": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "Polymer",
            "Year": "2014",
            "level": "Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "Git",
            "Year": "2014",
            "level": "Good",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        },
        {
            "title": "Adobe Photoshop",
            "Year": "2006",
            "level": "Beginner",
            "imgSrc": "img/scene01.jpg",
            "description": "Celine give Jesse the finger"
        }]
    },
    {
        "home": [{
            "title": "Skills",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Contact",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "About",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Projects",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Frogger",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Blog Posts",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Services",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
        },
        {
            "title": "Blog Posts",
            "imgSrc": "img/scene01.jpg",
            "link": "Add link here"
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
  //$('.category-list').css('display', 'none');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    setTimeout(alignItem, 100);
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
  $(window).on('hashchange', alignItem);
  $(window).resize(alignItem);

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
