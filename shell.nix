let
nixpkgs = import (builtins.fetchTarball https://github.com/NixOS/nixpkgs/archive/nixpkgs-24.05-darwin.tar.gz) {
  overlays = [];
  config = {};
};
in
with nixpkgs;

stdenv.mkDerivation {
  name = "Date Only";
  buildInputs = [];

  nativeBuildInputs = [
    #Project requirements
    nodejs_22
    bun

    # SCM
    git
    gnupg # To sign commits
    openssh # To connect to git over ssh

    # Developer preferences
    eza # Add color to LS
    ripgrep # grep but don't check hidden dirs
    neovim
    just  # Task runner
    vimPlugins.nvim-treesitter-parsers.just
  ];

  EDITOR="nvim";

  # Post Shell Hook
  shellHook = ''
    alias ls=eza
    alias vim=nvim
    PS1="\t (\[\e[1;31m\]jobs:\j\e[0m) \e[1;36m\h\e[0m: \e[1;31m\w \e[0m\n\$ "
  '';
}
