import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('container') elementRef: ElementRef;
  public container: HTMLElement;

  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;

  public cube: THREE.Mesh;

  public running = false;
  public enabled = true;

  constructor() {
    console.log(THREE);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.container = this.elementRef.nativeElement;

    console.log(this.container);

    this.Initialization();
  }

  Initialization() {
    console.log('Initialization');
    const screen = { width  : 400, height : 300 };
    const ratio = screen.width / screen.height;
    const view = { angle: 45, aspect: ratio, near: 0.1, far: 1000 };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);
    this.scene.add(new THREE.AxisHelper(20));

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);


    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshBasicMaterial({ color : 0xFFFFFF, wireframe: true });

    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(-50, -50, -50);

    this.scene.add(this.cube);

    this.Start();
  }

  Update() {
    console.log('Update');
    this.cube.rotateX(0.01);
    this.cube.rotateY(0.01);
    // this.cube.position.addScalar(0.2);

  }

  Start() {
      this.Update();
      this.renderer.render(this.scene, this.camera);

      const BindedStart =  this.Start.bind(this);
      requestAnimationFrame(BindedStart);
  }
}
