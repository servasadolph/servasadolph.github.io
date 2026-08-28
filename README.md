# servasadolph.github.io

Servas Adolph's academic portfolio site, built on [Jekyll](https://jekyllrb.com/) with the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template (a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)), and deployed to GitHub Pages via GitHub Actions.

## Local development

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Structure

- `_config.yml` — site-wide settings and author/social links
- `_data/navigation.yml` — top nav menu
- `_pages/` — site content (About/home, CV, Publications, Projects, Contact)
- `_layouts/`, `_includes/`, `_sass/`, `assets/` — theme files (from AcademicPages)
- `images/` — profile photo and site icons
- `.github/workflows/deploy.yml` — builds the Jekyll site and deploys it to GitHub Pages on every push to `main`

## License

Theme code is MIT-licensed, forked from [AcademicPages](https://github.com/academicpages/academicpages.github.io). See `LICENSE`.
