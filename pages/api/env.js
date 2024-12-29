// pages/api/env.js

export default function handler(req, res) {
    // 只允许 GET 请求
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    // 返回公开的环境变量
    res.status(200).json({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '未设置',
      baseUrl: process.env.NEXT_PUBLIC_GEMINI_API_BASE_URL || '默认URL'
    });
  }