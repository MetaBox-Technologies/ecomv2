import { useState, useRef } from "react";
import { Search, X, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandingSearchBarProps {
  icon?: LucideIcon;
}

const ExpandingSearchBar = ({ icon: Icon = Search }: ExpandingSearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    setIsExpanded(true);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "relative flex items-center h-10 rounded-full transition-all duration-500 ease-out ml-auto",
        isExpanded || isFocused
          ? "w-60 bg-search-expanded shadow-search-glow"
          : "w-0 bg-transparent"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isFocused && setIsExpanded(false)}
    >
      {/* Clear Button */}
      {searchValue && (isExpanded || isFocused) && (
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            handleClear();
          }}
          className="absolute left-2 p-1 rounded-full text-search-icon hover:text-search-icon-active hover:bg-search-clear-hover transition-colors duration-200 z-20"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Input Field */}
      <input
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          if (!searchValue) setIsExpanded(false);
        }}
        placeholder="Search..."
        className={cn(
          "w-full h-full bg-transparent pl-8 pr-11 text-search-text placeholder:text-search-placeholder outline-none transition-opacity duration-300 relative z-10",
          isExpanded || isFocused ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Search Icon */}
      <button
        onClick={handleIconClick}
        className={cn(
          "absolute right-3 flex items-center justify-center transition-all duration-300 cursor-pointer",
          isExpanded || isFocused ? "text-search-icon-active" : "text-search-icon"
        )}
      >
        <Icon className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Animated Border */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border transition-all duration-500 pointer-events-none",
          isExpanded || isFocused
            ? "border-search-border-active opacity-100"
            : "border-transparent opacity-0"
        )}
      />
    </div>
  );
};

export default ExpandingSearchBar;
