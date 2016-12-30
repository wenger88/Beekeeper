/**
 * Created by goran.pavlovski on 12/29/2016.
 */

export interface Apiary{
    id: number,
    name: string,
    note: string,
    location: any,
    active: boolean,
    date: any,
    hive: Hive[]
}

export interface Hive{
    apiaryId: number,
    id: number,
    active: boolean,
    type: any,
    frameNumber: number,
    hiveState: any,
    queen: boolean,
    queenColor: any,
    note: string,
    date: any
}


