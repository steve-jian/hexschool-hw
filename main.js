$(document).ready(function () {
  $(".showmenu").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("menu-show");
  });
});

var scene = new xeogl.Scene({
  canvas: "myCanvas",
  transparent: true,
});
xeogl.setDefaultScene(scene);

var kk = new xeogl.GLTFModel({
  id: "kk",
  src: "models/burger/burger_merged1.gltf",
});

kk.on("loaded", function () {
  var cameraFlight = new xeogl.CameraFlightAnimation();
  cameraFlight.flyTo(kk);
});

var cameraControl = new xeogl.CameraControl();

scene.on("tick", function () {
  var camera = scene.camera;
  camera.orbitYaw(0.04);
});
