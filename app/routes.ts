// IMPORTANT: This file has been automatically generated, DO NOT edit by hand.

import { byMethod } from "@http/route/by-method";
import { byPattern } from "@http/route/by-pattern";
import { cascade } from "@http/route/cascade";
import { lazy } from "@http/route/lazy";

export default cascade(
  byPattern(
    "/classpath",
    lazy(async () => byMethod(await import("./routes/classpath.ts"))),
  ),
);
