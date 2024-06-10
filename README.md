<h1 align="center" style="border-bottom: none;">🌐 drizzle-postgis</h1>
<h3 align="center">A Drizzle extension/plugin to help work with PostGIS and GeoJSON</h3>
<br />
  <p align="center">
    <a href="https://github.com/schmavery/drizzle-postgis/issues/new">Bug report</a>
    ·
    <a href="https://github.com/schmavery/drizzle-postgis/issues/new">Feature request</a>
    ·
    <a href="https://schmavery.github.io/drizzle-postgis">Read Docs</a>
  </p>
</p>
<br />
<hr />

## 🚸 Disclaimer

I'm a GIS beginner, please let me know if you see anything problematic in the way this library is implemented.
The library is also missing support for very many functions. PRs are very welcome, all I ask is that you add test coverage for any new functions :)

## 🎉 Installation

`pnpm add drizzle-postgis`

Patching drizzle-kit (See Troubleshooting for more info) is no longer required in most cases (unless you need to generate migrations with a box2d type).

## ❓Troubleshooting

If you're having trouble with Postgres complaining that the functions can't be found, try using `config.setPostGISSchema("<schema>")`

There's more information about how to use these functions here: https://postgis.net/docs/reference.html

### NOTE for people using box2d

> Unfortunately drizzle-kit has a bug that causes some custom types to be quoted. The only type in this library that is still affected (as of drizzle-kit 0.22.0) is `box2d`.
> In order to use this with migrations, you need to apply a patch (see below).
> This issue tracks this problem somewhat: https://github.com/drizzle-team/drizzle-kit-mirror/issues/350

#### Step 1: Obtain the Patch File

The patch file is located in repository under the `patches` directory: `patches/drizzle-kit@<version>.patch`. (Replace <version> with your installed version of drizzle-kit).

You can copy the patch file content directly from the repository to your local patches directory.

#### Step 2: Apply the Patch

If you're using pnpm, you can apply the patch by adding the following lines to your `package.json` file under the `pnpm` section:

```json
  "pnpm": {
    "patchedDependencies": {
      "drizzle-kit@<version>": "patches/drizzle-kit@<version>.patch"
    }
  }
```

This configuration tells pnpm to apply the specified patch to the `drizzle-kit@<version>` dependency.
Note that `patches/drizzle-kit@<version>.patch` is the path to the patch file

After updating your `package.json`, run `pnpm install` to install the patched dependency.

#### Alternative: Manual Patching (not recommended)

If you prefer not to modify your `package.json`, you can manually apply the patch using the `patch` command:

1. Save the patch file content to a local file, e.g., `drizzle-kit.patch`.
2. Navigate to the directory where `drizzle-kit` is installed (usually `node_modules/drizzle-kit`).
3. Run the following command: `patch -p1 < /path/to/drizzle-kit.patch`

This will apply the patch to the `drizzle-kit` dependency.

## 📚 Auto generate docs

The project is configured to auto-generate the documentation using [typedoc](https://typedoc.org/). The documentation is generated in the `docs` folder.

The documentation will get generated when the code is pushed to the `main` branch. You can also generate the documentation locally by running the command `pnpm run build:docs`.

## 🫱🏻‍🫲🏼 Contributing

Please make sure to follow the [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) format while making changes. This helps in generating changelogs and versioning the package.

## 🙏 Thanks to

- 🚧 [@akashrajpurohit/ts-npm-template](https://akashrajpurohit.com/blog/building-and-publishing-typescript-npm-packages-a-stepbystep-guide/?ref=ts-npm-template-readme) - an opinionated bootstrap template to create NPM packages.
- ⌨️ [Typescript](https://www.typescriptlang.org/) with [tsup](https://tsup.egoist.dev/) build tool.
- ⚡️ [Vitest](https://vitest.dev/) - Unit Test Framework
- 🚀 [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) - Fully automated version management and package publishing.
- 📖 [Typedoc](https://typedoc.org/) - Generate documentation of your package.
- 🔀 [Github Actions](https://github.com/features/actions) - CI pipelines
- 📦 [PNPM](https://pnpm.io/) - Package manager
