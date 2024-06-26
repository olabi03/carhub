'use client';

import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import React from "react";

interface SearchManufacturerProps {
  selected: string;
  setSelected: (value: string) => void;
}

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({
  selected,
  setSelected,
}) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input text-primary"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 w-full bg-primary border shadow-lg max-h-60 py-1 text-base ring-1 ring-gray-700 rounded-md ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className="search-manufacturer__option">
                  No Results
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `
                      relative search-manufacturer__option
                      ${active ? "bg-primary-blue text-white" : "text-primary"}
                    `}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`}>
                            ✔
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
