# Köhler Tej — Dairy Farm Website (in Development)

### [kohlertej.hu](https://kohlertej.hu)

Köhler Tej is a static website for my uncles in Hungary, showcasing their milk and cheese products.

## Tech stack

| Layer | Technology |
|---|---|
| Hardware | Intel NUC |
| Hosting | Proxmox · Docker · Caddy reverse proxy (alongside [samolni.com](https://samolni.com)) |
| Framework | Next.js 16 (static export) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS 4 |

## Project structure

```
app/
  layout.tsx          # Root layout, metadata, navigation wrapper
  page.tsx            # All page sections (hero, products, about, contact)
  globals.css         # Global styles and animations
  components/
    Navigation.tsx    # Sticky nav with IntersectionObserver active-section tracking
    ContactForm.tsx   # Contact message form
public/
  pictures/
    cheese/           # Cheese product images
    farm/             # Farm and milk images
```

