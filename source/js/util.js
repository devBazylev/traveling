const setDataId = (elems) => {
  for (let i = 0; i < elems.length; i++) {
    elems[i].dataset.id = i;
  }
};

const removeClass = (varr, classs) => {
  varr.classList.remove(classs);
};

const addClass = (varr, classs) => {
  varr.classList.add(classs);
};

const toggleClass = (varr, classs) => {
  varr.classList.toggle(classs);
};

const resetClassArray = (array, classs) => {
  array.forEach((elem) => {
    if (elem.classList.contains(classs)) {
      elem.classList.remove(classs);
    }
  });
};

const setClassArray = (array, classs, id) => {
  resetClassArray(array, classs);
  array[id].classList.add(classs);
};

const changeText = (array, key) => {
  array.forEach((elem) => {
    elem.textContent = key;
  });
};

const setListener = (varr, action, func) => {
  varr.addEventListener(action, func);
};

const setListenerArray = (array, action, func) => {
  array.forEach((elem) => {
    elem.addEventListener(action, func);
  });
};

const removeListenerArray = (array, action, func) => {
  array.forEach((elem) => {
    elem.removeEventListener(action, func);
  });
};

export { setDataId, addClass, removeClass, toggleClass, setClassArray, resetClassArray, changeText, setListenerArray, removeListenerArray, setListener };
