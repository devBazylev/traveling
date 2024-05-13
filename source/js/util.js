const setDataId = (elems) => {
  for (let i = 0; i < elems.length; i++) {
    elems[i].dataset.id = i;
  }
};

const addClass = (varr, classs) => {
  varr.classList.add(classs);
};

const removeClass = (varr, classs) => {
  varr.classList.remove(classs);
};

const toggleClass = (varr, classs) => {
  varr.classList.toggle(classs);
};

const addClassArray = (elems, classs) => {
  elems.forEach((elem) => {
    addClass(elem, classs);
  });
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

const removeListener = (varr, action, func) => {
  varr.removeEventListener(action, func);
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

const cloneSlides = (elems, array) => {
  elems.forEach((elem) => {
    const clone = elem.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    array.push(clone);
  });
};
// const cloneSlides = (parent, elems, array) => {
//   elems.forEach((elem) => {
//     const clone = elem.cloneNode(true);
//     clone.setAttribute('aria-hidden', true);
//     array.push(clone);
//     parent.appendChild(clone);
//   });
// };

export { setDataId, addClass, removeClass, toggleClass, addClassArray, resetClassArray, setClassArray, changeText, setListener, removeListener, setListenerArray, removeListenerArray, cloneSlides };
