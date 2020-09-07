# bigDataContainer
基于vue的用于大屏数据展示的适配方案组件

## 安装
```
npm install bigdatacontainer
```
## 使用
在项目中使用 bigdatacontainer,width和height对应设计图上的尺寸，默认是1920*1080
resize属性设置后，能根据屏幕的resize事件进行适配。当然，你如果不喜欢用resize，可以通过ref.setScale(),来进行调用。
```
<template>
  <bigdatacontainer :width="width" :height="height" :resize="resize">
    <div>大屏展示的内容</div>
  </bigdatacontainer>
</template>

<script>
import {bigdatacontainer} from 'bigdatacontainer'

export default {
  name: 'Home',
  components: {
    bigdatacontainer
  },
  data() {
    return {
      width:1920,
      height:1080,
      resize:true
    };
  }
}
```
## 使用
注意：使用这个组件时，这个组件的外层必须是有宽高的（当然，包括100vw和100vh）,因为这个组件时根据外层宽高自适应的，并不是根据window。（ps:所以放在一个小区域展示也没问题。）


