# EMIKETIC Starter React Native

An opinionated starter template reflecting EMIKETIC's React Native standard and other React / JavaScript conventions.

# Conventions

The following conventions are mandatory for developers and staff at EMIKETIC.

If you're forking or using this template for your own project or team, we recommend you stick to them. Otherwise you can alter their behavior through the various configuration files (*`*rc.js`\* files)

## Linting and formatting

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also
  installed as a pre-commit hook through Husky

## Committing code

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

  - Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
  - Patch example: `git commit -m "fix: Closes ISS-2 and corrects scrolling bug"`
  - Major/Breaking change example: `git commit -m "BREAKING CHANGE: Updated React Native version"`
  - Combines feature and breaking change:
  - Major/Breaking change example:

    `git commit -m "feat: Closes ISS-1. Ability to login with Apple BREAKING CHANGE: Updated React Native version"`

- The standard is linted and Husky will prevent commits from going through if it's not compliant
- Project managers/owners can release satisfying updates and issue version bumps thanks to [standard-version](https://github.com/conventional-changelog/standard-version) by running `yarn release`. This will generate:
- Appropriate tags based on the conventional commit history
- An aggregated `CHANGELOG.md` file update.

## Folder structure

_WIP_

## VSCode workspace presets

This template assumes developers are using Microsoft Visual Studio code for an optimized team experience. It contains the following defaults;

- A list of recommended EMIKETIC extensions for JavaScript and React developers (appears under the _Recommended_ filter in _Extensions_)
- Linting and formatting rules
- Spellcheck additions for common development words in English

Besides, `.editorconfig` contains default rules for file formats, end of files/lines and indentations.

# Setup recommendations

Just like any other React Native project:

- `yarn && npx pod-install`
- `yarn start`

## Setting up simulators and devices

### Android Virtual Devices

Make sure an emulator is installed from _Android Studio > AVD Manager_ (preferably 2 different emulator of different sizes, Ex: Nexus 6 @ 5.96 inches and Nexus One & 3.7 inches )

### Setting up ADB and bridging Android devices

If you'r using CLI to run applications, follow instructions here regarding the configuration of ADB: https://reactnative.dev/docs/running-on-device

If you're using Android Studio, the IDE handle the process for you

### iOS

Simulators are managed through Xcode in a zero-conf fashion.
Nevertheless, make sure you run the application on simulators of different sizes and user experiences from the list of available devices (Ex: iPhone SE and iPhone 11, iPhone X and iPhone 8 to evaluate button-less vs button-based experiences)

## Run from IDE

### iOS

- Open Finder, then _Project folder > ios > EMKTStarterReactNative.xcworkspace_
- Select simulator or device (Team or individual signage must be activated for the device configuration)
- Press the Build and run button (Play icon)

### Android

- Open Finder, then _Project folder > ios > EMKTStarterReactNative.xcworkspace_
- Select simulator or device (Team or individual signage must be activated for the device configuration)
- Press the Build and run button (Play icon)

## Run from CLI

### Android

- `cd emiketic-starter-react-native`
- `yarn start-android`
- Follow instructions here: https://reactnative.dev/docs/running-on-device
