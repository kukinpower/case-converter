function toUpperCase() {
  let text = document.querySelector('textarea');
  text.value = text.value.toUpperCase();
}

function toLowerCase() {
  let text = document.querySelector('textarea');
  text.value = text.value.toLowerCase();
}

function toProperCase() {
  let text = document.querySelector('textarea');
  text.value = text.value.toLowerCase().split(' ').
      map(word => word.charAt(0).toUpperCase() + word.slice(1)).
      join(' ');
}

function toSentenceCase() {
  let text = document.querySelector('textarea');
  let isFirstWord = true;
  text.value = text.value.toLowerCase().split(' ').
      map(word => {
        if (isFirstWord) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
          isFirstWord = false;
        }

        if (word.endsWith('.')) {
          isFirstWord = true;
        }
        return word;
      }).
      join(' ');
}

function saveToTextFile() {
  download("text.txt", document.querySelector('textarea').value)
}

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
