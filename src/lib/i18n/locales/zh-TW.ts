import { Translations } from './en';

export const zhTW: Translations = {
  // 歡迎頁面
  welcome: {
    title: "歡迎使用 Claudia",
    ccAgents: "CC 小幫手",
    ccAgentsDescription: "管理您的 Claude Code 小幫手",
    ccProjects: "CC 專案",
    ccProjectsDescription: "瀏覽和管理您的 Claude Code 專案"
  },
  
  // 導航
  navigation: {
    backToHome: "← 回到首頁",
    usageDashboard: "使用量儀表板",
    claudeMd: "CLAUDE.md",
    mcp: "MCP",
    settings: "設定",
    info: "資訊",
    projects: "CC 專案",
  },
  
  // 專案
  projects: {
    title: "CC 專案",
    subtitle: "瀏覽您的 Claude Code 工作階段",
    browseDescription: "瀏覽和管理您的 Claude Code 專案",
    newSession: "新工作階段",
    noProjects: "在 ~/.claude/projects 中找不到專案",
    session: "個工作階段",
    sessions: "個工作階段",
    browseSession: "瀏覽此工作階段",
    loading: "正在載入專案...",
    sessionHistory: "工作階段記錄",
    firstMessage: "第一則訊息",
    hasTodo: "有待辦事項",
    noProjectsFound: "找不到專案"
  },
  
  // 小幫手
  agents: {
    title: "CC 小幫手",
    createNew: "建立 CC 小幫手",
    runningAgents: "執行中的小幫手",
    execute: "執行",
    noAgents: "找不到小幫手",
    agentExecution: "小幫手執行",
    backgroundExecution: "背景執行",
    manageAgents: "管理您的 Claude Code 小幫手",
    import: "匯入",
    fromFile: "從檔案",
    fromGitHub: "從 GitHub",
    agents: "小幫手",
    runningSessions: "執行中的工作階段",
    noAgentsYet: "尚無小幫手",
    createFirstAgent: "建立您的第一個 CC 小幫手以開始使用",
    createAgent: "建立 CC 小幫手",
    edit: "編輯",
    export: "匯出",
    delete: "刪除",
    executeAgent: "執行小幫手",
    editAgent: "編輯小幫手",
    exportAgent: "匯出小幫手為 .claudia.json",
    deleteAgent: "刪除小幫手",
    recentExecutions: "最近執行",
    deleteConfirm: "刪除小幫手",
    deleteMessage: "您確定要刪除小幫手",
    deleteWarning: "此操作無法復原，將永久移除小幫手及其所有相關資料。",
    running: "執行中",
    pending: "等待中",
    created: "建立時間",
    viewOutput: "查看輸出",
    stop: "停止",
    task: "任務",
    model: "模型",
    duration: "持續時間",
    projectPath: "專案路徑",
    sessionId: "工作階段 ID",
    unknown: "未知",
    noRunningSessions: "目前沒有執行中的小幫手工作階段",
    loadingRunningSessions: "載入執行中的工作階段...",
    runningSessionsUpdated: '執行中工作階段列表已更新',
    failedToRefresh: '重新整理失敗',
    failedToLoad: '載入執行中工作階段失敗',
    sessionStopped: '{agentName} 工作階段已停止',
    sessionMayFinished: '工作階段可能已結束',
    failedToTerminate: '終止工作階段失敗',
  },
  
  // 狀態
  status: {
    checking: "檢查中...",
    claudeNotFound: "找不到 Claude Code CLI",
    selectInstallation: "選擇 Claude 安裝位置",
    installClaude: "安裝 Claude Code",
    connected: "已連接",
    disconnected: "已斷線"
  },
  
  // UI 元素
  ui: {
    loading: "載入中...",
    backToHome: "回到首頁",
    saving: "儲存中...",
    refresh: "重新整理",
    cancel: "取消",
    close: "關閉",
    previous: "上一頁",
    next: "下一頁",
    page: "第",
    of: "頁，共",
    noOutput: "無可用輸出"
  },

  // 通用
  common: {
    loading: "載入中...",
    error: "錯誤",
    success: "成功",
    cancel: "取消",
    save: "儲存",
    saving: "儲存中...",
    delete: "刪除",
    edit: "編輯",
    back: "返回",
    next: "下一步",
    previous: "上一步",
    close: "關閉",
    confirm: "確認",
    create: "建立",
    update: "更新",
    refresh: "重新整理",
  },
  
  // 設定
  settings: {
    title: "設定",
    language: "語言",
    selectLanguage: "選擇語言",
    theme: "主題",
    general: "一般",
    preferences: "偏好設定",
    configurePreferences: "配置您的偏好設定和權限",
    saving: "儲存中...",
    saveSettings: "儲存設定",
    generalSettings: "一般設定",
    permissions: "權限",
    environment: "環境",
    advanced: "進階",
    verboseOutput: "詳細輸出",
    claudeInstallation: "Claude Code 安裝",
    permissionRules: "權限規則",
    allowRules: "允許規則",
    denyRules: "拒絕規則",
    environmentVariables: "環境變數",
    advancedSettings: "進階設定",
    apiKeyHelper: "API 金鑰協助腳本",
    includeCoauthored: '包含「Co-authored by Claude」',
    includeCoauthoredDesc: '在 git commit 與 pull request 加上 Claude 署名',
    verbose: '詳細輸出',
    verboseDesc: '顯示完整 bash 與指令輸出',
    cleanup: '聊天記錄保留天數',
    cleanupDesc: '本地保留聊天記錄的天數（預設 30 天）',
    installation: 'Claude Code 安裝路徑',
    installationDesc: '選擇要使用的 Claude Code 安裝版本',
    binaryChanged: '⚠️ Claude 執行檔路徑已變更，請記得儲存設定。',
    permissionRulesDesc: '控制 Claude Code 可自動使用哪些工具',
    addRule: '新增規則',
    noAllowRules: '尚未設定允許規則，Claude 會對所有工具請求確認。',
    noDenyRules: '尚未設定禁止規則。',
    allowExample: '例如：Bash(npm run test:*)',
    examples: '範例：',
    envVars: '環境變數',
    envVarsDesc: '每個 Claude Code 工作階段都會套用這些環境變數',
    addVar: '新增變數',
    noEnvVars: '尚未設定任何環境變數。',
    commonVars: '常用變數：',
    advancedSettingsDesc: '進階使用者的額外設定選項',
    apiKeyHelperDesc: '自訂產生 API 請求授權資訊的腳本',
    rawSettings: '原始設定（JSON）',
    rawSettingsDesc: '這裡顯示將儲存到 ~/.claude/settings.json 的原始內容',
    saveSuccess: '設定已成功儲存！',
    saveFailed: '儲存設定失敗',
    loadFailed: '載入設定失敗，請確認 ~/.claude 目錄存在。',
    allowExampleBashAll: '允許所有 bash 指令',
    allowExampleBashExact: '允許該指令',
    allowExampleBashPrefix: '允許此前綴指令',
    allowExampleReadFile: '允許讀取特定檔案',
    allowExampleEditDocs: '允許編輯 docs 資料夾內檔案',
    varTelemetryDesc: '啟用/停用遙測 (0 或 1)',
    varModelDesc: '自訂模型名稱',
    varDisableCostDesc: '停用成本警告 (1)',
  },
  
    // 檔案操作
  file: {
    editor: "檔案編輯器",
    browser: "檔案瀏覽器",
    management: "檔案管理",
    preview: "預覽",
    editSystemPrompt: "編輯 Claude Code CLI 的系統提示",
    save: "儲存",
    saving: "儲存中..."
  },

  // 儀表板
  dashboard: {
    usage: "使用量儀表板",
    analytics: "分析",
    statistics: "統計",
    overview: "總覽",
    trackUsage: "追蹤您的 Claude Code 使用情況和分析",
    allTime: "全部時間",
    last7Days: "最近 7 天",
    last30Days: "最近 30 天",
    totalCost: '總花費',
    totalSessions: '總工作階段數',
    totalTokens: "總 Tokens 數",
    byModel: "依模型",
    byProject: "依專案",
    bySession: "依工作階段",
    timeline: "時間軸",
    tokenBreakdown: "Token 分析",
    inputTokens: "輸入 Tokens",
    outputTokens: "輸出 Tokens",
    cacheWrite: "快取寫入",
    cacheRead: "快取讀取",
    tokens: "tokens",
    mostUsedModels: "最常使用的模型",
    topProjects: "熱門專案",
    usageByModel: "依模型使用情況",
    usageByProject: "依專案使用情況",
    usageBySession: "依工作階段使用情況",
    dailyUsage: '每日使用趨勢',
    avgCostPerSession: '平均每階段花費',
    loading: '載入使用統計中...',
    tryAgain: '重試',
    noData: '所選期間沒有使用資料',
    sessions: '個工作階段',
    cacheW: '快取寫入',
    cacheR: '快取讀取',
    model: '模型',
    cost: '花費',
    input: '輸入',
    output: '輸出',
    dailyUsageOverTime: '每日使用趨勢',
  },

  // MCP
  mcp: {
    title: "MCP 伺服器",
    manageServers: "管理您的模型上下文協定伺服器",
    addServer: "新增伺服器",
    importExport: "匯入/匯出",
    servers: "伺服器",
    configuredServers: '已設定的伺服器',
    serversConfigured: '已設定 {count} 台伺服器',
    refresh: '重新整理',
    noServers: '尚未設定 MCP 伺服器',
    addServerHint: '請新增伺服器以開始使用 Model Context Protocol',
    showFull: '顯示全部',
    hide: '隱藏',
    copy: '複製',
    copied: '已複製！',
    command: '啟動指令',
    arguments: '參數',
    url: 'URL',
    envVars: '環境變數',
    envVarsTitle: '環境變數',
    running: '執行中',
    localScope: '本地（專案專屬）',
    projectScope: '專案（.mcp.json 共享）',
    userScope: '使用者（所有專案）',
    failedToLoadServers: '載入 MCP 伺服器失敗。請確認已安裝 Claude Code。',
    serverAdded: '已成功新增 MCP 伺服器！',
    serverRemoved: '已成功移除伺服器「{name}」！',
    importSuccess: '已成功匯入 {count} 個伺服器{plural}！',
    importMixed: '已匯入 {count} 個伺服器{plural}，{failed} 個失敗',
    addTitle: '新增 MCP 伺服器',
    addDescription: '配置新的 Model Context Protocol 伺服器',
    stdio: 'Stdio',
    sse: 'SSE',
    serverName: '伺服器名稱',
    serverNameHelp: '用來識別此伺服器的唯一名稱',
    serverNameRequired: '請輸入伺服器名稱',
    commandHelp: '啟動伺服器所需的指令',
    commandRequired: '請輸入執行指令',
    argumentsOptional: '參數（可選）',
    argumentsHelp: '以空白分隔的指令參數',
    scope: '範圍',
    urlRequired: '請輸入 URL',
    addServerFailed: '新增伺服器失敗',
    addingServer: '新增伺服器中…',
    addStdioServer: '新增 Stdio 伺服器',
    addSseServer: '新增 SSE 伺服器',
    exampleCommands: '指令範例',
    importExportTitle: '匯入與匯出',
    importExportDesc: '從其他來源匯入 MCP 伺服器或匯出您的設定',
    importScope: '匯入範圍',
    importScopeHelp: '選擇匯入 JSON 時要儲存到哪個範圍',
    importFromDesktop: '從 Claude Desktop 匯入',
    importFromDesktopDesc: '自動從 Claude Desktop 匯入所有 MCP 伺服器。將安裝到使用者範圍（所有專案可用）。',
    importing: '匯入中…',
    importFromDesktopBtn: '從 Claude Desktop 匯入',
    importFromJson: '從 JSON 匯入',
    importFromJsonDesc: '從 JSON 檔案匯入伺服器設定',
    chooseJsonFile: '選擇 JSON 檔案',
    exportConfiguration: '匯出設定',
    exportConfigurationDesc: '匯出您的 MCP 伺服器設定',
    exportComingSoon: '匯出功能即將推出！',
    exportComingSoonBtn: '匯出（即將推出）',
    useAsMcpServer: '將 Claude Code 作為 MCP 伺服器',
    useAsMcpServerDesc: '啟動 Claude Code 做為 MCP 伺服器，供其他應用程式連線',
    startMcpServer: '啟動 MCP 伺服器',
    startMcpServerFailed: '啟動 Claude Code MCP 伺服器失敗',
    invalidJson: '無效的 JSON 檔案，請檢查格式。',
    unrecognizedJson: '無法識別的 JSON 格式，應為 MCP 伺服器設定。',
    importJsonFailed: '匯入 JSON 檔案失敗',
    jsonExamples: 'JSON 格式範例',
    singleServer: '單一伺服器：',
    multipleServers: '多個伺服器（.mcp.json 格式）：',
  },

  webview: {
    preview: "預覽",
    failedToLoad: "載入預覽失敗",
    enterUrl: "輸入要預覽的網址",
    loadingPreview: "載入預覽中...",
    tryEntering: "嘗試輸入",
    orAnyUrl: "或任何其他網址",
    enterUrlPlaceholder: "輸入網址...",
    pageCouldNotLoad: "無法載入頁面。請檢查網址並重試。",
    exitFullScreen: "退出全螢幕 (ESC)",
    enterFullScreen: "進入全螢幕"
  },

  floatingPrompt: {
    compose: "撰寫你的提示",
    typeHere: "請在此輸入提示...",
    askAnything: "問 Claude 任何事...",
    dropImages: "拖曳圖片到這裡...",
    model: "模型",
    thinking: "思考模式",
    stop: "停止",
    sendHint: "按 Enter 送出，Shift+Enter 換行{extra}",
    model_sonnet: "Claude 4 Sonnet",
    model_sonnet_desc: "快速，適合大多數任務",
    model_opus: "Claude 4 Opus",
    model_opus_desc: "更強大，適合複雜任務",
    auto: "自動",
    letClaudeDecide: "讓 Claude 自行決定",
    think: "思考",
    thinkDesc: "基本推理",
    thinkHard: "深入思考",
    thinkHardDesc: "更深層分析",
    thinkHarder: "極致思考",
    thinkHarderDesc: "廣泛推理",
    ultrathink: "超級思考",
    ultrathinkDesc: "最大運算量"
  },

  agent: {
    create: '新增 CC 小幫手',
    edit: '編輯 CC 小幫手',
    createDesc: '建立新的 Claude Code 小幫手',
    editDesc: '編輯你的 Claude Code 小幫手',
    basicInfo: '基本資訊',
    name: '小幫手名稱',
    icon: '小幫手圖示',
    model: '模型',
    sonnet: 'Claude 4 Sonnet',
    sonnetDesc: '快速，適合大多數任務',
    opus: 'Claude 4 Opus',
    opusDesc: '更強大，適合複雜任務',
    defaultTask: '預設任務（可選）',
    defaultTaskDesc: '執行小幫手時會自動帶入的預設任務內容',
    systemPrompt: '系統提示',
    systemPromptDesc: '定義 CC 小幫手的行為與能力',
    save: '儲存',
    saving: '儲存中...',
    unsavedConfirm: '你有未儲存的變更，確定要離開嗎？',
    nameRequired: '請輸入小幫手名稱',
    promptRequired: '請輸入系統提示',
    createFailed: '建立小幫手失敗',
    updateFailed: '更新小幫手失敗',
    namePlaceholder: '例如：程式助理',
    defaultTaskPlaceholder: '例如：請檢查這段程式碼有無安全問題',
    iconLabel: '小幫手圖示',
    modelLabel: '模型',
    systemPromptLabel: '系統提示',
    defaultTaskLabel: '預設任務（可選）',
  },

  claudeVersion: {
    failedToLoad: '載入 Claude 安裝項失敗',
    noInstallations: '系統中未找到任何 Claude Code 安裝。',
    selectInstallation: '選擇 Claude Code 安裝路徑',
    current: '目前使用',
    saveSelection: '儲存選擇',
  },

  claudeSession: {
    title: 'Claude Code 工作階段',
    resuming: '正在恢復工作階段 {id}...',
    interactive: '互動工作階段',
    settingsBtn: '設定',
    timelineBtn: '時間線',
    closePreview: '關閉預覽窗格',
    openPreview: '開啟瀏覽器預覽以測試您的網頁應用',
    copyOutput: '複製輸出',
    copyAsMarkdown: '複製為 Markdown',
    copyAsJsonl: '複製為 JSONL',
    queuedPrompts: '排隊提示',
    scrollTop: '捲至頂部',
    scrollBottom: '捲至底部',
    loadingHistory: '載入工作階段歷史…',
    initializing: '初始化 Claude Code…',
    projectDir: '專案目錄',
    projectDirPlaceholder: '/path/to/your/project',
    failedLoadHistory: '載入工作階段歷史失敗',
    selectProjectDir: '請先選擇專案目錄',
    failedSelectDir: '選擇目錄失敗：{msg}',
    failedSendPrompt: '發送提示失敗',
  },
}; 