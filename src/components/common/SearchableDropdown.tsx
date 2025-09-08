"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Option = {
  value: string
  label: string
}

interface SearchableDropdownProps {
  options: Option[]
  placeholder?: string
  emptyMessage?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  placeholder = "Select...",
  emptyMessage = "No results found.",
  value,
  onChange,
  className,
}) => {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  )

  const selectedLabel = options.find((option) => option.value === value)?.label || placeholder

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[220px] justify-between text-left font-normal focus:ring-2 focus:ring-gray-400 transition-all",
            className
          )}
        >
          {selectedLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput
            placeholder="Search..."
            value={query}
            onValueChange={(text) => setQuery(text)}
            className="outline-none"
          />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    setQuery("")
                  }}
                  className={cn(
                    "rounded px-2 py-1 text-sm cursor-pointer",
                    "focus:outline-none focus:ring-2 focus:ring-primary"
                  )}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
