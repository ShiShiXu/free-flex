# **Free-Flex**
*A slim CSS flexbox framework*

基于 Flexbox 封装的一套规则，用于日常工作中的 H5 布局。


## 特性：

1. 轻巧、没有过度封装
2. 实用、兼容老式设备：iOS 8.2+ Android 4.1+

首页： [Free-Flex](https://shishixu.github.io/free-flex/)

free-flex.css :

```css
.flex {
    display:-webkit-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    -webkit-box-direction:normal;
    -webkit-box-orient:horizontal;
    -webkit-flex-direction:row;
    -moz-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row;
    box-sizing:border-box;
    display:flex
}
.flex-inline {
    display:-webkit-inline-flex;
    -webkit-box-direction:normal;
    -webkit-box-orient:horizontal;
    -webkit-flex-direction:row;
    -moz-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row;
    box-sizing:border-box;
    display:inline-flex
}
.flex-full {
    display:-webkit-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    -webkit-box-direction:normal;
    -webkit-box-orient:horizontal;
    -webkit-flex-direction:row;
    -moz-flex-direction:row;
    -ms-flex-direction:row;
    box-sizing:border-box;
    width:100%;
    display:flex
}

.flex-row {
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row
}
.flex-row-reverse {
    -webkit-flex-direction:row-reverse;
    flex-direction:row-reverse
}

.flex-col {
    -webkit-box-direction:normal;
    -webkit-box-orient:vertical;
    -webkit-flex-direction:column;
    -moz-flex-direction:column;
    -ms-flex-direction:column;
    flex-direction:column
}
.flex-col-reverse {
    -webkit-flex-direction:column-reverse;
    flex-direction:column-reverse
}

.flex-nowrap {
    -webkit-flex-wrap:nowrap;
    flex-wrap:nowrap
}
.flex-wrap {
    -webkit-flex-wrap:wrap;
    flex-wrap:wrap
}
.flex-wrap-reverse {
    -webkit-flex-wrap:wrap-reverse;
    flex-wrap:wrap-reverse
}


.main-start {
    -webkit-box-pack:start;
    -ms-flex-pack:start;
    -webkit-justify-content:flex-start;
    justify-content:flex-start
}
.main-center {
    -webkit-box-pack:center;
    -moz-justify-content:center;
    -ms-flex-pack:center;
    -webkit-justify-content:center;
    justify-content:center
}
.main-end {
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    -webkit-justify-content:flex-end;
    justify-content:flex-end
}
.main-around {
    -webkit-justify-content:space-around;
    justify-content:space-around
}
.main-between {
    -webkit-justify-content:space-between;
    justify-content:space-between
}


.cross-start {
    -webkit-box-align:start;
    -ms-flex-align:start;
    -webkit-align-items:flex-start;
    align-items:flex-start
}
.cross-center {
    -webkit-box-align:center;
    -ms-flex-align:center;
    -webkit-align-items:center;
    align-items:center
}
.cross-end {
    -webkit-box-align:end;
    -ms-flex-align:end;
    -webkit-align-items:flex-end;
    align-items:flex-end
}
.cross-stretch {
    -webkit-box-align:stretch;
    -ms-flex-align:stretch;
    -webkit-align-items:stretch;
    align-items:stretch
}
.cross-baseline {
    -webkit-box-align:baseline;
    -ms-flex-align:baseline;
    -webkit-align-items:baseline;
    align-items:baseline
}


.self-start {
    -webkit-align-self:flex-start;
    -ms-flex-item-align:start;
    align-self:flex-start
}
.self-center {
    -webkit-align-self:center;
    -ms-flex-item-align:center;
    -ms-grid-row-align:center;
    align-self:center
}
.self-end {
    -webkit-align-self:flex-end;
    -ms-flex-item-align:end;
    align-self:flex-end
}


.both-center {
    -webkit-box-align:center;
    -ms-flex-align:center;
    -webkit-align-items:center;
    -webkit-box-pack:center;
    -moz-justify-content:center;
    -ms-flex-pack:center;
    -webkit-justify-content:center;
    align-items:center;
    justify-content:center
}
.both-center-self {
    -webkit-align-self:center;
    -ms-flex-item-align:center;
    -ms-grid-row-align:center;
    -moz-justify-self:center;
    -webkit-justify-self:center;
    align-self:center;
    justify-self:center
}


.flex1, .flex2, .flex3, .flex4, .flex5, .flex6, 
.flex7, .flex8, .flex9, .flex10, .flex11, .flex12 {
    display:-webkit-box;
    display:-ms-flexbox;
    display:-webkit-flex;
    display:flex
}
.flex1 {
    -webkit-box-flex:1;
    -moz-box-flex:1;
    -webkit-flex:1;
    -ms-flex:1;
    flex:1
}
.flex2 {
    -webkit-box-flex:2;
    -moz-box-flex:2;
    -webkit-flex:2;
    -ms-flex:2;
    flex:2
}
.flex3 {
    -webkit-box-flex:3;
    -moz-box-flex:3;
    -webkit-flex:3;
    -ms-flex:3;
    flex:3
}
.flex4 {
    -webkit-box-flex:4;
    -moz-box-flex:4;
    -webkit-flex:4;
    -ms-flex:4;
    flex:4
}
.flex5 {
    -webkit-box-flex:5;
    -moz-box-flex:5;
    -webkit-flex:5;
    -ms-flex:5;
    flex:5
}
.flex6 {
    -webkit-box-flex:6;
    -moz-box-flex:6;
    -webkit-flex:6;
    -ms-flex:6;
    flex:6
}
.flex7 {
    -webkit-box-flex:7;
    -moz-box-flex:7;
    -webkit-flex:7;
    -ms-flex:7;
    flex:7
}
.flex8 {
    -webkit-box-flex:8;
    -moz-box-flex:8;
    -webkit-flex:8;
    -ms-flex:8;
    flex:8
}
.flex9 {
    -webkit-box-flex:9;
    -moz-box-flex:9;
    -webkit-flex:9;
    -ms-flex:9;
    flex:9
}
.flex10 {
    -webkit-box-flex:10;
    -moz-box-flex:10;
    -webkit-flex:10;
    -ms-flex:10;
    flex:10
}
.flex11 {
    -webkit-box-flex:11;
    -moz-box-flex:11;
    -webkit-flex:11;
    -ms-flex:11;
    flex:11
}
.flex12 {
    -webkit-box-flex:12;
    -moz-box-flex:12;
    -webkit-flex:12;
    -ms-flex:12;
    flex:12
}


.flex-grow-1 {
    -webkit-flex-grow:1;
    flex-grow:1
}
.flex-grow-2 {
    -webkit-flex-grow:2;
    flex-grow:2
}
.flex-grow-3 {
    -webkit-flex-grow:3;
    flex-grow:3
}
.flex-grow-4 {
    -webkit-flex-grow:4;
    flex-grow:4
}
.flex-grow-5 {
    -webkit-flex-grow:5;
    flex-grow:5
}
.flex-grow-6 {
    -webkit-flex-grow:6;
    flex-grow:6
}
.flex-grow-7 {
    -webkit-flex-grow:7;
    flex-grow:7
}
.flex-grow-8 {
    -webkit-flex-grow:8;
    flex-grow:8
}
.flex-grow-9 {
    -webkit-flex-grow:9;
    flex-grow:9
}
.flex-grow-10 {
    -webkit-flex-grow:10;
    flex-grow:10
}
.flex-grow-11 {
    -webkit-flex-grow:11;
    flex-grow:11
}
.flex-grow-12 {
    -webkit-flex-grow:12;
    flex-grow:12
}


.flex-shrink-1 {
    -webkit-flex-shrink:1;
    flex-shrink:1
}
.flex-shrink-2 {
    -webkit-flex-shrink:2;
    flex-shrink:2
}
.flex-shrink-3 {
    -webkit-flex-shrink:3;
    flex-shrink:3
}
.flex-shrink-4 {
    -webkit-flex-shrink:4;
    flex-shrink:4
}
.flex-shrink-5 {
    -webkit-flex-shrink:5;
    flex-shrink:5
}
.flex-shrink-6 {
    -webkit-flex-shrink:6;
    flex-shrink:6
}
.flex-shrink-7 {
    -webkit-flex-shrink:7;
    flex-shrink:7
}
.flex-shrink-8 {
    -webkit-flex-shrink:8;
    flex-shrink:8
}
.flex-shrink-9 {
    -webkit-flex-shrink:9;
    flex-shrink:9
}
.flex-shrink-10 {
    -webkit-flex-shrink:10;
    flex-shrink:10
}
.flex-shrink-11 {
    -webkit-flex-shrink:11;
    flex-shrink:11
}
.flex-shrink-12 {
    -webkit-flex-shrink:12;
    flex-shrink:12
}


.content-start {
    align-content:flex-start
}
.content-center {
    align-content:center
}
.content-end {
    align-content:flex-end
}
.content-between {
    align-content:space-between
}
.content-space-around {
    align-content:space-around
}
.content-stretch {
    align-content:stretch
}
```

