# vue-backtop

> 一个vue 滚动到顶部插件

## Build Setup
[demo演示地址](https://whevether.github.io/vue-backtop/)
--- 用了canvas 来绘制箭头，不依赖css.可以自己改变 样式颜色,现在只有一个功能。只有匀速滚动
```
<BackTop :defaultProps="55" :date="1000" :color="#000"></BackTop>
```
``` bash
# 安装
npm install --save vue-backtop
```
``` 参数
###defaultProps: 输入数字在滚动多少距离后显示
###date: 输入滚动时间
###color: 输入箭头颜色
```
## License
[MIT](http://opensource.org/licenses/MIT)