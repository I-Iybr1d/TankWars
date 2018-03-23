import { Injectable } from '@angular/core';
import * as THREE from 'three';

export class Cube {

  private _geometry: THREE.BoxGeometry;
  private _material: THREE.MeshBasicMaterial;

  get geometry(): THREE.BoxGeometry {
    return this._geometry;
  }

  set geometry(geometry: THREE.BoxGeometry) {
    this._geometry = geometry;
  }

  get material(): THREE.MeshBasicMaterial {
    return this._material;
  }

  set material(material: THREE.MeshBasicMaterial) {
    this._material = material;
  }

  constructor(geometry?: THREE.BoxGeometry, material?: THREE.MeshBasicMaterial) {
    this._geometry = geometry ? geometry : new THREE.BoxGeometry(10, 10, 10);
    this._material = material ? material : new THREE.MeshBasicMaterial({ color : 0xFFFFFF, wireframe: true });
  }

}