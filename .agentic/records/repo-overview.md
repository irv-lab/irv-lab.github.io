# Repository Overview

## Session Context
**Source**: User (2026-03-24, high trust, CONFIRMED)
**Content**: The user asked for a current-code analysis of this repository.

**Source**: Assistant (2026-03-24, medium trust, CONFIRMED)
**Content**: This repository is `al-folio`, a Jekyll-based academic/personal site theme, not a typical application stack.

## Build Stack
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [README.md](/mnt/home/khlee/Codes/irv-lab.github.io/README.md), [Gemfile](/mnt/home/khlee/Codes/irv-lab.github.io/Gemfile), [package.json](/mnt/home/khlee/Codes/irv-lab.github.io/package.json)
**Content**:
- Primary site generation is handled by Jekyll and Ruby gems in `Gemfile`.
- Node is only used for formatting/tooling, with `prettier` and `@shopify/prettier-plugin-liquid` in `package.json`.
- The repo includes a broad set of Jekyll plugins, including archives, feeds, scholar support, sitemap, tabs, toc, and Liquid-related helpers.

## Main Customization Surface
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo structure)
**Evidence**: `_layouts/*.liquid`, `_includes/*.liquid`, `_pages/*.md`, `_data/*.yml`, `assets/`
**Content**:
- The repo’s main customization points are page front matter, Liquid layouts/includes, and YAML data files.
- Relevant structure is centered around:
  - `_layouts/` for page templates
  - `_includes/` for reusable Liquid components
  - `_pages/` for content pages
  - `_data/` for structured site data
  - `assets/` for CSS, JS, images, fonts, and media

## Site Structure and Content
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [about.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/about.md), [professor.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/professor.md), [profiles.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/profiles.md), [joiningus.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/joiningus.md), [publications.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/publications.md), [news.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_includes/news.liquid), [papers.bib](/mnt/home/khlee/Codes/irv-lab.github.io/_bibliography/papers.bib)
**Content**:
- The site is organized around lab-specific pages: home/about, professor, people/profiles, joining us, and publications.
- These pages are mostly content + front matter + Liquid loops, with very little application logic.
- The publications page renders directly from the bibliography include and BibTeX sources.
- The home page enables announcements/news and disables latest posts, so the site is closer to a lab introduction and publication archive than a blog.

## People / Profiles Data
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [_pages/profiles.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/profiles.md), [_layouts/profiles.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_layouts/profiles.liquid), [assets/img/profiles/](/mnt/home/khlee/Codes/irv-lab.github.io/assets/img/profiles/)
**Content**:
- The people page is populated from the `profiles:` front-matter array in `_pages/profiles.md`.
- Each profile entry uses `name`, `image`, `category`, `info`, and `email`.
- `image` should point to a filename under `assets/img/profiles/`; if omitted, the template falls back to `blank.jpg`.
- Categories are currently hardcoded in `_layouts/profiles.liquid` as `Faculty`, `PhD`, `Master`, and `Undergraduate`, so adding a new category requires a template edit.
- `Sahoon Hong` was added as an `Undergraduate` entry with image `assets/img/profiles/under_sahoonhong.jpeg` and email `hoonie8530@gmail.com`; no category edit was needed.
- The image file exists on disk at `assets/img/profiles/under_sahoonhong.jpeg`.
- The `name` field now uses the English spelling `Sahoon Hong` to match the other profile entries.

## Publication Entry Update
**Source**: User request + web verification (2026-03-25, high trust, CONFIRMED by web and repo files)
**Evidence**: [_bibliography/papers.bib](/mnt/home/khlee/Codes/irv-lab.github.io/_bibliography/papers.bib), [assets/img/publication_preview/2025_curriculum_learning.png](/mnt/home/khlee/Codes/irv-lab.github.io/assets/img/publication_preview/2025_curriculum_learning.png)
**Content**:
- The paper `Curriculum Learning and Pattern-Aware Highly Efficient Privacy-Preserving Scheme for Mixed Data Outsourcing with Minimal Utility Loss` is present in `papers.bib` as `majeed2025curriculum`.
- Verified metadata: authors Abdul Majeed, Kyunghyun Lee, and Seong Oun Hwang; journal *Applied Sciences*; year 2025; volume 15; number 21; pages 11849; DOI `10.3390/app152111849`.
- The preview image path is `assets/img/publication_preview/2025_curriculum_learning.png`, and the file exists on disk.
- `publications.md` renders from the bibliography, so no page template edit was needed for the new entry.
- A matching publication news item was added at `_news/2025_11_07.md` using the inline news format.
- `papers.bib` is modified, and `assets/img/publication_preview/2025_curriculum_learning.png` plus `_news/2025_11_07.md` are currently untracked in git.
- Build/render verification was not run after the publication update.
- `scholar.group_by: year` and `group_order: descending` in `_config.yml` mean the publications page groups entries by year only, so month/day order inside 2025 is not guaranteed there.

## News / Presentation Content
**Source**: User search + repo file (2025-07-18 entry, high trust)
**Evidence**: [_news/2025_07_18.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_07_18.md), [news.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/news.md), [news.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_includes/news.liquid)
**Content**:
- The current `_news` folder already contains presentation-related items for:
  - `2025-07-18`: Prof. Lee was invited to talk on "Reinforcement Learning and LLM-based Robotics" at IEIE.
  - `2025-09-03`: Prof. Lee gave a talk on "Reinforcement Learning for Real-world Applications" at Yonsei University.
  - `2025-10-13`: Prof. Lee gave a talk on "Reinforcement learning with Sim-to-Real Approaches" at ACK.
  - `2025-10-31`: Prof. Lee gave a talk on "Reinforcement Learning for Robotics" at University of Seoul.
  - `2025-11-15`: Prof. Lee gave a talk on "Introduction to Reinforcement Learning" at Multimedia Society.
  - `2025-12-07`: Prof. Lee gave a talk on "Anomaly Detection for Semiconductor Packiging" at KETI.
  - `2025-12-29`: Prof. Lee gave a talk on "Reinforcement Learning for New Researchers" at KAIST.
  - `2026-03-10`: Prof. Lee gave a talk on "Simulation-to Real Gap Problems in Reinforcement Learning" at Seoultech.
- The news page is just a thin wrapper around `news.liquid`, which renders entries from `_news/*.md`.
- No other talk/presentation/seminar-related `_news` entries were found in the current search.
- `news.liquid` renders `site.news | reverse`, so the feed is displayed in reverse-chronological order; the `2025-11-07` publication announcement will appear above the older `2025-03-02` Bridging Spectral-wise entry even though the latter is earlier by date.

## News Content Update
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by filesystem)
**Evidence**: [_news/2025_09_03.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_09_03.md), [_news/2025_10_13.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_10_13.md), [_news/2025_10_31.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_10_31.md), [_news/2025_11_15.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_11_15.md), [_news/2025_12_07.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_12_07.md), [_news/2025_12_29.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2025_12_29.md), [_news/2026_03_10.md](/mnt/home/khlee/Codes/irv-lab.github.io/_news/2026_03_10.md)
**Content**:
- Seven requested presentation news entries were added during this session using the existing inline news format.
- The new files follow the same date-based `_news/` naming pattern as the earlier `2025-07-18` entry.
- Each file uses the standard inline news front matter (`layout: post`, `date: YYYY-MM-DD 15:59:00-0400`, `inline: true`, `related_posts: false`) and the simple body sentence `**Prof. Lee** gave a talk on "TITLE" at VENUE.`
- Venue and title strings were preserved verbatim from the request, and the write scope stayed limited to `_news/` only.
- Manual verification confirmed the new file contents matched the existing `_news` filename/front matter/body pattern.
- A `bundle exec jekyll build --destination .agentic/office/coder/jekyll-check` check could not be completed because the local `bundle` shim points to missing interpreter `/usr/bin/ruby3.0`.
- No tests were added because this was a content-only update to `_news/`.

## Legacy Defaults Still Present
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [_config.yml](/mnt/home/khlee/Codes/irv-lab.github.io/_config.yml), [README.md](/mnt/home/khlee/Codes/irv-lab.github.io/README.md), [blog.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/blog.md)
**Content**:
- Some upstream al-folio defaults are still active, including `blog_name: al-folio`, `disqus_shortname: al-folio`, and external blog sources such as medium.com and Google Blog.
- The blog page still exists, but it is not the main surface of the site.

## Working Assumptions
**Source**: Assistant (2026-03-24, medium trust, inferred from repo layout)
**Content**:
- Future code analysis should focus on Liquid templates, front matter, data files, and workflow configs rather than frontend framework conventions.
- If behavior changes are needed, the likely edit targets are layouts, includes, pages, data files, or CI/deploy workflows, not a Node-based application layer.

## Collections and Deployment
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [_config.yml](/mnt/home/khlee/Codes/irv-lab.github.io/_config.yml), [projects.md](/mnt/home/khlee/Codes/irv-lab.github.io/_pages/projects.md), [.github/workflows/jekyll.yml](/mnt/home/khlee/Codes/irv-lab.github.io/.github/workflows/jekyll.yml), [.github/workflows/deploy.yml](/mnt/home/khlee/Codes/irv-lab.github.io/.github/workflows/deploy.yml)
**Content**:
- The `projects` collection is enabled in `_config.yml`, but there is no `_projects/` directory in the repo, so `/projects/` may currently be empty or waiting for content.
- Two deployment paths exist and overlap:
  - `jekyll.yml` triggers on pushes to `source`, builds into `docs/`, and publishes to `main`.
  - `deploy.yml` triggers on `main` and `master`, builds `_site`, and deploys to GitHub Pages.
- CI toolchain versions differ between workflows: `jekyll.yml` uses Ruby 3.2, while `deploy.yml` uses Ruby 3.3.5.

## Template Coupling / Maintenance Notes
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Evidence**: [_layouts/profiles.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_layouts/profiles.liquid), [_layouts/professor.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_layouts/professor.liquid), [_layouts/joiningus.liquid](/mnt/home/khlee/Codes/irv-lab.github.io/_layouts/joiningus.liquid), [assets/css/main.scss](/mnt/home/khlee/Codes/irv-lab.github.io/assets/css/main.scss)
**Content**:
- `profiles.liquid` hardcodes the category list `Faculty,PhD,Master,Undergraduate`, so adding a new profile category requires a template edit.
- `professor.liquid` and `joiningus.liquid` both rely on inline styling, which makes quick edits easy but reduces long-term extensibility.
- `main.scss` is the global Sass entry point and currently forces `color-scheme: light !important`.

## Local Validation
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by shell verification)
**Content**:
- `ruby`, `bundle`, and `jekyll` are not available in this shell, so `bundle exec jekyll build` could not be run locally here.
- Because local Ruby tooling is absent, validation currently depends on the GitHub Actions workflows rather than an on-box build.

## Bundler LoadError Issue
**Source**: User (2026-03-24, high trust) and Assistant (2026-03-24, medium trust, CONFIRMED by transcript)
**Content**:
- The user reported `Kernel#load: cannot load such file -- /opt/homebrew/lib/ruby/gems/3.4.0/gems/bundler-2.6.9/exe/bundle (LoadError)` while trying to run the site locally.
- The likely cause is a stale or mismatched Bundler shim after a Ruby/Bundler update, where the active Ruby and Bundler installations are out of sync.
- First checks: `which ruby`, `ruby -v`, `which bundle`, and `gem list bundler`.
- If Bundler 2.6.9 is the expected version, refresh it with `gem install bundler -v 2.6.9`, then run `hash -r` and verify with `bundle _2.6.9_ -v`.
- If the shim is still broken, reinstall Bundler cleanly with `gem uninstall bundler`, `gem install bundler -v 2.6.9`, and `hash -r`.
- If a version manager is in use, refresh shims with `rbenv rehash` or `asdf reshim ruby`.
- For this repo, run from the repo root with `cd /mnt/home/khlee/Codes/irv-lab.github.io`, then `bundle _2.6.9_ install` and `bundle _2.6.9_ exec jekyll serve`.
- If `Gemfile.lock` has a different `BUNDLED WITH` version, use that version number instead of `2.6.9`.

## Local Ruby Installation (User-local)
**Source**: User (2026-03-24, high trust) and Assistant (2026-03-24, medium trust, CONFIRMED by transcript)
**Content**:
- Ruby can be installed in the user's home directory without `sudo`.
- The recommended user-local approach on servers is `rbenv` or `asdf`.
- If build dependencies such as a C compiler or `openssl` are missing, those may still require admin help.
- `rbenv` example:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
rbenv install 3.3.5
rbenv global 3.3.5
ruby -v
gem install bundler -v 2.6.9
rbenv rehash
```
- For this repo after a user-local Ruby install:
```bash
cd /mnt/home/khlee/Codes/irv-lab.github.io
bundle _2.6.9_ install
bundle _2.6.9_ exec jekyll serve --host 0.0.0.0 --port 4000
```
- If `asdf` is already in use, `asdf install ruby <version>` is the matching user-local path.

## Ruby 3.3.5 Build Failure
**Source**: User (2026-03-24, high trust)
**Content**:
- The user reported that Ruby 3.3.5 build/install failed.
- The exact build log is not recorded, so the failure mode is still unknown in the records.
- This is separate from the repo's Jekyll config; the existing notes only capture user-local Ruby setup and Bundler pinning.

## Ruby 3.2.6 Fallback for Server Run
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by transcript)
**Content**:
- The repo's workflows are inconsistent: `deploy.yml` uses Ruby `3.3.5`, while `jekyll.yml` uses Ruby `3.2`.
- For immediate server-side execution, `3.2.x` is the practical fallback instead of forcing `3.3.5`.
- `rbenv` fallback:
```bash
rbenv install 3.2.6
rbenv global 3.2.6
ruby -v
gem install bundler -v 2.6.9
rbenv rehash
cd /mnt/home/khlee/Codes/irv-lab.github.io
bundle _2.6.9_ install
bundle _2.6.9_ exec jekyll serve --host 0.0.0.0 --port 4000
```
- `asdf` fallback:
```bash
asdf install ruby 3.2.6
asdf global ruby 3.2.6
ruby -v
gem install bundler -v 2.6.9
cd /mnt/home/khlee/Codes/irv-lab.github.io
bundle _2.6.9_ install
bundle _2.6.9_ exec jekyll serve --host 0.0.0.0 --port 4000
```
- The current `rbenv install 3.2.6` attempt on Ubuntu 22.04 failed because `libffi`, `readline`/`libedit`, and `zlib` were missing; `fiddle`, `psych`, `readline`, and `zlib` extensions did not compile.
- This suggests the host still needs the matching development libraries before the 3.2.6 fallback can succeed.

## Ruby Build Dependencies (Ubuntu 22.04)
**Source**: Assistant (2026-03-24, medium trust, CONFIRMED by transcript)
**Content**:
- The Ruby build failure is due to missing system packages, not just a Ruby version mismatch.
- `fiddle` maps to `libffi`; `readline` maps to `readline` or `libedit`; `zlib` maps to `zlib`; `psych` typically needs `libyaml`.
- This package mapping is based on the current `rbenv install 3.2.6` failure log and was not previously documented in the records.
- On Ubuntu 22.04, install the prerequisites before retrying Ruby build/install:
```bash
sudo apt update
sudo apt install -y build-essential libssl-dev zlib1g-dev libreadline-dev libyaml-dev libffi-dev libgdbm-dev libncurses5-dev libncursesw5-dev libdb-dev uuid-dev
```
- Then retry the `rbenv` or `asdf` Ruby install flow.
- If `sudo` is unavailable, an administrator needs to install these packages because user-local Ruby compilation will keep failing without them.

## Local Development
**Source**: User (2026-03-24, high trust) and Assistant (2026-03-24, medium trust, CONFIRMED by repo files)
**Content**:
- Change into the repo root first with `cd /mnt/home/khlee/Codes/irv-lab.github.io`.
- Install dependencies with `bundle install`.
- Run the site locally with `bundle exec jekyll serve`.
- Use `bundle exec jekyll build` when you want a build-only check without starting the server.
- This repo is a Jekyll/Ruby site; Node is only for formatting/tooling, so `npm` is not the primary run path.
- If `ruby`, `bundle`, or `jekyll` are missing, a Ruby environment must be installed first; this shell currently lacks them.
- The served site normally opens at `http://127.0.0.1:4000`.
- `could not locate Gemfile` means Bundler was run outside the repo root; no custom wrapper or alias is recorded that auto-`cd`s into the project before running Bundler.

## Remote Access / Host Binding
**Source**: User (2026-03-24, high trust) and Assistant (2026-03-24, medium trust, CONFIRMED by transcript)
**Content**:
- Jekyll can bind the dev server to `0.0.0.0`, which allows access from outside the server.
- The server or cloud firewall must allow port `4000` for direct browser access.
- General run command:
  - `cd /mnt/home/khlee/Codes/irv-lab.github.io`
  - `bundle exec jekyll serve --host 0.0.0.0 --port 4000`
- If Bundler needs to stay pinned to `2.6.9`:
  - `cd /mnt/home/khlee/Codes/irv-lab.github.io`
  - `bundle _2.6.9_ exec jekyll serve --host 0.0.0.0 --port 4000`
- From the local machine, access the site at `http://<server-ip>:4000`.
- If port exposure is inconvenient, SSH port forwarding also works:
  - `ssh -L 4000:127.0.0.1:4000 user@server`
  - then browse `http://127.0.0.1:4000` locally.

## Verification Commands
**Source**: Assistant (2026-03-24, medium trust, suggested workflow)
**Content**:
- Structure check: `rg --files --hidden -g '!node_modules' -g '!dist' -g '!build' -g '!coverage'`
- Core config check: `sed -n '1,260p' _config.yml`
- Install dependencies: `bundle install`
- Local build: `bundle exec jekyll build`
- Local server: `bundle exec jekyll serve`

## Suggested Next Analyses
**Source**: Assistant (2026-03-24, low trust, suggested follow-ups)
**Content**:
- Clean up the overlapping deployment workflows.
- Remove or modernize template residue from the original al-folio defaults.
- Wire up either the `projects` collection or the blog data flow more fully.

## Consolidated Conclusion
**Source**: Assistant (2026-03-24, medium trust, synthesized from chunks 1-4)
**Content**:
- The repo is a lab-focused `al-folio` Jekyll site, not a generic app stack.
- Most meaningful work happens in Liquid templates, page front matter, and BibTeX/YAML data files.
- The main technical debt is template coupling plus overlapping deployment paths; local Jekyll validation is currently blocked by missing Ruby tooling in this shell.

## Response Preferences From This Request
**Source**: User (2026-03-24, high trust)
**Content**:
- Keep responses concise but complete.
- Analyze first; do not jump straight into modification.
- Use exact markdown headings when generating context.
- Write `none` when a section has no relevant items.
- Use absolute filesystem markdown links when referencing files.
