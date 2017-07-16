"use strict";

(function ($, window) {
    "use strict";

    var ndd = {
        fadeInHero: {
            test: function test() {
                return true;
            },
            run: function run() {
                $("body").addClass("flex-grid-loaded main-styles-loaded");
            }
        },
        scrollToSection: {
            test: function test() {
                return $(".page--home").length;
            },
            run: function run() {
                var triggers = $(".main-nav__link");

                triggers.on("click", function (e) {
                    e.preventDefault();
                    var target = $(this).attr("href"),
                        targetOffset = $(target).offset().top;

                    $("html, body").animate({ scrollTop: targetOffset });
                });
            }
        },
        spaceFooter: {
            test: function test() {
                return true;
            },
            run: function run() {
                ndd.spaceFooter.makeSpace();

                $(window).on("resize", function () {
                    ndd.spaceFooter.makeSpace();
                });
            },
            makeSpace: function makeSpace() {
                var footerHt = $("footer").height();

                $("#contact").height(footerHt);
            }
        },
        fadeInGrid: {
            test: function test() {
                return $(".page--home").length;
            },
            run: function run() {
                var $window = $(window),
                    $document = $(document),
                    workOffset = $("#work").offset().top - 32,
                    aboutOffset = $("#about").offset().top - 32;

                $window.on("scroll", function () {
                    var scrollPos = $document.scrollTop();

                    if (scrollPos >= workOffset && !$(".portfolio__grid").hasClass("shown")) {
                        $(".portfolio__grid").addClass("shown");
                    }
                    if (scrollPos >= aboutOffset && !$(".background__image").hasClass("shown")) {
                        $(".background__image").addClass("shown");
                    }
                });
            }
        }
    };

    for (var key in ndd) {
        if (ndd[key].test()) {
            ndd[key].run();
        }
    }
})(jQuery, window);