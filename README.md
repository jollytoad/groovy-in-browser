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

## Start the sever

```sh
deno task start
```

Initially this will fetch all dependency jars via maven, into
`target/dependency`.

Once ready, it'll dump it's URL to the console, open this in a browser.

It should now attempt to run the example Groovy code in the browser.

See [frontend.js](./frontend.js) for this.

## Changing jar dependencies

If you want to experiment with different jars, modifiy the pom.xml and then run:

```sh
deno task jars
```

you don't need to restart the server.

## Changing the Groovy code

Just edit and save `frontend.js` and refresh the browser (no restart required).
