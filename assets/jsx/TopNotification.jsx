import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={19}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m18.371 16.666-.238-.29c-1.075-1.3-1.725-2.084-1.725-5.762 0-1.904-.455-3.467-1.353-4.638-.662-.866-1.557-1.523-2.737-2.008a.146.146 0 0 1-.04-.033c-.424-1.42-1.585-2.373-2.895-2.373s-2.47.952-2.894 2.372a.153.153 0 0 1-.04.031c-2.753 1.134-4.09 3.308-4.09 6.648 0 3.68-.65 4.464-1.725 5.762-.078.094-.158.19-.239.29A1.717 1.717 0 0 0 .168 18.5c.301.635.944 1.029 1.676 1.029h15.083c.73 0 1.367-.394 1.67-1.026a1.717 1.717 0 0 0-.226-1.838Zm-8.988 6.771a3.909 3.909 0 0 0 3.44-2.057.197.197 0 0 0-.077-.261.195.195 0 0 0-.096-.025H6.117a.194.194 0 0 0-.167.094.195.195 0 0 0-.006.192 3.91 3.91 0 0 0 3.439 2.058Z"
      fill="#fff"
    />
    <Circle cx={13.883} cy={4} r={4} fill="#EB7878" />
  </Svg>
)

export default SvgComponent