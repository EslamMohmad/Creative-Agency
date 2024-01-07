export const lettersTransition = (event, { current }) => {
  event.stopPropagation();
  current.innerHTML = [...current.textContent]
    .map((letter, i, arr) => {
      if (i === 0 || arr[i - 1] === " ") {
        return `<span style="--style : ${
          i * 0.08 + 0.1
        }s" class="animate-letterTransition">${letter.toUpperCase()}</span>`;
      } else
        return `<span style="--style : ${
          i * 0.08 + 0.1
        }s" class="first:capitalize animate-letterTransition">${letter.toLowerCase()}</span>`;
    })
    .join("");
};
