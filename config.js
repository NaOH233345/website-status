// 配置
window.Config = {

  // 站点名
  SiteName: 'Gong_cx 的站点状态记录',

  // 站点链接
  SiteUrl: 'https://status.gong-cx.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot.sino.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
        // Status
    'm787305296-91e9e3fec8aab66400f5456f',
        // 服务器 - HK
    'm787486152-6c98ada739e0452e8e2e0822',
    // 服务器 - CN
    'm789045589-aa4c724e50481824deb4c00f',
    //个人介绍页
    'm789046749-eb9a19ebbd61f55f3816baa2',
        // 博客
    'm787305177-8d1cb826967c07ee296fdfb7',
        // 短网址
    'm787816356-da1704a6cf220029065b982a',
        // 镜像
    'm787305612-3febd51bec7680ebcb06b317',
        // 	Burial0268
    'm787909514-d93cc41e1f3b78b47a8289ab',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,
  
  Navi: [
    {
      text: '我的博客',
      url: 'https://www.gcxstudio.cn'
    },
    {
      text: '我的个人介绍页',
      url: 'https://gcxstudio.cn'
    }
  ]
};