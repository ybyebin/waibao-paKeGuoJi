 // 新增企业信息
 function method1() {
   layer.open({
     title: ['新增企业信息', 'font-size:16px;color:#333;background:#f1f1f1;height:50px;font-weight:bold;line-height:50px;padding-left:20px;border:none;'],
     type: 1,
     // skin: 'layui-layer-rim', //加上边框
     area: ['512px', '330px'], //宽高
     btn: ['取消', '保存'],
     content: $("#layer-for-method1"), //捕获的元素,
     success: function() {
       $('.layui-layer-btn a:first-child').addClass('cancel');
       $('.layui-layer-btn a:last-child').addClass('sure');
     },
     btn1: function() {
       layer.closeAll(); //疯狂模式，关闭所有层
     },
     btn2: function() {

     }
   });
 }

  // 新增企业信息
 function method2() {
   layer.open({
     title: ['修改企业信息', 'font-size:16px;color:#333;background:#f1f1f1;height:50px;font-weight:bold;line-height:50px;padding-left:20px;border:none;'],
     type: 1,
     // skin: 'layui-layer-rim', //加上边框
     area: ['512px', '330px'], //宽高
     btn: ['取消', '保存'],
     content: $("#layer-for-method1"), //捕获的元素,
     success: function() {
       $('.layui-layer-btn a:first-child').addClass('cancel');
       $('.layui-layer-btn a:last-child').addClass('sure');
     },
     btn1: function() {
       layer.closeAll(); //疯狂模式，关闭所有层
     },
     btn2: function() {

     }
   });
 }



  setTimeout(function() {
   method2()
 }, 1000)