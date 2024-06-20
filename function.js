function hexToRgb(hex, returnAsString = false) {
  // Remove the '#' if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return as an array or a string based on the user's choice
  if (returnAsString) {
    return `rgb(${r},${g},${b})`;
  } else {
    return [r, g, b].join(',');
  }
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const result = hexToRgb(element.innerHTML, true);
        element.innerHTML = result;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const result = hexToRgb(element.innerHTML, true);
        element.innerHTML = result;
    }
});

*/