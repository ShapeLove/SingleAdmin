webpackJsonp([11],{226:function(t,s,e){e(508);var a=e(94)(e(396),e(535),"data-v-7a959070",null);t.exports=a.exports},396:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(32),i=e.n(a),n=e(31),l=e.n(n),r=e(95),o=e(54);s.default={data:function(){return{userInfo:{},openId:null,statusList:[{value:0,desc:"待审核",type:"primary"},{value:1,desc:"审核通过",type:"success"},{value:2,desc:"驳回",type:"error"}],ynList:[{value:0,desc:"正常",type:"success"},{value:1,desc:"封禁",type:"error"}],baseImgPath:o.b}},created:function(){console.log(this.$route),this.openId=this.$route.query.openId,this.getUserInfo()},computed:{userPhotos:function(){return this.userInfo.photoList?this.userInfo.photoList:[]},userSex:function(){return null!=this.userInfo.sex?0===this.userInfo.sex?"男":"女":"未知"}},methods:{getUserInfo:function(){var t=this;return l()(i.a.mark(function s(){var e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.openId){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,r.b.getUserInfo(t.openId);case 4:e=s.sent,e&&(t.userInfo=e);case 6:case"end":return s.stop()}},s,t)}))()},getStatus:function(t){return null!=t?this.statusList.find(function(s){return s.value===t}):"未知"},getYn:function(t){return console.log(t),null!=t?this.ynList.find(function(s){return s.value===t}):"未知"}}}},418:function(t,s,e){s=t.exports=e(214)(!1),s.push([t.i,"[data-v-7a959070]{font-family:Microsoft Yahei,sans-serif}.body-container[data-v-7a959070]{display:-ms-flexbox;display:flex;width:100%;height:100%;background:#f5f5f5;-ms-flex-pack:center;justify-content:center}.info-container[data-v-7a959070]{background:#fff;width:60%}.head-info[data-v-7a959070]{width:100%;height:40%;background:#324057}.base-info[data-v-7a959070]{width:100%;height:25%;padding:15px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff}.info-title[data-v-7a959070]{display:block;font-size:1.1em}.image-info[data-v-7a959070]{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%;padding:15px;height:60%}.body-info[data-v-7a959070]{height:50%;width:100%}.body-info-row[data-v-7a959070]{width:100%;height:3vw;display:-ms-flexbox;display:flex;margin-top:.2vw}.body-item[data-v-7a959070]{width:50%;height:2.5vw;display:-ms-flexbox;display:flex}.body-item span[data-v-7a959070]{line-height:2.5vw}.body-item .title[data-v-7a959070]{-ms-flex:1;flex:1;text-align:right;padding-right:.1vw;background-color:#f8f8f9;border:1px solid #dcdee2;border-radius:0 .5vw .5vw 0}.body-item .value[data-v-7a959070]{-ms-flex:2;flex:2;padding-left:.2vw}.status-tag[data-v-7a959070]{font-size:18px;line-height:26px;height:30px}",""])},508:function(t,s,e){var a=e(418);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(215)("10c4ef4f",a,!0)},535:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"body-container"},[null==t.openId?e("div",[t._v("没有该用户信息！")]):e("div",{staticClass:"info-container"},[e("div",{staticClass:"head-info"},[e("div",{staticClass:"base-info"},[e("div",{staticStyle:{width:"50%",height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},[e("p",{staticClass:"info-title"},[e("span",{staticStyle:{width:"5vw",display:"inline-block","text-align":"right","margin-right":"1vw"}},[t._v("OpenId: ")]),t._v(t._s(t.userInfo.openId))]),t._v(" "),e("p",{staticClass:"info-title",staticStyle:{"margin-top":"0.6vw"}},[e("span",{staticStyle:{width:"5vw",display:"inline-block","text-align":"right","margin-right":"1vw"}},[t._v("昵称: ")]),t._v(t._s(t.userInfo.name)+" "),e("el-tag",{staticStyle:{"margin-left":"1vw"}},[t._v(t._s(t.userSex))])],1),t._v(" "),e("div",{staticStyle:{"margin-top":"10px","font-size":"1.1em"}},[e("span",{staticStyle:{width:"5vw",display:"inline-block","text-align":"right","margin-right":"1vw"}},[t._v("个人标签: ")]),t._v(" "),t.userInfo.doingTags?e("el-tag",{attrs:{type:"primary"}},[t._v("正在.."+t._s(t.userInfo.doingTagsDesc))]):t._e(),t._v(" "),t.userInfo.planTags?e("el-tag",{attrs:{type:"primary"}},[t._v("打算.."+t._s(t.userInfo.planTagsDesc))]):t._e(),t._v(" "),t.userInfo.activityTags?e("el-tag",{attrs:{type:"primary"}},[t._v("活动是.."+t._s(t.userInfo.activityTagsDesc))]):t._e()],1)]),t._v(" "),e("div",{staticStyle:{width:"45%",height:"100%",display:"flex","justify-content":"flex-end","align-items":"center"}},[e("el-tag",{staticClass:"status-tag",staticStyle:{"margin-right":"25px"},attrs:{type:t.getStatus(t.userInfo.status).type}},[t._v("\n                        "+t._s(t.getStatus(t.userInfo.status).desc)+"\n                    ")]),t._v(" "),e("el-tag",{staticClass:"status-tag",attrs:{type:t.getYn(t.userInfo.yn).type}},[t._v(t._s(t.getYn(t.userInfo.yn).desc))])],1)]),t._v(" "),e("div",{staticClass:"image-info"},[t._l(t.userPhotos,function(s){return[e("img",{staticStyle:{width:"10vw",height:"10vw","border-radius":"10px",border:"1px solid white"},attrs:{src:t.baseImgPath+s}})]})],2)]),t._v(" "),e("div",{staticClass:"body-info"},[e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[t._m(0),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.dongdong))])]),t._v(" "),e("div",{staticClass:"body-item"},[t._m(1),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.wxNumber))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[t._m(2),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.height)+"cm")])]),t._v(" "),e("div",{staticClass:"body-item"},[t._m(3),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.weight)+"kg")])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[t._m(4),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.province+t.userInfo.city))])]),t._v(" "),e("div",{staticClass:"body-item"},[t._m(5),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.birthday))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[t._m(6),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.constellationStr))])]),t._v(" "),e("div",{staticClass:"body-item"},[t._m(7),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.educationStr))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[t._m(8),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.department))])]),t._v(" "),e("div",{staticClass:"body-item"},[t._m(9),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.workArea))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[e("span",{staticClass:"title"},[t._v("自我评价：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.selfEvaluation))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[e("span",{staticClass:"title"},[t._v("最想说的：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.wantSay))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[e("span",{staticClass:"title"},[t._v("家庭状况：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.family))])])]),t._v(" "),e("div",{staticClass:"body-info-row"},[e("div",{staticClass:"body-item"},[e("span",{staticClass:"title"},[t._v("交友标准：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.userInfo.standFriend))])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("咚咚号：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("微信号：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("身高：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("体重：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("籍贯：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("生日：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("星座：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("学历：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("所在部门：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"title"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("工作地址：")])}]}}});