import { render, screen } from "@testing-library/react";
import { HomeHero } from "./hero";

describe("HomeHero", () => {
  it("renders primary headline and CTAs", () => {
    render(<HomeHero />);
    expect(screen.getByRole("heading", { name: /Reliable plumbing, fair prices/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Request Service/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Call/ })).toBeInTheDocument();
  });
});

