import React from 'react';
import { CloseSVG } from '@/assets/images';

interface InputFieldProps {
    searchBarValue: string;
    setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    onEnter: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ searchBarValue, setSearchBarValue, placeholder, onEnter }) => {
    return (
        <div className="flex items-center h-[40px] border-2 border-solid deep_purple_700_pink_400_01_border">
            {/* Prefix */}
            <div className="py-[8px] w-[50px] h-full bg-[#8A8A8A] flex justify-center items-center">
                <h5 className="text-md text-white-A700 text-center">All</h5>
            </div>

            {/* Input */}
            <input
                name="search"
                placeholder={placeholder}
                value={searchBarValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchBarValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter();
                    }
                }}
                className="flex-grow px-2 text-white-A700 border-none outline-none bg-transparent focus:ring-0 focus:border-none"
            />



            {/* Suffix */}
            {searchBarValue.length > 0 ? (
                <CloseSVG
                    onClick={() => setSearchBarValue('')}
                    height={24}
                    width={24}
                    fillColor="#b0b9beff"
                    className="cursor-pointer mx-2"
                />
            ) : null}

            <div className="bg-gradient1 w-10 h-full p-2 flex justify-center items-center">
                <img src="/images/icons/search.svg" alt="icon" />
            </div>
        </div>
    );
};

export default InputField;
