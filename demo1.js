var officers = [
    {id: 20, name:'Hanan', years:24},
    {id: 24, name:'dalia', years:23},
    {id: 56, name:'mariam', years:25},
    {id: 88, name:'Islam', years:23},
];

/*for (var off of officiers)
{
    console.log(off[0]);
}*/
var officiersID = [];
/*officiers.forEach(function(officier)
{
  officiersID.push(officier.id);
});*/
/*officiersID = officiers.map(function(officier)
{
    return officier.id;
});
console.log("officersIds using map: ", officiersID);
officersIds = officiers.map(officier => officier.id);
console.log("officersIds using map : ", officiersID);*/
/*var maram = officers.filter(function (officer) {
    return officer.name === "Maram";
  });

console.log("maram 1 : ", 'maram');
maram = officers.filter(officer =>  officer.name === "Maram");
console.log("maram 1 : ", 'maram');*/
var sum = 0;
/*for (var i=0; i<officers.length; i++)
{
      sum+=officers[i].years;
}
console.log("Total: ", sum);*/
/*sum = officers.reduce(function(accumlator,officer){
  return accumlator + officer.years;
},0);
console.log("Total: ", sum);*/

var x  = true;

/*for (var i=0; i<officers.length; i++)
{
      if (officers[i].years >= 30)
      {
          x=false;
         console.log("x");
         break;
      }
}
console.log("True");*/
var isMatchAll = officers.every(function(officer)
{
    return officer.years < 30;
})
console.log("isMatched :", isMatchAll);
