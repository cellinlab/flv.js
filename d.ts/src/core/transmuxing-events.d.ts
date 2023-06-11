export default TransmuxingEvents;
declare namespace TransmuxingEvents {
    const IO_ERROR: string;
    const DEMUX_ERROR: string;
    const INIT_SEGMENT: string;
    const MEDIA_SEGMENT: string;
    const LOADING_COMPLETE: string;
    const RECOVERED_EARLY_EOF: string;
    const MEDIA_INFO: string;
    const METADATA_ARRIVED: string;
    const SCRIPTDATA_ARRIVED: string;
    const STATISTICS_INFO: string;
    const RECOMMEND_SEEKPOINT: string;
}
