
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
    bunx biome format --write ./lib

# Lint project
lint:
    bunx biome lint --write ./lib

# Lint and format project
fix:
    bunx biome check --write ./lib
    bunx biome check --write ./test

# Generate a markdown file from JSDocs strings
make-docs:
    bunx jsdoc2md lib/index.js > docs.md

#Publish library to NPM
publish:
    npm publish --access public

types: 
    tsc -d --declarationDir ./lib --declarationMap --emitDeclarationOnly --allowJs ./lib/index.js
