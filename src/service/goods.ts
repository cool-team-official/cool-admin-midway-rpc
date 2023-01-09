import { Provide } from '@midwayjs/decorator';
import {
  BaseRpcService,
  CoolRpcService,
  CoolRpcTransaction,
} from '@cool-midway/rpc';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { DemoGoodsEntity } from '../entity/goods';
import { CoolCommException } from '@cool-midway/core';
// import { CoolCommException } from '@cool-midway/core';

/**
 * 描述
 */
@Provide()
@CoolRpcService({
  entity: DemoGoodsEntity,
  method: ['add', 'delete', 'update', 'info', 'list', 'page'],
})
export class DemoGoodsService extends BaseRpcService {
  @InjectEntityModel(DemoGoodsEntity)
  demoGoodsEntity: Repository<DemoGoodsEntity>;

  /**
   * 测试
   */
  async test(params) {
    console.log(params);
    return params;
  }

  /**
   * 分布式事务测试
   * @param rpcTransactionId 事务ID
   * @param queryRunner 事务执行器
   */
  @CoolRpcTransaction()
  async transaction(params, rpcTransactionId?, queryRunner?: QueryRunner) {
    console.log('获得的参数', params);
    const data = {
      title: '商品标题',
      pic: 'https://xxx',
      price: 99.0,
      type: 1,
    };
    await queryRunner.manager.save(DemoGoodsEntity, data);
    throw new CoolCommException('测试抛出异常回滚事务');
  }
}
