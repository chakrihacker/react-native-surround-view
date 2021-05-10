import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
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
  children,
}) => {
  const rectLength = 2 * (width + height);
  const animatedRectLength = useSharedValue(0);
  const isAnimationRunning = useSharedValue(false);

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
      strokeDashoffset: animatedRectLength.value / 2,
      strokeDasharray: [
        animatedRectLength.value,
        rectLength - animatedRectLength.value,
      ],
    };
  });

  return (
    <Pressable onPressIn={surround} onPressOut={handleOnPressOut}>
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
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: strokeWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
      </Svg>
    </Pressable>
  );
};
