import { Button } from "@/components/ui/button";
import {
    Search,
    Check,
    Eye,
    Star,
    User,
    Newspaper,
    Filter,
    Bell,
    X,
} from "lucide-react";
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
import { RecentActivityTable } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { CardTitle } from "@/components/ui/card";
import RadioButton from "@/components/ui/Radiobutton";
import DatePicker from '@/components/ui/DatePicker';
import { Checkbox } from "@/components/ui/checkbox";


export default function Activities() {
  const [showFilter, setShowFilter] = useState(false)
    return (
         <div className="flex gap-2 flex-col">
            <h1 className="text-2xl font-bold text-[var(--text-head)]">Recent Activities</h1>
             <Button
        variant="border"
        onClick={() => setShowFilter(true)}
        className="flex items-center gap-2 self-end"
      >
        <Filter className="h-4 w-4" />
        {showFilter ? "Hide Filters" : "Show Filters"}
      </Button>

      {showFilter && <AdvanceFilter onClose={() => setShowFilter(false)} />}

            <ActivityTable />
        </div>
    )
}


interface FilterProps {
  onClose: () => void;
}


function AdvanceFilter({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Date Range");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // Do nothing if clicking inside modal
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }

      // Do nothing if clicking inside dropdown (Radix renders it in a portal)
      const target = e.target as HTMLElement;
      if (target.closest("[data-radix-popper-content-wrapper]")) {
        return;
      }

      onClose(); // Close modal otherwise
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const [entitytype, setEntity] = useState("Coach");
  const [act, setAct] = useState("Update");
  const [status, setStatus] = useState("Pending");

  const tabList = [
    "Date Range",
    "Entity Type",
    "Activity Type",
    "Status",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">

      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-sm bg-[var(--background)] "
      >
        <div className="flex items-center justify-between mb-0 pb-4 p-6 min-w-full border-b-1">
          <CardTitle className="text-2xl font-semibold text-[var(--text-head)]">Filters</CardTitle>
          <Button
            variant="link"
            className="text-sm text-[var(--brand-color)] p-0 h-auto block hover:no-underline hover:cursor-pointer"
          >
            Clear All
          </Button>
        </div>
        {/* Sidebar */}
        <div className="flex ">
          <div className="overflow-y-auto min-w-[180px] border-r-1 h-[360px]">

            <div className="flex flex-col ">
              {tabList.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left text-sm px-3 py-3 border-l-3  ${activeTab === tab
                    ? "bg-[var(--brand-color3)] dark:bg-[var(--brand-color2)] text-[var(--brand-color)] dark:text-[var(--text-head)] font-semibold border-[var(--brand-color)]"
                    : "text-[var(--text)] hover:bg-[var(--faded)] border-transparent"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}

          <div className="p-6 overflow-y-auto relative w-full">

            {activeTab === "Entity Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Entity Type:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Coach",
                    "Explorer",
                    "School",
                    "Finance",
                    "Support",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={entitytype}
                      onChange={setEntity}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Activity Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Activity Type:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Update",
                    "Payment",
                    "Report",
                    "Resource",
                    "Session"
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={act}
                      onChange={setAct}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select from Status:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)]  ">
                  {[
                    "Pending",
                    "Completed",
                    "Flagged",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={status}
                      onChange={setStatus}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Last Activity" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">Enter the Data Range:</label>
                <div className="mt-4 min-w-full">
                  <DatePicker />
                </div>
              </>
            )}

            {/* Footer */}
          </div>
        </div>
        <div className="relative bottom-0 right-0 w-full px-6 py-4 flex border-t-1 justify-end gap-2">
          <div className="flex gap-4 absolute left-[50%] -translate-x-[50%]">
            <Button variant="border" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="brand" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



function ActivityTable() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "ascending" | "descending";
    } | null>(null);
    // Sorting logic
    const sortedData = [...RecentActivityTable];
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
    }
     const toggleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };
    
  const toggleSelectAll = () => {
    if (selectedUsers.length === currentRecords.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(
        currentRecords.map((user): string => user.id)
      );
    }
  };


    return (
        <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex items-center justify-between border-b  h-20 p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4  gap-2">
            <div className="flex items-center gap-2 border-none shadow-none">
              <Checkbox
                id="select-all"
                checked={selectedUsers.length === currentRecords.length && currentRecords.length > 0}
                onCheckedChange={toggleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                Select All
              </label>
              {selectedUsers.length > 0 && (
                <Badge variant="border" className="ml-2 ">
                  {selectedUsers.length} selected
                </Badge>
              )}
            </div>

            {selectedUsers.length > 0 && (
              <div className="flex gap-2">        {/*wrap */}
                <Button variant="border" size="sm">
                  <Bell className="h-4 w-4" />
                  Send Reminder
                </Button>
                <Button variant="border" size="sm">
                  <Check className=" h-4 w-4 text-[var(--green)]" />
                  Approve All
                </Button>
                <Button variant="delete" size="sm">
                  <X className=" h-4 w-4 text-[var(--red)]" />
                  Block / Remove
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-end items-center gap-4 ">

            <div className="flex justify-around items-center border-1 rounded-sm overflow-hidden bg-[var(--faded)]">
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
                                <TableHead className="min-w-[40px]"></TableHead>
                                <TableHead onClick={() => requestSort("dateTime")} className="cursor-pointer text-[var(--text)]">
                                    Date & Time {sortConfig?.key === "dateTime" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("activityType")} className="cursor-pointer text-[var(--text)]">
                                    Activity Type {sortConfig?.key === "activityType" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("entity")} className="cursor-pointer text-[var(--text)]">
                                    Entity {sortConfig?.key === "entity" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("description")} className="cursor-pointer text-[var(--text)]">
                                    Description {sortConfig?.key === "description" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead className="text-[var(--text)]">Actionable</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="overflow-visible relative z-0">
                            {currentRecords.map((user) => (
                                <TableRow
                                    key={user.id}
                                    data-id={user.id}
                                    className={cn(
                                        "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                                    )}
                                >
                                <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                     )}
                  >
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleSelectUser(user.id)}
                    />
                    </TableCell>
                                    <TableCell className="font-medium">{user.dateTime}</TableCell>
                                    <TableCell>{user.activityType}</TableCell>
                                    <TableCell><Badge variant="standard">{user.entity}</Badge></TableCell>
                                    <TableCell>{user.description}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                            >
                                                <Eye className="h-4 w-3" />
                                                <span className="sr-only">View</span>
                                            </Button>
                                            <Button variant="noborder" size="sm" >
                                                <Check className="h-4 w-3 text-[var(--green)]" />
                                                <span className="sr-only">Varify</span>
                                            </Button>

                                            <Button variant="noborder" size="sm">
                                                <Star className="h-4 w-3" />
                                                <span className="sr-only">Review</span>
                                            </Button>
                                            <Button variant="noborder" size="sm">
                                                <User className="h-4 w-3" />
                                                <span className="sr-only">Assign</span>
                                            </Button>
                                            <Button variant="noborder" size="sm">
                                                <Newspaper className="h-4 w-3 " />
                                                <span className="sr-only">Followups</span>
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
                                {[10, 25, 50, 100].map((size) => (
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
                        <span className="text-low text-[var(--text)]">
                            Showing {indexOfFirstRecord + 1}-
                            {Math.min(indexOfLastRecord, sortedData.length)} of{" "}
                            {sortedData.length} explorers
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
                                className={`h-8 w-8 p-0 ${page === currentPage ? "text-white" : "text-[var(--text)]"}`}
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
