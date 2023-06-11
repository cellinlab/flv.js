export default Transmuxer;
declare class Transmuxer {
    constructor(mediaDataSource: any, config: any);
    TAG: string;
    _emitter: any;
    _worker: any;
    _workerDestroying: boolean;
    e: {
        onLoggingConfigChanged: any;
    };
    _controller: TransmuxingController;
    destroy(): void;
    on(event: any, listener: any): void;
    off(event: any, listener: any): void;
    hasWorker(): boolean;
    open(): void;
    close(): void;
    seek(milliseconds: any): void;
    pause(): void;
    resume(): void;
    _onInitSegment(type: any, initSegment: any): void;
    _onMediaSegment(type: any, mediaSegment: any): void;
    _onLoadingComplete(): void;
    _onRecoveredEarlyEof(): void;
    _onMediaInfo(mediaInfo: any): void;
    _onMetaDataArrived(metadata: any): void;
    _onScriptDataArrived(data: any): void;
    _onStatisticsInfo(statisticsInfo: any): void;
    _onIOError(type: any, info: any): void;
    _onDemuxError(type: any, info: any): void;
    _onRecommendSeekpoint(milliseconds: any): void;
    _onLoggingConfigChanged(config: any): void;
    _onWorkerMessage(e: any): void;
}
import TransmuxingController from "./transmuxing-controller.js";
