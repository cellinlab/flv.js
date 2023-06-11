export default TransmuxingController;
declare class TransmuxingController {
    constructor(mediaDataSource: any, config: any);
    TAG: string;
    _emitter: any;
    _config: any;
    _mediaDataSource: any;
    _currentSegmentIndex: number;
    _mediaInfo: any;
    _demuxer: FLVDemuxer;
    _remuxer: MP4Remuxer;
    _ioctl: IOController;
    _pendingSeekTime: any;
    _pendingResolveSeekPoint: any;
    _statisticsReporter: number;
    destroy(): void;
    on(event: any, listener: any): void;
    off(event: any, listener: any): void;
    start(): void;
    _loadSegment(segmentIndex: any, optionalFrom: any): void;
    stop(): void;
    _internalAbort(): void;
    pause(): void;
    resume(): void;
    seek(milliseconds: any): void;
    _searchSegmentIndexContains(milliseconds: any): number;
    _onInitChunkArrival(data: any, byteStart: any): number;
    _onMediaInfo(mediaInfo: any): void;
    _onMetaDataArrived(metadata: any): void;
    _onScriptDataArrived(data: any): void;
    _onIOSeeked(): void;
    _onIOComplete(extraData: any): void;
    _onIORedirect(redirectedURL: any): void;
    _onIORecoveredEarlyEof(): void;
    _onIOException(type: any, info: any): void;
    _onDemuxException(type: any, info: any): void;
    _onRemuxerInitSegmentArrival(type: any, initSegment: any): void;
    _onRemuxerMediaSegmentArrival(type: any, mediaSegment: any): void;
    _enableStatisticsReporter(): void;
    _disableStatisticsReporter(): void;
    _reportSegmentMediaInfo(segmentIndex: any): void;
    _reportStatisticsInfo(): void;
}
import FLVDemuxer from "../demux/flv-demuxer.js";
import MP4Remuxer from "../remux/mp4-remuxer.js";
import IOController from "../io/io-controller.js";
