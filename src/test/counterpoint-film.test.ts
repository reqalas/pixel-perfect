import { describe, expect, it } from "vitest";

import { projects } from "@/data/site";

describe("Counterpoint film entry", () => {
  const film = projects.find((p) => p.slug === "counterpoint");

  it("is listed under International Productions with the renamed title", () => {
    expect(film?.title).toBe("Counterpoint");
    expect(film?.category).toBe("international");
    expect(projects.some((p) => p.slug === "kontrapunkt" || p.title === "Kontrapunkt")).toBe(false);
  });

  it("plays the YouTube video and uses its own cover", () => {
    expect(film?.youtubeUrl).toBe("https://www.youtube.com/watch?v=NkZ2AjUdeOw");
    expect(film?.thumbnail).toBe("https://i.ytimg.com/vi/NkZ2AjUdeOw/maxresdefault.jpg");
    expect(film?.comingSoon).toBeUndefined();
  });

  it("appears before the other international films", () => {
    const international = projects.filter((p) => p.category === "international").map((p) => p.slug);
    expect(international[0]).toBe("counterpoint");
  });
});
