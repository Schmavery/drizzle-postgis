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
The library is also missing support for very many functions, and test coverage exists but is not complete.

## 🎉 Installation

`pnpm add drizzle-postgis`

> **NOTE**
> Unfortunately drizzle-kit has a bug that causes custom types to be quoted.
> In order to use this with migrations, you need to apply a [patch](https://github.com/Schmavery/drizzle-postgis/blob/main/patches/drizzle-kit%400.20.14.patch).
> This is the only solution until this issue is fixed!
> https://github.com/drizzle-team/drizzle-kit-mirror/issues/350

## ❓Troubleshooting

If you're having trouble with Postgres complaining that the functions can't be found, try using `config.setPostGISSchema("<schema>")`

There's more information about how to use these functions here: https://postgis.net/docs/reference.html

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