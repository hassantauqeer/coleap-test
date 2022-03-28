import React from "react";
import {IModalProps} from '../../types/vehicles';

export const Modal = ({  price, make, model, colors, range, photo, onClose }: IModalProps) => (
    <>
        <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
          &#8203;
        </span>
                <div className="relative inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                    className="text-lg leading-6 font-medium text-gray-900 "
                                    id="modal-title"
                                >
                                    {`${make} - ${model}`}
                                </h3>
                                <div className="max-h-96 overflow-hidden pt-4 rounded-sm">
                                    <img className="block h-full cover w-full" src={photo} />
                                </div>
                            </div>
                        </div>
                        <ul className="list-inside px-4 text-sm text-gray-500 mt-6">
                            <li>Available colors: <span>{colors.map((color: string) => <b key={color}>{color}, </b>)}</span></li>
                            <li>Range: {`${range.distance} - ${range.unit}`}</li>
                            <li>Price: {price}</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
                        <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
);


export default Modal;
