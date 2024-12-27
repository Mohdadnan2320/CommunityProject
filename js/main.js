(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    $(document).ready(function () {
        $('.btn-play').click(function () {
            // Get the video source from the data-src attribute
            var videoSrc = $(this).data("src");
            
            // Update the iframe's src to play the video with autoplay enabled
            $("#video").attr('src', videoSrc + "?autoplay=1");
    
            // Show the modal containing the iframe
            $('#videoModal').modal('show');
        });
    
        // Clear the iframe src when the modal is closed to stop the video
        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', '');
        });
    });
    


    // Modal Video
    // var $videoSrc;
    // $('.btn-play').click(function () {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);
    // $('#videoModal').on('shown.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    // })

    // $('#videoModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src', '');
    // });

    // $('#videoModal').on('show.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc);
    // });

    // $('#videoModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc);
    // })

    // $(document).ready(function() {
    //     // var $videoSrc = $("#video").attr('src');
        
       
    // });
})(jQuery);

// document.getElementById('btn-play').addEventListener('click', function () {
//     const iframe = document.getElementById('video-frame');
//     const videoUrl = "https://www.youtube.com/embed/q4v1rXmXt98?si=uYtA0PcGvVhH4dBZ";

   
//     iframe.src = videoUrl + "?autoplay=1";
//     iframe.style.display = "block"; 
//   });

document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("btn-play");
    const iframe = document.getElementById("video-frame");

    playButton.addEventListener("click", function () {
        // Get the video source from the data-src attribute
        const videoSrc = playButton.getAttribute("data-src");

        // Set the iframe source to the video URL and enable autoplay
        iframe.src = videoSrc + "?autoplay=1";
        iframe.style.display = "block"; // Show the iframe
    });
});
