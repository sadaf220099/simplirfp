import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Input = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + query);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-[#EBF4F1] shadow rounded-3xl text-black p-3 w-full max-w-md  mx-auto "
    >
      <input
        type="text"
        placeholder="Find your next contract now"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none px-3 text-black"
      />
      <Icon icon="material-symbols-light:search" width="24" height="24" />
    </form>
  );
};

export default Input;
