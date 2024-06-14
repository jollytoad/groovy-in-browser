import { ok } from "@http/response/ok";

export async function GET(_req: Request) {
  const jars: string[] = [];

  for await (
    const entry of Deno.readDir(
      new URL(import.meta.resolve(`../../target/dependency`)),
    )
  ) {
    if (entry.name.endsWith(".jar")) {
      jars.push(`/app/${entry.name}`);
    }
  }

  return ok(jars.join(":"));
}
