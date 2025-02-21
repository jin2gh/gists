import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import path from 'path'

const demoDir = path.resolve(__dirname, '../../src/demos')

export default defineConfig({
  base: '/gists/',
  title: 'gists',
  description: '代码片段，gist',
  themeConfig: {
    nav: [
      { text: '前端', link: '/f' },
      { text: '工具脚本', link: '/x' },
    ],
    sidebar: {
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jin2gh' },
    ],
    outline: [2, 4],
  },

  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir,
      })
    }
  }
})