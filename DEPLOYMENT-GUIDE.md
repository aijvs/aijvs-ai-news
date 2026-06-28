# AI 资讯日报部署指南

## 项目状态

✅ 已完成：
1. 克隆 next-daily-hot 项目到 `aijvs-ai-news`
2. 创建 `.env` 配置文件
3. 删除非 AI 相关平台（保留：36氪、虎嗅、IT之家、知乎、GitHub Trending等）
4. 创建 AI 平台配置文件 `src/config/ai-platforms.ts`
5. 创建 Horizon 集成 API `src/app/api/horizon/route.ts`
6. 创建 Hugging Face Papers API `src/app/api/hf-papers/route.ts`

⏳ 待完成：
1. 安装依赖
2. 本地测试
3. 推送到 GitHub
4. 部署到 Cloudflare Pages
5. 配置自定义域名 `news.aijvs.com`

---

## 步骤 1：安装依赖

### 方法 A：使用 pnpm（推荐）

```bash
# 安装 pnpm（如果未安装）
npm install -g pnpm

# 进入项目目录
cd C:\Users\Administrator\.qclaw\workspace\aijvs-ai-news

# 安装依赖
pnpm install
```

### 方法 B：使用 npm

```bash
# 进入项目目录
cd C:\Users\Administrator\.qclaw\workspace\aijvs-ai-news

# 安装依赖
npm install
```

### 方法 C：使用 yarn

```bash
# 安装 yarn（如果未安装）
npm install -g yarn

# 进入项目目录
cd C:\Users\Administrator\.qclaw\workspace\aijvs-ai-news

# 安装依赖
yarn install
```

---

## 步骤 2：本地测试

```bash
# 启动开发服务器
pnpm dev
# 或
npm run dev

# 访问 http://localhost:5173
```

**预期结果**：
- 网站标题显示 "AI 资讯日报"
- 显示 12 个平台的 API（36氪、虎嗅、IT之家、知乎、GitHub等）
- 可以切换明暗主题

---

## 步骤 3：推送到 GitHub

### 3.1 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`aijvs-ai-news`
3. 描述：`AI 资讯聚合平台 - news.aijvs.com`
4. 可见性：Public
5. 点击 "Create repository"

### 3.2 初始化 Git 并推送

```bash
# 进入项目目录
cd C:\Users\Administrator\.qclaw\workspace\aijvs-ai-news

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化 AI 资讯日报项目

- 基于 next-daily-hot 定制
- 删除非 AI 相关平台
- 添加 Horizon 集成 API
- 添加 Hugging Face Papers API
- 配置 AI 平台专属数据源"

# 添加远程仓库
git remote add origin https://github.com/aijvs/aijvs-ai-news.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## 步骤 4：部署到 Cloudflare Pages

### 4.1 连接 GitHub 仓库

1. 登录 Cloudflare Dashboard：https://dash.cloudflare.com/
2. 进入 **Workers & Pages** → **Create application**
3. 选择 **Pages** → **Connect to Git**
4. 授权 GitHub 并选择仓库 `aijvs/aijvs-ai-news`

### 4.2 配置构建设置

在 **Set up builds and deployments** 页面：

| 配置项 | 值 |
|--------|-----|
| **Production branch** | `main` |
| **Build command** | `pnpm build` 或 `npm run build` |
| **Build output directory** | `.vercel/output/static` |

**环境变量**（点击 "Add variable"）：

| 变量名 | 值 |
|--------|-----|
| `NODE_VERSION` | `20` |
| `PNPM_VERSION` | `8` |
| `NEXT_PUBLIC_APP_NAME` | `AI 资讯日报` |
| `NEXT_PUBLIC_APP_URL` | `https://news.aijvs.com` |

### 4.3 点击 "Save and Deploy"

等待构建完成（约 3-5 分钟）。

---

## 步骤 5：配置自定义域名

### 5.1 添加域名到 Cloudflare Pages

1. 在 Cloudflare Pages 项目页面，点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入：`news.aijvs.com`
4. 点击 **Activate domain**

### 5.2 配置 DNS 记录

Cloudflare 会自动添加 DNS 记录，格式如下：

| 类型 | 名称 | 内容 | 代理状态 |
|------|------|------|----------|
| CNAME | news | aijvs-ai-news.pages.dev | 已代理 |

### 5.3 等待 DNS 生效

通常 5-10 分钟后，访问 https://news.aijvs.com 即可看到网站。

---

## 步骤 6：在主站和导航站添加入口

### 6.1 在 aijvs.com 添加菜单

编辑 Hexo 主题配置文件（通常是 `_config.butterfly.yml`）：

```yaml
menu:
  首页: / || fas fa-home
  归档: /archives/ || fas fa-archive
  AI资讯: https://news.aijvs.com || fas fa-newspaper
  AI导航: https://nav.aijvs.com || fas fa-compass
  关于: /about/ || fas fa-user
```

### 6.2 在 nav.aijvs.com 添加链接

编辑导航站配置文件，添加：

```json
{
  "name": "AI资讯日报",
  "url": "https://news.aijvs.com",
  "description": "每日更新AI领域最新资讯",
  "icon": "newspaper"
}
```

---

## 步骤 7：测试和验证

### 7.1 测试 API

访问以下链接测试 API 是否正常：

- https://news.aijvs.com/api/36kr
- https://news.aijvs.com/api/huxiu
- https://news.aijvs.com/api/zhihu
- https://news.aijvs.com/api/github-trending
- https://news.aijvs.com/api/horizon
- https://news.aijvs.com/api/hf-papers

### 7.2 测试前端

- 访问 https://news.aijvs.com
- 检查明暗主题切换
- 检查响应式设计（手机/平板/桌面）
- 检查各平台数据是否正常显示

---

## 故障排查

### 问题 1：构建失败

**可能原因**：
- Node.js 版本过低（需要 20+）
- 依赖安装失败

**解决**：
```bash
# 清除依赖缓存
rm -rf node_modules pnpm-lock.yaml

# 重新安装
pnpm install
```

### 问题 2：API 返回 404

**可能原因**：
- API 路由文件未正确创建
- Next.js 配置错误

**解决**：
检查 `src/app/api/` 目录下的文件是否存在。

### 问题 3：自定义域名无法访问

**可能原因**：
- DNS 记录未生效
- SSL 证书未签发

**解决**：
- 等待 10-15 分钟
- 在 Cloudflare Pages 设置中检查 SSL 状态

---

## 下一步优化

### 1. 集成 Horizon 数据

当 Horizon 部署完成后：

1. 修改 `src/app/api/horizon/route.ts` 中的 GitHub raw URL
2. 确保 Horizon 生成的 `ai-news.json` 推送到 aijvs-blog 仓库

### 2. 添加更多数据源

- Hugging Face Papers（需要爬虫）
- ArXiv API
- ProductHunt AI 产品
- Reddit r/MachineLearning

### 3. 优化 UI

- 添加 AI 资讯专属样式
- 添加论文摘要展示
- 添加项目热度趋势图

### 4. 添加功能

- 用户订阅（邮件/Telegram）
- RSS 输出
- API 接口文档

---

## 联系支持

如果在部署过程中遇到问题，请提供：
- 错误信息截图
- Cloudflare Pages 构建日志
- 具体卡在哪一步

我可以帮您远程排查！

---

## 附录：项目结构

```
aijvs-ai-news/
├── src/
│   ├── app/
│   │   ├── api/              # API 路由
│   │   │   ├── 36kr/
│   │   │   ├── huxiu/
│   │   │   ├── ithome/
│   │   │   ├── zhihu/
│   │   │   ├── github-trending/
│   │   │   ├── horizon/      # Horizon 集成
│   │   │   └── hf-papers/    # Hugging Face Papers
│   │   ├── page.tsx          # 首页
│   │   └── layout.tsx        # 布局
│   ├── config/
│   │   └── ai-platforms.ts   # AI 平台配置
│   └── components/           # 组件
├── public/                   # 静态文件
├── .env                      # 环境变量
├── next.config.ts            # Next.js 配置
└── package.json              # 依赖配置
```

---

## 更新日志

### 2026-06-27
- ✅ 初始化项目
- ✅ 删除非 AI 相关平台
- ✅ 添加 Horizon 集成 API
- ✅ 添加 Hugging Face Papers API
- ✅ 创建部署指南
