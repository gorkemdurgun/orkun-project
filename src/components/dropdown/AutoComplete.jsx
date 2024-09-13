import React, { useEffect, useRef, useState } from "react";
import { Button, FormControl, FormGroup, FormLabel, InputGroup, ListGroup } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { PiCaretDown, PiCheckBold } from "react-icons/pi";
import "../../styles/AutocompleteInput.css";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const AutocompleteInput = ({
  disabled = false,
  label,
  placeholder = "Seçiniz",
  emptyMessage = "Sonuç bulunamadı",
  options,
  value = "",
  onChangeKey = (selectedKey) => {},
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(value);
  const [filteredSuggestions, setFilteredSuggestions] = useState(options);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setInputValue(options.find((option) => option.key === value)?.label || "");
    setSelected(value);
  }, [value, options]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    if (userInput.length > 0) {
      const filtered = options.filter((suggestion) => suggestion.label.toLowerCase().includes(userInput.toLowerCase()));
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(options);
      setShowSuggestions(false);
    }

    if (userInput.length === 0) {
      onChangeKey("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.label);
    setSelected(suggestion.key);
    onChangeKey(suggestion.key);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSuggestions) {
      setFilteredSuggestions(options);
    }
  }, [showSuggestions, options]);

  return (
    <div className="autocomplete-wrapper position-relative">
      <FormGroup>
        {label && (
          <FormLabel>
            <h5 className="text-start fs-6">{label}</h5>
          </FormLabel>
        )}
        <InputGroup>
          <FormControl
            role="combobox"
            type="text"
            className="autocomplete-input bg-light border-0 outline-none"
            style={{
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? "not-allowed" : "text",
            }}
            disabled={disabled}
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            onFocus={() => setShowSuggestions(true)}
          />
          <InputGroupText>
            <PiCaretDown
              style={{
                transition: "transform 0.3s",
                transform: showSuggestions ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </InputGroupText>
        </InputGroup>
      </FormGroup>
      <CSSTransition in={showSuggestions} timeout={300} classNames="dropdown" unmountOnExit>
        <ListGroup className="autocomplete-dropdown z-3 position-absolute top-100 start-0 w-100">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <ListGroup.Item
                key={index}
                aria-selected={suggestion.key === selected}
                className="autocomplete-item"
                disabled={suggestion.key === selected}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Button
                  variant="ghost"
                  className={`autocomplete-item-button w-100 d-flex align-items-center justify-content-between text-start`}
                >
                  {suggestion.label}
                  {suggestion.key === selected && <PiCheckBold />}
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>{emptyMessage}</ListGroup.Item>
          )}
        </ListGroup>
      </CSSTransition>
    </div>
  );
};

export default AutocompleteInput;
