import { CoolRpcEvent, CoolRpcEventHandler } from '@cool-midway/rpc';

@CoolRpcEvent()
export class TestRpcEvent {
  /**
   * 监听事件
   * @param params 事件参数
   */
  @CoolRpcEventHandler()
  async test(params) {
    console.log('收到事件参数', params);
  }
}
