const createGroupUrl = (groupNumber) =>
  `mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${groupNumber}&card_type=group&source=external`

export const pageContent = {
  eyebrow: 'QQ群号发布',
  title: 'QQ群号发布',
  subtitle: '这里可以集中管理多个QQ群号，修改这个文件就能快速更新页面内容。',
  groups: [
    {
      name: '男仆彩6th',
      groupNumber: '1022260098',
      qqGroupApplyUrl: createGroupUrl('1022260098'),
    },
  ],
}
