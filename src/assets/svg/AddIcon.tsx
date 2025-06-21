import { Svg, Path } from 'react-native-svg';
import { View } from 'react-native';

interface AddIconProps {
  width: number;
  height: number;
}

export default function AddIcon({width, height}: AddIconProps) {
  return (
    
      <Svg height={height} width={width} viewBox="0 0 1024 1024">
        <Path
          d="M512 0a512 512 0 1 0 512 512A512.606923 512.606923 0 0 0 512 0z"
          fill="#515151"
        />
        <Path
          d="M771.277383 471.336178h-218.492177v-218.492176a40.663822 40.663822 0 0 0-81.327643 0v218.492176h-218.492177a40.663822 40.663822 0 0 0 0 81.327644h218.492177v218.492176a40.663822 40.663822 0 0 0 81.327643 0v-218.492176h218.492177a40.663822 40.663822 0 0 0 0-81.327644z"
          fill="#FFFFFF"
        />
      </Svg>
  );
}
