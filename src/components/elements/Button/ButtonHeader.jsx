import React, { useState } from "react";
import { ArrowLeft, Filter, Search } from "lucide-react";
import SearchFlightModal from "../Modals/SearchFlightModal";
import DateFilterModal from "../Modals/DateFilterModal";

const ButtonHeader = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedFlightNumber, setSelectedFlightNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(false);
  };

  const handleModalClose = () => {
    setIsSearchModalOpen(false);
    setIsDateModalOpen(false);
  };

  const handleFlightNumberSelect = (flightNumber) => {
    setSelectedFlightNumber(flightNumber);
    setIsSearchModalOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleDateModal = () => {
    setIsDateModalOpen(true);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row w-full gap-4 md:gap-3">
      <button className="flex gap-8 bg-[#A06ECE] text-white rounded-[12px] p-5 w-full">
        <ArrowLeft />
        Beranda
      </button>

      <div className="flex gap-3 py-3 justify-end">
        <button
          onClick={() => setIsDateModalOpen(true)}
          className="border-2 border-[#7126B5] rounded-2xl h-8 px-4 flex items-center gap-2"
        >
          <Filter color="#8A8A8A" size={20} strokeWidth={1.7} />
          <span className="text-sm">Filter</span>
        </button>

        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="flex items-center"
        >
          <Search size={32} color="#7126B5" strokeWidth={2.2} />
        </button>
      </div>

      <SearchFlightModal
        isOpen={isSearchModalOpen}
        onClose={handleModalClose}
        onSelect={handleFlightNumberSelect}
      />

      <DateFilterModal
        isOpen={isDateModalOpen}
        onClose={handleModalClose}
        onSelect={handleDateSelect}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default ButtonHeader;