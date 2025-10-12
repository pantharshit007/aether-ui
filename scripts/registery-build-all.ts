#!/usr/bin/env node

import { components } from "./registery-components";
import { examples } from "./registery-examples";
import { registerComponent, registerExample } from "./registery-build";
import { argsAccepted } from "./registery-schema";

function registerAllComponents(author?: string) {
  components.forEach((component) => {
    registerComponent(component.name, author);
  });
}

function registerAllExamples() {
  Object.keys(examples).forEach((componentName) => {
    registerExample(componentName);
  });
}

let args: argsAccepted = { name: "" };

function parseArgs() {
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      args[key as keyof argsAccepted] = value ?? true;
    }
  });
}

parseArgs();

if (args.name) {
  registerComponent(args.name, args.author);
  registerExample(args.name);
} else {
  registerAllComponents(args.author);
  registerAllExamples();
}

