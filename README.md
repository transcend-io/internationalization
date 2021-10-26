# internationalization

Transcend internationalization

## Typescript Build

Build this package only:

```sh
yarn run tsc
yarn run tsc --watch # Watch mode
```

Build this package and all dependency packages in `main`:

```sh
yarn build
yarn build --watch # Watch mode
```

Create a fresh build:

```sh
yarn clean && yarn run tsc
```

## Lint

Lint the typescript files in this package:

```sh
yarn lint
```
