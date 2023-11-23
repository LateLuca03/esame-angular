export interface Day {
    timepoint: number;
    cloudcover: number;
    seeing: number;
    trasparency: number;
    lifetd_index: number;
    rh2m: number;
    wind10m: {
        direction: "string";
        speed: number;
    };
    temp2m: number;
    prec_type: string;
    image: string;
    timepointToHour: string;
}