{

    const init = () => {

        // here are your objects and scenes
        const scene = new THREE.Scene();

        // perspective camera 4 parameters => is most close to human eye
        // 75 for field of view, aspect ratio => based on brwser inner width en heigt, for plain ? 
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5;



        // webGL is craziest/ with this you can create crazy stuff, the others renderers are most simplistic
        // je hebt een renderer nodig voor elk tree.js project 
        // anti-alias true is to smooth out, otherwise jagged
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // setting background color
        renderer.setClearColor("#e5e5e5");
        // based on window height en width
        renderer.setSize(window.innerWidth, window.innerHeight);


        // we need to create a canvas element with our render settings 
        document.body.appendChild(renderer.domElement);

        // to change values in canvas of width & height => check in inspector
        window.addEventListener('resize', () => {
            // the window size must adjust
            renderer.setSize(window.innerWidth, window.innerHeight);
            // camera aspect ratio veranderen
            camera.aspect = window.innerWidth, window.innerHeight
            // update camera matrix
            camera.updateProjectionMatrix();
        })



        // to create a sphere
        // you have form, but also a surface 
        // first radius wich is the size , default is 1
        // then widthSegments
        // then heightsegments
        const geometry = new THREE.SphereGeometry(1, 10, 10);
        // a material for non shiny objects
        const material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);


        // je moet de renderer renderen 
        renderer.render(scene, camera);
        console.log(scene);

    }




    init();


}