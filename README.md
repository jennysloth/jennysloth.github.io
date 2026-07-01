# Jennysloth Academic Portfolio

Personal academic portfolio for Chen-Ling Lin, built with Jekyll and the al-folio theme.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

This site is intended to deploy through GitHub Pages Actions using `.github/workflows/deploy.yml`.

Note: on some Windows machines, local Jekyll builds may be blocked by application-control policy when Ruby loads native extensions. GitHub Actions builds on Ubuntu should not hit that Windows-specific policy.
