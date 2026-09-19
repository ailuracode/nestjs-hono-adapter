/**
 * The WebSocket entry point, kept out of the root module so a
 * deployment that only serves HTTP never resolves
 * `@nestjs/websockets` or `@hono/node-ws`: both are optional
 * peers, and neither is needed to run the HTTP adapter.
 *
 * It is published as the `@ailura/nestjs-hono-adapter/ws`
 * subpath rather than re-exported from `index.ts`, because an
 * ESM re-export resolves eagerly and would load them anyway.
 */
export { HonoWsAdapter } from './ws-adapter.ts';
export type { HonoGatewayOptions } from './ws-adapter.ts';
export type { HonoSocket } from './ws-client.ts';
