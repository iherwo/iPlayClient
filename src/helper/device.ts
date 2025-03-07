import { Platform } from "react-native";
import { Dimensions } from 'react-native';

export enum OSType {
    Web = "web",
    iOS = "ios",
    Android = "android",
    macOS = "macos",
    Windows = "windows",
}

export function isOS(type: OSType) {
    return Platform.OS === type;
}

export function isWeb() {
    Platform.OS === "web";
}

export function isIOS() {
    Platform.OS === "ios";
}

export function isAndroid() {
    Platform.OS === "android";
}


export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const preferedSize = (start: number, end: number, value: number) => {
    if (value < start) {
        return start;
    }
    if (value > end) {
        return end;
    }
    return value;
}