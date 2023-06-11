export default flvjs;
declare namespace flvjs {
    export { createPlayer };
    export { isSupported };
    export { getFeatureList };
    export { BaseLoader };
    export { LoaderStatus };
    export { LoaderErrors };
    export { PlayerEvents as Events };
    export { ErrorTypes };
    export { ErrorDetails };
    export { FlvPlayer };
    export { NativePlayer };
    export { LoggingControl };
    export const version: any;
}
declare function createPlayer(mediaDataSource: any, optionalConfig: any): FlvPlayer | NativePlayer;
declare function isSupported(): boolean;
declare function getFeatureList(): {
    mseFlvPlayback: boolean;
    mseLiveFlvPlayback: boolean;
    networkStreamIO: boolean;
    networkLoaderName: string;
    nativeMP4H264Playback: boolean;
    nativeWebmVP8Playback: boolean;
    nativeWebmVP9Playback: boolean;
};
import { BaseLoader } from "./io/loader.js";
import { LoaderStatus } from "./io/loader.js";
import { LoaderErrors } from "./io/loader.js";
import PlayerEvents from "./player/player-events.js";
import { ErrorTypes } from "./player/player-errors.js";
import { ErrorDetails } from "./player/player-errors.js";
import FlvPlayer from "./player/flv-player.js";
import NativePlayer from "./player/native-player.js";
import LoggingControl from "./utils/logging-control.js";
