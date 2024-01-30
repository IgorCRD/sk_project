import { useRouter } from "next/router";
import React from "react";

export const motionContext = React.createContext<
  React.MutableRefObject<Record<string, DOMRect>>
>({ current: {} });

export const MotionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const motionRef = React.useRef({});
  const Provider = motionContext.Provider;

  return <Provider value={motionRef}>{children}</Provider>;
};

export const useMotion = <T extends HTMLElement>(id: string) => {
  const elementRef = React.useRef<T>(null);
  const startRef = React.useContext(motionContext);

  React.useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) return;
    const start = startRef.current[id];

    if (start) {
      const bounding = element.getBoundingClientRect();
      console.log({ start });
      const topDelta = start.top - bounding.top;
      const leftDelta = start.left - bounding.left;
      const widthDelta = bounding.width / start.width;
      const heightDelta = bounding.height / start.height;
      console.log(
        `move ${id}: ${JSON.stringify({
          topDelta,
          leftDelta,
          widthDelta,
          heightDelta,
        }).toString()}`
      );

      element.style.transform = `translate(${leftDelta}px, ${topDelta}px)`;
      setTimeout(() => {
        if (!element) return;
        element.style.transition = "all 0.3s ease-out";
        element.style.transform = `translate(0px, 0px)`;
        startRef.current = {};
      }, 0);
    }

    return () => {
      console.log(`add ${id}`);
      const bounding = element.getBoundingClientRect();
      startRef.current[id] = {
        ...bounding,
        top: bounding.top,
        bottom: bounding.bottom,
        left: bounding.left,
        right: bounding.right,
      };
    };
  }, [id, startRef]);

  return { ref: elementRef };
};
