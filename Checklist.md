# Component Creation Checklist

Follow these steps to add a new component to the project. Each step includes details and file paths to avoid confusion.

---

**Tip:** Replace `[component-name]` with your actual component name (e.g., `fancy-button`).

## 1. Navigation Update

- [ ] **Add your component to navigation:**  
       Edit `src/data/navigation.ts`.  
       Add an entry for your component with its name and href.  
       _Example:_
  ```ts
  { name: "Fancy Button", href: "/docs/fancy-button" }
  ```

## 2. Component Source File

- [ ] **Create the component file:**  
       In `src/content`, create a new file named `[component-name].tsx`.  
       _Example:_
  ```
  src/content/fancy-button.tsx
  ```

## 3. Documentation Folder

- [ ] **Create docs folder:**  
       In `src/apps/docs`, create a folder named `[component-name]`.  
       _Example:_
  ```
  src/apps/docs/fancy-button/
  ```

## 4. Demo Example

- [ ] **Add a demo file:**  
       Inside your docs folder, create `[component-name]-demo.tsx` (or another example file).  
       _Example:_
  ```
  src/apps/docs/fancy-button/fancy-button-demo.tsx
  ```

## 5. MDX Documentation Page

- [ ] **Create documentation page:**  
       In your docs folder, add `page.mdx`.  
       _Example:_
  ```
  src/apps/docs/fancy-button/page.mdx
  ```

## 6. Fill Metadata and Docs

- [ ] **Complete the MDX page:**  
       Use the template at `src/template/page.mdx` to fill in metadata and documentation based on your component.

## 7. Register Component

- [ ] **Update registry:**  
       Edit `scripts/registery-components.ts`.  
       Add your component to the `components` array with all required details.

## 8. Register Examples

- [ ] **Update examples registry:**  
       Edit `scripts/registery-examples.ts`.  
       Add your component and its example(s) to the `examples` object, following the same format as the other examples.

## 9. Generate Component JSON

- [ ] **Create component JSON:**  
       Run:
  ```
  pnpm run register -- --name=[component-name] --author=["Your Name"]
  ```
  This creates `[component-name].json` in `public/c`, author is optional, replace `[component-name]` with your component name (e.g., `button`).

## 10. Verify JSON

- [ ] **Check your JSON file:**  
       Compare your new JSON file in `public/c` with others to ensure consistency.

## 11. Generate Example JSON

- [ ] **Create example JSON:**  
       Run:
  ```
  pnpm run register:v0 -- --name=[component-name]
  ```
  This creates `[component-name]-demo.json` in `public/e`, replace `[component-name]` with your component name.

---

## Final Steps

- [ ] **Review all changes:**  
       Double-check each step and file for accuracy.
- [ ] **Uncheck the checklist and commit:**  
       Mark completed items, then commit your changes.

---

If you have questions, ask in the discussions (issues) or check existing components for reference.
