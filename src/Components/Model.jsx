import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Environment, useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

const Model = () => {
  const model = useGLTF("/Models/DestroyableCar.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  const CarScene = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // 🎥 CAMERA + RENDER
  useThree(({ camera, gl }) => {
    camera.position.set(-8, 5, 9);
    camera.lookAt(0, 0, 0);

    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.3;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  // 🎨 MATERIAL FIX (important for shine)
  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.roughness = 0.25;
        child.material.metalness = 0.7;
      }
    });
  }, [model]);

  // 🔥 FULL GSAP ANIMATION (RESTORED)
  useGSAP(() => {
    if (!CarScene.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        endTrigger: "#section4",
        end: "top top",
        scrub: 1.2,
      },
    });

    tl.add(() => {
      actions["FrontDoorWindshieldAction"]?.reset().fadeIn(0.5).play();
      actions["AllActions"]?.fadeOut(0.3);
    });

    tl.to(CarScene.current.position, {
      x: -2,
      y: 0,
      z: 4,
      duration: 1,
    }).to(
      CarScene.current.rotation,
      {
        y: Math.PI / 6,
        duration: 1,
      },
      "<",
    );

    tl.add(() => {
      actions["RearDoorAction"]?.reset().fadeIn(0.1).play();
    });

    tl.to(CarScene.current.position, {
      x: 1,
      y: 0.5,
      z: 3,
      duration: 1,
    }).to(
      CarScene.current.rotation,
      {
        y: Math.PI / 2,
        duration: 1,
      },
      "<",
    );

    tl.add(() => {
      actions["RearDoorAction"]?.fadeOut(0.3);
      actions["LeftDoorAction"]?.reset().fadeIn(0.5).play();

      actions["AllActions"]?.fadeOut(0.3);
    });

    tl.to(CarScene.current.position, {
      x: -1.5,
      y: 1,
      z: 6,
      duration: 1,
    }).to(
      CarScene.current.rotation,
      {
        y: Math.PI,
        duration: 1,
      },
      "<",
    );

    tl.add(() => {
      actions["LeftDoorAction"]?.fadeOut(0.3);
      actions["AllActions"]?.reset().fadeIn(0.5).play();
    });

    tl.to(CarScene.current.position, {
      x: 0,
      y: 0.2,
      z: 3.5,
      duration: 1,
    }).to(
      CarScene.current.rotation,
      {
        y: Math.PI * 1.5,
        duration: 1,
      },
      "<",
    );
  }, []);

  return (
    <>
      {/* 🔥 SOFT STUDIO REFLECTION */}
      <Environment preset="studio" />

      <primitive
        ref={CarScene}
        object={model.scene}
        position={[-4.4, 0.1, 3]}
        scale={[2, 2, 2]}
      />
      <ambientLight intensity={1.0} />

      <directionalLight position={[5, 6, 5]} intensity={2} />

      <directionalLight position={[-5, 3, -5]} intensity={1.2} />
    </>
  );
};

export default Model;
