# Pamana Filipino-Kapampangan Restaurant Website

Cloudflare Pages-ready static website starter.

## Edit the menu
Open `assets/menu-data.js` and change menu items there.

Each item supports:
- `name`
- `category`
- `price`
- `description`
- `image`
- `available`
- `featured`

To hide an item without deleting it, set:

```js
available: false
```

## Add food photos
Put photos in:

```text
assets/images/menu/
assets/images/gallery/
```

Then update the image path in `assets/menu-data.js`.

## Deploy to Cloudflare Pages

### Option 1: Direct Upload
Upload this folder to Cloudflare Pages as a static site.

### Option 2: GitHub + Cloudflare Pages
Push this project to GitHub, then in Cloudflare Pages:

- Framework preset: None
- Build command: `exit 0`
- Build output directory: `/`

No build step is required.

## Notes
Google listing photos are placeholders. Replace them with owner-approved files before final launch.
