var data = ['投手','捕手','内野手','外野手'];
var players = [
  {name:'上野', position:'捕手'},
  {name: '坂本', position:'内野手'},
  {name: '小坂', position:'投手'}
];

console.log(players.sort(function(x,y) {
  return data.indexOf(x.position) - data.indexOf(y.position);
}));