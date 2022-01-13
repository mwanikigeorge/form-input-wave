const labels = document.querySelectorAll(".form-control label");

// loop through all labels
labels.forEach((label) => {
  //split innerhtml into array and add a span element
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
