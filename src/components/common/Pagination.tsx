"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const prevDisabled = currentPage === 1
  const nextDisabled = currentPage === totalPages || totalPages === 0

  return (
    <nav className="flex justify-center items-center gap-2 mt-6">
      <Button
        variant="outline"
        size="sm"
        disabled={prevDisabled}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeft className="w-4 h-4" />
      </Button>

      <span className="text-sm font-medium">
        Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
      </span>

      <Button
        variant="outline"
        size="sm"
        disabled={nextDisabled}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRight className="w-4 h-4" />
      </Button>
    </nav>
  )
}
