import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: 'cool-admin for node rpc',
  koa: {
    port: 8002,
  },
} as MidwayConfig;
