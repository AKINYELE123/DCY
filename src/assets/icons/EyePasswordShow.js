import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EyePasswordShow(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
        stroke="#5C6F7F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="#5C6F7F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyePasswordShow;
