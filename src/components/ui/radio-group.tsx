"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  className?: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps {
  value: string
  id: string
  className?: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, id, ...props }, ref) => {
    return (
      <input
        type="radio"
        value={value}
        id={id}
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem } 