'use client'

import { useMemo, useState } from 'react'

type Lang = 'en' | 'zh'

const copy = {
  en: {
    eyebrow: 'OpenClaw Desktop Client',
    title: 'Lysmata',
    subtitle:
      'Connect, configure, and collaborate with multiple OpenClaw gateways from one clean desktop experience.',
    primaryCta: 'Learn More',
    secondaryCta: 'View Repository',
    overviewTitle: 'One control center for all your bots',
    overviewParagraphs: [
      'Lysmata is a cross-platform desktop client built with Tauri v2 for OpenClaw gateway management. It brings bot connectivity, model configuration, and real-time conversations into one focused interface.',
      'The app follows a local-first approach. Bots, conversations, and messages are stored in local SQLite, making history traceable and operational context easier to manage.',
    ],
    featuresTitle: 'Core capabilities',
    features: [
      {
        title: 'Bot Management',
        desc: 'Add, edit, and remove multiple gateway connections with endpoint, token, agent ID, skills, and MCP settings.',
      },
      {
        title: 'Private & Group Chat',
        desc: 'Run one-on-one sessions or multi-bot discussions, with SSE streaming and @mention routing.',
      },
      {
        title: 'LLM Provider Settings',
        desc: 'Manage OpenAI, Anthropic, Google, OpenRouter, and custom providers in UI with model-level control.',
      },
      {
        title: 'Real-Time Event Feed',
        desc: 'Track health, presence, heartbeat, shutdown, and node-pair events as they happen.',
      },
      {
        title: 'Local Persistence',
        desc: 'Persist data in ~/.lysmata/app.db for stable context retention and easy inspection.',
      },
      {
        title: 'Lightweight Desktop Stack',
        desc: 'Tauri shell + sidecar architecture keeps startup fast and operations responsive.',
      },
    ],
    architectureTitle: 'Three-layer architecture',
    architecture: [
      {
        title: 'Frontend',
        desc: 'React 19 + Vite 7 handles interaction and visual state.',
      },
      {
        title: 'Service Layer',
        desc: 'Hono sidecar on Bun provides REST, SSE, WebSocket proxy, and SQLite support.',
      },
      {
        title: 'Gateway Layer',
        desc: 'Connects to local or remote OpenClaw gateways for agent RPC and streaming responses.',
      },
    ],
    linksTitle: 'Project links',
    links: [
      {
        title: 'GitHub Repository',
        desc: 'Source code, issues, and releases.',
        href: 'https://github.com/yaowu-ai/lysmata',
      },
      {
        title: 'README (Chinese)',
        desc: 'Chinese overview, setup, and configuration guide.',
        href: 'https://github.com/yaowu-ai/lysmata/blob/main/README.zh.md',
      },
      {
        title: 'README (English)',
        desc: 'English project introduction and local development guide.',
        href: 'https://github.com/yaowu-ai/lysmata/blob/main/README.md',
      },
    ],
  },
  zh: {
    eyebrow: 'OpenClaw 桌面客户端',
    title: 'Lysmata',
    subtitle:
      '在一个简洁的桌面体验中，连接、配置并协作管理多个 OpenClaw Gateway。',
    primaryCta: '了解更多',
    secondaryCta: '查看仓库',
    overviewTitle: '一个控制台，管理全部 Bot',
    overviewParagraphs: [
      'Lysmata 是基于 Tauri v2 构建的跨平台桌面客户端，专注于 OpenClaw Gateway 的连接管理、模型配置与实时会话。',
      '应用采用本地优先设计：Bot、会话与消息保存于本地 SQLite，便于追溯历史并保持运维上下文可控。',
    ],
    featuresTitle: '核心能力',
    features: [
      {
        title: 'Bot 管理',
        desc: '支持多个 Gateway 的新增、编辑与删除，覆盖端点、鉴权 Token、Agent ID、Skills 与 MCP。',
      },
      {
        title: '私聊与群聊',
        desc: '支持一对一会话与多 Bot 群聊，响应通过 SSE 流式返回，并支持 @提及路由。',
      },
      {
        title: 'LLM 配置中心',
        desc: '在 UI 中管理 OpenAI、Anthropic、Google、OpenRouter 及自定义 Provider 与模型。',
      },
      {
        title: '实时事件流',
        desc: '实时追踪健康状态、在线信息、心跳、关机与节点配对等关键事件。',
      },
      {
        title: '本地持久化',
        desc: '数据存储于 ~/.lysmata/app.db，便于会话上下文沉淀与后续分析。',
      },
      {
        title: '轻量桌面架构',
        desc: 'Tauri 壳 + sidecar 方案兼顾启动速度与交互响应性能。',
      },
    ],
    architectureTitle: '三层架构',
    architecture: [
      {
        title: '前端层',
        desc: 'React 19 + Vite 7 负责交互与可视化状态管理。',
      },
      {
        title: '服务层',
        desc: 'Bun 运行时上的 Hono sidecar 提供 REST、SSE、WebSocket 代理与 SQLite 能力。',
      },
      {
        title: '网关层',
        desc: '对接本地或远程 OpenClaw Gateway，承载 Agent RPC 与流式响应。',
      },
    ],
    linksTitle: '项目链接',
    links: [
      {
        title: 'GitHub 仓库',
        desc: '查看源代码、Issue 与发布记录。',
        href: 'https://github.com/yaowu-ai/lysmata',
      },
      {
        title: '中文 README',
        desc: '阅读中文介绍、环境要求、快速开始与配置说明。',
        href: 'https://github.com/yaowu-ai/lysmata/blob/main/README.zh.md',
      },
      {
        title: 'English README',
        desc: '阅读英文版项目介绍与开发指南。',
        href: 'https://github.com/yaowu-ai/lysmata/blob/main/README.md',
      },
    ],
  },
} as const

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const t = useMemo(() => copy[lang], [lang])

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="lang-switch" aria-label="Language switch">
            <button
              type="button"
              className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'zh' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLang('zh')}
            >
              中文
            </button>
          </div>
          <p className="hero-eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-actions">
            <a href="#overview" className="button button-primary">
              {t.primaryCta}
            </a>
            <a
              href="https://github.com/yaowu-ai/lysmata"
              className="button button-secondary"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="container narrow">
          <h2>{t.overviewTitle}</h2>
          {t.overviewParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2>{t.featuresTitle}</h2>
          <div className="features-grid">
            {t.features.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture">
        <div className="container">
          <h2>{t.architectureTitle}</h2>
          <div className="architecture-grid">
            {t.architecture.map((item) => (
              <article key={item.title} className="architecture-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="links">
        <div className="container">
          <h2>{t.linksTitle}</h2>
          <div className="links-grid">
            {t.links.map((item) => (
              <a key={item.title} className="link-tile" href={item.href}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}