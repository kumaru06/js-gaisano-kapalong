import { describe, expect, it } from "vitest";

import { contactSchema } from "@/lib/validations";

const valid = {
  fullName: "Ana Cruz",
  email: "ana@example.com",
  phone: "",
  subject: "Store hours",
  message: "What time do you close on Sunday?",
  companyWebsite: "",
};

describe("contactSchema", () => {
  it("accepts a complete inquiry", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires a real email and a message", () => {
    const result = contactSchema.safeParse({
      ...valid,
      email: "not-an-email",
      message: "short",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.flatten().fieldErrors;
      expect(fields.email?.[0]).toMatch(/valid email/i);
      expect(fields.message?.[0]).toMatch(/10 characters/i);
    }
  });
});
