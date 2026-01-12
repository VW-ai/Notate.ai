# Notate 设计系统

本文档总结了 Notate 应用的整体美学风格与设计规范。

---

## 设计理念

### 核心风格
- **极简主义** - 最小化视觉元素，强调内容而非装饰
- **毛玻璃风格 (Glassmorphism)** - 大量透明度与模糊效果，创造"浮动"层次感
- **微交互优先** - 快速、优雅的动画反馈 (150-250ms)
- **Mac 原生风格** - 交通灯预留、原生字体栈、拖拽区域支持

---

## 颜色系统

### 基础色板

| 用途 | 颜色值 | Tailwind |
|------|--------|----------|
| 主背景 | `rgba(255, 255, 255, 0.9)` | `bg-primary` |
| 次背景 | `#f5f5f5` | `bg-secondary` |
| 正文黑 | `#1a1a1a` | `text-primary` |
| 副文本 | `#666666` | `text-secondary` |
| 弱化文本 | `#999999` | `text-muted` |
| 强调蓝 | `#3b82f6` | `accent` |
| 成功绿 | `#22c55e` | `success` |

### 语义标签颜色

| 标签 | 颜色 | 用途 |
|------|------|------|
| AI | `#22c55e` 绿 | AI 相关内容 |
| Research | `#3b82f6` 蓝 | 研究内容 |
| Startup | `#a855f7` 紫 | 创业相关 |
| Product | `#f59e0b` 橙 | 产品相关 |
| Design | `#ec4899` 粉 | 设计相关 |
| Engineering | `#14b8a6` 青 | 工程技术 |

### Rainbow 渐变

用于特殊强调元素（输入框聚焦、装饰条等）：

```css
linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd)
```

---

## 字体系统

### 字体家族

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', sans-serif;
```

### 字号规范

| 层级 | 字号 | 字重 | 用途 |
|------|------|------|------|
| H1 | 32px | 600 | 主页问候语 |
| H2 | 20px | 600 | 页面标题 |
| H3 | 14px | 500 | 卡片标题 |
| Body | 14px | 400 | 正文内容 |
| Caption | 12px | 400 | 时间戳、标签 |

---

## 间距系统

基础单位：**4px**

### 常用间距

| 场景 | 值 | Tailwind |
|------|-----|----------|
| 容器内边距 | 16-32px | `p-4` ~ `p-8` |
| 卡片内边距 | 12-20px | `p-3` ~ `p-5` |
| 元素间距 | 8-24px | `gap-2` ~ `gap-6` |
| 标题下方 | 12-24px | `mb-3` ~ `mb-6` |

### 布局尺寸

- 侧边栏宽度: `208px` (`w-52`)
- 交通灯预留: `52px`
- 卡片宽度: `180px` (Canvas)
- 右侧面板: `320px` (`w-80`)

---

## 组件样式

### 毛玻璃卡片 (Glass Card)

```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(20px);
border-radius: 16px;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### 通用卡片

```tsx
className="p-4 bg-white/80 border border-gray-200/60 rounded-2xl
           hover:border-gray-300/80 hover:shadow-lg
           transition-all cursor-pointer backdrop-blur-sm"
```

### 主要按钮 (深色)

```tsx
className="bg-gray-900 text-white rounded-xl px-4 py-2.5
           hover:bg-gray-800 shadow-lg shadow-gray-900/20
           transition-all"
```

### 次要按钮 (浅色)

```tsx
className="bg-white/80 border border-gray-200/60 rounded-xl px-4 py-2.5
           text-gray-700 hover:border-gray-300/80 hover:shadow-md
           transition-all backdrop-blur-sm"
```

### 标签/Pill

```tsx
className="bg-gray-100/80 rounded-full px-3 py-1.5
           text-sm text-gray-600 hover:bg-gray-200/80
           transition-all backdrop-blur-sm"
```

### 输入框

```tsx
className="bg-gray-100/80 rounded-xl px-4 py-2.5
           outline-none focus:ring-2 focus:ring-gray-300
           transition-all backdrop-blur-sm"
```

### 消息气泡

**用户消息**:
```tsx
className="bg-gray-900 text-white rounded-2xl p-4 shadow-lg"
```

**AI 消息**:
```tsx
className="bg-white/80 border border-gray-200/60 rounded-2xl p-4 backdrop-blur-sm"
```

---

## 动画系统

### 关键帧动画

| 动画名 | 时长 | 用途 |
|--------|------|------|
| `rainbow-sweep` | 250ms | 彩虹条扫过 |
| `fade-in` | 150ms | 元素淡入 |
| `scale-in` | 150ms | 缩放进入 |

### Framer Motion 标准

**进场动画**:
```tsx
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.15, ease: 'easeOut' }}
```

**瀑布效果**:
```tsx
transition={{ delay: index * 0.03, duration: 0.4 }}
```

### 交互过渡

- 标准过渡: `transition-all duration-200`
- Hover 效果: 边框变亮 + 阴影增加 + Y轴上移
- 选中态: `ring-2 ring-gray-900`

---

## 特殊元素

### Canvas 背景点阵

```css
background: radial-gradient(circle, #d1d5db 1px, transparent 1px);
background-size: 24px 24px;
opacity: 0.5;
```

### Cluster 大标题

```css
font-size: 64px;
font-weight: 800;
letter-spacing: -0.02em;
color: rgba(cluster-color, 0.2);
```

### Kaomoji 状态指示

- 默认: `(－_－) zzz`
- 加载: `(－_－)・・・`
- 成功: `(＾▽＾)✓`

---

## 设计 Token 速查

| 属性 | 值 |
|------|-----|
| 大圆角 | `rounded-2xl` (16px) |
| 中圆角 | `rounded-xl` (12px) |
| 小圆角 | `rounded-lg` (8px) |
| 主阴影 | `shadow-lg` |
| 毛玻璃 | `backdrop-blur-xl` |
| 边框色 | `border-gray-200/60` |
| 透明背景 | `bg-white/80` |

---

## 技术栈

- **Tailwind CSS 3.4** - 原子化 CSS 框架
- **Framer Motion 11** - React 动画库
- **Lucide React** - 图标系统
- **Recharts** - 数据可视化

---

## 设计价值观

1. **内容为王** - 界面服务于内容，不喧宾夺主
2. **效率优先** - 最少操作完成任务
3. **现代美感** - 毛玻璃 + 极简风格
4. **一致性** - 统一的颜色、间距、动画规范
5. **优雅反馈** - 清晰的视觉交互提示
