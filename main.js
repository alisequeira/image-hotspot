//selection

//will select all tooltip
const tooltips = document.querySelectorAll(".all-tooltips .tooltip");
const fullDiv = document.querySelector("section");
const container = document.querySelector(".container");

//Event listener
window.addEventListener("DOMContentLoaded", contentPosition);
window.addEventListener("resize", contentPosition);

//It will dynamically positioned our content every time when we call the function
function contentPosition() {
  tooltips.forEach((tooltip) => {
    const pin = tooltip.querySelector(".pin");
    const tooltipContent = tooltip.querySelector(".tooltip-content");
    const arrow = tooltip.querySelector(".arrow");
    if (pin.offsetLeft + tooltipContent.offsetWidth / 2 > fullDiv.offsetWidth) {
      const extraLeft =
        fullDiv.offsetWidth - (pin.offsetLeft + tooltipContent.offsetWidth / 2);
      tooltipContent.style.left =
        pin.offsetLeft - tooltipContent.offsetWidth / 2 + extraLeft - 30 + "px";
    } else if (
      pin.offsetLeft + container.offsetLeft <
      tooltipContent.offsetWidth / 2
    ) {
      tooltipContent.style.left = -container.offsetLeft + "px";
    } else {
      tooltipContent.style.left =
        pin.offsetLeft - tooltipContent.offsetWidth / 2 + "px";
    }

    tooltipContent.style.top = pin.offsetTop + 30 + "px";
    tooltipContent.style.top = pin.offsetTop + 40 + "px";
    arrow.style.left =
      pin.offsetLeft - tooltipContent.offsetLeft + pin.offsetWidth / 2 + "px";
  });
}

tooltips.forEach((tooltip) => {
  const pin = tooltip.querySelector(".pin");
  const tooltipContent = tooltip.querySelector(".tooltip-content");
  pin.addEventListener("mouseover", () => {
    tooltip.classList.add("active");
  });
  pin.addEventListener("mouseleave", () => {
    tooltip.classList.remove("active");
  });
});
