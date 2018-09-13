/////SMOOTH SCROLL////////////////////
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

/////////////NAVIGATION//////////////////

const nav = $(".my-nav");
const height = nav.outerHeight();

$(window).scroll(function(e) {
  if ($(this).scrollTop() >= height) {
    $(document.body).addClass("fixed-nav");
    $(document.body).css("padding-top", height + "px");
  } else {
    $(document.body).removeClass("fixed-nav");
    $(document.body).css("padding-top", "0");
  }
});

const links = $(".my-nav .navbar-nav a");
const highlight = $("<span></span>");
highlight.addClass("highlight");
nav.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const linkWidth = $(this).width();
  const padding = parseInt($(this).css("padding-left"));
  const offsetLeft = linkCoords.x + padding;
  const offsetUp = linkCoords.y;
  console.log(offsetUp);

  highlight.css("width", linkWidth + "px");
  highlight.css("left", offsetLeft);
  highlight.css("top", offsetUp + padding / 2);
}

function expiryLink() {
  highlight.css("top", "-999999px");
}

links.each(function() {
  $(this).mouseenter(highlightLink);
  $(this).mouseleave(expiryLink);
});

/////////GALLERY///////////
$(window).resize(function() {
  if ($(window).width() <= 769) $(".fa-iconname").addClass("lg-2x");
  else $(".fa-iconname").removeClass("lg-2x");
});
