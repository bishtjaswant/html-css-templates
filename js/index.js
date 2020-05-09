$(function () { 

// for bubble effect
    $('.bubble').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });


    /// for smooth scrolling

    var scroll = new SmoothScroll('a[href*="#"]');
 
    
 })