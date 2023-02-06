# UCB Swim Schedule Scriptable Widget
Scriptable widget that shows the currently open swim lanes for recreational swim on your iOS device.


![GitHub release (latest by date)](https://img.shields.io/github/v/release/nhoelterhoff/ucb-swim-widget)
![GitHub](https://img.shields.io/github/license/nhoelterhoff/ucb-swim-widget)
[![Last Commit](https://img.shields.io/github/last-commit/nhoelterhoff/ucb-swim-widget)](https://img.shields.io/github/last-commit/nhoelterhoff/ucb-swim-widget)

![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fnik_hoelti)
[![](https://img.shields.io/badge/Add%20me%20on%20Strava-008900?style=flat&labelColor=orange&color=orange&logo=data:image/gif;base64,R0lGODlhZACNAIcAAAAAAP////yrgPurgPutfv///vuvgPuuf//+//ypf/uufv7///urgvuvf////fyrgfurgfutf/usgP3//////Pyrf/yrgvyrg/ypgPuvgvuvg/uvgf/8+P3//fuugPusgfusf/yrfvusg/yre/yqfvyqgv/9//7+/v/8+v78/P/89vuwf/uwg/7//vuwgP7//P//+/ysg/z//Pytf/7//fytffuugf/+/fusgvyrfP3/+f389/usffypg/ynfv/79//++vyrff/8/vytgf/99/z///3+/PypfPyshfyofP//+fypevz//vuugvuwgf/78/314/r///zn0P/9+f3+//ysgP737vysevuvhPv9+v3z4f//9/ytefzlyfzrzv7+//769f716furh/3+9Puuevysffzk0vzv4vzq2f3y6vviyv36+Pyle/746/zn1Pvjwf/99P78+f3y5Puvhvzkyf317PuvfPvlzf3u3f/++/788PypeP/6+P717fyuff738fypiPzu1fute/uthf3z5f3tz/zmzvz36P757/ynefzqy/3w3vzu1/uvfvv58/quff757f746P306fyngf3y3v3y6Puxfff//vzozvzox/ynd/rdwvzt2/vqzvvju/zkxfz37f3x2vv//fvky/ymgPvhxP3w1fv16vzowf3y5vzr0/324fr8+/vfxPz35Pyrdvzt0/367fvfwP3y0v3z3f758//48/znxfvizf3s2f713vzp1vv8/f3w1/vixv335v776/yrePzlx/X9//bcx/rv1vr25/3w0fvhwv306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAgAAACwAAAAAZACNAAAI/wABCBxIsKDBgwgTKlzIsKHDhxAJ3poVsaLFixgHhgKWsaPHjwN9OZIRCKTJkw/TpDChAqXLlwXdpFjJ5BjMmyjP3DBxQwZHnEA7llIRoGgA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)](https://www.strava.com/athletes/67895327)




## 📱 The widget in action 
<img src="imgs/widget.png?raw=true"  width="300">


## 🛠 Installation 
🚨 We only support iOS for now, sorry! 🚨

### 🍏 iOS
1. Download the [Scriptable App](https://apps.apple.com/de/app/scriptable/id1405459188).
2. Open the **Scriptable App** and create a new script (**"+" Button** in the top-right corner).
3. **Rename your script** to "UCB Swim Schedule" by tapping on the title bar saying **"Untitled Script"**
4. **Copy** and **paste the code** from **[main.js](https://raw.githubusercontent.com/nhoelterhoff/ucb-swim-widget/main/main.js)** code into the new script.
5. Press "done".
6. Go to your **homescreen**, **add a new widget**, and select the scriptable widget of size **medium**.
7. Press **"Add Widget"** and back on your home-screen press on the **newly added widget-space**.
8. **Select the "UCB Swim Schedule" script** that you created in step 3.

✅ You are all set! Let me know any feedback or comments.


## 🧑‍💻 Credits 
Big shoutout to the following repositories, for providing helpful code snippets:
- https://github.com/Martlgap/SmarterTankenWidget (Used a lot of your Readme)
- https://github.com/linusmimietz/Scriptable-Auto-Update (Awesome Scriptable Updater functionalities)

