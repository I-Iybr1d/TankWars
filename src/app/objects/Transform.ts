import { GameBehaviour } from './GameBehaviour';
import * as THREE from 'three';

export interface Transform extends GameBehaviour {
    position: THREE.Vector3;
    rotation: THREE.Vector3;
    scale: THREE.Vector3;
}
