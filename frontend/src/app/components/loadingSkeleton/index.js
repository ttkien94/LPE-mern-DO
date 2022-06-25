import React from "react";
import Skeleton from "react-loading-skeleton";

function LPELoadingSkeleton({ count }) {
  return <Skeleton count={count} height={70} />;
}

export default LPELoadingSkeleton;
