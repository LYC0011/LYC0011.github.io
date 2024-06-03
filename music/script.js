// 设置你们的恋爱开始日期（这里是一个示例）  
var startDate = new Date("2023-04-25"); // 修改为你的开始日期  
  
// 更新天数的函数  
function updateDaysTogether() {  
    var now = new Date();  
    var diffTime = now - startDate;  
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 天数，向上取整  
    document.getElementById("days-together").innerHTML = diffDays + " 天";  
}  
  
// 页面加载时立即更新天数  
updateDaysTogether();  
  
// 每秒更新一次天数  
setInterval(updateDaysTogether, 1000);