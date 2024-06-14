# Groovy in the browser experiment

This is an experiment in running [Groovy](https://groovy-lang.org/) in the
browser using [CheerpJ](https://cheerpj.com/).

## Requirements

- [Deno](https://docs.deno.com/runtime/manual/getting_started/installation)
- [Maven](https://maven.apache.org/install.html)

If you don't have these immediately available, then I recommend using
[pkgx](https://pkgx.sh/) to install these locally for this project...

After checking out and `cd`ing into this project:

```sh
curl -fsS https://pkgx.sh | sh
pkgx integrate
dev
```

All dependencies for these tools will be downloaded and installed for use within
this project only, so you can now use `deno` and `mvn` here.

## Initial setup

You'll need to fetch the jars required to the Groovy scripts:

```sh
deno task jars
```

This will use maven to fetch the jars into `target/dependency`, these deps are
defined in the [pom.xml](./pom.xml).

## Start the sever

```sh
deno task start
```

It'll dump it's URL to the console, open this in a browser.

It should now attempt to run the example Groovy code in the browser.

See [frontend.js](./frontend.js) for this.
