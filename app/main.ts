#!/usr/bin/env -S deno run --allow-read --allow-net

import init from "@http/host-deno-deploy/init";
import handler from "./handler.ts";

await Deno.serve(await init(handler)).finished;
