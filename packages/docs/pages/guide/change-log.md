---
outline: deep
---

# Change Log

- ⚡ 0.0.20-beta 新增 hook `useSetTablexProps` 和 `useSetFormxProps`

- ⚡ 0.0.19-beta 增加单组件插件支持, 使用优化

  1.  ElFormx 组件支持 plugins Props
  2.  ElTablex 组件支持 plugins Props
  3.  defineFormFnPlugin 和 defineColumnsPlugin 参数透传泛型参数
  4.  组件 install 时插件参数透传泛型参数

- ✈️ 0.0.16-beta 升级 Element-ui 版本至 2.9.5 支持 el-input-tag

- 🚀 0.0.15-beta 新增类型约定命名空间引用 & build types

- 🚀 0.0.14-beta 更新类型定义并移除只读属性

  1.将 LooseRequired 替换为 Mutable，以移除对象的只读属性

  2.更新 InstallCustomType 使用 Mutable 而不是 LooseRequired

  3.调整 FormItemProps 类型定义，使用 Mutable 替代 LooseRequired

- 🚀 0.0.13-beta 重构类型定义以提升类型兼容性和可维护性

  1.引入 Override 类型，用于合并接口

  2.更新 TableColumn 类型，增加 EPTablex.TablexExtend\<T\>

  3.添加 Override 类型定义到 tools.ts

  4.更新 FormItemProps 类型定义，使用 Merge 类型合并属性

  5.更新 TableProps 类型定义，将 ColumnExtend 移至 ElementPlusJsx 命名空间

  6.修改 InstallCustomType 类型定义，增加 LooseRequired
