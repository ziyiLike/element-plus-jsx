---
layout: home
---

<div style="margin-top:50px" />

# Element Plus JSX <Badge type="warning" text="beta" />

### 基于 Element Plus 扩展 JSX 语法的组件库

> 组件封装自 [Element Plus](https://element-plus.gitee.io/zh-CN/) 在其基础上适配了 JSX 语法。

<button class="button" onclick="(location.href='/pages/guide/quick-start.html')">快速开始</button>

## Get Start

```
npm install element-plus-jsx
```

<style>
  h1{
    color:var(--vp-home-hero-name-color);
  }

  .VPNav{
    box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%)
  }

  .button {
    margin-top:20px;
    width: 120px;
    height: 45px; 
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--vp-home-hero-name-color);
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    border-color: var(--vp-home-hero-name-color);
    border-width: 1px;
    border-style: solid;
    transition: all 0.3s ease 0s !important;
    cursor: pointer;
    outline: none;
  }

  .button:hover {
    background-color: var(--vp-home-hero-name-color);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
    color: #fff;
    transform: translateY(-7px);
  }
</style>
