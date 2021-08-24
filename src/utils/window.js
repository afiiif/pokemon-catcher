export const checkIfScrolledToBottom = (threshold = 64) => (
  (window.innerHeight + window.pageYOffset + threshold) >= document.body.offsetHeight
);
