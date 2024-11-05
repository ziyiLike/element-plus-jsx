---
outline: deep
---

# 表单 Formx

组件`el-formx`完全等同于`el-form`，可以完全平替使用，组件本身未做任何更改。

#### 基础使用

同`el-tablex`一样，`el-formx`仅在`el-form`基础上增加一个属性`formFn`, 接收一个数组，用于配置相应的表单项，所有属性均透传至`el-form-item`。`

> 推荐使用 Hook `useFormFn` 提供配置项提示以及对应类型检查。

:::demo

```vue
<template>
  <el-formx ref="formRef" :label-width="80" :model="state.form" :formFn="formFn" />
  <el-button type="primary" @click="submit">提交</el-button>
</template>

<script setup lang="tsx">
import { ElMessage } from 'element-plus'
import { useFormFn } from 'element-plus-jsx'
import { ref, reactive } from 'vue'

type IForm = {
  name: string
  sex: number
  age: number
  address: string
  description: string
  addtime: string
  enable: boolean
  upload: any
}

const formRef = ref()

const state = reactive({
  form: {} as IForm
})

const formFn = useFormFn<IItem>([
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
    placeholder: '请输入姓名',
    width: 50,
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    label: '性别',
    prop: 'sex',
    type: 'radio',
    width: 50,
    radioOptions: [
      { label: '男', value: 0 },
      { label: '女', value: 1 }
    ],
    rules: { required: true, message: '请选择性别', trigger: 'change' }
  },
  {
    label: '年龄',
    prop: 'age',
    type: 'slider'
  },
  {
    label: '地址',
    prop: 'address',
    type: 'select',
    placeholder: '请选择地址',
    selectOptions: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
      { label: '广州', value: 'guangzhou', disabled: true }
    ]
  },
  {
    label: '简介',
    prop: 'description',
    type: 'input',
    placeholder: '请输入简介',
    inputProps: {
      type: 'textarea'
    }
  },
  {
    label: '时间',
    prop: 'addtime',
    type: 'date-picker'
  },
  {
    label: '上传',
    prop: 'upload',
    type: 'upload',
    uploadProps: {
      slots: {
        default: () => {
          return <el-button type="primary">上传</el-button>
        }
      },
      autoUpload: false
    }
  },
  // 自定义整行插槽
  {
    slots: {
      row: () => <el-divider />
    }
  },
  // 自定义表单项插槽
  {
    label: '自定义',
    prop: 'name',
    rules: { required: true, message: '请输入姓名', trigger: 'blur' },
    slots: {
      default: () => {
        return <el-input v-model={state.form.name} />
      }
    }
  },
  {
    label: '是否启用',
    prop: 'enable',
    type: 'switch'
  }
])

const submit = () => {
  formRef.value.formRef.validate().then(() => {
    ElMessage.success('验证通过')
  })
}
</script>
```

:::

## 表单配置

`el-formx`兼容了所有的 element-plus 表单组件, 通过配置项的`type`属性可指定需要渲染的组件。

::: tip
原则上，`type`的属性即为`el-xxx`的组件名。 例如：`type="input"`，则渲染`el-input`组件。 同时对应的组件参数 Props 属性为`${type}Props`，例如：`type="input"`，则透传 Props 属性为`inputProps`。以下是一些例外情况
:::

### el-input-number

透传 input 的 inputProps 属性`type`设置为`input-number`时渲染`el-input-number`组件

:::demo

```vue
<template>
  <el-formx :model="form" :formFn="formFn" />
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx'
import { ref } from 'vue'

const form = ref({})

const formFn = useFormFn([
  {
    label: '数字',
    prop: 'number',
    type: 'input',
    inputProps: {
      type: 'input-number'
    }
  }
])
</script>
```

:::

### el-checkbox-button

透传 checkbox 的 checkboxProps 属性`button`设置为`true`时渲染`el-checkbox-button`组件。<br/>
同时 checkbox 的 options 通过 `checkboxOptions` 属性传入。

:::demo

```vue
<template>
  <el-formx :model="form" :formFn="formFn" />
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx'
import { ref } from 'vue'

const form = ref({})

const formFn = useFormFn([
  {
    label: '选项',
    prop: 'options',
    type: 'checkbox',
    checkboxOptions: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 }
    ],
    checkboxProps: {
      button: true
    }
  }
])
</script>
```

:::

### el-radio-button

透传 radio 的 radioProps 属性`button`设置为`true`时渲染`el-radio-button`组件。<br/>
同时 radio 的 options 通过 `radioOptions` 属性传入。

:::demo

```vue
<template>
  <el-formx :model="form" :formFn="formFn" />
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx'
import { ref } from 'vue'

const form = ref({})

const formFn = useFormFn([
  {
    label: '选项',
    prop: 'options',
    type: 'radio',
    radioOptions: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 }
    ],
    radioProps: {
      button: true
    }
  }
])
</script>
```

:::

### el-option-group

通过 selectGroupOptions 属性渲染`el-option-group`组件， 同时通过`selectOptions`渲染嵌套选项<br/>
此外 select 的 options 通过 `selectOptions` 属性传入。

:::demo

```vue
<template>
  <el-formx :model="form" :formFn="formFn" />
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx'
import { ref } from 'vue'

const form = ref({})

const formFn = useFormFn([
  {
    label: '选项',
    prop: 'options',
    type: 'select',
    selectGroupOptions: [
      {
        label: '分组1',
        selectOptions: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 }
        ]
      },
      {
        label: '分组2',
        selectOptions: [
          { label: '选项3', value: 3 },
          { label: '选项4', value: 4 }
        ]
      }
    ],
    selectOptions: [
      { label: '选项5', value: 5 },
      { label: '选项6', value: 6 }
    ]
  }
])
</script>
```

:::

## Formx Props

<div class=vp-table>

| 名称   | 类型                 | 默认值 | 说明       |
| ------ | -------------------- | ------ | ---------- |
| formFn | `FormItemProps<T>[]` | []     | 表单配置项 |

</div>

## formFn Item Props

<div class=vp-table>

| 名称                  | 类型                                                                                                                                                                                                                                                                                                                               | 默认值  | 说明                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------- |
| show                  | `FnRefAble<boolean, FormPluginsProps<T>>`                                                                                                                                                                                                                                                                                          | true    | 是否渲染当前配置项 等同于 `v-if`                      |
| width                 | `string` / `number`                                                                                                                                                                                                                                                                                                                | `100`   | 表单列宽度，数字代表百分比，字符会被直接设置于`width` |
| key                   | `string` / `number`                                                                                                                                                                                                                                                                                                                | `index` | 表单列的 key                                          |
| slots                 | Object <el-tooltip raw-content content="{ <br/>default?: (args: FormPluginsProps<T>) => Component / null;<br/>row?: (args: FormPluginsProps<T>) => Component / null;<br/>label?: ({ label }: { label: string }) => Component / null;<br/>error?: ({ error }: { error: string }) => Component / null<br/>}"> <itip /> </el-tooltip> | `插槽`  | 可自定义渲染表单项或整行                              |
| type                  | `string` <el-tooltip content="input / autocomplete / cascader / checkbox / color-picker / date-picker / mention / radio / rate / select / select-v2 / slider / switch / time-picker / time-select / transfer / tree  upload"> <itip /> </el-tooltip>                                                                               | -       | 渲染的组件类型                                        |
| rules                 | `ArrayAble<FormItemRule>`                                                                                                                                                                                                                                                                                                          | []      | 渲染的表单校验规则                                    |
| placeholder           | `string`                                                                                                                                                                                                                                                                                                                           | -       | 输入框的占位符                                        |
| disabled              | `FnRefAble<boolean, FormPluginsProps<T>>`                                                                                                                                                                                                                                                                                          | false   | 是否禁用                                              |
| inputProps            | `InstallCustomType<InputInstance / InputNumberInstance>`                                                                                                                                                                                                                                                                           | -       | `el-input`透传参数                                    |
| autocompleteProps     | `InstallCustomType<AutocompleteInstance>`                                                                                                                                                                                                                                                                                          | -       | `el-autocomplete`透传参数                             |
| cascaderProps         | `InstallCustomType<CascaderInstance>`                                                                                                                                                                                                                                                                                              | -       | `el-cascader`透传参数                                 |
| checkboxProps         | `InstallCustomType<CheckboxGroupInstance & { button: boolean }>`                                                                                                                                                                                                                                                                   | -       | `el-checkbox`透传参数                                 |
| checkboxOptions       | `InstallCustomType<CheckboxInstance>[]`                                                                                                                                                                                                                                                                                            | -       | `el-checkbox`透传参数                                 |
| checkboxButtonOptions | `InstallCustomType<CheckboxInstance>`                                                                                                                                                                                                                                                                                              | -       | `el-checkbox-button`透传参数                          |
| colorPickerProps      | `InstallCustomType<ColorPickerInstance>`                                                                                                                                                                                                                                                                                           | -       | `el-color-picker`透传参数                             |
| datePickerProps       | `InstallCustomType<DatePickerInstance>`                                                                                                                                                                                                                                                                                            | -       | `el-date-picker`透传参数                              |
| mentionProps          | `InstallCustomType<MentionInstance>`                                                                                                                                                                                                                                                                                               | -       | `el-mention`透传参数                                  |
| radioProps            | `InstallCustomType<RadioGroupInstance>`                                                                                                                                                                                                                                                                                            | -       | `el-radio`透传参数                                    |
| radioOptions          | `InstallCustomType<RadioInstance>[]`                                                                                                                                                                                                                                                                                               | -       | `el-radio`透传参数                                    |
| rateProps             | `InstallCustomType<RateInstance>`                                                                                                                                                                                                                                                                                                  | -       | `el-rate`透传参数                                     |
| selectProps           | `InstallCustomType<InstanceType<typeof ElSelect>>`                                                                                                                                                                                                                                                                                 | -       | `el-select`透传参数                                   |
| selectOptions         | `InstallCustomType<InstanceType<typeof ElOption>>[]`                                                                                                                                                                                                                                                                               | -       | `el-select`透传参数                                   |
| selectGroupOptions    | `InstallCustomType<InstanceType<typeof ElOptionGroup> & { selectOptions?: InstallCustomType<InstanceType<typeof ElOption>> }>`                                                                                                                                                                                                     | -       | `el-select`透传参数                                   |
| selectV2Props         | `InstallCustomType<InstanceType<typeof ElSelectV2>>`                                                                                                                                                                                                                                                                               | -       | `el-select-v2`透传参数                                |
| sliderProps           | `InstallCustomType<SliderInstance>`                                                                                                                                                                                                                                                                                                | -       | `el-slider`透传参数                                   |
| switchProps           | `InstallCustomType<SwitchInstance>`                                                                                                                                                                                                                                                                                                | -       | `el-switch`透传参数                                   |
| timePickerProps       | `InstallCustomType<InstanceType<typeof ElTimePicker>>`                                                                                                                                                                                                                                                                             | -       | `el-time-picker`透传参数                              |
| timeSelectProps       | `InstallCustomType<TimeSelectInstance>`                                                                                                                                                                                                                                                                                            | -       | `el-time-select`透传参数                              |
| transferProps         | `InstallCustomType<TransferInstance>`                                                                                                                                                                                                                                                                                              | -       | `el-transfer`透传参数                                 |
| treeProps             | `InstallCustomType<TreeInstance>`                                                                                                                                                                                                                                                                                                  | -       | `el-tree`透传参数                                     |
| uploadProps           | `InstallCustomType<UploadInstance>`                                                                                                                                                                                                                                                                                                | -       | `el-upload`透传参数                                   |

</div>
