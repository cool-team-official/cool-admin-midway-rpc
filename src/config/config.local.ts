import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';

/**
 * 本地开发 npm run dev 读取的配置文件
 */
export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'cool-rpc',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: true,
        // 打印日志
        logging: true,
        // 字符集
        charset: 'utf8mb4',
        // 实体路径
        entities: ['**/entity'],
      },
    },
  },
  cool: {
    rpc: {
      // 服务名称 整个集群保证唯一
      name: 'goods',
      // 集群是以redis为注册中心，协调集群之间的工作
      redis: {
        host: '127.0.0.1',
        password: '',
        port: 6379,
        db: 0,
      },
    },
    // 是否自动导入数据库
    initDB: false,
  } as CoolConfig,
} as MidwayConfig;
