await cheerpjInit();

const baseUrl = location.href.replace(/\/$/, "");

const code = `
import kong.unirest.Unirest

def url = "${baseUrl}/hello.json"

println url

def response = Unirest.get(url).asString().getBody()
`;

const classpath = await (await fetch(`/classpath`)).text();

console.log("classpath:", classpath);

const lib = await cheerpjRunLibrary(classpath);

try {
  const GroovyShell = await lib.groovy.lang.GroovyShell;
  console.log("GroovyShell:", GroovyShell);

  const shell = await new GroovyShell();
  console.log("shell:", shell);

  const script = await shell.parse(code);
  console.log("script:", script);

  const result = await script.run();
  console.log("result:", result);
} catch (e) {
  console.error(e);
  console.groupCollapsed(await e.toString(), "...");
  await e.printStackTrace();
  console.groupEnd();
}
