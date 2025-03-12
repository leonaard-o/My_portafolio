import { gsap } from 'gsap';
import  { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';

import PropTypes from 'prop-types';

import '../styles/AnimatedProfileImage.css'; // Importa el CSS puro

const AnimatedProfileImage = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = '',
  
  loopShine = true,
  enableRotation = true,
  enablePerspective = true,
  animationDuration = 1.4,
  animationEase = 'back.out(0.80)',
  ...props
}) => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const shineRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const setupAnimations = contextSafe(() => {
    // Animación de entrada
    gsap.from(containerRef.current, {
      duration: animationDuration,
      opacity: 0,
      scale: 0.95,
      rotate: -15,
      ease: animationEase,
      immediateRender: false,
      delay: 0.3,
      onStart: () => {
        gsap.set(containerRef.current, { willChange: 'transform, opacity' });
      },
    });

    // Efecto Shine
    if (shineRef.current && loopShine) {
      gsap.set(shineRef.current, {
        x: '-150%',
        y: '-50%',
        rotation: -20,
        opacity: 0,
        transformOrigin: 'center',
      });

      const shineTL = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      shineTL.to(shineRef.current, {
        x: '200%',
        y: '50%',
        rotation: 20,
        opacity: 0.9,
        duration: 2.2,
        ease: 'power3.inOut',
        force3D: true,
      }).to(shineRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.in',
      }, 0);
    }

    // Rotación 3D
    if (imageWrapperRef.current && enableRotation) {
      const rotationTL = gsap.timeline({
        repeat: -1,
        defaults: { transformOrigin: '50% 50%' },
      });

      rotationTL.to(imageWrapperRef.current, {
        rotationY: 360,
        rotationX: '+=5',
        duration: 7.5,
        ease: 'power1.inOut',
      }).to(imageWrapperRef.current, {
        rotationZ: '+=2',
        yoyo: true,
        repeat: 1,
        duration: 3,
        ease: 'sine.inOut',
      }, 0).to(imageWrapperRef.current, {
        scale: 1.08,
        y: '+=3',
        repeat: -1,
        yoyo: true,
        duration: 2.4,
        ease: 'sine.inOut',
      }, 2.4);
    }

    // Perspectiva
    if (enablePerspective) {
      gsap.to(containerRef.current, {
        duration: 10,
        rotationY: 2,
        rotationX: 1,
        transformPerspective: 900,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    }
  });

  useGSAP(() => {
    setupAnimations();

    return () => {
      gsap.killTweensOf([
        containerRef.current,
        imageWrapperRef.current,
        shineRef.current,
      ]);
    };
  }, [setupAnimations]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={`animated-profile-container ${className}`}
      role="figure"
      aria-label="Interactive profile image"
    >
      <div>
        <div ref={imageWrapperRef} className="animated-profile-wrapper">
        <img
          src={imageError ? '' : src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setImageError(true)}
          className="profile-image"
        />
          <div ref={shineRef} className="animated-profile-shine" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedProfileImage;
AnimatedProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  loopShine: PropTypes.bool,
  enableRotation: PropTypes.bool,
  enablePerspective: PropTypes.bool,
  animationDuration: PropTypes.number,
  animationEase: PropTypes.string,
}

