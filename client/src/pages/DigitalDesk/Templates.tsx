import { Button } from "@/components/ui/button";
import { Plus, Funnel, Search, Upload, Tags, Eye } from "lucide-react";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Trash, Edit, Bookmark } from "lucide-react";
import { TemplateTableData } from "@/data/Data";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function Template() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Manage Templates
        </h1>

        <Buttonbar />
        <Templates />
      </div>
    </div>
  );
}

function Buttonbar() {
  return (
    <div className="flex flex-wrap justify-between gap-4 px-4 py-3 bg-[var(--background)] rounded-sm border shadow-none">
      {/* Left-aligned buttons */}
      <div className="flex flex-wrap gap-4">
        {/* Create Templates */}
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span>Create Templates</span>
        </Button>

        {/* Assign to Section (Dropdown) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="standard" size="new">
              <Bookmark className="h-3 w-3" />
              <span>AI Writer</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* Dropdown content would go here */}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Manage Tags & Categories */}
        <Button variant="standard" size="new">
          <Tags className="h-3 w-3" />
          <span>Manage Categories</span>
        </Button>
      </div>

      {/* Right-aligned buttons */}
      <div className="flex flex-wrap gap-4">
        {/* Export Video Analytics */}
        <Button variant="standard" size="new">
          <Upload className="h-3 w-3" />
          <span>Template Requests (from Team)</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="standard" size="new">
              <Funnel className="h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
}

function Templates() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedCoachStack, setSelectedCoachStack] = useState<
    typeof TemplateTableData
  >(TemplateTableData[0] ? [TemplateTableData[0]] : []);
  const [focusedCoachId, setFocusedCoachId] = useState<string | null>(
    TemplateTableData[0]?.id || null
  );

  const sortedData = [...TemplateTableData];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(sortedData.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const bringToTop = (userId: string) => {
    const coach = selectedCoachStack.find((c) => c.id === userId);
    if (coach) {
      setSelectedCoachStack((prev) => [
        coach,
        ...prev.filter((c) => c.id !== userId),
      ]);
      setFocusedCoachId(userId);
    }
  };

  useEffect(() => {
    const allRows = document.querySelectorAll("tr[data-id]");

    allRows.forEach((row) => {
      const id = row.getAttribute("data-id");
      const isInStack = selectedCoachStack.some((coach) => coach.id === id);
      const isTop = focusedCoachId === id;

      // Remove previous styles
      row.classList.remove(
        "bg-[var(--brand-color3)]",
        "border-l-[var(--brand-color)]"
      );

      if (isInStack) {
        row.classList.add("bg-[var(--brand-color3)]");

        if (isTop) {
          row.classList.add("border-l-[var(--brand-color)]");
        }
      }
    });
  }, [selectedCoachStack, focusedCoachId]);

  const handleRowClick = (template: (typeof TemplateTableData)[0]) => {
    const exists = selectedCoachStack.find((c) => c.id === template.id);
    if (!exists) {
      setSelectedCoachStack((prev) => {
        const updated = [template, ...prev];
        return updated.slice(0, 5); // limit to 5
      });
      setFocusedCoachId(template.id);
    } else {
      bringToTop(template.id);
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex items-center justify-between border-b p-4 mt-auto">
          <div className="flex justify-end items-center gap-4 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="border"
                  size="sm"
                  className="flex items-center gap-2 text-low text-[var(--text-head)]"
                >
                  {recordsPerPage}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-[var(--text] dark:bg-[var(--background)]">
                {[5, 10, 25, 50, 100].map((size) => (
                  <DropdownMenuItem
                    key={size}
                    onClick={() => {
                      setRecordsPerPage(size);
                      setCurrentPage(1);
                    }}
                    className="text-[var(--text)] focus:bg-[var(--faded)]"
                  >
                    {size}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex justify-around items-center border-1 rounded-md overflow-hidden bg-[var(--faded)]">
              <Input
                placeholder="Search"
                className="border-none focus:ring-0 focus-visible:ring-0 focus:outline-none px-2 py-1 w-40 sm:w-45"
              />
              <Button
                type="submit"
                size="icon"
                variant="standard"
                className="rounded-none rounded-r-md bg-[var(--button)]"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-[var(--text)]" />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto text-[var(--text)] w-full px-0 mx-0 text-low">
          <Table className="w-full caption-top border-collapse overflow-y-visible">
            <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
              <TableRow>
                <TableHead
                  onClick={() => requestSort("name")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Template Name{" "}
                  {sortConfig?.key === "name" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("channel")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Channel{" "}
                  {sortConfig?.key === "channel" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("type")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Type{" "}
                  {sortConfig?.key === "type" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("status")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Status{" "}
                  {sortConfig?.key === "status" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("metaStatus")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Meta Status{" "}
                  {sortConfig?.key === "metaStatus" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((template) => (
                <TableRow
                  key={template.id}
                  data-id={template.id}
                  className={cn(
                    "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                    selectedCoachStack.some((c) => c.id === template.id)
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => handleRowClick(template)}
                >
                  <TableCell
                    className={cn(
                      "pl-4 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                      selectedCoachStack.some((c) => c.id === template.id)
                        ? focusedCoachId === template.id
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                        : "border-transparent"
                    )}
                  >
                    <div className="font-medium">{template.name}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{template.channel}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{template.type}</div>
                  </TableCell>
                  <TableCell>
                    <Badge>{template.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge>{template.metaStatus}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 p-4">
          <div className="flex items-center gap-4">
            <span className="text-low text-[var(--text)]">
              Showing {indexOfFirstRecord + 1}-
              {Math.min(indexOfLastRecord, sortedData.length)} of{" "}
              {sortedData.length} templates
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <Button
              variant="border"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "brand" : "border"}
                size="sm"
                className={`h-8 w-8 p-0 ${
                  page === currentPage ? "text-white" : "text-[var(--text)]"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="border"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
