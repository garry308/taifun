var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


// $(document).ready(function() {
//   if( isMobile.any() ) return;
//   var windowHeight = $(window).height();
//   $('.eco__section div').each(function() {
//      $(this).css('opacity', "0");
//   });
//     $('.eco__section1 div').each(function() {
//      $(this).css('opacity', "0");
//   });
//   $(document).on('scroll', function() {
//     $('.eco__section div').each(function() {
//       var self = $(this),
//       height = self.offset().top;
     
//       if ($(document).scrollTop() + windowHeight >= height) {
//         slideL(self);
//       }
//     });

//     $('.eco__section1 div').each(function() {
//       var self = $(this),
//       height = self.offset().top;
      
//       if ($(document).scrollTop() + windowHeight >= height) {
//         slideR(self);
//       }
//     });
//   });
// });


// function slideL(element) {
//   if (!element.hasClass("animated")) {
//     element.addClass("animated");
//     var ml = element.css('marginLeft');
//     element.css('marginLeft', "-100vw");
//     element.css('opacity', "1");
//     element.animate({ marginLeft: ml }, 1000);
//   }
// }

// function slideR(element) {
//   if (!element.hasClass("animated")) {
//     element.addClass("animated");
//     var ml = element.css('marginLeft');
//     element.css('marginLeft', "150vw");
//     element.css('opacity', "1");
//     if (element.hasClass("agrar__block")) {
//       element.animate({ marginLeft: "0px" }, 1000);
//     }
//     else {
//       element.animate({ marginLeft: ml }, 1000);
//     }
//   }
// }


