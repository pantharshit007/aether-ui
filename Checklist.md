# This is a checklist you should follow when you are creating a new component

- [ ] Update the object in the `src/data/navigation.ts` file with the name of your component and its href [mouse-pointer].
- [ ] Create a new file in the `src/content` directory with the name of your component and the extension `.tsx` [mouse-pointer.tsx].
- [ ] Create a new folder in the `src/apps/docs` directory with the name of your component [/docs/mouse-pointer].
- [ ] Create a new file `.tsx` in the `src/apps/docs/[folder]` folder with the name of your component (demo/basic) [mouse-pointer-demo.tsx].
- [ ] Create a new file `page.mdx` in the `src/docs` folder you created in the previous step [/docs/mouse-pointer/page.mdx].
- [ ] Fill in the metadata and all the required docs in the `page.mdx` file, you can create it from the template `src/components/template/page.mdx`.
- [ ] Update the `components` array in the `scripts/registery-components.ts` file with the name of your component [mouse-pointer] and all required details.
- [ ] Update the `examples` object in the `scripts/registery-examples.ts` file with the name of your component and its example components [mouse-pointer] and [mouse-pointer-demo] with all required details.
- [ ] Create a new file in the `public/c` directory with [name].json use this command `pnpm register --name=mouse-pointer --author=["Your Name"]` [mouse-pointer.json] (author is optional).
- [ ] you can cross check the json file in the `public/c` directory with its other counterparts.
- [ ] Create another `json` file in the `public/e` directory for the examples [example-name.json] use this command `pnpm register:v0 --name=mouse-pointer` [mouse-pointer-demo.json] (all the examples will be generated for the `mouse-pointer` component).

## Once you are done with the above steps, check again if all things are in order.

### Now you can uncheck the checklist and commit your changes.
