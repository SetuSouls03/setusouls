import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const AddressInput = ({ value = "", onSelect, onChange }) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setQuery(value); // update local input if form state changes externally
  }, [value]);

  const fetchSuggestions = async (searchText) => {
    if (!searchText) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(searchText)}&limit=5`
      );
      const data = await response.json();

      const results = data.features
        .filter((feature) => feature.properties?.name)
        .map((feature) => {
          const props = feature.properties;

          const label = [
            props.name,
            props.street,
            props.city,
            props.county,
            props.state,
            props.country,
          ]
            .filter(Boolean)
            .join(", ");

          return {
            label,
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
          };
        });

      setSuggestions(results);
      setShowDropdown(true);
    } catch (err) {
      console.error("Photon fetch error:", err);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchSuggestions, 400), []);

  useEffect(() => {
    debouncedFetch(query);
    if (onChange) {
      onChange(query); // let parent track manual input too
    }
  }, [query]);

  const handleSelect = (item) => {
    setQuery(item.label);
    setShowDropdown(false);
    if (onSelect) onSelect(item);
    if (onChange) onChange(item.label); // update parent value too
  };

  return (
    <>
      <style>
        {`
          .photon-container {
            position: relative;
            width: 100%;
          }

          .photon-container input {
            width: 100%;
            padding: 16px;
            font-size: 16px;
            border-radius: 15px;
            border: none;
            outline: none;
            height: 3.5rem;
            transition: border-color 0.3s ease;
          }

          .photon-container input:focus {
            border-color: #f8b500;
            box-shadow: 0 0 10px rgba(248, 181, 0, 0.6);
            background-color: #fff;
          }

          .photon-dropdown {
            position: absolute;
            top: 100%;
            width: 100%;
            background: #fff;
            border: 1px solid #ccc;
            max-height: 220px;
            overflow-y: auto;
            z-index: 9999;
            border-radius: 0 0 5px 5px;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          }

          .photon-dropdown li {
            padding: 12px;
            cursor: pointer;
            list-style: none;
            font-size: 15px;
          }

          .photon-dropdown li:hover {
            background-color: #f0f0f0;
          }
        `}
      </style>

      <div className="photon-container">
        <input
          type="text"
          placeholder="Search address"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          required
        />

        {showDropdown && suggestions.length > 0 && (
          <ul className="photon-dropdown">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddressInput;
