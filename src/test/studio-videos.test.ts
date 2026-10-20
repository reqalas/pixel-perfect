import { describe, expect, it } from "vitest";
import { studioVideos } from "@/data/site";

describe("Piktolix public upload gallery", () => {
  it("includes the complete 30-upload channel snapshot, including its oldest upload", () => {
    expect(studioVideos).toHaveLength(30);
    expect(new Set(studioVideos.map((video) => video.id)).size).toBe(30);
    expect(studioVideos.at(-1)?.id).toBe("tgTCf1eOVs4");
    expect(studioVideos.some((video) => video.id === "6kKGIgIpo54")).toBe(true);
  });

  it("orders every video from newest to oldest by publication time", () => {
    expect(studioVideos[0]?.id).toBe("6kKGIgIpo54");
    for (let index = 1; index < studioVideos.length; index++) {
      const current = studioVideos[index];
      const previous = studioVideos[index - 1];
      if (!current || !previous) throw new Error("Missing upload");
      expect(Date.parse(current.publishedAt)).toBeLessThanOrEqual(Date.parse(previous.publishedAt));
    }
  });
});