// pages/index.js
import { useState, useEffect } from 'react'

export default function Home() {
  const [envVars, setEnvVars] = useState({
    apiKey: '正在加载...',
    baseUrl: '正在加载...'
  })

  useEffect(() => {
    // 获取环境变量
    async function fetchEnvVars() {
      try {
        const response = await fetch('/api/env')
        const data = await response.json()
        setEnvVars(data)
      } catch (error) {
        console.error('获取环境变量失败:', error)
        setEnvVars({
          apiKey: '获取失败',
          baseUrl: '获取失败'
        })
      }
    }

    fetchEnvVars()
  }, [])

  return (
    <div className="container">
      <h1>Azure 环境变量测试页面</h1>
      
      <div className="env-display">
        <h2>测试环境变量：</h2>
        <div className="env-item">
          <strong>API Key:</strong> 
          <span>{envVars.apiKey}</span>
        </div>
        <div className="env-item">
          <strong>Base URL:</strong>
          <span>{envVars.baseUrl}</span>
        </div>
      </div>

      <style jsx>{`
        .container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.6;
        }
        .env-display {
          background-color: #f5f5f5;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .env-item {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}