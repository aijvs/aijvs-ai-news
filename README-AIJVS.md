# AI 资讯日报 - news.aijvs.com

基于 [next-daily-hot](https://github.com/PageXHub/next-daily-hot) 定制的 AI 资讯聚合平台。

## 功能特性

- 🔥 **AI 热点聚合**：36氪、虎嗅、IT之家等科技媒体
- 📚 **最新论文**：Hugging Face Daily Papers（待集成）
- ⭐ **热门项目**：GitHub Trending AI 项目
- 🌙 **明暗主题**：护眼体验
- 📱 **响应式设计**：完美适配桌面端和移动端

## 技术栈

- Next.js 16.1.1
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- HeroUI 3.0

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5173
```

## 部署

### Cloudflare Pages

```bash
# 构建命令
pnpm build

# 输出目录
.next
```

## 数据源

### 当前保留的平台
- 36氪 (36kr) - 科技资讯
- 虎嗅 (huxiu) - 科技评论
- IT之家 (ithome) - 科技新闻
- 知乎 (zhihu) - AI 话题
- GitHub Trending - AI 开源项目
- Hello GitHub - 精选开源项目

### 待添加的数据源
- Hugging Face Daily Papers
- ArXiv AI 论文
- AI 相关 Subreddit
- ProductHunt AI 产品

## 自定义修改

相比原版 next-daily-hot，本版本做了以下修改：

1. **删除非 AI 相关平台**：微博、抖音、快手、小红书、B站、豆瓣等
2. **修改品牌信息**：网站名称、描述、Logo
3. **优化数据源**：聚焦 AI 和科技领域
4. **添加 Horizon 集成**：支持从 Horizon 生成的 JSON 读取数据

## 许可证

MIT License

## 致谢

- [baiwumm/next-daily-hot](https://github.com/baiwumm/next-daily-hot) - 原始项目
- [imsyy/DailyHot](https://github.com/imsyy/DailyHot) - 灵感来源
