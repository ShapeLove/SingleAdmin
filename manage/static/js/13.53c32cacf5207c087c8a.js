webpackJsonp([13],{222:function(t,e,i){i(497);var a=i(94)(i(392),i(524),"data-v-08fca1d4",null);t.exports=a.exports},392:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(55),n=i.n(a),s=i(96);e.default={data:function(){return{defaultActive:null}},computed:n()({},i.i(s.b)(["adminInfo"])),mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.defaultActive=t.$route.path.replace("/","")},50)})},methods:{checkPermission:function(t){var e=this;return!!t.find(function(t){return t===e.adminInfo.level})}}}},407:function(t,e,i){e=t.exports=i(214)(!1),e.push([t.i,".allcover[data-v-08fca1d4]{position:absolute;top:0;right:0}.ctt[data-v-08fca1d4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-08fca1d4]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-08fca1d4]{position:absolute;left:50%;transform:translateX(-50%)}",""])},497:function(t,e,i){var a=i(407);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(215)("68b14572",a,!0)},524:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"manage_page fillcontain"},[i("el-row",{staticStyle:{height:"100%"}},[i("el-col",{staticStyle:{"min-height":"100%","background-color":"#324057"},attrs:{span:4}},[i("el-menu",{staticStyle:{"min-height":"100%"},attrs:{"default-active":t.defaultActive,theme:"dark",router:""}},[i("el-menu-item",{attrs:{index:"manage"}},[i("i",{staticClass:"el-icon-menu"}),t._v("首页")]),t._v(" "),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-document"}),t._v("数据管理")]),t._v(" "),i("el-menu-item",{attrs:{index:"userList"}},[t._v("用户列表")]),t._v(" "),i("el-menu-item",{attrs:{index:"tagList"}},[t._v("标签列表")]),t._v(" "),t.checkPermission([2])?i("el-menu-item",{attrs:{index:"adminList"}},[t._v("管理员列表")]):t._e()],2),t._v(" "),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-upload2"}),t._v("审核")]),t._v(" "),i("el-menu-item",{attrs:{index:"reportCheck"}},[t._v("举报审核")])],2),t._v(" "),t.checkPermission([2,1])?i("el-submenu",{attrs:{index:"4"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-warning"}),t._v("异常信息")]),t._v(" "),i("el-menu-item",{attrs:{index:"warning"}},[t._v("异常信息处理")])],2):t._e(),t._v(" "),i("el-submenu",{attrs:{index:"5"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-star-on"}),t._v("图表")]),t._v(" "),i("el-menu-item",{attrs:{index:"visitor"}},[t._v("用户分布")])],2),t._v(" "),i("el-submenu",{attrs:{index:"6"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-setting"}),t._v("设置")]),t._v(" "),i("el-menu-item",{attrs:{index:"adminSet"}},[t._v("管理员设置")])],2)],1)],1),t._v(" "),i("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:20}},[i("keep-alive",[i("router-view")],1)],1)],1)],1)},staticRenderFns:[]}}});