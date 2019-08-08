import * as React from "react"
import { ViewStyle } from "react-native"
import Svg, { G, Path } from "react-native-svg"

export interface TjuBadgeProps {
  style?: ViewStyle
  fill?
  height?
  width?
}

export function TjuBadge(props: TjuBadgeProps) {
  const { style, fill, height, width } = props

  const predefinedStyle: ViewStyle = {}

  return (
    <Svg
      style={[predefinedStyle, style]}
      height={height || 353}
      width={width || 286}
      viewBox="0 0 286 353"
    >
      <G fill={fill}>
        <Path d="M239,36.3c-3.3,1.2-6.5,2.1-9.6,3.3c-14.7,5.8-29.4,5.1-44.1,0c-13.2-4.6-25-11.8-35.2-21.3 c-1.6-1.5-3.2-2.8-5-4.4c-2.9,2.5-5.6,5-8.5,7.3c-14.6,12-30.8,20.1-49.8,22.2c-8,0.9-15.9,0-23.5-2.6c-4.4-1.5-8.7-3-13.6-4.7 c-4.5,9.6-9.3,18.9-13.3,28.5c-6.7,16.1-11,32.9-13.5,50.2c-0.2,1.2,0.1,2,1.2,2.6c3.5,2,6.9,3.9,10.2,6.2 c2.2,1.5,4.3,3.4,6.1,5.5c2.5,2.8,2.8,6.1,1.2,9.5c-2.1,4.5-5.3,8-9.2,10.7c-3.7,2.6-7.6,4.8-11.4,7.1c-1.2,0.7-1.7,1.5-1.6,2.9 c1.2,57.3,24.2,104.4,67,142c17,14.9,35.7,27.3,56.7,36.1c1.5,0.6,2.6,0.6,4.1,0c29-12.5,53.6-31.1,74.6-54.6 c22.5-25.3,37.3-54.5,44-87.8c2.4-11.9,3.3-23.9,3.6-36c0-0.8-0.8-2-1.5-2.4c-4-2.7-8.2-4.9-12-7.8c-2.7-2.1-5.2-4.9-7.1-7.8 c-3.6-5.2-3.1-9.4,1.5-13.7c2.1-2,4.6-3.7,7.1-5.4c2.3-1.6,4.8-3,7.3-4.3c1.2-0.7,1.5-1.5,1.3-2.8c-3.6-23.9-10.4-46.9-21.6-68.4 C242.5,43.1,240.8,39.8,239,36.3z M261.1,167.4c-1.3,23.4-6.5,45.1-16.1,65.7c-12.1,26-29.6,47.7-51.5,66 c-14.1,11.8-29.3,21.9-46.2,29.4c-1.5,0.7-2.8,0.7-4.3,0c-13.9-6.1-26.7-14.1-38.9-23.2c-24.7-18.6-44.7-41.2-58.5-69.1 c-11.2-22.5-16.9-46.4-18-71.4c-0.1-2.3,0.6-3.4,2.5-4.4c6.8-3.7,12.8-8.4,17-15.1c5.7-9,4.6-17.6-3.4-24.7 c-3-2.6-6.3-4.8-9.7-6.8c-1.9-1.2-2.5-2.3-2.1-4.5C35.7,88.2,42.3,68,52.4,49.1c1.8-3.4,0.9-3.2,4.6-1.8c12.5,4.7,25.3,5.8,38.4,3 c18.1-3.8,34-12.1,47.8-24.2c1.5-1.3,2.4-1.2,3.7,0.1c8.6,7.9,18.5,13.9,29.2,18.5c12.2,5.2,24.9,8.1,38.2,6.8 c6.5-0.6,12.8-2.3,18.9-4.7c1.5-0.6,2.1-0.2,2.8,1.1c10.3,19.5,17.2,40.2,20.9,62c0.3,1.9-0.2,2.7-1.7,3.6 c-3.5,2.3-7.1,4.5-10.2,7.3c-7.8,7.1-8.7,15.6-3.1,24.6c3.6,5.8,8.5,10.4,14.4,13.5C260.5,161.1,262.5,163.6,261.1,167.4z" />
        <Path d="M145.1,34C118.8,53.3,90.7,64.8,57,54.8c-3,7.2-6.4,14.4-8.9,21.8c-3.1,9.5-5.4,19.2-8.1,28.8 c-0.5,1.8,0.2,2.6,1.6,3.6c3.6,2.8,7.3,5.5,10.3,8.9c7.1,8.2,8.1,17.5,3.4,27.3c-4,8.3-10.6,14.4-18.4,19.2 c-1.3,0.8-1.7,1.5-1.6,3.1C38,213,56.9,251,89.5,282.4c15.8,15.2,33.5,27.6,53.2,37.1c1.7,0.8,3.1,0.9,4.9,0 c39.9-20.3,71.2-49.3,90.7-90c8.8-18.3,13.5-37.8,15.2-58c0.4-4.2-0.4-6.7-4.2-9.1c-5.9-3.5-10.5-8.6-14-14.6 c-6.7-11.2-5.4-22.9,3.9-32.1c2.7-2.7,5.9-4.9,9-7.2c0.9-0.7,1.2-1.1,1-2.3c-3.4-17.4-8.8-34.2-16.6-50.1c-0.5-1-1-1.4-2.2-1 c-21.1,6.8-41.1,3.2-60.6-6c-4.4-2.1-8.6-4.5-12.7-7C152.9,39.6,149.1,36.7,145.1,34z M192.6,110c0-8.8-0.9-17.1-3.8-25.1 c-1-2.6-0.4-4.4,1.6-5.3c2-0.8,4,0.1,4.8,2.7c1.3,4.7,2.6,9.5,3.4,14.3c0.7,4.3,0.8,8.7,1.2,13.2c2.1,0,4.3,0,6.3,0 c0.1-0.3,0.2-0.4,0.2-0.6c0-0.7,0.1-1.4,0.1-2.2c0.3-8.6,1.4-17,4.3-25.1c0.8-2.2,2.6-3.1,4.4-2.5c2,0.7,2.7,2.4,2.2,4.8 c-1.2,4.7-2.4,9.4-3.2,14.1c-0.6,3.7-0.6,7.6-0.9,11.6c2.3,0,4.1,0,5.9,0c2.2,0.1,3.7,1.5,3.7,3.4c0,1.9-1.5,3.3-3.7,3.4 c-1.5,0-3,0-4.6,0c-2.6,0-5.3,0-7.9,0c0,5.2,0,10,0,14.9c4.1,0,8,0,11.9,0c2.7,0,4.3,1.3,4.3,3.5c0,2-1.6,3.4-4.2,3.4 c-3.3,0-6.5,0.1-9.8,0c-1.8-0.1-2.6,0.4-2.5,2.4c0.2,3.5,0,7.1,0,10.6c0,1.3,0,2.6,0,3.7c0.5,0.2,0.6,0.3,0.7,0.3 c3.8,0,7.5,0,11.3,0.1c2.7,0,4.4,1.3,4.4,3.4c0,2.1-1.6,3.5-4.3,3.5c-3.3,0-6.5,0.1-9.8,0c-2-0.1-2.4,0.6-2.4,2.5 c0.1,12.8,0,25.6,0,38.4c0,0.7,0,1.5,0,2.2c-0.2,2-1.7,3.4-3.6,3.3c-1.8-0.1-3.1-1.4-3.3-3.4c-0.1-0.6,0-1.3,0-2 c0-12.7,0-25.5,0-38.2c0-0.8,0-1.7,0-2.8c-1.1,0-1.9,0-2.6,0c-3.3,0-6.5,0-9.8,0c-2.5,0-4.1-1.5-4-3.6c0.1-2,1.6-3.3,4-3.4 c1.2,0,2.5,0,3.7,0c2.9,0,5.7,0,8.8,0c0-5.1-0.1-9.9,0-14.6c0.1-1.9-0.5-2.5-2.4-2.5c-3.5,0.1-7.1,0.1-10.6,0 c-2.1-0.1-3.5-1.6-3.4-3.5c0-1.9,1.5-3.2,3.5-3.4c0.9-0.1,1.9,0,2.8,0c3.3,0,6.6,0,10,0c0-5.1,0-9.8,0-14.8 c-0.8,0-1.6-0.1-2.4-0.1c-3.2,0-6.4,0-9.6,0c-2.8,0-4.4-1.3-4.4-3.4c0-2.1,1.6-3.4,4.3-3.5C188.9,110,190.6,110,192.6,110z  M112.4,111c-0.2,0-0.5,0.1-0.7,0.1c-0.4,6.2-1,12.3-1.2,18.5c-0.8,25.1,2.5,49.8,9.2,74c0.8,2.8,0,4.7-2.1,5.3 c-2.1,0.5-3.8-0.6-4.5-3.3C103.4,170,100.4,134,107,97.4c0.9-5.1,2.3-10.1,3.7-15.2c0.8-3,4.1-4,5.8-1.7c0.7,1,0.9,2.7,0.6,4 c-1,5-2.3,9.8-3.4,14.8c-0.2,0.9-0.1,2.2,0.4,2.7c3.4,3.5,5.6,7.7,7.3,12.2c5.2,13.4,7.1,27.5,8.6,41.7c0.3,2.4-1,4-3,4.2 c-2,0.2-3.6-1.1-3.9-3.5c-0.4-2.9-0.6-5.8-1-8.6c-1.4-10.5-3.2-20.9-7-30.8C114.4,115.1,113.4,113.1,112.4,111z M85.6,111.4 c-0.3-0.1-0.6-0.2-0.8-0.3c-1.7,4.4-3.6,8.7-5,13.2c-3.2,10.4-4.6,21.2-5.7,32c-0.2,2.5-1.7,4-3.8,3.9c-2-0.1-3.5-1.9-3.2-4.1 c1.2-11.6,2.7-23.1,6.1-34.3c2.2-7.2,4.9-14.2,10.4-19.8c0.4-0.4,0.5-1.3,0.4-1.9c-1.1-5.3-2.2-10.6-3.3-15.9 c-0.5-2.3,0.4-4.1,2.4-4.6c1.8-0.5,3.5,0.5,4.3,2.7c0.3,0.8,0.4,1.5,0.6,2.3c3.4,13.4,5,27,5.6,40.8c0.9,23-1,45.7-5.6,68.2 C87,197.8,86,202,85,206.3c-0.4,1.9-1.8,2.8-3.7,2.7c-1.8-0.2-2.9-1.3-3.1-3.1c-0.1-0.8,0.2-1.7,0.4-2.6 C85.9,173.1,88.7,142.4,85.6,111.4z M167.7,106.2C167.9,106.3,167.5,106.2,167.7,106.2c-1.2,10.3-1.8,20.6-3.1,30.8 c-1.8,13.7-2.5,27.4-0.7,41.1c1.2,8.8,2.5,17.6,3.7,26.4c0.3,2.4-0.7,4.1-2.8,4.4c-2,0.3-3.7-0.9-4-3.3 c-1.5-10.1-3.1-20.2-4.2-30.3c-1.7-15.7-0.2-31.3,2.2-46.9c1.9-11.6,2.7-23.3,1.1-35c-0.4-3.1-1.3-6.2-2-9.3 c-0.6-2.3,0.2-4.1,2.2-4.7c1.8-0.6,3.5,0.4,4.4,2.5c0.2,0.6,0.4,1.2,0.6,1.9C167.2,91.2,167.6,98.7,167.7,106.2z M122.8,245.4 c-4.4-5.9-4.4-11.6-0.1-15.7c4.2-4.1,12.3-4.4,17-0.7c2.2,1.7,3.5,4,3.9,6.8c0.6,3.8-0.8,6.9-3.3,9.6c4.2,3.4,5.6,7.7,4.1,12.7 c-1.4,4.9-5.1,7.2-9.9,8c-1.5,0.3-3.2,0.2-4.8,0.1c-5.3-0.3-9.7-3.3-11.1-7.7C117.3,253.4,118.4,248.9,122.8,245.4z M188.1,239.9 c1.1,0,2.2,0,3.3,0c5,0.1,9.4,1.5,11.7,6.3c2.4,5.1,2,10.2-1.3,14.8c-4.3,6-14.3,7.1-20.7,2.4c-0.8-0.6-1.6-2-1.4-2.7 c0.3-1.1,1.5-2.1,2.5-2.6c0.7-0.3,2,0.2,2.8,0.7c2.4,1.3,4.9,1.8,7.5,1.3c3.7-0.7,5.8-3.8,5.6-8.1c-0.2-3.6-2.2-5.7-6.1-5.9 c-2-0.1-4,0.2-6,0.6c-3.8,0.7-5.3-0.7-4.6-4.4c0.8-4.2,1.6-8.4,2.2-12.6c0.3-2.2,1.5-2.9,3.5-2.9c4.3,0,8.7,0,13,0 c2.5,0,3.3,0.7,3.4,2.7c0.1,2.2-0.9,3.4-3.1,3.6c-1.7,0.2-3.5,0.1-5.2,0.1c-6.2,0-6.2,0-7.1,6.1 C188.1,239.4,188.1,239.6,188.1,239.9z M163.3,251.1c-0.9,0-1.3-0.1-1.8-0.1c-5.6-0.2-9.8-3.2-11.2-8.2c-1.6-5.4,0.2-11,4.7-14 c4.9-3.4,11.8-3.1,16.2,0.5c4.2,3.5,6,10.5,3,15.9c-3.8,6.8-8.4,13.2-12.8,19.6c-0.9,1.4-4.6,1.8-5.8,0.7c-1.9-1.7-0.3-3,0.6-4.3 C158.5,257.9,160.8,254.6,163.3,251.1z M100.7,260c0-8,0-15.5,0-23.5c-1.7,1.4-3,2.7-4.5,3.8c-1.5,1.1-2.9,0.6-4-0.7 c-1.1-1.4-1.3-2.7,0.2-4c3-2.6,6-5.2,8.9-7.9c1.4-1.3,3.1-1.8,4.5-0.8c0.9,0.6,1.4,2.3,1.4,3.5c0.1,8.3,0.1,16.6,0.1,24.9 c0,4.5,0,4.5,4.5,4.6c2.3,0.1,3.1,0.8,3.1,2.9c0,2.1-0.7,3-3,3c-5.4,0.1-10.8,0-16.3,0c-2,0-2.9-1-2.9-2.9c0-2.1,0.9-3,3.1-3 C97.4,260,99,260,100.7,260z M153.1,192.8l0.1,0.4c-0.9,1.1-1.5,2.7-2.6,3.2c-1,0.4-2.7,0-3.7-0.7c-0.8-0.5-1.1-2-1.2-3.1 c-2-14.6-2.2-29.3-1.7-44c0.1-2.9,0.3-5.8,0.6-8.7c0.2-2,1.9-3.1,3.7-2.9c1.8,0.2,3.1,1.6,3.1,3.6c0,0.4,0,0.9,0,1.3 c-0.1,10.7-0.5,21.4-0.3,32.1C151.1,180.3,152.6,186.5,153.1,192.8z M168.6,155c0-4.8,0-9.5,0-14.3c0-1.7,0.8-3.1,2.5-3.4 c1.1-0.2,2.7,0.2,3.5,1c0.7,0.7,0.9,2.2,0.9,3.4c-0.3,13.5-0.1,26.9,1.6,40.3c0.4,3.3,1,6.6,1.4,9.9c0.3,2.3-0.8,3.9-2.7,4.2 c-2,0.3-3.5-0.8-4-3c-0.1-0.6-0.3-1.3-0.4-1.9C169.1,179.1,168.5,167,168.6,155z M180.4,106.3c-0.1,2.5-0.3,5.4-0.4,8.4 c-0.1,0.9-0.2,1.9-0.3,2.8c-0.3,2.8-1.7,4.2-3.8,4c-2.2-0.2-3.2-1.9-3-4.6c0.9-11.2,1.3-22.3-2.8-33c-0.7-1.8,0.3-3.6,2-4.2 c1.9-0.7,3.3,0,4.2,1.6c0.5,0.9,0.9,1.8,1.2,2.8C179.8,91.1,180.3,98.4,180.4,106.3z M149,107c-0.2-8.2-0.4-15.7-3-23 c-0.7-2,0.2-3.7,2-4.4c1.7-0.7,3.5,0.1,4.3,1.9c0.5,1,0.9,2.2,1.1,3.3c2.9,11.1,2.6,22.4,1.7,33.7c-0.2,2-1.8,3.3-3.7,3.1 c-2-0.2-3.3-1.9-3.1-4.2C148.6,113.7,148.8,110,149,107z" />
        <Path d="M131.6,248.7c-4.1,0-6.6,2-6.8,5.4c-0.3,4,2.3,6.4,6.9,6.4c4.5,0,7.2-2.5,7-6.4 C138.4,250.6,135.8,248.6,131.6,248.7z" />
        <Path d="M131.5,232.3c-3.5,0-5.7,2.1-5.7,5.2c0,3.2,2.3,5.2,5.9,5.2c3.7,0,5.7-1.9,5.7-5.3 C137.4,234.1,135.2,232.2,131.5,232.3z" />
        <Path d="M156.1,238.7c0,4,2.3,6.4,6.3,6.4c3.8,0,6.7-2.7,6.7-6.2c0.1-3.9-2.6-6.7-6.4-6.7 C158.8,232.3,156.1,234.9,156.1,238.7z" />
      </G>
    </Svg>
  )
}
