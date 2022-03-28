import React, { useState } from "react";
type IOption = {
    value: string;
    id: number;
};
interface IDropdown {
    options: Array<IOption>;
    selected: string;
    setSelected: (id: number) => void;
}
const Dropdown = ({ options, selected, setSelected }: IDropdown) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="w-56 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(true)}
                >
                    <label>{selected}</label>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none " + (isOpen ? 'block' : 'hidden')}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
            >
                {options?.length > 0 &&
                options.map((option: IOption) => {
                    return (
                        <div key={option.id}>
                            <div className="py-1" role="none">
                                <button
                                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                    onClick={() => {
                                        setSelected(option.id);
                                        setIsOpen(false);
                                    }}
                                >
                                    {option.value}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Dropdown;
