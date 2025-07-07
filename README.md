# 个人博客模板

> **项目名称说明：** xyy-diary stands for 贤🐟🐟日记

这是一个基于 Docusaurus 构建的个人博客模板，具有独特的 ASCII 动画设计，为分享想法、学习经验和技术见解提供了简洁专业的布局。

## ✨ 特性

- **多分区博客**：不同类型内容的组织化分类
  - 学习与成长
  - 技术与研究  
  - 技术指南
  - 生活感悟
- **ASCII 动画**：首页独特的动画 ASCII 计数器
- **响应式设计**：在所有设备上都能完美显示
- **深色模式支持**：完整的深色模式实现
- **清晰排版**：易于阅读的内容布局
- **SEO 优化**：Docusaurus 内置的 SEO 功能

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/FinnClair-Su/xyy-diary-template.git
   cd xyy-diary-template
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```

   网站将在 `http://localhost:3000` 打开。

4. **构建生产版本**
   ```bash
   npm run build
   ```

## 🎨 自定义配置

### 基础配置

1. **更新网站信息** 在 `docusaurus.config.ts` 中：
   - 修改 `title`、`tagline`、`url`
   - 更新 `organizationName` 和 `projectName`
   - 修改社交链接和联系信息

2. **更新个人信息**：
   - 编辑 `src/pages/about.md`
   - 更新 `blog/authors.yml`、`learning/authors.yml`、`life/authors.yml` 中的作者信息
   - 替换 `static/img/authors/` 中的占位符图片

3. **自定义首页**：
   - 编辑 `src/pages/index.tsx` 中的内容
   - 修改 ASCII 动画的文本
   - 更新模块描述

### 高级自定义

- **样式**：编辑 `src/css/custom.css` 来自定义颜色方案和字体
- **组件**：在 `src/components/` 中添加新的 React 组件
- **布局**：在 `src/theme/` 中自定义页面布局

## 📝 内容创作

### 博客文章

在相应目录中创建新文章：
- `blog/` - 技术与研究文章
- `learning/` - 学习与成长文章  
- `life/` - 生活感悟文章

每篇文章应遵循以下格式：
```markdown
---
slug: your-post-slug
title: 你的文章标题
authors: [your-username]
tags: [标签1, 标签2, 标签3]
---

文章介绍内容。

<!-- truncate -->

完整文章内容...
```

### 添加图片

1. 将图片添加到 `static/img/`
2. 在文章中引用：`![替代文本](/img/your-image.png)`
3. 作者头像：放置在 `static/img/authors/your-avatar.jpg`

## 🚢 部署

### GitHub Pages
1. 更新 `docusaurus.config.ts` 中的 GitHub 相关配置
2. 运行：`npm run deploy`

### Netlify
1. 连接你的 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`build`

### Vercel
1. 导入你的 GitHub 仓库
2. Vercel 会自动检测并配置 Docusaurus 项目

### Cloudflare Pages
1. 连接你的 GitHub 仓库
2. 构建命令：`npm run build`
3. 构建输出目录：`build`

## 🎯 设计理念

### 视觉设计
- **Windows 7 风格灵感**：采用经典的蓝色配色方案 (`#0078d4`)
- **现代怀旧**：将复古美学与当代网页设计相结合
- **无障碍访问**：高对比度和可读性字体

### 首页动画
ASCII 计数器动画有两重含义：
1. **学习隐喻**：展示单个字符（知识）如何累积成有意义的文本
2. **技术怀旧**：七段数码管风格向早期计算致敬

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Docusaurus](https://docusaurus.io/) - 出色的静态站点生成器
- [React](https://reactjs.org/) - UI 框架
- [Prism](https://prismjs.com/) - 代码语法高亮

## 🔗 相关链接

- [Docusaurus 文档](https://docusaurus.io/docs)
- [React 文档](https://reactjs.org/docs)
- [Markdown 指南](https://www.markdownguide.org/)

---

*用 ❤️ 和 Docusaurus 构建*