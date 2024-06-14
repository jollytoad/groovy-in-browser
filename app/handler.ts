import routes from "./routes.ts";
import { handle } from "@http/route/handle";
import { staticRoute } from "@http/route-deno/static-route";
import { interceptResponse } from "@http/interceptor/intercept-response";
import { skip } from "@http/interceptor/skip";

export default handle([
  routes,
  interceptResponse(
    staticRoute("/", import.meta.resolve("./static")),
    skip(404, 405),
  ),
  staticRoute("/", import.meta.resolve("../target/dependency")),
]);
