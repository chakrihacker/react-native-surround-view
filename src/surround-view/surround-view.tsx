import React, { FC, useMemo } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Rect } from 'react-native-svg';

export interface SurroundViewProps {
  width: number;
  height: number;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  onSurround?: () => void;
  onRelease?: () => void;
  startPoint?: 'TOP_START' | 'TOP_END' | 'BOTTOM_START' | 'BOTTOM_END';
  containerStyle?: ViewStyle;
  style?: ViewStyle;
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);

export const SurroundView: FC<SurroundViewProps> = ({
  width,
  height,
  strokeColor = '#000',
  strokeWidth = 4,
  duration = 1000,
  onSurround = () => {},
  onRelease = () => {},
  startPoint = 'TOP_START',
  containerStyle = {},
  style = {},
  children,
}) => {
  const rectLength = 2 * (width + height);
  const animatedRectLength = useSharedValue(0);
  const isAnimationRunning = useSharedValue(false);

  const offSetForStartPoint = useMemo(() => {
    let offset = 0;
    switch (startPoint) {
      case 'TOP_START':
        break;
      case 'BOTTOM_START':
        offset = height;
        break;
      case 'BOTTOM_END':
        offset = width + height;
        break;
      case 'TOP_END':
        offset = -width;
        break;
      default:
        break;
    }
    return offset;
  }, [height, startPoint, width]);

  const surround = () => {
    isAnimationRunning.value = true;
    animatedRectLength.value = withTiming(
      rectLength,
      { duration },
      (isFinished) => {
        if (isFinished) {
          runOnJS(onSurround)();
        }
        isAnimationRunning.value = !isFinished;
      }
    );
  };

  const release = () => {
    animatedRectLength.value = withTiming(0, { duration }, (isFinished) => {
      if (isFinished) {
        runOnJS(onRelease)();
      }
    });
  };

  const handleOnPressOut = () => {
    if (isAnimationRunning.value) {
      release();
    }
  };

  const animatedRectProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: animatedRectLength.value / 2 + offSetForStartPoint,
      strokeDasharray: [
        animatedRectLength.value,
        rectLength - animatedRectLength.value,
      ],
    };
  });

  return (
    <Pressable onPressIn={surround} onPressOut={handleOnPressOut} style={style}>
      <Svg width={width} height={height}>
        <AnimatedRect
          x={'0'}
          y={'0'}
          width={width}
          height={height}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          animatedProps={animatedRectProps}
        />
        <View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              width: '100%',
              height: '100%',
              padding: strokeWidth,
              justifyContent: 'center',
              alignItems: 'center',
            },
            containerStyle,
          ]}
        >
          {children}
        </View>
      </Svg>
    </Pressable>
  );
};
