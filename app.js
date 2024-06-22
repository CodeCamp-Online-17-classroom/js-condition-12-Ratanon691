let zone = prompt(`What zone's ticket are you looking for?`).toUpperCase()
if(zone.length > 2 || zone.length == 0 || zone == ``){
  alert(`Please check if you input the zone correctly`)
}
else{
  if(zone == `AA`){
    alert(`The ticket in this zone is 6,500 THB`)
  }
  else if(zone == `BB`){
    alert(`The ticket in this zone is 5,000 THB`)
  }
  else if(zone.charAt(0) == `S`){
    alert(`The ticket in this zone is 5,500 THB`)
  }
  else if(zone.length == 1){
alert(`The ticket in this zone is 4,000 THB`)
  }
}
