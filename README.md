# 大学生个人主页

一个基于HTML、CSS和JavaScript的大学生个人主页网站，用于展示个人信息、学习成果和实践能力。

## 项目结构

```
personal-website/
├── index.html          # 主页
├── script.js           # 交互脚本
└── README.md           # 项目说明
```

## 功能特性

- **响应式设计**：适配桌面端、平板端和移动端
- **现代化UI**：使用Tailwind CSS构建美观的界面
- **交互功能**：
  - 平滑滚动导航
  - 滚动触发的渐入动画
  - 移动端汉堡菜单
  - 表单验证
- **完整的信息展示**：
  - 个人基本信息
  - 校园背景
  - 核心学习能力
  - 校园实践经历
  - 竞赛获奖成果
  - 项目作品
  - 兴趣爱好
  - 联系方式

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Font Awesome (图标库)

## 如何使用

1. **克隆项目**：
   ```bash
   git clone <repository-url>
   ```

2. **修改个人信息**：
   - 打开 `index.html` 文件
   - 修改以下内容：
     - 姓名、头像
     - 核心标签
     - 校园背景信息
     - 专业技能和课程
     - 实践经历和获奖情况
     - 项目信息
     - 联系方式

3. **本地预览**：
   - 直接在浏览器中打开 `index.html` 文件

4. **部署到GitHub Pages**：
   - 将项目推送到GitHub仓库
   - 在仓库设置中启用GitHub Pages
   - 选择主分支作为源
   - 访问 `https://username.github.io` 查看部署效果

## 自定义指南

### 修改颜色方案
在 `index.html` 文件中，找到以下代码并修改颜色值：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#165DFF',  // 主色调
                secondary: '#00B42A', // 辅助色
                neutral: '#F5F7FA'   // 中性色
            }
        }
    }
}
```

### 添加新的项目或经历
在 `index.html` 文件中，找到对应的section，按照现有结构添加新的内容。

### 修改头像
替换以下URL为您的头像图片：

```html
<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=college%20student%20headshot%2C%20clear%2C%20professional%2C%20neutral%20background&image_size=square" alt="个人头像" class="w-full h-full object-cover">
```

## 注意事项

- **隐私保护**：不要在网站上展示手机号、详细地址等敏感信息
- **真实信息**：确保填写的信息真实可验证
- **内容简洁**：避免信息堆砌，保持页面整洁
- **响应式测试**：在不同设备上测试网站显示效果

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License