/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

const PostTab = () => {
  console.log('[ARTIFICIALLY SLOW] Rendering 500 PostTab');

  const items = [];
  for (let i=0; i<2500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }

  return (
    <ul>
      {items}
    </ul>
  );
}

const SlowPost = ({index}: {index: number}) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms to artificially slow down the rendering
  }

  return (
    <li>Post #{index}</li>
  );
}

export default memo(PostTab);