// AI 资讯平台配置
// 对应 src/app/api/ 目录下的路由

export interface Platform {
  id: string;
  name: string;
  icon: string;
  category: 'hot-news' | 'tech-media' | 'developer' | 'papers';
  description: string;
  apiPath: string;
  enabled: boolean;
}

export const platforms: Platform[] = [
  // 热点资讯
  {
    id: 'baidu',
    name: '百度热搜',
    icon: '/baidu.svg',
    category: 'hot-news',
    description: '实时热点排行榜',
    apiPath: '/api/baidu',
    enabled: true,
  },
  {
    id: 'zhihu',
    name: '知乎热榜',
    icon: '/zhihu.svg',
    category: 'hot-news',
    description: 'AI 话题讨论',
    apiPath: '/api/zhihu',
    enabled: true,
  },

  // 科技媒体
  {
    id: '36kr',
    name: '36氪',
    icon: '/36kr.svg',
    category: 'tech-media',
    description: '24小时科技热榜',
    apiPath: '/api/36kr',
    enabled: true,
  },
  {
    id: 'huxiu',
    name: '虎嗅',
    icon: '/huxiu.svg',
    category: 'tech-media',
    description: '最新科技资讯',
    apiPath: '/api/huxiu',
    enabled: true,
  },
  {
    id: 'ithome',
    name: 'IT之家',
    icon: '/ithome.svg',
    category: 'tech-media',
    description: '科技新闻热榜',
    apiPath: '/api/ithome',
    enabled: true,
  },
  {
    id: 'ifanr',
    name: '爱范儿',
    icon: '/ifanr.svg',
    category: 'tech-media',
    description: '科技快讯',
    apiPath: '/api/ifanr',
    enabled: true,
  },

  // 开发者社区
  {
    id: 'github-trending',
    name: 'GitHub Trending',
    icon: '/github-trending.svg',
    category: 'developer',
    description: '热门开源项目',
    apiPath: '/api/github-trending',
    enabled: true,
  },
  {
    id: 'hello-github',
    name: 'HelloGitHub',
    icon: '/hello-github.svg',
    category: 'developer',
    description: '精选开源项目',
    apiPath: '/api/hello-github',
    enabled: true,
  },
  {
    id: 'juejin',
    name: '稀土掘金',
    icon: '/juejin.svg',
    category: 'developer',
    description: '技术热榜',
    apiPath: '/api/juejin',
    enabled: true,
  },
  {
    id: 'csdn',
    name: 'CSDN',
    icon: '/csdn.svg',
    category: 'developer',
    description: '开发者热榜',
    apiPath: '/api/csdn',
    enabled: true,
  },

  // 其他
  {
    id: 'zhihu-daily',
    name: '知乎日报',
    icon: '/zhihu-daily.svg',
    category: 'hot-news',
    description: '精选内容推荐',
    apiPath: '/api/zhihu-daily',
    enabled: true,
  },
  {
    id: 'history-today',
    name: '历史上的今天',
    icon: '/history-today.svg',
    category: 'hot-news',
    description: '历史百科',
    apiPath: '/api/history-today',
    enabled: true,
  },
];

// 按分类获取平台
export const getPlatformsByCategory = (category: Platform['category']) => {
  return platforms.filter((p) => p.category === category && p.enabled);
};

// 获取所有启用的平台
export const getEnabledPlatforms = () => {
  return platforms.filter((p) => p.enabled);
};

// 分类标签
export const categoryLabels: Record<Platform['category'], string> = {
  'hot-news': '🔥 热点资讯',
  'tech-media': '📰 科技媒体',
  developer: '💻 开发者',
  papers: '📚 学术论文',
};
