# 贡献指南 (Contributing Guide)

首先，感谢您对 IE8 UI Components 项目的关注和贡献意愿！

## 🎯 项目目标

IE8 UI Components 旨在为仍需支持 Internet Explorer 8 的项目提供现代化的UI组件库。我们的目标是：

- 🔒 **完全兼容 IE8** - 使用CSS2.1和ES3标准
- 🎨 **现代化设计** - 在技术限制下提供美观的界面
- 📱 **响应式支持** - 使用float布局实现响应式设计
- ⚡ **高性能** - 优化的代码，快速加载
- 📖 **易于使用** - 简单明了的API和文档

## 🤝 如何贡献

### 报告问题 (Issues)

在提交新问题之前，请：

1. **搜索现有问题** - 检查是否已有类似问题
2. **使用问题模板** - 提供详细的复现步骤
3. **包含环境信息** - IE版本、操作系统等
4. **提供最小示例** - 能复现问题的最小代码

#### 问题模板

```markdown
## 问题描述
简要描述遇到的问题

## 复现步骤
1. 步骤一
2. 步骤二
3. 看到错误

## 预期行为
描述您期望发生的情况

## 实际行为
描述实际发生的情况

## 环境信息
- IE版本：IE8
- 操作系统：Windows XP/7/8
- 组件版本：1.0.0

## 附加信息
其他相关信息、截图等
```

### 提交代码 (Pull Requests)

#### 开发环境设置

1. **Fork 仓库**
```bash
# 克隆您的fork
git clone https://github.com/YOUR-USERNAME/ie8-ui-components.git
cd ie8-ui-components
```

2. **创建分支**
```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

3. **设置测试环境**
- 安装 Windows XP/7 虚拟机
- 在虚拟机中安装 IE8
- 使用本地服务器测试

#### 代码规范

##### CSS 规范

```css
/* ✅ 正确：使用IE8兼容的属性 */
.my-element {
    display: block;
    float: left;
    width: 100%;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    /* IE8渐变 */
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#ffffff', 
        endColorstr='#f0f0f0'
    );
    zoom: 1; /* 触发hasLayout */
}

/* ❌ 错误：使用了IE8不支持的属性 */
.wrong-element {
    display: flex; /* IE8不支持 */
    border-radius: 5px; /* IE8不支持 */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* IE8不支持 */
}
```

##### JavaScript 规范

```javascript
// ✅ 正确：使用IE8兼容的语法
function MyComponent(element, options) {
    this.element = element;
    this.options = IE8UI.utils.extend({
        // 默认选项
    }, options || {});
    
    this.init();
}

MyComponent.prototype.init = function() {
    var self = this;
    IE8UI.utils.addEvent(this.element, 'click', function(e) {
        self.handleClick(e);
    });
};

// ❌ 错误：使用了IE8不支持的语法
const MyComponent = (element, options = {}) => { // IE8不支持
    this.element = element;
    this.options = { ...defaultOptions, ...options }; // IE8不支持
    
    element.addEventListener('click', this.handleClick); // IE8不支持
};
```

##### HTML 规范

```html
<!-- ✅ 正确：使用HTML4.01/XHTML标准 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <title>页面标题</title>
</head>
<body>
    <div class="container">
        <div class="header">头部内容</div>
        <div class="content">主要内容</div>
        <div class="footer">底部内容</div>
    </div>
</body>
</html>

<!-- ❌ 错误：使用了HTML5元素 -->
<header>头部</header> <!-- IE8不识别 -->
<nav>导航</nav> <!-- IE8不识别 -->
<section>内容</section> <!-- IE8不识别 -->
```

#### 测试要求

1. **在IE8中测试**
   - 确保功能正常工作
   - 检查视觉效果
   - 验证JavaScript功能

2. **兼容性测试**
   - IE8, IE9, IE10+
   - Firefox 3.5+
   - Chrome 1+

3. **性能测试**
   - 页面加载速度
   - JavaScript执行效率
   - 内存使用情况

#### 提交信息规范

使用以下格式的提交信息：

```
类型(范围): 简短描述

详细描述（可选）

相关Issue: #123
```

**类型说明：**
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例：**
```
feat(buttons): 添加大尺寸按钮样式

为按钮组件添加了 .btn-large 类，提供更大的按钮样式选项。
包含适当的内边距和字体大小调整。

相关Issue: #45
```

### 贡献类型

#### 🐛 Bug修复
- 修复IE8兼容性问题
- 解决JavaScript错误
- 修正CSS样式问题

#### ✨ 新功能
- 新的UI组件
- 增强现有组件
- 新的工具函数

#### 📖 文档改进
- 完善API文档
- 添加使用示例
- 改进README

#### 🎨 样式优化
- 改进视觉设计
- 优化CSS代码
- 增强用户体验

#### ⚡ 性能优化
- 减少文件大小
- 优化JavaScript性能
- 改进加载速度

## 🧪 测试指南

### 本地测试

1. **设置测试环境**
```bash
# 启动本地服务器
python -m SimpleHTTPServer 8080
# 或
python -m http.server 8080
```

2. **在IE8中测试**
- 打开 http://localhost:8080
- 测试所有组件功能
- 检查控制台错误

### 测试清单

- [ ] 所有组件在IE8中正常显示
- [ ] JavaScript功能正常工作
- [ ] 表单验证功能正常
- [ ] 响应式布局正常
- [ ] 无JavaScript错误
- [ ] CSS样式正确应用

## 📋 开发指南

### IE8特殊考虑

1. **JavaScript限制**
```javascript
// 不支持的特性
- const/let (使用var)
- 箭头函数 (使用function)
- 模板字符串 (使用字符串拼接)
- 解构赋值 (手动赋值)
- Array.forEach (使用for循环或自定义实现)
- JSON对象 (使用自定义实现)
```

2. **CSS限制**
```css
/* 不支持的特性 */
- border-radius (使用background-image)
- box-shadow (使用IE滤镜)
- rgba颜色 (使用十六进制)
- CSS3选择器 (使用CSS2.1选择器)
- Flexbox (使用float布局)
```

3. **HTML限制**
```html
<!-- 不支持的元素 -->
- HTML5语义元素 (使用div + class)
- input type="email/url/number" (使用type="text" + 验证)
- placeholder属性 (使用JavaScript模拟)
```

### 工具推荐

- **IE8测试**: IETester, Virtual PC
- **代码编辑**: Visual Studio Code, Sublime Text
- **调试工具**: IE8开发者工具
- **版本控制**: Git

## 🏷️ 发布流程

1. **版本号规则**
   - 遵循语义化版本 (Semantic Versioning)
   - 格式：MAJOR.MINOR.PATCH
   - 例如：1.2.3

2. **发布清单**
   - [ ] 更新版本号
   - [ ] 更新CHANGELOG
   - [ ] 在IE8中完整测试
   - [ ] 更新文档
   - [ ] 创建Git标签

## 📞 联系方式

- **GitHub Issues**: [提交问题](https://github.com/yqq-a/ie8-ui-components/issues)
- **Email**: qiuchanye7@gmail.com
- **讨论**: GitHub Discussions

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT许可证](LICENSE) 下进行许可。

## 🙏 致谢

感谢所有贡献者的支持和努力！每一个贡献都让这个项目变得更好。

---

**注意**: 由于IE8的技术限制，某些现代Web开发实践在此项目中不适用。请始终以IE8兼容性为首要考虑。
