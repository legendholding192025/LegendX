"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  className?: string
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(props.value)

    const handleValueChange = (newValue: string) => {
      setValue(newValue)
      props.onValueChange(newValue)
      setOpen(false)
    }

    return (
      <div className={cn("relative", className)} ref={ref}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          {value}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </button>
        {open && (
          <div className="absolute top-full z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
            {children}
          </div>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, children, value, onClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
)
SelectItem.displayName = "SelectItem"

const SelectValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("block truncate", className)}
      {...props}
    />
  )
)
SelectValue.displayName = "SelectValue"

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } 