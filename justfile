
default:
    just --list

# run unit tests
test:
    bun test

# Format code
fmt:
    bunx biome format --write ./src

# Lint project
lint:
    bunx biome lint --write ./src

# Lint and format project
fix:
    bunx biome check --write ./src
