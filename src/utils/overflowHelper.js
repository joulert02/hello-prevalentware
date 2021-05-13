export const addNoScroll = () => {
  document.body.classList.add("noscroll");
  window.scrollTo(0, 0);
};

export const removeNoScroll = () => {
  document.body.classList.remove("noscroll");
  window.scrollTo(0, 0);
};