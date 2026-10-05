# The Value Office — Cohort 0 (public site)

Next.js 14 + TypeScript + Tailwind. Static export: deploys to GitHub Pages (free prototype) or Vercel.

## Languages
English at `/`, French at `/fr/`. All copy lives in `lib/content.ts` (one object per language). Screenshots and links: `lib/config.ts`.

## Edit before launch
Application form, email and LinkedIn URL are set in `lib/config.ts` (override with `NEXT_PUBLIC_*` env vars). Still to fill: `[COHORT_DATE]`. Hide any screenshot by removing it from `INBOUND` / `NETWORK`. Price and guarantee are intentionally absent.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs ./out
```

## 1. GitHub
```bash
cd value-office
git init && git add . && git commit -m "Initial site"
git branch -M main
# create an EMPTY repo named value-office on github.com, then:
git remote add origin https://github.com/<username>/value-office.git
git push -u origin main
```

## 2a. Free prototype on GitHub Pages
1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Add `.github/workflows/pages.yml` (included) and push. Site goes live at `https://<username>.github.io/value-office/`.
3. The workflow sets `NEXT_PUBLIC_BASE_PATH=/value-office` automatically. A user site repo (`<username>.github.io`) needs no base path: remove that env line.

## 2b. Vercel (prototype)
1. vercel.com → Add New → Project → import the repo. Framework: Next.js (auto-detected). Deploy.
2. Add the `NEXT_PUBLIC_*` env vars in Project → Settings → Environment Variables, then redeploy.
3. **Note:** the Vercel Hobby plan is for personal, non-commercial use. Treat this as a prototype only. For commercial production, use a Vercel Pro/Team plan or another commercial host (Netlify, Cloudflare Pages, etc.); the static `out/` folder works anywhere.

## 3. Custom domain later
Buy a domain, add it in your host's settings, set `NEXT_PUBLIC_SITE_URL`, and remove `NEXT_PUBLIC_BASE_PATH`. No copy contains a hostname.

## Post-deployment checklist
- [ ] Placeholders replaced; "Request an invitation" opens the real form on desktop and mobile
- [ ] Founder metrics verified (esp. the 348K+ figure)
- [ ] Screenshot use reviewed (see note below); hide any via `show: false` in `lib/config.ts`
- [ ] No horizontal scroll on a 360px-wide phone; sticky CTA visible
- [ ] Lighthouse: Performance, Accessibility, SEO ≥ 90
- [ ] Title/description correct in a link preview; add an OG image (1200×630)
- [ ] Add sitemap/robots and analytics (CTA clicks, scroll depth) when the domain is set
