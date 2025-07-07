# Personal Blog Template

<!-- xyy-diary stands for 贤🐟🐟日记 -->

This is a personal blog template built with Docusaurus. It features a unique design with ASCII animation and provides a clean, professional layout for sharing your thoughts, learning experiences, and technical insights.

## ✨ Features

- **Multi-section blog**: Organized categories for different types of content
  - Learning & Growth
  - Tech & Research  
  - Technical Guides
  - Life Reflections
- **ASCII Animation**: Unique animated ASCII counter on the homepage
- **Responsive Design**: Works beautifully on all devices
- **Dark Mode Support**: Complete dark mode implementation
- **Clean Typography**: Easy-to-read content layout
- **SEO Optimized**: Built-in SEO features with Docusaurus

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   The site will open at `http://localhost:3000`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Basic Configuration

1. **Update site information** in `docusaurus.config.ts`:
   - Change `title`, `tagline`, `url`
   - Update `organizationName` and `projectName`
   - Modify social links and contact information

2. **Update personal information**:
   - Edit `src/pages/about.md`
   - Update author information in `blog/authors.yml`, `learning/authors.yml`, `life/authors.yml`
   - Replace placeholder images in `static/img/authors/`

3. **Customize the homepage**:
   - Edit content in `src/pages/index.tsx`
   - Modify the ASCII animation text
   - Update module descriptions

### Advanced Customization

- **Styling**: Edit `src/css/custom.css` for color schemes and fonts
- **Components**: Add new React components in `src/components/`
- **Layouts**: Customize page layouts in `src/theme/`

## 📝 Content Creation

### Blog Posts

Create new posts in the respective directories:
- `blog/` - Tech & Research posts
- `learning/` - Learning & Growth posts  
- `life/` - Life Reflections posts

Each post should follow this format:
```markdown
---
slug: your-post-slug
title: Your Post Title
authors: [your-username]
tags: [tag1, tag2, tag3]
---

Your post introduction here.

<!-- truncate -->

Full post content here...
```

### Adding Images

1. Add images to `static/img/`
2. Reference them in posts: `![Alt text](/img/your-image.png)`
3. For author avatars: Place in `static/img/authors/your-avatar.jpg`

## 🚢 Deployment

### GitHub Pages
1. Update GitHub settings in `docusaurus.config.ts`
2. Run: `npm run deploy`

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect and configure the project

### Cloudflare Pages
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `build`

## 🎯 Design Philosophy

### Visual Design
- **Inspired by Windows 7**: Uses the classic blue color scheme (`#0078d4`)
- **Modern nostalgia**: Combines retro aesthetics with contemporary web design
- **Accessibility**: High contrast ratios and readable typography

### Homepage Animation
The ASCII counter animation serves two purposes:
1. **Learning metaphor**: Shows how individual characters (knowledge) accumulate into meaningful text
2. **Tech nostalgia**: Seven-segment display style pays homage to early computing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Docusaurus](https://docusaurus.io/) - The amazing static site generator
- [React](https://reactjs.org/) - The UI framework
- [Prism](https://prismjs.com/) - Code syntax highlighting

## 🔗 Links

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [React Documentation](https://reactjs.org/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

*Built with ❤️ and Docusaurus*