
default:
    just --list

# run unit tests
test:
    bun test

# Generate test coverage
test-coverage:
    bun test --coverage

coverage: test-coverage

# Format code
fmt:
    bunx biome format --write ./src

# Lint project
lint:
    bunx biome lint --write ./src

# Lint and format project
fix:
    bunx biome check --write ./src

# Generate a markdown file from JSDocs strings
make-docs:
    bunx jsdoc2md lib/index.js > docs.md

#Publish library to NPM
publish:
    npm publish --access public
