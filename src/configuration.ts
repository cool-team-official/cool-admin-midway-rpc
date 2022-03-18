import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as info from '@midwayjs/info';
import { join } from 'path';
import * as cool from '@cool-midway/core';
import * as orm from '@midwayjs/orm';
import * as rpc from '@cool-midway/rpc';

@Configuration({
  imports: [
    koa,
    // typeorm https://typeorm.io  打不开？ https://typeorm.biunav.com/zh/
    orm,
    // cool-admin 官方组件 https://www.cool-js.com
    cool,
    // rpc 微服务
    rpc,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {}
}
