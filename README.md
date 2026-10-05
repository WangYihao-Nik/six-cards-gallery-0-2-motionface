# Six Cards Gallery — 0–2.1s

A 1920×1080, 30fps Remotion recreation for the first 2.1 seconds of “六卡片 · 连续运镜空间画廊” (Motion Face clip `4d16d9f6-2002-49f8-9b93-b7e3bb4b2c0e`). The scene turns the opening six-card layout into an animated, perspective gallery with a slow push-in and the subtitle “刷到一些视频”.

All artwork in the recreation is authored as inline SVG/React shapes and type; no reference video, still frame, signed media address, or binding credential is included in this repository.

## Run

```bash
npm ci
npm run studio
```

## Render

```bash
npm run render
```

The MP4 is written to `out/GalleryOpening.mp4`. To render preview frames only:

```bash
npm run stills -- 0 15 30 45 62
```

## Timing

- 0–2.1s: the camera glides into a six-panel editorial gallery.
- 0.13–1.8s: panels ease in with light depth and blur.
- 0.13–1.77s: subtitle “刷到一些视频”.

Source captions: `subtitles.srt`.
