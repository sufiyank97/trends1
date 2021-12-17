import { useEffect } from 'react';

// Arguments
// ref — reference for desired element
// handler — what to do on outside click
// disabler — classname for disable outside click when we click on element with this classname

function useOutsideClick(ref, handler, disabler) {
  useEffect(() => {
    const listener = event => {
      // Workaround for SVG elements
      if (event.target instanceof SVGElement) {
        if (event.target.className.baseVal.includes(disabler)) {
          return;
        }
        handler(event);
      }
      // Do nothing if clicking ref's element or descendant elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Do nothing if clicking on element with desired class
      if (disabler && event.target.className.includes(disabler)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
