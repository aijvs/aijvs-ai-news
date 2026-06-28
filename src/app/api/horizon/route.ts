import { NextResponse } from 'next/server';

/**
 * Horizon AI 资讯 API
 * 
 * 从 GitHub 仓库获取 Horizon 生成的 AI 日报数据
 * 数据格式：JSON（存储在 aijvs-blog/data/ai-news.json）
 */
export async function GET() {
  try {
    // 从 GitHub raw 文件获取数据
    // TODO: 部署后替换为实际的文件路径
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/aijvs/aijvs-blog/main/data/ai-news.json';
    
    const response = await fetch(GITHUB_RAW_URL, {
      headers: {
        'Accept': 'application/json',
      },
      // 缓存 5 分钟
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      // 如果文件不存在，返回模拟数据
      return NextResponse.json({
        success: false,
        message: 'Horizon 数据文件不存在，请先部署 Horizon 并生成数据',
        mockData: generateMockData(),
      });
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      data,
      lastUpdate: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to fetch Horizon data:', error);
    
    return NextResponse.json({
      success: false,
      message: '获取 Horizon 数据失败',
      error: error instanceof Error ? error.message : 'Unknown error',
      mockData: generateMockData(),
    }, { status: 500 });
  }
}

// 模拟数据（开发阶段使用）
function generateMockData() {
  return {
    date: new Date().toISOString().split('T')[0],
    articles: [
      {
        title: 'OpenAI 发布 GPT-5 预览版',
        url: 'https://example.com/gpt5',
        source: '36氪',
        score: 95,
        summary: 'OpenAI 今日宣布推出 GPT-5 预览版，性能提升 50%...',
        tags: ['GPT', 'OpenAI', '大模型'],
      },
      {
        title: 'Claude 3.5 支持实时联网',
        url: 'https://example.com/claude',
        source: '虎嗅',
        score: 92,
        summary: 'Anthropic 更新 Claude 3.5，新增实时联网能力...',
        tags: ['Claude', 'Anthropic', 'AI'],
      },
      {
        title: 'GitHub Copilot Workspace 正式发布',
        url: 'https://example.com/copilot',
        source: 'IT之家',
        score: 88,
        summary: 'GitHub 推出 Copilot Workspace，AI 辅助编程进入新阶段...',
        tags: ['GitHub', 'Copilot', '编程'],
      },
    ],
  };
}
