// Seokki Hangul Beta - 2024.10

seokkiHangul('tt', 'ff');

function seokkiHangul(targetClass, fixedClass) {
  let textEls = document.getElementsByClassName(targetClass);

  for (let textEl of textEls) {
    let innerText = textEl.innerHTML;
    let inLetter = /([가-힣]+)/g;

    innerText = innerText.replace(inLetter, (match) => {
      return `<span class="${fixedClass}">${match}</span>`;
    });

    textEl.innerHTML = innerText;
  }
};