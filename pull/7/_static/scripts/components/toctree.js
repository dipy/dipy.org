/**
 * This method introduces a click function to click the
 * underlying "a" tag for "li" element with toctree-l2 of the design.
 */
export const toctreeClick = () => {
  const toctreeSubtopics = document.querySelectorAll(
    ".toctree-wrapper li.toctree-l2"
  );

  toctreeSubtopics.forEach((toctreel2) => {
    const link = toctreel2.querySelector("a");
    toctreel2.addEventListener("click", () => {
      link.click();
    });
  });
};

/**
 * This method introduces calculations for grid for toc tree
 * not letting the grid to overflow the space provided by
 * sphinx on different platforms
 */
export const gridCalculation = () => {
  const toctrees = document.querySelectorAll(".toctree-wrapper li.toctree-l1");

  toctrees.forEach((toctree) => {
    const containerWidth = toctree.clientWidth;
    const subtrees = toctree.querySelectorAll("li.toctree-l2 a");
    const subtreeContainer = toctree.querySelector("ul");

    let width = 0;
    let noOfElements = 0;
    const MAX_ELEMENTS = 3;
    const UNIT_SPACE = 16;

    // handling the empty case
    if (subtrees.length === 0) {
      return;
    }

    // handling the single element case
    if (subtrees.length === 1) {
      subtreeContainer.classList.add("grid-3");
      return;
    }

    for (let i = 0; i < Math.min(MAX_ELEMENTS, subtrees.length); i++) {
      // Getting the size of text in the list
      // considering the padding applied on right and left side
      width += subtrees[i].offsetWidth + 2 * UNIT_SPACE;

      if (width > containerWidth) {
        break;
      } else {
        noOfElements++;
      }

      // considering the gap applied
      width += UNIT_SPACE;
    }

    subtreeContainer.classList.add(`grid-${noOfElements}`);
  });
};
