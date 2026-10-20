<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All site content (projects, awards, contact, galleries) lives in src/data/site.ts so the owner edits one file.
- Shared UI (header, footer, lightbox, YouTube click-to-play) lives in src/components/site.tsx to keep pages thin.
- Home background playback uses the shared VideoBackground with URL and start time from site data; YouTube messaging keeps every repeat at the configured start and forces the video to stay muted, with no poster image in front of it.
- Portfolio artwork is never cropped: the Design gallery uses PlateGrid (justified rows that keep each plate's full framing at a shared row height) instead of Lightbox, whose fixed aspect tiles crop images.
- Studio channel videos use a full, newest-first public upload snapshot in site data and the shared StudioVideoGrid; direct YouTube links avoid loading many embedded players at once.
