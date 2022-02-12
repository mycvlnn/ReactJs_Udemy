import React from "react";

export default function Button({
  isLoading,
  contentLoading,
  children,
  ...restProps
}) {
  return (
    <button disabled={isLoading} {...restProps}>
      {isLoading ? contentLoading : children}
    </button>
  );
}
