function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


let cities = [
  {
      name: "Lviv",
      lat: 49.842957, 
      long: 24.031111
  },
  {
      name: "Odessa",
      lat: 46.469391,
      long: 30.740883
  },
  {
      name: "Kiev",
      lat: 50.450001,
      long: 30.523333
  },
  {
      name: "Chernihiv",
      lat: 51.50551,
      long: 31.28487
  },
  {
      name: "Kharkiv",
      lat: 49.988358,
      long: 36.232845
  },
  {
      name: "Uzhhorod",
      lat: 48.621025,
      long: 22.288229
  },
  {
      name: "Donetsk",
      lat: 48.002777,
      long: 37.805279
  },
  {
      name: "Sevastopol",
      lat: 44.629650,
      long: 33.535667
  }
]


let result = getDistanceFromLatLonInKm(49.842957, 24.031111, 46.469391, 30.740883);
// console.log(result)
let cityIndex = -1
let maxDistance = 0;
for (let i = 0; i < cities.length; i++) {
  let distance = getDistanceFromLatLonInKm(cities[1].lat, cities[1].long, cities[i].lat, cities[i].long)
  if (maxDistance < distance){
    maxDistance = distance;
    cityIndex = i
  }
}
console.log(maxDistance);
console.log(cities[cityIndex].name + " -- " + cities[cityIndex].lat)