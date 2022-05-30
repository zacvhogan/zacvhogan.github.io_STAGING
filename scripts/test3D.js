const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			container = document.getElementById( 'canvas' );
//document.body.appendChild( container );

const CANVAS_WIDTH = $("#canvas").width();
const CANVAS_HEIGHT = $("#canvas").height();

renderer = new THREE.WebGLRenderer();
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
container.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

      const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );



			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.05;

				renderer.render( scene, camera );
			};

			animate();