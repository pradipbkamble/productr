



export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: Prostatus;
    id: string;
}

export type Prostatus='Inprocess'|'Dispatched'|'Deliver';

