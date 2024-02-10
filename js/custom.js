$(document).ready(function() {
    var controllerTop = new ScrollMagic.Controller({
        container: "#topTrigger",
        loglevel: 3
    });
    var controllerMiddle = new ScrollMagic.Controller({
        container: "#middleTrigger",
        loglevel: 3
    });
    var controllerBottom = new ScrollMagic.Controller({
        container: "#bottomTrigger",
        loglevel: 3
    });
    $(".animate-slide-up").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            reverse: !1
        }).setClassToggle(this, 'animated').addTo(controllerBottom)
    });
    $(".animate-slide-down").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            reverse: !1
        }).setClassToggle(this, 'animated').addTo(controllerBottom)
    });
    $(".animate-slide-right").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            reverse: !1
        }).setClassToggle(this, 'animated').addTo(controllerMiddle)
    });
    $(".animate-slide-left").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            reverse: !1
        }).setClassToggle(this, 'animated').addTo(controllerMiddle)
    })
});