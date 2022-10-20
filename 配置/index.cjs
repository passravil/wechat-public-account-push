/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2d0cee344d475954',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8af1f1df780b649b2005b5b068f144b4',

  PROVINCE: '甘肃',
  CITY: '兰州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝姗姗',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2Y7m5uSEnsZMR7XlBarmNQi_q0Y',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rIxQK6zPkS8juNxhV1p2fJEfF9FEEUr8tlcXNqQ8RP0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '徐艺姗', year: '2002', date: '12-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '王毅', year: '2001', date: '12-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2027-12-13' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rIxQK6zPkS8juNxhV1p2fJEfF9FEEUr8tlcXNqQ8RP0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2Y7m5uSEnsZMR7XlBarmNQi_q0Y',
    }
  ],

}

module.exports = USER_CONFIG

