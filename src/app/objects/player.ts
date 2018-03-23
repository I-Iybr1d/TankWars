import { Injectable } from '@angular/core';
import * as THREE from 'three';

export class Player extends THREE.Mesh {

  public geometry: THREE.BoxGeometry;
  public material: THREE.Material;

  constructor(geometry?: THREE.BoxGeometry | THREE.BufferGeometry, material?: THREE.Material | THREE.Material[]) {
    super(geometry ? geometry : new THREE.BoxGeometry(10, 2, 10), material ? material : new THREE.Material( { color: 0xff0000 }));

  }
}
