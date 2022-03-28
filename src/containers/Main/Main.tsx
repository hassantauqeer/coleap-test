import React, {useEffect, Fragment, useState} from 'react';
import {fetchVehicles} from '../../services/API'
import {GridItem, GridView} from '../../components/Grid'
import Modal from '../../components/Modal'
import {IVehiclesList, LoadingStatus, IGridItem, SortBy, TLoadingStatus, TSortBy} from '../../types/vehicles'

const Main = () => {
    const [loadingStatus, setLoadingStatus] = useState<TLoadingStatus>(LoadingStatus.LOADING);
    const [vehicles, setVehicles] = useState<IVehiclesList>([]);
    const [sortBy, setSortBy] = useState<TSortBy>(SortBy.PRICE);

    useEffect(() => {
        loadVehicleData();
    }, [])

    const loadVehicleData = async () => {
        try {
            const response = await fetchVehicles()
            setVehicles(response)
            setLoadingStatus(LoadingStatus.LOADED)
        }
        catch(e) {
            setLoadingStatus(LoadingStatus.FAILED)
        }
    }

    const sorterer = ( a: any, b: any ) => {
        let x, y;
        if(sortBy === SortBy.RANGE) {
            x = a.range.distance;
            y = b.range.distance;
        }
        else if(sortBy === SortBy.PRICE) {
            x = a.price.split(' ')[0];
            y = b.price.split(' ')[0];
        }
        if(x) {
            x = parseInt(x)
        }
        if(y) {
            y = parseInt(y)
        }
        console.log(x,y)
        if ( x < y ){
            return -1;
        }
        if ( x > y ){
            return 1;
        }
        return 0;
    }

    if(loadingStatus === LoadingStatus.FAILED) {
        return <div>Failed to load</div>
    }
    else if(loadingStatus === LoadingStatus.LOADING) {
        return <div>Loading...</div>
    }
    return (
        <div>
            Sort by:
            <button className="p-2 m-2" onClick={() => setSortBy(SortBy.PRICE)}>Price</button>
            <button className="p-2 m-2" onClick={() => setSortBy(SortBy.RANGE)}>Range</button>
            <span>(Lowest to highest)</span>

            <GridView>
                {vehicles.sort(sorterer).map((vehicle) => <WrappedWithModal key={vehicle.id} {...vehicle} />)}
            </GridView>
        </div>
    )
}
const WrappedWithModal = ({...vehicle}: IGridItem) => {
    const [isOpen, toggleOpen] = useState(false);
    return (
        <Fragment>
            {
                isOpen && <Modal {...vehicle} onClose={() => toggleOpen(false)} />
            }
            <GridItem onClick={() => toggleOpen(true)} key={vehicle.id} {...vehicle} />
        </Fragment>
    )
}

export default Main;
