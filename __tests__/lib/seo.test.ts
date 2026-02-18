import {
  generateTitle,
  generateDescription,
  generateCanonical,
  generateWhatsAppURL,
} from "@/lib/seo";

describe("seo", () => {
  describe("generateTitle", () => {
    it("includes page title and site name", () => {
      expect(generateTitle("Dépannage")).toContain("Dépannage");
      expect(generateTitle("Dépannage")).toContain("AlloSupport.ma");
    });

    it("includes benefit when provided", () => {
      const title = generateTitle("PC Lent", "Intervention 15 min");
      expect(title).toContain("PC Lent");
      expect(title).toContain("Intervention 15 min");
      expect(title).toContain("AlloSupport.ma");
    });
  });

  describe("generateDescription", () => {
    it("returns content when under maxLength", () => {
      const short = "Court texte.";
      expect(generateDescription(short, 160)).toBe(short);
    });

    it("truncates at word boundary when over maxLength", () => {
      const long = "a ".repeat(100);
      const result = generateDescription(long, 50);
      expect(result.length).toBeLessThanOrEqual(53);
      expect(result.endsWith("...")).toBe(true);
    });

    it("strips HTML tags", () => {
      expect(generateDescription("<p>Hello</p> world", 100)).toBe("Hello world");
    });
  });

  describe("generateCanonical", () => {
    it("returns full URL with path", () => {
      expect(generateCanonical("services/suppression-virus")).toBe(
        "https://allosupport.ma/services/suppression-virus"
      );
    });

    it("handles path with leading slash", () => {
      expect(generateCanonical("/faq")).toBe("https://allosupport.ma/faq");
    });
  });

  describe("generateWhatsAppURL", () => {
    it("returns wa.me link with phone", () => {
      const url = generateWhatsAppURL("212612345678");
      expect(url).toContain("wa.me");
      expect(url).toContain("212612345678");
    });

    it("encodes message in query", () => {
      const url = generateWhatsAppURL("212612345678", "Bonjour");
      expect(url).toContain("text=");
    });
  });
});
