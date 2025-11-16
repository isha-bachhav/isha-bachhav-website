declare module "react-parallax-tilt" {
  import * as React from "react";

  export interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    perspective?: number;
    scale?: number;
    transitionSpeed?: number;
    gyroscope?: boolean;
    glareEnable?: boolean;
    glareMaxOpacity?: number;
    glareColor?: string;
    glarePosition?: string;
    glareBorderRadius?: string;
  }

  const Tilt: React.FC<TiltProps>;
  export default Tilt;
}
