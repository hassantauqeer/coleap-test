
export interface IVehicleData {
    id: string,
    make: string,
    model: string,
    photo: string,
    price: string,
    range?: any,
    colors?: any
}
export interface IGridItem extends IVehicleData{ onClick?: () => void}
export interface IModalProps extends IVehicleData{ onClose?: () => void}

export enum LoadingStatus {
    LOADING = 'loading',
    LOADED = 'loaded',
    FAILED = 'failed',
}
export enum SortBy {
    PRICE = 'price',
    RANGE = 'range'
}


export type TLoadingStatus = LoadingStatus.LOADING | LoadingStatus.LOADED | LoadingStatus.FAILED;
export type TSortBy = SortBy.PRICE | SortBy.RANGE

export interface IVehiclesList extends Array<IVehicleData>{}

