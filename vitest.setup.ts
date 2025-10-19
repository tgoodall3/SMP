import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    return React.createElement("img", {
      src: typeof src === "string" ? src : "",
      alt,
      ...rest,
    });
  },
}));
