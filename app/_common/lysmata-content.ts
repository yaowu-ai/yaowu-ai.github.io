export const lysmataContent = {
  en: {
    title: 'Lysmata',
    subtitle: 'Desktop client for OpenClaw Gateway management',
    heroTitle: 'One control center for all your OpenClaw bots',
    heroDesc:
      'Connect, configure, and collaborate with multiple OpenClaw gateways from one clean desktop experience. Local-first design keeps your data secure on your machine.',
    downloadBtn: 'Download Latest',
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
    systemReqTitle: 'System Requirements',
    systemReq: [
      'macOS 10.15+ / Windows 10+ ',
      'Node.js 22+ (required for OpenClaw Gateway)',
      '4GB RAM minimum, 8GB recommended',
      '100MB disk space',
    ],
    installTitle: 'Quick Start',
    installSteps: [
      {
        title: 'Download',
        desc: 'Get the latest version from GitHub Releases',
      },
      {
        title: 'Install',
        desc: 'Open the dmg/exe file and drag to Applications folder',
      },
      {
        title: 'Launch',
        desc: 'Start Lysmata and it will auto-detect OpenClaw installation',
      },
      {
        title: 'Configure',
        desc: 'Set up your OpenClaw Gateway connection and LLM providers',
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What is OpenClaw?',
        a: 'OpenClaw is an AI Agent Gateway that lets you connect and manage multiple AI agents. Lysmata is the desktop client to manage these connections.',
      },
      {
        q: 'Is my data stored locally?',
        a: 'Yes! All bots, conversations, and messages are stored in your local SQLite database (~/.lysmata/app.db). Nothing leaves your machine unless you send it.',
      },
      {
        q: 'Do I need to install OpenClaw separately?',
        a: 'Lysmata will try to auto-detect and install OpenClaw if missing. You can also install it manually via `npm install -g openclaw`.',
      },
      {
        q: 'How do I update Lysmata?',
        a: 'Check the GitHub Releases page for new versions and download the latest installer.',
      },
    ],
  },
  zh: {
    title: 'Lysmata',
    subtitle: 'OpenClaw Gateway 的桌面管理客户端',
    heroTitle: '一个控制台，管理全部 OpenClaw Bot',
    heroDesc:
      '在一个简洁的桌面体验中，连接、配置并协作管理多个 OpenClaw Gateway。本地优先设计，数据安全存储在本地机器上。',
    downloadBtn: '下载最新版',
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
    systemReqTitle: '系统要求',
    systemReq: [
      'macOS 10.15+ / Windows 10+ / Linux (Debian/Ubuntu/Fedora)',
      'Node.js 22+ (OpenClaw Gateway 运行依赖)',
      '至少 4GB 内存，推荐 8GB',
      '至少 100MB 磁盘空间',
    ],
    installTitle: '快速开始',
    installSteps: [
      {
        title: '下载安装包',
        desc: '从 GitHub Releases 下载最新版本',
      },
      {
        title: '安装应用',
        desc: '打开 dmg/exe 文件，拖拽到应用程序文件夹',
      },
      {
        title: '启动应用',
        desc: '启动 Lysmata，应用会自动检测 OpenClaw 安装情况',
      },
      {
        title: '配置连接',
        desc: '设置 OpenClaw Gateway 连接与 LLM 供应商',
      },
    ],
    faqTitle: '常见问题',
    faq: [
      {
        q: '什么是 OpenClaw？',
        a: 'OpenClaw 是一个 AI Agent Gateway，用于连接和管理多个 AI Agent。Lysmata 是其桌面客户端，用于管理这些连接。',
      },
      {
        q: '我的数据会存储在哪里？',
        a: '所有 Bot、对话和消息都存储在本地 SQLite 数据库（~/.lysmata/app.db）中。数据不会离开你的机器，除非你主动发送。',
      },
      {
        q: '需要单独安装 OpenClaw 吗？',
        a: 'Lysmata 会自动检测并安装 OpenClaw（如果缺失）。你也可以手动通过 `npm install -g openclaw` 安装。',
      },
      {
        q: '如何更新 Lysmata？',
        a: '访问 GitHub Releases 页面下载最新版本的安装包进行更新。',
      },
    ],
  },
} as const;
