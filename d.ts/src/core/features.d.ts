export default Features;
declare class Features {
    static supportMSEH264Playback(): boolean;
    static supportNetworkStreamIO(): boolean;
    static getNetworkLoaderTypeName(): any;
    static supportNativeMediaPlayback(mimeType: any): boolean;
    static getFeatureList(): {
        mseFlvPlayback: boolean;
        mseLiveFlvPlayback: boolean;
        networkStreamIO: boolean;
        networkLoaderName: string;
        nativeMP4H264Playback: boolean;
        nativeWebmVP8Playback: boolean;
        nativeWebmVP9Playback: boolean;
    };
}
