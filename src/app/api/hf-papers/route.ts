import { NextResponse } from 'next/server';

/**
 * Hugging Face Daily Papers API
 * 
 * 获取 Hugging Face 每日最新 AI 论文
 * 文档：https://huggingface.co/papers
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

  try {
    // 方法 1：使用 Hugging Face API（如果有公开 API）
    // 目前 Hugging Face Papers 没有公开 API，需要爬取网页
    
    // 方法 2：返回模拟数据（实际部署时需要实现爬虫）
    const mockData = generateMockPapers(date);
    
    return NextResponse.json({
      success: true,
      date,
      papers: mockData,
      lastUpdate: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to fetch HF papers:', error);
    
    return NextResponse.json({
      success: false,
      message: '获取 Hugging Face Papers 失败',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// 模拟数据
function generateMockPapers(date: string) {
  return [
    {
      id: '2406.12345',
      title: 'Scaling Laws for Neural Language Models',
      authors: ['Jared Kaplan', 'Sam McCandlish', 'Tom Henighan'],
      abstract: 'We study empirical scaling laws for language model performance...',
      url: `https://arxiv.org/abs/2406.12345`,
      pdfUrl: `https://arxiv.org/pdf/2406.12345.pdf`,
      huggingfaceUrl: `https://huggingface.co/papers/2406.12345`,
      publishedAt: date,
      stars: 1250,
      tags: ['LLM', 'Scaling Laws', 'NLP'],
    },
    {
      id: '2406.12346',
      title: 'Efficient Transformers: A Survey',
      authors: ['Yi Tay', 'Mostafa Dehghani', 'Dara Bahri'],
      abstract: 'Transformers have become the dominant architecture for NLP...',
      url: `https://arxiv.org/abs/2406.12346`,
      pdfUrl: `https://arxiv.org/pdf/2406.12346.pdf`,
      huggingfaceUrl: `https://huggingface.co/papers/2406.12346`,
      publishedAt: date,
      stars: 980,
      tags: ['Transformer', 'Efficiency', 'Survey'],
    },
    {
      id: '2406.12347',
      title: 'Multimodal Foundation Models: From CLIP to GPT-4V',
      authors: ['Junnan Li', 'Dongxu Li', 'Silvio Savarese'],
      abstract: 'Multimodal foundation models have achieved remarkable progress...',
      url: `https://arxiv.org/abs/2406.12347`,
      pdfUrl: `https://arxiv.org/pdf/2406.12347.pdf`,
      huggingfaceUrl: `https://huggingface.co/papers/2406.12347`,
      publishedAt: date,
      stars: 1500,
      tags: ['Multimodal', 'CLIP', 'GPT-4V'],
    },
  ];
}
