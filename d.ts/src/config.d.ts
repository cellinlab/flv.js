export function createDefaultConfig(): {
    enableWorker: boolean;
    enableStashBuffer: boolean;
    stashInitialSize: any;
    isLive: boolean;
    lazyLoad: boolean;
    lazyLoadMaxDuration: number;
    lazyLoadRecoverDuration: number;
    deferLoadAfterSourceOpen: boolean;
    autoCleanupMaxBackwardDuration: number;
    autoCleanupMinBackwardDuration: number;
    statisticsInfoReportInterval: number;
    fixAudioTimestampGap: boolean;
    accurateSeek: boolean;
    seekType: string;
    seekParamStart: string;
    seekParamEnd: string;
    rangeLoadZeroStart: boolean;
    customSeekHandler: any;
    reuseRedirectedURL: boolean;
    headers: any;
    customLoader: any;
};
export namespace defaultConfig {
    const enableWorker: boolean;
    const enableStashBuffer: boolean;
    const stashInitialSize: any;
    const isLive: boolean;
    const lazyLoad: boolean;
    const lazyLoadMaxDuration: number;
    const lazyLoadRecoverDuration: number;
    const deferLoadAfterSourceOpen: boolean;
    const autoCleanupMaxBackwardDuration: number;
    const autoCleanupMinBackwardDuration: number;
    const statisticsInfoReportInterval: number;
    const fixAudioTimestampGap: boolean;
    const accurateSeek: boolean;
    const seekType: string;
    const seekParamStart: string;
    const seekParamEnd: string;
    const rangeLoadZeroStart: boolean;
    const customSeekHandler: any;
    const reuseRedirectedURL: boolean;
    const headers: any;
    const customLoader: any;
}
