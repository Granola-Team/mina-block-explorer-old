import * as garn from "https://garn.io/ts/v0.0.15/mod.ts";
import * as pkgs from "https://garn.io/ts/v0.0.15/nixpkgs.ts";

export const app = garn.javascript.mkNpmProject({
  description: "qwik",
  nodeVersion: "18",
  src: ".",
})
.withDevTools([pkgs.bun]);