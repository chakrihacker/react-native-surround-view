# react-native-surround-view

A surround view based on svg

## Installation

```sh
npm install react-native-surround-view
```

## Demo


https://user-images.githubusercontent.com/5210019/120792911-d6b3d800-c553-11eb-8a2b-95a7a4f9e4e3.mp4



## Usage

```js
import SurroundView from "react-native-surround-view";

// ...

<SurroundView width={200} height={35}>
  <Text>{'Press and hold'}</Text>
</SurroundView>
```


#### Props

- [`width`](#width)
- [`height`](#height)
- [`strokeColor`](#strokeColor)
- [`strokeWidth`](#strokeWidth)
- [`duration`](#duration)
- [`onSurround`](#onSurround)
- [`onRelease`](#onRelease)
- [`startPoint`](#startPoint)
- [`style`](#style)
- [`containerStyle`](#containerStyle)

---

### width

sets width of the Surround View.

| Type       | Required |
| ---------- | -------- |
| number     | Yes      |

---

### height

sets height of the Surround View.

| Type       | Required |
| ---------- | -------- |
| number     | Yes      |


---

### strokeColor

sets stroke color of the Surround View.

| Type       | Required |
| ---------- | -------- |
| [color](https://reactnative.dev/docs/colors)      | No      |

---

### strokeWidth

sets stroke width of the Surround View.

| Type       | Required |
| ---------- | -------- |
| number     | No      |

---

### duration

sets duration for the animation to complete.

| Type       | Required |
| ---------- | -------- |
| number(milliseconds)     | No      |

---

### onSurround

Callback function that gets called once surrounded.

| Type       | Required |
| ---------- | -------- |
| Function   | No       |

---

### onRelease

Callback function that gets called once released.

| Type       | Required |
| ---------- | -------- |
| Function   | No       |

---

### startPoint

String to determine the position to start the animation.

| Type       | Required |
| ---------- | -------- |
| 'TOP_START' \| 'TOP_END' \| 'BOTTOM_START' \| 'BOTTOM_END'   \| No       |

---

### `style`

Used to style the Surround View.

| Type       | Required |
| ---------- | -------- |
| ViewStyle  | No       |

---

### `containerStyle`

Used to style the View insdie svg where children is there.

| Type       | Required |
| ---------- | -------- |
| ViewStyle  | No       |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
