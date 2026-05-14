const createGroupUrl = (groupNumber) =>
  `mqqapi://im/chat?chat_type=wpa&uin=${groupNumber}&version=1&src_type=web&web_src=qq.com`

export const pageContent = {
  eyebrow: 'QQ群号发布',
  title: 'QQ群号发布',
  subtitle: '这里是公会传讯板，集中展示各个群组与它们的状态。',
  groups: [
    {
      name: '男仆彩6th',
      groupNumber: '1022260098',
      status: '正常',
      qqGroupApplyUrl: createGroupUrl('1022260098'),
    },
    {
      name: '男仆彩7th',
      groupNumber: '未知',
      status: '筹备中',
      qqGroupApplyUrl: createGroupUrl(''),
    },
    {
      name: '萝集会 临时避难',
      groupNumber: '102315274',
      status: '临时',
      qqGroupApplyUrl: createGroupUrl('102315274'),
    },
    {
      name: '萝集会 4th',
      groupNumber: '位置',
      status: '筹备中',
      qqGroupApplyUrl: createGroupUrl(''),
    },
  ],
}
