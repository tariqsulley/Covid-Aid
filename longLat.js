// let long2 = [7.1, 7.123, 7.147];
// let long = [7.152, 7.136, 7.189];

// let lat1 = [0.005, 0.006, 0.007];
// let lat2 = [0.001, 0.002, 0.003];

// --------- Real values

// Darkuman = 5.5907825,-0.2507153
// Abeka = 5.5907619,-0.2506457
// Some other darkuman  = 5.5907619,-0.2506457

// One person

let long = [5.5907825, 5.5907619, 5.5907619];
let lat1 = [-0.2507153, -0.2506457, -0.2506457];


// Other person
// - Darkuman = 5.5907592,-0.2505652
// - Darkuman2 = 5.5907592,-0.2505652
// -- Accra 5.5907592,-0.2505652
let long2 = [5.5907592,5.5907592, 5.5907592];
let lat2 = [-0.2505652, -0.2505652, -0.2505652];

diffLong = [];
diffLat = [];

// Function
function getDifference(description, arr1, arr2, long) {
  console.log(description);
  for (let i = 0; i < arr1.length; i++) {
    for (let p = 0; p < arr2.length; p++) {
      console.log(arr1[i], arr2[p]);
      console.log(Math.pow(Math.abs(arr1[i] - arr2[p]), 2));

      if (long) {
        diffLong.push(Math.pow(Math.abs(arr1[i] - arr2[p]), 2));
      } else {
        diffLat.push(Math.pow(Math.abs(arr1[i] - arr2[p]), 2));
      }
    }
  }
}

function compareDistance(long, lat) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < lat.length; j++) {
      console.log(Math.sqrt(long[i] + lat[j]));
      if (Math.sqrt(long[i] + lat[j]) < 0.05) {
        console.log("You have been in contact with a covid patient");
      } else {
        console.log("You are safe");
      }
    }
  }
}

// -- The x-values
getDifference("latitudinal values", long, long2, false);

// -- The Y-values
getDifference("longitudinal values", lat1, lat2, true);

compareDistance(diffLong, diffLat);
console.log(diffLong, diffLat);
