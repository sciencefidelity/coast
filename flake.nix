{
  description = "A Svelte devshell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ ];
        pkgs = import nixpkgs {
          inherit system overlays;
        };
      in
      with pkgs;
      {
        devShells.default = mkShell {
          buildInputs = [
            eslint_d
            nodejs_latest
            pnpm
            prettierd
            svelte-language-server
            typescript
            typescript-language-server
          ];

          shellHook = /*bash*/ ''
          '';
        };
      }
    );
}
