webpackJsonp([7],{223:function(e,t,a){a(506);var r=a(94)(a(393),a(533),null,null);e.exports=r.exports},243:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(32),n=a.n(r),s=a(31),o=a.n(s),i=a(55),l=a.n(i),u=a(95),c=a(54),p=a(96);t.default={data:function(){return{baseImgPath:c.b}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(p.b)(["adminInfo"]),{avatar:function(){return this.adminInfo.avatar?this.adminInfo.avatar:"abbfb1246eb9f9bb453188ec5491d771"}}),methods:l()({},a.i(p.c)(["getAdminData","removeAdminData"]),{handleCommand:function(e){var t=this;return o()(n.a.mark(function r(){var s;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("home"!=e){r.next=4;break}t.$router.push("/manage"),r.next=9;break;case 4:if("signout"!=e){r.next=9;break}return r.next=7,a.i(u.d)();case 7:s=r.sent,s?(t.$message({type:"success",message:"退出成功"}),t.removeAdminData(),t.$router.push("/")):t.$message({type:"error",message:s.message});case 9:case"end":return r.stop()}},r,t)}))()}})}},244:function(e,t,a){t=e.exports=a(214)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},245:function(e,t,a){var r=a(244);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(215)("9f44acdc",r,!0)},246:function(e,t,a){a(245);var r=a(94)(a(243),a(247),null,null);e.exports=r.exports},247:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:e.baseImgPath+e.avatar}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},393:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(32),n=a.n(r),s=a(31),o=a.n(s),i=a(246),l=a.n(i),u=(a(54),a(95));t.default={data:function(){return{tableData:[],count:0,queryData:{pageIndex:1,pageSize:10},reportTypeList:[{value:1,desc:"照片涉黄"},{value:2,desc:"恶意骚扰"},{value:3,desc:"盗用图片"},{value:4,desc:"其他"}],reportStatusList:[{value:0,desc:"待审核"},{value:1,desc:"审核通过"},{value:2,desc:"驳回"}]}},created:function(){this.initData()},components:{headTop:l.a},methods:{getReportTypeName:function(e){return this.reportTypeList.find(function(t){return t.value===e}).desc},getReportStatusName:function(e){return this.reportStatusList.find(function(t){return t.value===e}).desc},deleteReport:function(e){var t=this;return o()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.e.deleteReport({id:e});case 2:r=a.sent,r.success?(t.$message({type:"success",message:"处理成功!"}),t.getReport()):t.$message({type:"error",message:r.message});case 4:case"end":return a.stop()}},a,t)}))()},refuseReport:function(e){var t=this;return o()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.e.handleReport({id:e.id,status:2});case 2:r=a.sent,r.success?(t.$message({type:"success",message:"处理成功!"}),t.getReport()):t.$message({type:"error",message:r.message});case 4:case"end":return a.stop()}},a,t)}))()},initData:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{e.getReport()}catch(e){console.log("获取数据失败",e)}case 1:case"end":return t.stop()}},t,e)}))()},getReport:function(){var e=this;return o()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getReportList(e.queryData);case 2:a=t.sent,a.success&&(e.tableData=a.dataList,e.count=a.totalCount);case 4:case"end":return t.stop()}},t,e)}))()},openUserInfoPage:function(e){window.open("/userInfo?openId="+e,"_blank")},handlePass:function(e){var t=this;return o()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.e.handleReport({id:e.id,status:1});case 2:r=a.sent,r.success?(t.$message({type:"success",message:"处理成功!"}),t.getReport()):t.$message({type:"error",message:r.message});case 4:case"end":return a.stop()}},a,t)}))()},handleCurrentChange:function(e){this.queryData.pageIndex=e,this.getReport()}}}},416:function(e,t,a){t=e.exports=a(214)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table_container{padding:20px}.Pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:8px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}",""])},506:function(e,t,a){var r=a(416);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(215)("254279b8",r,!0)},533:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("head-top"),e._v(" "),a("div",{staticClass:"table_container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryData}},[a("el-form-item",{attrs:{label:"举报类型"}},[a("el-select",{attrs:{clearable:""},model:{value:e.queryData.reportType,callback:function(t){e.$set(e.queryData,"reportType",t)},expression:"queryData.reportType"}},e._l(e.reportTypeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.desc,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{attrs:{clearable:""},model:{value:e.queryData.status,callback:function(t){e.$set(e.queryData,"status",t)},expression:"queryData.status"}},e._l(e.reportStatusList,function(e){return a("el-option",{key:e.value,attrs:{label:e.desc,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.initData}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{property:"openId",label:"举报人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{"white-space":"inherit","line-height":"1.2"},attrs:{type:"text"},on:{click:function(a){return e.openUserInfoPage(t.row.openId)}}},[e._v(e._s(t.row.openId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"被举报人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{"white-space":"inherit","line-height":"1.2"},attrs:{type:"text"},on:{click:function(a){return e.openUserInfoPage(t.row.reportOpenId)}}},[e._v(e._s(t.row.reportOpenId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"reportType",label:"举报类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"primary"}},[e._v(e._s(e.getReportTypeName(t.row.reportType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"create",label:"举报时间"}}),e._v(" "),a("el-table-column",{attrs:{property:"status",label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"primary"}},[e._v(" "+e._s(e.getReportStatusName(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handlePass(t.row)}}},[e._v("通过")]):e._e(),e._v(" "),0===t.row.status?a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.refuseReport(t.row)}}},[e._v("驳回")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.deleteReport(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":e.queryData.pageIndex,"page-size":e.queryData.pageSize,layout:"total, prev, pager, next",total:e.count},on:{"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]}}});