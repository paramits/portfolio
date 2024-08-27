// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {
LottieInteractivity.create({
    player: "#firstLottie",
    mode:"forward", autoplay,
    actions: [
        {
            visibility:[0, 1],
            type: "loop",
            frames: [1, 214]
        }
    ]
});
});

// let introText = document.querySelector('#animatedText');

// window.addEventListener('focus', function() {
//   introText.style.animationPlayState = 'running';
// });

// window.addEventListener('blur', function() {
//   introText.style.animationPlayState = 'paused';
// });
// const introAnim = document.querySelector("#animatedText");
// const [anim] = introAnim.getAnimations().filter(({
//   typing
// }) => typing === "moving");
// document.addEventListener('visibilitychange', (evt) => {
//   if (document.visibilityState === "visible") {
//     anim.play();
//   } else {
//     anim.pause();
//   }
// });
// import * as THREE from 'three';

// const renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize( window.innerWidth, window.innerHeight );

// document.body.appendChild( renderer.domElement );

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
// camera.position.set(4,5,11)

// const groundGeometry = new THREE.PlaneGeometry(20,20,32,32);
// groundGeometry.rotateX(-MATH.PI/2);
// const groundMat = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMat);
// scene.add(groundMesh);

// function animate(){
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();

