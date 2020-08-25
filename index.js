const slides = document.querySelectorAll(".slick-slide")
const loader = document.querySelector(".loader")
// settings
$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
  })
})

// On before slide change
$(".carousel").on("beforeChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  const next = slides[nextSlide]
  const content = next.childNodes[0]

  loader.style.visibility = "visible"
  content.style.visibility = "hidden"

  setTimeout(() => {
    loader.style.visibility = "hidden"

    content.style.visibility = "visible"
  }, 3000)
})
