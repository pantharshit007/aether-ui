#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { argsAccepted, RegistryFile, Schema, V0Schema } from "./registery-schema";
import { components } from "./registery-components";
import { examples } from "./registery-examples";

const registeryComponentsDir = path.join(process.cwd(), "public", "c");
const registeryExamplesDir = path.join(process.cwd(), "public", "e");

if (!fs.existsSync(registeryComponentsDir)) {
  fs.mkdirSync(registeryComponentsDir, { recursive: true });
}

if (!fs.existsSync(registeryExamplesDir)) {
  fs.mkdirSync(registeryExamplesDir, { recursive: true });
}

let args: argsAccepted = { name: "" };

/**
 * Parsing command line arguments
 * @param --name Name of the component
 * @param --author Author of the component (optional)
 * @param --v0 Flag to indicate if the component is for v0 (optional)
 */
function parseArgs() {
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      args[key as keyof argsAccepted] = value ?? true; // for --v0 flag
    }
  });

  if (!args.name) {
    console.error("Error: --name parameter is required");
    process.exit(1);
  }

  return;
}

function registerComponents() {
  try {
    const component = components.find((c) => c.name === args.name);
    if (!component) throw new Error(`Component ${args.name} not found`);

    const content = fs.readFileSync(component.path, "utf8");

    const files: RegistryFile[] = [
      {
        path: `${component.name}.tsx`,
        content: content,
        type: "registry:ui",
      },
    ];

    // If component has dependent files ex:hooks
    if (component.files && component.files.length > 0) {
      for (const dependfile of component.files) {
        try {
          files.push({
            path: dependfile.path,
            content: fs.readFileSync(dependfile.path, "utf8"),
            type: dependfile.type,
          });
        } catch (e) {
          throw new Error(`File ${dependfile.path} not found / not readable`);
        }
      }
    }

    const registeryObject: Schema = {
      name: component.name,
      type: "registry:ui",
      registryDependencies: component.registryDependencies ?? [],
      title: component.title,
      author: args.author ?? "Harshit Pant",
      description: component.description,
      dependencies: component.dependencies,
      devDependencies: component.devDependencies,
      tailwind: component.tailwind,
      cssVars: component.cssVars,
      files: files,
    };

    const outputFilePath = path.join(registeryComponentsDir, `${component.name}.json`);
    fs.writeFileSync(outputFilePath, JSON.stringify(registeryObject, null, 2));

    console.log(`> ✅ Success: Created ${registeryObject.name}.json`);
    console.log(`> ✨ Path: ${outputFilePath}`);
  } catch (err: any) {
    console.error("> ❌ Error:", err.message);
    process.exit(1);
  }
}

function registerExamples() {
  try {
    const exComponent = examples[args.name];
    if (!exComponent)
      throw new Error(`Component ${args.name} not found in \`registery-examples.ts\``);

    for (const ex of exComponent) {
      const exFileContent = fs.readFileSync(ex.path, "utf8");

      // the files array, starts with the
      const files: RegistryFile[] = [
        {
          path: `${ex.name}.tsx`,
          content: exFileContent,
          type: "registry:component",
        },
      ];

      // adding files from the files[] property (content component)
      // check: case where files[] is empty []
      if (ex.files && ex.files.length > 0) {
        for (const dependfile of ex.files) {
          try {
            files.push({
              path: `component/content/${dependfile.name}`,
              content: fs.readFileSync(dependfile.path, "utf8"),
              type: dependfile.type || "registry:ui",
            });
          } catch (e) {
            throw new Error(`File ${dependfile.path} not found / not readable`);
          }
        }
      }

      const registeryObject: V0Schema = {
        name: ex.name,
        type: "registry:ui",
        description: ex.description,
        componentName: ex.name,
        files: files,
      };

      const outputFilePath = path.join(registeryExamplesDir, `${ex.name}.json`);
      fs.writeFileSync(outputFilePath, JSON.stringify(registeryObject, null, 2));

      console.log(`> ✅ Success: Created ${registeryObject.name}.json`);
      console.log(`> ✨ Path: ${outputFilePath}`);
    }
  } catch (err: any) {
    console.error("> ❌ Error:", err.message);
    process.exit(1);
  }
}

parseArgs();

if (args.v0) registerExamples();
else registerComponents();
