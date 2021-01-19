import * as React from "react";

function useHover() {
  const [value, setValue] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  React.useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return { hoverRef: ref, isHovered: value };
}

export default useHover;
