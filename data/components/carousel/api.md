## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| arrows | Whether to show switch arrows | boolean | false | 5.17.0 |
| autoplay | Whether to scroll automatically, you can specify `autoplay={{ dotDuration: true }}` to display the progress bar | boolean \| { dotDuration?: boolean } | false | dotDuration: 5.24.0 |
| autoplaySpeed | Delay between each auto scroll (in milliseconds) | number | 3000 |  |
| adaptiveHeight | Adjust the slide's height automatically | boolean | false |  |
| dotPosition | The position of the dots, which can be one of `top` `bottom` `left` `right` | string | `bottom` |  |
| dots | Whether to show the dots at the bottom of the gallery, `object` for `dotsClass` | boolean \| { className?: string } | true |  |
| draggable | Enable scrollable via dragging on desktop | boolean | false |  |
| fade | Whether to use fade transition | boolean | false |  |
| infinite | Infinitely wrap around contents | boolean | true |  |
| speed | Animation speed in milliseconds | number | 500 |  |
| easing | Transition interpolation function name | string | `linear` |  |
| effect | Transition effect | `scrollx` \| `fade` | `scrollx` |  |
| afterChange | Callback function called after the current index changes | (current: number) => void | - |  |
| beforeChange | Callback function called before the current index changes | (current: number, next: number) => void | - |  |
| waitForAnimate | Whether to wait for the animation when switching | boolean | false |  |

Find more APIs in react-slick [documentation](https://react-slick.neostack.com/docs/api).