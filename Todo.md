- [ ] fix the `after:bg-background/90` class to be dynamic, so that it can be changed by the user via the component props.
- [ ] there is a bug in the `MorphingCard` component, where the Icon prop doesn't work if the component is called into is not a 'use client'.
- [ ] check mobile responsiveness of the components previous to feedback modal.
- [ ] [IMP] update the manual hook installation for respective comp. (steps)
- [ ] fix scroll bar in manual boxes and code boxes (either make them small or remove them).
- [ ] update docs to `Fuma docs`
- [ ] thinking of sepearating landing:`aetherui.in` and docs:`ui.aetherui.in` by upgrading from nextjs to monorepo setup. This will allow us to divide the load.
- [ ] create sitemap and robots.txt.
- [ ] there is a stupid bug in `page.mdx` file, where inside tabs "manual" the step 2's margin up is not working.(fix for now custom css)
- [ ] update loading animation.
- [ ] right now the `SmoothSlider` doesnt shift content to right in extreme left and vice versa. Its a bug.
- [ ] wrap the text in `code-preview`/`code-renderer` in the `pre` tag.
- [ ] the side bar in the doc which show the break point for the headings should slice the text and show the first line of the heading.
- [ ] update the eslint rule for `unused-vars` to `error` and fix all the issues.

---

### SEO

- [ ] create `sitemap.xml` and `robots.txt`.
- [ ] Add specific metadata to the landing page.
- [ ] Add specific metadata to MDX pages.
- [ ] Review and update `site.ts` and ensure all the information is accurate and complete. The `fallbackURL` should be updated to the production URL.
