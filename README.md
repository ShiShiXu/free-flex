# **Free-Flex**
*A slim CSS flexbox framework*

基于 Flexbox 封装的一套规则，用于日常工作中的 H5 布局。


## 特性：

1. 轻巧、没有过度封装
2. 实用、兼容老式设备：iOS 8.2+ Android 4.1+

首页： [Free-Flex](https://shishixu.github.io/free-flex/)

free-flex.css :

```css
/**
 * Created by KidSirZ4i on  2017/6/28.
 */

*[data-flex~="flex"] { /* 全局flex容器 */
  display: -webkit-box;
  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;
  /* 混合版本语法: IE 10 */
  /* 新版本语法: Chrome 21+ */
  display: -webkit-flex;
  /* 新版本语法: Opera 12.1, Firefox 22+ */
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
}

*[data-flex~="flex-inline"] {
    /* 混合版本语法: IE 10 */
    /* 新版本语法: Chrome 21+ */
    display: -webkit-inline-flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    box-sizing: border-box;
    display: inline-flex;
}

*[data-flex~="flex-full"] { /* 100%宽度的全局flex容器 */
  display: -webkit-box;
  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;
  /* 混合版本语法: IE 10 */
  /* 新版本语法: Chrome 21+ */
  display: -webkit-flex;
  /* 新版本语法: Opera 12.1, Firefox 22+ */
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  display: flex;
}

*[data-flex~="flex-row"] { /*  3、flex 主轴方向：水平——从【左】到【右】，起点在左边 */
    display: -webkit-box;
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;
    /* 混合版本语法: IE 10 */
    /* 新版本语法: Chrome 21+ */
    display: -webkit-flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: flex;

    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}

*[data-flex~="flex-row-reverse"] { /*  4、flex 主轴方向：水平——从【右】到【左】，起点在右边  */
    display: -webkit-box;
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;
    /* 混合版本语法: IE 10 */
    /* 新版本语法: Chrome 21+ */
    display: -webkit-flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: flex;

    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

*[data-flex~="flex-col"] { /*  5、flex 主轴方向：垂直——从【上】到【下】，起点在上方  */
    display: -webkit-box;
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;
    /* 混合版本语法: IE 10 */
    /* 新版本语法: Chrome 21+ */
    display: -webkit-flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: flex;

    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

*[data-flex~="flex-col-reverse"] { /*  6、flex 主轴方向：垂直——从【下】到【上】，起点在下方  */
    display: -webkit-box;
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;
    /* 混合版本语法: IE 10 */
    /* 新版本语法: Chrome 21+ */
    display: -webkit-flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: flex;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
}

*[data-flex~="flex-nowrap"] { /* 7、flex容器 不换行 */
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

*[data-flex~="flex-wrap"] { /* 8、flex容器 换行 */
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}

*[data-flex~="flex-wrap-reverse"] { /* 9、flex容器 换行并反向 */
    -webkit-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
}

*[data-flex~="main-start"] { /* 10、主轴对齐方式： 开始。写在父容器上 */
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

*[data-flex~="main-center"] { /* 主轴对齐方式：中间。写在父容器上 */
  -webkit-box-pack: center;
  -moz-justify-content: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

*[data-flex~="main-end"] { /* 主轴对齐方式：末尾。写在父容器上 */
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

*[data-flex~="main-around"] { /* 主轴对齐方式：围绕。写在父容器上 */
    -webkit-justify-content: space-around;
    justify-content: space-around;
}

*[data-flex~="main-between"] { /* 主轴对齐方式：两端。写在父容器上 */
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

*[data-flex~="cross-start"] { /* 11、侧轴对齐方式：开始。写在父容器上 */
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}

*[data-flex~="cross-center"] { /* 侧轴对齐方式：中间。写在父容器上 */
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

*[data-flex~="cross-end"] { /* 侧轴对齐方式：末尾。写在父容器上 */
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}

*[data-flex~="cross-stretch"] { /* 侧轴对齐方式：延伸。写在父容器上 */
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
}

*[data-flex~="cross-baseline"] { /* 侧轴对齐方式：基于基线。写在父容器上 */
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    -webkit-align-items: baseline;
    align-items: baseline;
}

*[data-flex~="self-start"] { /* 12、侧轴对齐：开始。写在自己上 */
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

*[data-flex~="self-center"] { /* 侧轴对齐：中间。写在自己上 */
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

*[data-flex~="self-end"] { /* 侧轴对齐：末尾。写在自己上 */
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

*[data-flex~="both-center"] { /* 13、主轴和侧轴同时居中。写在父容器上  */
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;

    -webkit-box-pack: center;
    -moz-justify-content: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;

    align-items: center;
    justify-content: center;
}

*[data-flex~="both-center-self"] { /* 主轴和侧轴同时居中。写在自己上  */
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;

    -moz-justify-self: center;
    -webkit-justify-self: center;

    align-self: center;
    justify-self: center;
}

*[data-flex~="flex1"], *[data-flex~="flex2"], *[data-flex~="flex3"], *[data-flex~="flex4"], *[data-flex~="flex5"], *[data-flex~="flex6"],
*[data-flex~="flex7"], *[data-flex~="flex8"], *[data-flex~="flex9"], *[data-flex~="flex10"], *[data-flex~="flex11"], *[data-flex~="flex12"]  {
  display: -webkit-box;
  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;
  /* 混合版本语法: IE 10 */
  /* 新版本语法: Chrome 21+ */
  display: -webkit-flex;
  display: flex;
  /* 新版本语法: Opera 12.1, Firefox 22+ */
}

/* 2、子项按比列分配 :  */
*[data-flex~="flex1"] { /* 1单位  */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
*[data-flex~="flex2"] { /* 2 单位 */
  -webkit-box-flex: 2;
  -moz-box-flex: 2;
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
*[data-flex~="flex3"] { /* 3 单位 */
  -webkit-box-flex: 3;
  -moz-box-flex: 3;
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
}
*[data-flex~="flex4"] {/* 4 单位 */
  -webkit-box-flex: 4;
  -moz-box-flex: 4;
  -webkit-flex: 4;
  -ms-flex: 4;
  flex: 4;
}
*[data-flex~="flex5"] {/* 5 单位 */
  -webkit-box-flex: 5;
  -moz-box-flex: 5;
  -webkit-flex: 5;
  -ms-flex: 5;
  flex: 5;
}
*[data-flex~="flex6"] { /* 6 单位 */
    -webkit-box-flex: 6;
    -moz-box-flex: 6;
    -webkit-flex: 6;
    -ms-flex: 6;
    flex: 6;
}
*[data-flex~="flex7"] {/* 7 单位 */
    -webkit-box-flex: 7;
    -moz-box-flex: 7;
    -webkit-flex: 7;
    -ms-flex: 7;
    flex: 7;
}
*[data-flex~="flex8"] {/* 8 单位 */
    -webkit-box-flex: 8;
    -moz-box-flex: 8;
    -webkit-flex: 8;
    -ms-flex: 8;
    flex: 8;
}
*[data-flex~="flex9"] {/* 9 单位 */
    -webkit-box-flex: 9;
    -moz-box-flex: 9;
    -webkit-flex: 9;
    -ms-flex: 9;
    flex: 9;
}
*[data-flex~="flex10"] {/* 10 单位 */
    -webkit-box-flex: 10;
    -moz-box-flex: 10;
    -webkit-flex: 10;
    -ms-flex: 10;
    flex: 10;
}
*[data-flex~="flex11"] {/* 11 单位 */
    -webkit-box-flex: 11;
    -moz-box-flex: 11;
    -webkit-flex: 11;
    -ms-flex: 11;
    flex: 11;
}
*[data-flex~="flex12"] {/* 12 单位 */
    -webkit-box-flex: 12;
    -moz-box-flex: 12;
    -webkit-flex: 12;
    -ms-flex: 12;
    flex: 12;
}


/**************** 高级部分 *****************/

/* 1、放大比例（当子容器比父容器小，子容器应当如何放大） */
*[data-flex~="flex-grow-1"] {
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    -webkit-flex-grow:1;
    flex-grow:1
}
*[data-flex~="flex-grow-2"] {
    -webkit-box-flex:2;
    -ms-flex-positive:2;
    -webkit-flex-grow:2;
    flex-grow:2
}
*[data-flex~="flex-grow-3"] {
    -webkit-box-flex:3;
    -ms-flex-positive:3;
    -webkit-flex-grow:3;
    flex-grow:3
}
*[data-flex~="flex-grow-4"] {
    -webkit-box-flex:4;
    -ms-flex-positive:4;
    -webkit-flex-grow:4;
    flex-grow:4
}
*[data-flex~="flex-grow-5"] {
    -webkit-box-flex:5;
    -ms-flex-positive:5;
    -webkit-flex-grow:5;
    flex-grow:5
}
*[data-flex~="flex-grow-6"] {
    -webkit-box-flex:6;
    -ms-flex-positive:6;
    -webkit-flex-grow:6;
    flex-grow:6
}
*[data-flex~="flex-grow-7"] {
    -webkit-box-flex:7;
    -ms-flex-positive:7;
    -webkit-flex-grow:7;
    flex-grow:7
}
*[data-flex~="flex-grow-8"] {
    -webkit-box-flex:8;
    -ms-flex-positive:8;
    -webkit-flex-grow:8;
    flex-grow:8
}
*[data-flex~="flex-grow-9"] {
    -webkit-box-flex:9;
    -ms-flex-positive:9;
    -webkit-flex-grow:9;
    flex-grow:9
}
*[data-flex~="flex-grow-10"] {
    -webkit-box-flex:10;
    -ms-flex-positive:10;
    -webkit-flex-grow:10;
    flex-grow:10
}
*[data-flex~="flex-grow-11"] {
    -webkit-box-flex:11;
    -ms-flex-positive:11;
    -webkit-flex-grow:11;
    flex-grow:11
}
*[data-flex~="flex-grow-12"] {
    -webkit-box-flex:12;
    -ms-flex-positive:12;
    -webkit-flex-grow:12;
    flex-grow:12
}

/*  2、缩小比例（当子容器比父容器大，子容器应当如何缩小）*/
*[data-flex~="flex-shrink-1"] {
    -ms-flex-negative:1;
    -webkit-flex-shrink:1;
    flex-shrink:1
}
*[data-flex~="flex-shrink-2"] {
    -ms-flex-negative:2;
    -webkit-flex-shrink:2;
    flex-shrink:2
}
*[data-flex~="flex-shrink-3"] {
    -ms-flex-negative:3;
    -webkit-flex-shrink:3;
    flex-shrink:3
}
*[data-flex~="flex-shrink-4"] {
    -ms-flex-negative:4;
    -webkit-flex-shrink:4;
    flex-shrink:4
}
*[data-flex~="flex-shrink-5"] {
    -ms-flex-negative:5;
    -webkit-flex-shrink:5;
    flex-shrink:5
}
*[data-flex~="flex-shrink-6"] {
    -ms-flex-negative:6;
    -webkit-flex-shrink:6;
    flex-shrink:6
}
*[data-flex~="flex-shrink-7"] {
    -ms-flex-negative:7;
    -webkit-flex-shrink:7;
    flex-shrink:7
}
*[data-flex~="flex-shrink-8"] {
    -ms-flex-negative:8;
    -webkit-flex-shrink:8;
    flex-shrink:8
}
*[data-flex~="flex-shrink-9"] {
    -ms-flex-negative:9;
    -webkit-flex-shrink:9;
    flex-shrink:9
}
*[data-flex~="flex-shrink-10"] {
    -ms-flex-negative:10;
    -webkit-flex-shrink:10;
    flex-shrink:10
}
*[data-flex~="flex-shrink-11"] {
    -ms-flex-negative:11;
    -webkit-flex-shrink:11;
    flex-shrink:11
}
*[data-flex~="flex-shrink-12"] {
    -ms-flex-negative:12;
    -webkit-flex-shrink:12;
    flex-shrink:12
}

/* 3、多列对齐：当伸缩容器的侧轴还有多余空间时，如何对齐 */
*[data-flex~="content-start"] { /* 开始 */
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
*[data-flex~="content-center"] { /* 中间 */
    -ms-flex-line-pack: center;
    align-content: center;
}
*[data-flex~="content-end"] { /* 末尾 */
    -ms-flex-line-pack:  end;
    align-content:  flex-end;
}
*[data-flex~="content-between"] {/* 两端 */
    -ms-flex-line-pack: justify;
    align-content: space-between;
}
*[data-flex~="content-space-around"] { /* 围绕 */
    -ms-flex-line-pack: distribute;
    align-content: space-around;
}
*[data-flex~="content-stretch"] { /* 延伸 */
    -ms-flex-line-pack: stretch;
    align-content: stretch;
}
```
