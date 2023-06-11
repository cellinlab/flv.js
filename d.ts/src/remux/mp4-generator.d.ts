export default MP4;
declare class MP4 {
    static init(): void;
    static box(type: any, ...args: any[]): Uint8Array;
    static generateInitSegment(meta: any): Uint8Array;
    static moov(meta: any): Uint8Array;
    static mvhd(timescale: any, duration: any): Uint8Array;
    static trak(meta: any): Uint8Array;
    static tkhd(meta: any): Uint8Array;
    static mdia(meta: any): Uint8Array;
    static mdhd(meta: any): Uint8Array;
    static hdlr(meta: any): Uint8Array;
    static minf(meta: any): Uint8Array;
    static dinf(): Uint8Array;
    static stbl(meta: any): Uint8Array;
    static stsd(meta: any): Uint8Array;
    static mp3(meta: any): Uint8Array;
    static mp4a(meta: any): Uint8Array;
    static esds(meta: any): Uint8Array;
    static avc1(meta: any): Uint8Array;
    static mvex(meta: any): Uint8Array;
    static trex(meta: any): Uint8Array;
    static moof(track: any, baseMediaDecodeTime: any): Uint8Array;
    static mfhd(sequenceNumber: any): Uint8Array;
    static traf(track: any, baseMediaDecodeTime: any): Uint8Array;
    static sdtp(track: any): Uint8Array;
    static trun(track: any, offset: any): Uint8Array;
    static mdat(data: any): Uint8Array;
}
