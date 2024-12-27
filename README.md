This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Packages used

### FlashList 
In place of Flatlist, I have used FlashList for smooth rendering of data

### react-native-mmkv
For storing data for offline storage and it is faster then async-storage and sqlite

### react-native-vector-icons 
For icons like search and filter

### @react-native-community/netinfo 
To get the current status of the app

### Step 4: My Approach

I made a json file of the given data and setup the project. I have rendered the data in Flashlist and represented a card for each item then added a header to perform search and sort operations. 
I have useMemo and useCallback hooks of react in functions so that they will not recall or recalculate if my component re renders on any state update. Then I have implemente offline functionality. When My component mounts it check the status of internet if it is there then the data stored in mmkv and if it is not there then get the data from storage.

I have used debounce for searching operation and sort() method of js for sorting. I have tried quickSort or mergeSort for better sorting for large data but it was taking more time than sort() that's why I have kept it.

### Step 5: Performance

I have not seen any lag in debugging mode and rerendering is not happening unless any state changes. I am attaching a screenshot of react devtools and perf monitor which shows 60 fps in emulator which is good

![Screenshot_1735290034](https://github.com/user-attachments/assets/f5e5c16c-b5dd-44cb-8c22-5d137fef22d8)



![Screenshot 2024-12-27 143104](https://github.com/user-attachments/assets/5169a2f8-7e35-446e-a66d-dcf96cf00fe7)
