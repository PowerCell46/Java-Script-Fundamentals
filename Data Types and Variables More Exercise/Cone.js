function cone(radius, height) {
let slantHeightOfCone = Math.sqrt(radius * radius + height * height);
let lateralSurfaceAreaOfCone = Math.PI * radius * slantHeightOfCone;
let baseSurfaceAreaOfCone = Math.PI * radius * radius;
let areaTotal = lateralSurfaceAreaOfCone + baseSurfaceAreaOfCone;


let volume = ((Math.PI * radius * radius * height) / 3);



console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${areaTotal.toFixed(4)}`);
}
