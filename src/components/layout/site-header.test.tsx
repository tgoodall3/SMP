import { render, screen } from "@testing-library/react";
import { SiteHeader } from "./site-header";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

describe("SiteHeader", () => {
  it("renders primary navigation links", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /request service/i })).toBeInTheDocument();
  });

  it("includes call to action phone link", () => {
    render(<SiteHeader />);
    const formatted = formatPhoneNumber(env.phone);
    expect(screen.getAllByRole("link", { name: new RegExp(`Call ${formatted}`) })[0]).toBeInTheDocument();
  });
});

