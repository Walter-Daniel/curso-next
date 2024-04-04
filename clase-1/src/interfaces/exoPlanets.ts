export interface ExoPlanetsResponse {
    kepler_name:       string;
    koi_prad:          number;
}

export enum KoiDisposition {
    Confirmed = "CONFIRMED",
}

export enum KoiPdisposition {
    Candidate = "CANDIDATE",
    FalsePositive = "FALSE POSITIVE",
}

export enum KoiTceDelivname {
    Q1Q16Tce = "q1_q16_tce",
    Q1Q17Dr24Tce = "q1_q17_dr24_tce",
    Q1Q17Dr25Tce = "q1_q17_dr25_tce",
}
