export const lettersTransition = (
  event = undefined,
  { current },
  speed = 300,
  type = "letters",
  delay = 0.03
) => {
  if (event) event.stopPropagation();

  const rootStyles = (index) => {
    const object = {
      "--delay": (index * delay + 0.1).toFixed(2) + "s",
      "--speed": speed + "ms",
      "--animationFunc": type === "words" ? "ease-in" : "ease-out",
    };
    return JSON.stringify(object).replace(/[{}"]/g, "").replace(/,/g, ";");
  };

  function effect(param) {
    const TYPE =
      param === "words"
        ? current.textContent.split("")
        : [...current.textContent];
    const result = TYPE.map((letter, i, arr) => {
      if (i === 0 || arr[i - 1] === " ") {
        return `<span style="${rootStyles(
          i
        )}" class="animate-letterTransition">${letter.toUpperCase()}</span>`;
      } else
        return `<span style="${rootStyles(
          i
        )}" class="first:capitalize animate-letterTransition">${letter.toLowerCase()}</span>`;
    });
    return (current.innerHTML = result.join(""));
  }

  effect(type);
};

export const waiting = (time) =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(), time);
  });
