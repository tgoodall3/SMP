import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  it("submits valid data", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: "Thanks!" }),
    });
    // @ts-expect-error assign fetch mock for test
    global.fetch = fetchMock;

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Tester");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/^phone$/i), "(555) 555-5555");
    await user.click(screen.getByLabelText(/service needed/i));
    await user.click(screen.getByRole("option", { name: /Emergency Plumbing/i }));
    await user.type(screen.getByLabelText(/How can we help/i), "My sump pump stopped running.");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(fetchMock.mock.calls[0][0]).toBe("/api/contact");
    expect(await screen.findByText(/Thanks!/i)).toBeInTheDocument();
  });
});

