document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;

  // ヘッダー
  var table_title = year + '年' + month + '月';
  var captionHtml = "<caption>" + table_title + "</caption>";

  var weekdays = ['日','月','火','水','木','金','土'];
  var weekdayStr = "<tr>"
  for (var i = 0; i < 7; i++) {
    if (i == 0) {
      weekdayStr += "<td class='sun'>" + weekdays[i] + "</td>";
    } else if (i == 6) {
      weekdayStr += "<td class='sat'>" + weekdays[i] + "</td>";
    } else {
      weekdayStr += "<td>" + weekdays[i] + "</td>";
    }
  }
  weekdayStr += "</tr>";

  // カレンダー
  var firstDate = new Date(year, month-1, 1);
  var lastDate = new Date(year, month, 0);

  var htmlStr ='<tr>';
  var startWeekDay = firstDate.getDay();
  for (var i = 0; i < startWeekDay; i++) {
    htmlStr += "<td>&nbsp;</td>";
  }
  for (var i = 1; i <= lastDate.getDate(); i++) {
    var date = new Date(year, month - 1, i);
    console.log(date);
    var weekDay = date.getDay();
    var cellStr = date.getDate();
    console.log(cellStr);

    if (weekDay == 0) htmlStr += '<tr>';

    if (weekDay == 0) {
      htmlStr += "<td class='sun'>";
    } else if (weekDay == 6) {
      htmlStr += "<td class='sat'>";
    } else {
      htmlStr += "<td>";
    }
    htmlStr += cellStr + "</td>";
  }

  var lastDayWeek = lastDate.getDay();
  if (lastDayWeek != 6) {
    for (var i = lastDayWeek + 1; i <= 6; i++) {
      htmlStr += "<td>&nbsp;</td>";
    }
    htmlStr += "</tr>";
  }

  document.getElementById('calendar').innerHTML =
  '<table>' + captionHtml + weekdayStr + htmlStr + '</table>';
}, false);