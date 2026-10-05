import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {GalleryOpening} from './scene';

const RemotionRoot: React.FC = () => (
  <Composition
    id="GalleryOpening"
    component={GalleryOpening}
    width={1920}
    height={1080}
    fps={30}
    durationInFrames={63}
  />
);

registerRoot(RemotionRoot);
