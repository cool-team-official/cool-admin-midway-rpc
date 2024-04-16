import { BaseEntity } from '@cool-midway/core';
import { Entity, Column } from 'typeorm';

/**
 * 商品
 */
@Entity('demo_goods')
export class DemoGoodsEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;

  @Column({ comment: '图片' })
  pic: string;

  @Column({ comment: '价格', type: 'decimal', precision: 5, scale: 2 })
  price: number;

  @Column({ comment: '分类', type: 'tinyint' })
  type: number;
}
