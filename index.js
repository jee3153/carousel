const slides = document.querySelectorAll(".slick-slide")
const loaders = document.querySelectorAll(".loader")
const prevArrow = document.querySelector("slick-prev")

// settings
$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    responsive: true,
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
  let next = slides[nextSlide]
  let content = next.childNodes[0]
  let loader = next.childNodes[1]

  loader.style.visibility = "visible"
  content.style.visibility = "hidden"

  setTimeout(() => {
    loader.classList.remove("visible")
    loader.style.visibility = "hidden"

    content.style.visibility = "visible"
  }, 3000)
})
