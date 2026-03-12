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
      {
        "q": "Why does my OpenClaw fail to start and trigger a 'Panic' after modifying the config file?",
        "a": "The new version introduces strict Schema validation and a 'Fail-Closed' mechanism. If the configuration contains undefined 'miscellaneous keys' (such as custom notes) or syntax errors, the program will crash immediately instead of starting with 'default safe settings' to prevent running in an insecure, unintended state."
      },
      {
        "q": "Why are WebSocket connections consistently rejected when deploying OpenClaw remotely?",
        "a": "This is due to the added `allowedOrigins` cross-origin restriction, which defaults to `localhost` only. For remote deployments (e.g., on a VPS), you must manually add your access IP or domain to this array in the config file; otherwise, the system will physically block all untrusted connection sources."
      },
      {
        "q": "How can I ensure the AI does not access sensitive files on my computer via path traversal?",
        "a": "You should configure the `mediaLocalRoots` security whitelist. The AI is now restricted to accessing media files only within the paths defined in this array, preventing the path traversal vulnerabilities found in February versions that allowed access to the entire disk."
      },
      {
        "q": "In the latest version, do I still need to worry about API Keys being replaced by __OPENCLAW_REDACTED__?",
        "a": "No, this was a serialization bug specific to the 2026.2.6-3 version and has been fixed. However, you should check your old `openclaw.json`; if you find that string, you must manually re-enter your actual API keys."
      },
      {
        "q": "Why did my 'file reading' function suddenly stop working, and how do I stabilize permissions?",
        "a": "This is likely due to changes in the default value of `tools.profile`. For configuration stability, it is now recommended to explicitly declare `\"profile\": \"coding\"` (high permission) or `\"messaging\"` (low permission) in the `tools` section rather than relying on system defaults."
      },
      {
        "q": "How can I prevent security threats from AI plugins (Skills)?",
        "a": "Approximately 10% of public Skills currently contain potential security threats. It is recommended to download only from trusted sources and inspect the `manifest.json`. Additionally, the new SDK replaces `registerHttpHandler` with `registerHttpRoute` and mandates `AuthRequired` flags to prevent exposing interfaces without authentication."
      },
      {
        "q": "How do I monitor and prevent Token costs from spiraling out of control?",
        "a": "Since Agents have system-level execution privileges, they may generate massive calls if stuck in logical loops or targeted by prompt injection attacks. It is advised to set hard usage limits in your model provider's dashboard and monitor billing changes after model renamings (e.g., migrating from MiniMax-M2.5-Lightning to highspeed)."
      },
      {
        "q": "What are the consequences if my terminal environment is tricked into executing malicious code?",
        "a": "Because OpenClaw often holds system-level permissions, AI hallucinations or malicious plugins could lead to ransomware infections, deletion of critical files, or the theft of corporate credentials (such as Discord Tokens)."
      }
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
      },{
        "q": "为什么我的 OpenClaw 在修改配置文件后无法启动并提示 Panic？",
        "a": "新版本引入了严格的 Schema 验证和 Fail-Closed 机制。如果配置文件中存在未定义的‘杂项键’（如自定义备注）或语法错误，程序会直接崩溃退出，不再使用‘默认安全配置’启动，以防止在非预期状态下运行带来的安全风险。"
      },
      {
        "q": "远程部署 OpenClaw 时，为什么 WebSocket 连接总是被拒绝？",
        "a": "这是由于新增了 `allowedOrigins` 跨域限制。默认仅允许 `localhost` 访问。若为远程部署（如 VPS），必须在配置文件的数组中手动添加你的访问 IP 或域名，否则系统会物理封死非受信任来源的连接。"
      },
      {
        "q": "如何确保 AI 不会通过路径穿越访问我电脑上的敏感文件？",
        "a": "请配置 `mediaLocalRoots` 安全白名单。AI 现在被限制只能访问该数组定义路径下的媒体文件，无法再像旧版本那样通过路径穿越访问全盘文件。建议仅包含必要的素材文件夹。"
      },
      {
        "q": "在最新的版本中，还需要担心 API Key 被自动替换成 __OPENCLAW_REDACTED__ 吗？",
        "a": "不需要。该问题属于 2026.2.6-3 版本的序列化 Bug，最新版本已修复。但建议检查旧的 `openclaw.json`，若发现该字符串，需手动填回真实的 Key。"
      },
      {
        "q": "为什么我的‘文件读取’功能突然失效了？如何稳定权限？",
        "a": "这可能与 `tools.profile` 的默认值变动有关。为了保证配置稳定性，建议在 `tools` 段落显式声明 `\"profile\": \"coding\"`（高权限）或 `\"messaging\"`（低权限），不要依赖系统的默认分配。"
      },
      {
        "q": "如何预防 AI 插件（Skill）带来的安全威胁？",
        "a": "目前约 10% 的公开 Skill 存在恶意文件风险。建议仅从受信任源下载，并在安装后检查其 `manifest.json`。此外，新版 SDK 将函数名更新为 `registerHttpRoute` 并强制要求 `AuthRequired` 标志位，使用旧版插件时务必注意接口是否暴露。"
      },
      {
        "q": "如何监控并防止 Token 费用消耗失控？",
        "a": "由于 Agent 具备系统级执行权限，一旦陷入逻辑死循环或遭遇提示词注入攻击，可能会产生海量调用。建议在模型提供商后台设置硬性额度限制，并关注 MiniMax 等模型更名（如从 Lightning 迁移至 highspeed）后的计费变化。"
      },
      {
        "q": "如果我的终端环境被诱导执行了恶意代码，后果是什么？",
        "a": "由于 OpenClaw 通常具备系统级权限，一旦 AI 产生幻觉或中招恶意插件，可能导致勒索病毒感染、重要文件被删除或企业凭据（如 Discord Token）被非法外泄。"
      }
    ],
  },
} as const;
