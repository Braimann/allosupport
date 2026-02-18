import { getAllStaticServices, getStaticServiceBySlug } from "@/lib/services-data";

describe("services-data", () => {
  describe("getAllStaticServices", () => {
    it("returns a non-empty array", () => {
      const services = getAllStaticServices();
      expect(Array.isArray(services)).toBe(true);
      expect(services.length).toBeGreaterThan(0);
    });

    it("returns services with required fields", () => {
      const services = getAllStaticServices();
      for (const s of services) {
        expect(s).toHaveProperty("slug");
        expect(s).toHaveProperty("title");
        expect(s).toHaveProperty("heroTitle");
        expect(s).toHaveProperty("pricing");
        expect(Array.isArray(s.pricing)).toBe(true);
        expect(s.published).toBe(true);
      }
    });

    it("returns unique slugs", () => {
      const services = getAllStaticServices();
      const slugs = services.map((s) => s.slug);
      const unique = new Set(slugs);
      expect(unique.size).toBe(slugs.length);
    });
  });

  describe("getStaticServiceBySlug", () => {
    it("returns a service when slug exists", () => {
      const service = getStaticServiceBySlug("suppression-virus");
      expect(service).not.toBeNull();
      expect(service?.slug).toBe("suppression-virus");
      expect(service?.title).toBeDefined();
    });

    it("returns null when slug does not exist", () => {
      expect(getStaticServiceBySlug("non-existent-slug-xyz")).toBeNull();
    });

    it("returns null for empty string", () => {
      expect(getStaticServiceBySlug("")).toBeNull();
    });
  });
});
