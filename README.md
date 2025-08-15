# IE8 UI Components

<div align="center">
  <h3>🏛️ 专为 Internet Explorer 8 设计的完整UI组件库</h3>
  
  <p>
    <img src="https://img.shields.io/badge/IE-8+-blue?style=flat-square&logo=internet-explorer" alt="IE8+">
    <img src="https://img.shields.io/badge/CSS-2.1-green?style=flat-square&logo=css3" alt="CSS 2.1">
    <img src="https://img.shields.io/badge/JavaScript-ES3-yellow?style=flat-square&logo=javascript" alt="ES3">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  </p>
  
  <p>
    <a href="#快速开始">🚀 快速开始</a> •
    <a href="#组件列表">📦 组件列表</a> •
    <a href="#浏览器兼容性">🌐 兼容性</a> •
    <a href="#使用指南">📖 使用指南</a>
  </p>
</div>

---

## 📖 项目简介

IE8 UI Components 是一个专门为 Internet Explorer 8 浏览器设计的完整UI组件库。在现代前端技术无法向后兼容的情况下，这个库提供了在IE8环境中构建现代化用户界面的完整解决方案。

### 🎯 设计目标

- **🔒 完全兼容 IE8** - 使用CSS2.1和ES3标准，确保在IE8中完美运行
- **🎨 现代化设计** - 虽然受限于IE8，但仍然提供美观的用户界面
- **📱 响应式布局** - 基于float的12列栅格系统
- **⚡ 轻量高效** - 优化的代码体积，快速加载
- **🔧 易于使用** - 简单的HTML类名和JavaScript API

### 🚀 主要特性

- ✅ **完整的组件库** - 包含按钮、表单、表格、模态框等30+组件
- ✅ **IE8兼容性层** - 自动修复IE8的JavaScript和CSS问题
- ✅ **响应式栅格** - 12列float布局系统
- ✅ **表单验证** - 内置客户端表单验证功能
- ✅ **事件处理** - 统一的跨浏览器事件处理
- ✅ **动画效果** - 使用IE8支持的滤镜实现视觉效果
- ✅ **主题系统** - 预定义的颜色和样式主题

## 🚀 快速开始

### 📥 下载安装

**方式一：直接下载**
```bash
git clone https://github.com/yqq-a/ie8-ui-components.git
```

**方式二：CDN引入**
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yqq-a/ie8-ui-components/css/ie8-ui.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/yqq-a/ie8-ui-components/js/ie8-ui.js"></script>
```

### 🔧 基本使用

1. **在HTML中引入文件**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <title>IE8 UI Components Demo</title>
    
    <!-- 引入CSS -->
    <link rel="stylesheet" href="css/ie8-ui.css">
</head>
<body>
    <!-- 页面内容 -->
    <div class="container">
        <button class="btn btn-primary">主要按钮</button>
    </div>
    
    <!-- 引入JavaScript -->
    <script src="js/ie8-ui.js"></script>
</body>
</html>
```

2. **设置IE8兼容模式**

```html
<!-- 确保IE8使用标准模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=8">

<!-- 可选：IE8特定样式 -->
<!--[if IE 8]>
    <style>
        .ie8-only { display: block; }
    </style>
<![endif]-->
```

### 📋 基本示例

```html
<!-- 栅格系统 -->
<div class="container">
    <div class="row">
        <div class="col-6">左列</div>
        <div class="col-6">右列</div>
    </div>
</div>

<!-- 按钮 -->
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-success">成功按钮</button>

<!-- 表单 -->
<form>
    <div class="form-group">
        <label class="form-label">用户名</label>
        <input type="text" class="form-control" required>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
</form>

<!-- 模态框 -->
<div id="myModal" class="modal">
    <div class="modal-dialog">
        <div class="modal-header">
            <h4 class="modal-title">标题</h4>
            <a href="#" class="modal-close">&times;</a>
        </div>
        <div class="modal-body">内容</div>
    </div>
</div>
```

## 📦 组件列表

### 🏗️ 布局组件

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **容器** | 页面容器，最大宽度1200px | `.container` |
| **栅格行** | 栅格系统行容器 | `.row` |
| **栅格列** | 12列响应式栅格 | `.col-1` ~ `.col-12` |
| **清除浮动** | 清除浮动工具类 | `.clearfix` |

### 🎛️ 表单组件

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **表单组** | 表单字段容器 | `.form-group` |
| **标签** | 表单标签 | `.form-label` |
| **输入框** | 文本输入控件 | `.form-control` |
| **选择框** | 下拉选择控件 | `.form-select` |
| **文本域** | 多行文本输入 | `.form-textarea` |
| **复选框** | 复选框控件 | `.checkbox` |
| **单选框** | 单选框控件 | `.radio` |

### 🔘 按钮组件

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **基础按钮** | 默认按钮样式 | `.btn` |
| **主要按钮** | 主要操作按钮 | `.btn-primary` |
| **成功按钮** | 成功状态按钮 | `.btn-success` |
| **警告按钮** | 警告状态按钮 | `.btn-warning` |
| **危险按钮** | 危险操作按钮 | `.btn-danger` |
| **按钮尺寸** | 不同尺寸按钮 | `.btn-large` `.btn-small` `.btn-mini` |

### 📊 数据展示

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **基础表格** | 数据表格 | `.table` |
| **条纹表格** | 斑马纹表格 | `.table-striped` |
| **边框表格** | 带边框表格 | `.table-bordered` |
| **悬停表格** | 鼠标悬停效果 | `.table-hover` |
| **进度条** | 进度指示器 | `.progress` `.progress-bar` |

### 💬 反馈组件

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **警告框** | 消息提示框 | `.alert` `.alert-success` `.alert-info` `.alert-warning` `.alert-danger` |
| **模态框** | 弹出对话框 | `.modal` `.modal-dialog` |
| **工具提示** | 悬停提示 | `data-toggle="tooltip"` |

### 🧭 导航组件

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **导航菜单** | 基础导航 | `.nav` |
| **选项卡** | 标签页导航 | `.nav-tabs` |
| **下拉菜单** | 下拉选择菜单 | `.dropdown` `.dropdown-menu` |
| **分页** | 页码导航 | `.pagination` |
| **面包屑** | 路径导航 | `.breadcrumb` |

### 🎨 布局增强

| 组件 | 说明 | CSS类 |
|------|------|-------|
| **面板** | 内容面板 | `.panel` `.panel-header` `.panel-body` |
| **面板类型** | 不同类型面板 | `.panel-primary` `.panel-success` `.panel-warning` `.panel-danger` |

## 🌐 浏览器兼容性

### ✅ 支持的浏览器

| 浏览器 | 版本 | 支持程度 |
|--------|------|----------|
| **Internet Explorer** | 8+ | 🟢 完全支持 |
| **Firefox** | 3.5+ | 🟢 完全支持 |
| **Chrome** | 1+ | 🟢 完全支持 |
| **Safari** | 3+ | 🟢 完全支持 |
| **Opera** | 10+ | 🟢 完全支持 |

### 🚫 不支持的特性

在IE8中以下现代特性不可用，本库使用替代方案：

- ❌ **CSS3** - 使用CSS2.1和IE滤镜替代
- ❌ **HTML5** - 使用HTML4.01标准
- ❌ **Flexbox** - 使用float布局替代
- ❌ **Grid** - 使用表格或float替代
- ❌ **ES5+** - 使用ES3兼容语法
- ❌ **addEventListener** - 使用attachEvent替代
- ❌ **querySelector** - 使用getElementById等替代

### 🔧 IE8特殊处理

```html
<!-- IE8兼容性标签 -->
<!--[if IE 8]>
    <script>
        // IE8特定代码
        document.createElement('header');
        document.createElement('nav');
        document.createElement('section');
    </script>
<![endif]-->

<!-- IE8条件注释 -->
<!--[if lte IE 8]>
    <link rel="stylesheet" href="ie8-fixes.css">
<![endif]-->
```

## 📖 使用指南

### 🎨 样式系统

#### 颜色系统
```html
<!-- 文本颜色 -->
<span class="text-primary">主要文本</span>
<span class="text-success">成功文本</span>
<span class="text-warning">警告文本</span>
<span class="text-danger">危险文本</span>

<!-- 背景颜色 -->
<div class="bg-primary">主要背景</div>
<div class="bg-success">成功背景</div>
```

#### 工具类
```html
<!-- 显示/隐藏 -->
<div class="hidden">隐藏元素</div>
<div class="visible">显示元素</div>

<!-- 浮动 -->
<div class="pull-left">左浮动</div>
<div class="pull-right">右浮动</div>

<!-- 文本对齐 -->
<div class="text-left">左对齐</div>
<div class="text-center">居中对齐</div>
<div class="text-right">右对齐</div>
```

### 💻 JavaScript API

#### 基础工具
```javascript
// 元素选择
var element = IE8UI.utils.$('#myElement');
var elements = IE8UI.utils.$('.myClass');

// 类名操作
IE8UI.utils.addClass(element, 'className');
IE8UI.utils.removeClass(element, 'className');
IE8UI.utils.toggleClass(element, 'className');

// 事件处理
IE8UI.utils.addEvent(element, 'click', function(e) {
    console.log('Clicked!');
});
```

#### 组件初始化
```javascript
// 模态框
var modal = new IE8UI.Modal(document.getElementById('myModal'), {
    backdrop: true,
    keyboard: true
});
modal.show();

// 下拉菜单
var dropdown = new IE8UI.Dropdown(document.getElementById('dropdownToggle'));

// 工具提示
var tooltip = new IE8UI.Tooltip(element, {
    placement: 'top',
    title: '提示内容'
});

// 表单验证
var validator = new IE8UI.FormValidator(formElement, {
    onSubmit: true,
    onBlur: true
});
```

### 📊 进度条操作
```javascript
var progressBar = new IE8UI.ProgressBar(element, {
    value: 0,
    animated: true
});

// 设置进度
progressBar.setValue(75);

// 增加进度
progressBar.increment(10);

// 获取当前进度
var currentValue = progressBar.getValue();
```

### 📋 表单验证
```javascript
// 自定义验证器
var validator = new IE8UI.FormValidator(formElement, {
    errorClass: 'has-error',
    successClass: 'has-success',
    onSubmit: true,
    onBlur: true
});

// 手动验证
if (validator.validate()) {
    console.log('表单验证通过');
} else {
    console.log('表单验证失败');
}

// 验证单个字段
validator.validateField(inputElement);
```

## 🔧 高级用法

### 自定义主题

```css
/* 覆盖默认颜色 */
.btn-primary {
    background-color: #ff6600;
    border-color: #e55a00;
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#ff7711', 
        endColorstr='#e55a00'
    );
}

/* 自定义面板样式 */
.panel-custom {
    border-color: #9c27b0;
}

.panel-custom .panel-header {
    background-color: #9c27b0;
    color: #fff;
}
```

### AJAX请求

```javascript
IE8UI.utils.ajax({
    method: 'POST',
    url: '/api/data',
    data: 'key=value&key2=value2',
    success: function(response, status) {
        console.log('请求成功:', response);
    },
    error: function(status, statusText) {
        console.log('请求失败:', status, statusText);
    }
});
```

### 扩展组件

```javascript
// 自定义组件
IE8UI.MyComponent = function(element, options) {
    this.element = element;
    this.options = IE8UI.utils.extend({
        // 默认选项
    }, options || {});
    
    this.init();
};

IE8UI.MyComponent.prototype = {
    init: function() {
        // 初始化逻辑
    },
    
    someMethod: function() {
        // 组件方法
    }
};
```

## 🎯 最佳实践

### 1. HTML结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <!-- 重要：设置IE8兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <title>页面标题</title>
    <link rel="stylesheet" href="css/ie8-ui.css">
</head>
<body>
    <div class="container">
        <!-- 页面内容 -->
    </div>
    
    <!-- JavaScript放在body底部 -->
    <script src="js/ie8-ui.js"></script>
    <script>
        // 页面特定JavaScript
    </script>
</body>
</html>
```

### 2. CSS最佳实践
```css
/* 使用IE8支持的属性 */
.my-element {
    /* 避免使用 border-radius */
    border: 1px solid #ccc;
    
    /* 避免使用 box-shadow，使用filter替代 */
    filter: progid:DXImageTransform.Microsoft.dropshadow(
        OffX=2, OffY=2, Color='gray', Positive='true'
    );
    
    /* 避免使用 rgba，使用十六进制颜色 */
    background-color: #f0f0f0;
    
    /* 使用zoom触发hasLayout */
    zoom: 1;
}
```

### 3. JavaScript最佳实践
```javascript
// 使用兼容性API
IE8UI.utils.addEvent(element, 'click', function(e) {
    // 阻止默认行为
    IE8UI.utils.preventDefault(e);
    
    // 阻止事件冒泡
    IE8UI.utils.stopPropagation(e);
});

// 避免使用现代JavaScript特性
// ❌ 错误：element.classList.add('class');
// ✅ 正确：IE8UI.utils.addClass(element, 'class');

// ❌ 错误：document.querySelector('#id');
// ✅ 正确：IE8UI.utils.$('#id');
```

## 📚 示例项目

查看 `index.html` 文件获取完整的组件演示和使用示例。

### 在线演示
- [完整组件演示](https://yqq-a.github.io/ie8-ui-components/)

### 示例代码
```html
<!-- 完整的表单示例 -->
<form id="userForm">
    <div class="form-group">
        <label class="form-label" for="username">用户名 *</label>
        <input type="text" id="username" class="form-control" required>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="email">邮箱 *</label>
        <input type="email" id="email" class="form-control" required>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="phone">电话</label>
        <input type="text" id="phone" class="form-control" pattern="[0-9]{11}">
    </div>
    
    <button type="submit" class="btn btn-primary">提交</button>
    <button type="reset" class="btn">重置</button>
</form>

<script>
// 表单验证
var validator = new IE8UI.FormValidator(document.getElementById('userForm'));
</script>
```

## 🤝 贡献指南

欢迎提交Issues和Pull Requests！

### 开发环境
1. 克隆仓库
2. 在IE8中测试修改
3. 确保向后兼容性
4. 提交Pull Request

### 提交规范
- 🐛 **fix**: 修复bug
- ✨ **feat**: 新功能
- 📚 **docs**: 文档更新
- 🎨 **style**: 样式改进
- ⚡ **perf**: 性能优化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- Internet Explorer 8 开发团队
- CSS 2.1 规范制定者
- ECMAScript 3 标准制定者

## 📞 联系我们

- **GitHub Issues** - [提交问题](https://github.com/yqq-a/ie8-ui-components/issues)
- **Email** - [qiuchanye7@gmail.com](mailto:qiuchanye7@gmail.com)

---

<div align="center">
  <p>如果这个项目对你有帮助，请给它一个 ⭐</p>
  <p>Made with ❤️ for Internet Explorer 8 by <a href="https://github.com/yqq-a">yqq-a</a></p>
</div>
