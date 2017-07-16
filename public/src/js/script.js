(function($, window) {
    "use strict";

    const ndd = {
        fadeInHero: {
            test() {
                return true;
            },
            run() {
                $("body").addClass("flex-grid-loaded main-styles-loaded");
            }
        },
        scrollToSection: {
            test() {
                return $(".page--home").length;
            },
            run() {
                const triggers = $(".main-nav__link");

                triggers.on("click", function(e) {
                    e.preventDefault();
                    let target = $(this).attr("href"),
                        targetOffset = $(target).offset().top;

                    $("html, body").animate({scrollTop: targetOffset});
                });
            }
        },
        spaceFooter: {
            test() {
                return true;
            },
            run() {
                ndd.spaceFooter.makeSpace();

                $(window).on("resize", function() {
                    ndd.spaceFooter.makeSpace();
                });
            },
            makeSpace() {
                let footerHt = $("footer").height();

                $("#contact").height(footerHt);
            }
        },
        fadeInGrid: {
            test() {
                return $(".page--home").length;
            },
            run() {
                const $window = $(window),
                      $document = $(document),
                      workOffset = $("#work").offset().top - 32,
                      aboutOffset = $("#about").offset().top - 32;

                $window.on("scroll", function() {
                    let scrollPos = $document.scrollTop();

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

    for (let key in ndd) {
        if (ndd[key].test()) {
            ndd[key].run();
        }
    }
}(jQuery, window));
