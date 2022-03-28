import {API_URL} from "../configs/API";
import {IVehiclesList} from '../types/vehicles';

export const fetchVehicles = (): Promise<IVehiclesList> => {
    return new Promise((resolve, reject) => {
        fetch(API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    resolve(result)
                },
                (error) => {
                    reject(error);
                }
            )

    })
}
