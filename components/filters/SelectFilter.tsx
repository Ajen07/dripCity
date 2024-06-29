import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const SelectFilter = () => {
  return (
    <div className="flex items-center space-x-2">
    <Checkbox id="terms2" />
    <label
      htmlFor="terms2"
      className="md:text-lg font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Women
    </label>
  </div>
  )
}
export default SelectFilter

