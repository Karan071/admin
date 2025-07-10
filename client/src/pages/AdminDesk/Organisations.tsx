import { Building2, UserCheck, Globe, Clock, Link, MessageSquare, Phone, CircleArrowUp ,CircleArrowDown, Mail, MessageCircle, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, ChevronRight, ChevronLeft, Flag, Eye} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { orgTableData } from "@/data/Data";

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import photo from "@/assets/asset.jpg"


const color = "text-[var(--brand-gray3)]";
const Up = <CircleArrowUp className="text-[var(--brand-green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--brand-red)] h-4" />;
const orgStats = [
    {
        title: "Total Organisations",
        value: "1438",
        icon: Building2,
        performance: Up,
    },
    {
        title: "Claimed Profiles",
        value: "456",
        icon: UserCheck,
        performance: Down,
    },
    {
        title: "Public (Unclaimed)",
        value: "982",
        icon: Globe,
        performance: Up,
    },
    {
        title: "Pending Approvals",
        value: "12",
        icon: Clock,
        performance: Up,
    },
    {
        title: "Coaches Linked to Orgs",
        value: "182",
        icon: Link,
        performance: Up,
    },
    {
        title: "Sessions via Orgs",
        value: "720+",
        icon: MessageSquare,
        performance: Up,
    }
];

export default function Organisation() {
    const [showFilter, setShowFilter] = useState(false);

    return <div className="p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">Organisation Dashboard</h1>
        </div>
        <div>
            <div>
                <OrgCard />
                {showFilter && <OrgFilter />}
                <div className="flex justify-end mt-4 p-4">
                    <Button
                        variant="border"
                        onClick={() => setShowFilter(!showFilter)}
                        className="flex items-center gap-2"
                    >
                        <Filter className="h-4 w-4" />
                        {showFilter ? "Hide Filters" : "Show Filters"}
                    </Button>
                </div>
                <OrganisationTable />
            </div>
        </div>
    </div>
}

function OrgCard() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orgStats.map((stat, index) => (
                <Card key={index} className="xl:rounded-sm shadow-none">
                <CardHeader className="flex-col items-center px-4 gap-4 py-0 h-full">
                    <div className="flex justify-between h-full items-center">
                        <div
                        className={`${color} text-xs uppercase text-light line-clamp-1`}
                        >
                        {stat.title}
                        </div>
                        {stat.performance}
                    </div>
                    <div className="flex  items-center gap-4">
                        <div className={`rounded-full `}>
                            <stat.icon className={`h-8 w-8 ${color}`} />
                        </div>
                        <div className={`${color} text-2xl`}>{stat.value}</div>
                    </div>
                </CardHeader>
            </Card>
            ))}
        </div>
    )
}

function OrgFilter() {
    return (
        <div className="py-4">
            <Card className="mt-8 shadow-none">
                <CardHeader>
                    <CardTitle className="text-lg text-[var(--brand-gray)]">Filters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-[var(--brand-gray4)]">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name / Email / Phone</label>
                            <Input placeholder="Search by name, email or phone" className="mt-2" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Type</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="School" />
                                    <label htmlFor="School" className="text-sm">
                                        School
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="Institute" />
                                    <label htmlFor="Institute" className="text-sm">
                                        Institute
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="College" />
                                    <label htmlFor="College" className="text-sm">
                                        College
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="University" />
                                    <label htmlFor="University" className="text-sm">
                                        University
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="NGO" />
                                    <label htmlFor="NGO" className="text-sm">
                                        NGO
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="Corporation" />
                                    <label htmlFor="Corporation" className="text-sm">
                                        Corporation
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Claim Status</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="claimed" />
                                    <label htmlFor="claimed" className="text-sm">
                                        Claimed
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="public" />
                                    <label htmlFor="public" className="text-sm">
                                        Public(Unclaimed)
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="pending" />
                                    <label htmlFor="pending" className="text-sm">
                                        Pending
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="pendingApproval" />
                                    <label htmlFor="pendingApproval" className="text-sm">
                                        Pending Approval
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Affiliated Coaches</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="yes" />
                                    <label htmlFor="yes" className="text-sm">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="no" />
                                    <label htmlFor="no" className="text-sm">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Session Conducted</label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="0" />
                                    <label htmlFor="0" className="text-sm">
                                        0
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="1-10" />
                                    <label htmlFor="1-10" className="text-sm">
                                        1-10
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="10+" />
                                    <label htmlFor="10+" className="text-sm">
                                        10+
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-2">
                            <label className="text-sm font-medium">State / City</label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between mt-2">
                                        <span>Select location</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[200px]">
                                    <DropdownMenuItem>Delhi</DropdownMenuItem>
                                    <DropdownMenuItem>Mumbai</DropdownMenuItem>
                                    <DropdownMenuItem>Bangalore</DropdownMenuItem>
                                    <DropdownMenuItem>Chennai</DropdownMenuItem>
                                    <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Activity</label>
                            <div className="">
                                <DatePickerWithRange />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-2 ">
                        <Button variant="border">Reset</Button>
                        <Button variant="brand">Apply Filters</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}



interface DatePickerWithRangeProps {
  className?: string
  value?: DateRange
  onChange?: (date: DateRange | undefined) => void
}

function DatePickerWithRange({
  className,
  value,
  onChange,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    value || {
      from: new Date(),
      to: addDays(new Date(), 7),
    }
  )

  React.useEffect(() => {
    if (value !== undefined) {
      setDate(value)
    }
  }, [value])

  const handleSelect = (newDate: DateRange | undefined) => {
    setDate(newDate)
    onChange?.(newDate)
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-background" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={1}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}



function OrganisationTable() {
    const [currentPage, setCurrentPage] = useState(1);
      const [recordsPerPage, setRecordsPerPage] = useState(5);
      const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "ascending" | "descending";
      } | null>(null);
      const [selectedCoachStack, setSelectedCoachStack] = useState<
        typeof orgTableData
      >(orgTableData[0] ? [orgTableData[0]] : []);
      const [focusedCoachId, setFocusedCoachId] = useState<number | null>( orgTableData[0]?.id || null);
    
      // Sorting logic
      const sortedData = [...orgTableData];
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
    
      // const toggleSelectAll = () => {
      //   if (selectedUsers.length === currentRecords.length) {
      //     setSelectedUsers([]);
      //   } else {
      //     setSelectedUsers(
      //       currentRecords.map((user): string => user.id.toString())
      //     );
      //   }
      // };
    
      const bringToTop = (userId: number) => {
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
        const id = Number(row.getAttribute("data-id"));
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
    
      const removeCoach = (userId: number) => {
        setSelectedCoachStack((prev) => prev.filter((c) => c.id !== userId));
        if (focusedCoachId === userId) {
          setFocusedCoachId(null);
        }
      };
    
      const handleRowClick = (user: (typeof orgTableData)[0]) => {
        // Double-click detected
        const exists = selectedCoachStack.find((c) => c.id === user.id);
        if (!exists) {
          setSelectedCoachStack((prev) => {
            const updated = [user, ...prev];
            return updated.slice(0, 5); // limit to 5
          });
          setFocusedCoachId(user.id);
        } else {
          bringToTop(user.id);
        }
      };
    
      // const toggleSelectUser = (userId: string) => {
      //   if (selectedUsers.includes(userId)) {
      //     setSelectedUsers(selectedUsers.filter((id) => id !== userId));
      //   } else {
      //     setSelectedUsers([...selectedUsers, userId]);
      //   }
      // };
    
      return (
        <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
          <div className="flex-1 rounded-md border bg-white overflow-x-auto xl:min-w-auto min-w-full">
            <div className="flex items-center justify-between border-b p-4 mt-auto">
              
              <div className="flex justify-end items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="border"
                      size="sm"
                      className="flex items-center gap-2 text-sm text-[var(--brand-gray)]"
                    >
                      {recordsPerPage}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-[var(--brand-gray)]">
                    {[5, 10, 25, 50, 100].map((size) => (
                      <DropdownMenuItem
                        key={size}
                        onClick={() => {
                          setRecordsPerPage(size);
                          setCurrentPage(1);
                        }}
                        className="text-[var(--brand-gray)]"
                      >
                        {size}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex justify-around items-center border-1 rounded-md overflow-hidden bg-white">
                  <Input
                    placeholder="Search"
                    className="border-none focus:ring-0 focus-visible:ring-0 focus:outline-none px-2 py-1 w-40 sm:w-45"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="standard"
                    className="rounded-none rounded-r-md bg-[var(--brand-button)]"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5 text-[var(--brand-gray3)]" />
                  </Button>
                </div>
              </div>
            </div>
    
            <div className="overflow-x-auto text-[var(--brand-gray)]">
              <Table>
                <TableHeader className="bg-[var(--brand-faded)] hover:bg-[var(--brand-faded)]">
                  <TableRow>
                    <TableHead
                      onClick={() => requestSort("profile.name")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Organization{" "}
                      {sortConfig?.key === "profile.name" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("contact.email")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Contact{" "}
                      {sortConfig?.key === "contact.email" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("status")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Location{" "}
                      {sortConfig?.key === "status" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("sessions.total")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Type{" "}
                      {sortConfig?.key === "sessions.total" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("assessments")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Claimed Status{" "}
                      {sortConfig?.key === "assessments" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("orgLinked")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Coaches{" "}
                      {sortConfig?.key === "orgLinked" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("lastActive")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Sessions{" "}
                      {sortConfig?.key === "lastActive" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    <TableHead
                      onClick={() => requestSort("lastActive")}
                      className="cursor-pointer text-[var(--brand-gray)]"
                    >
                      Registered/Last Active{" "}
                      {sortConfig?.key === "lastActive" &&
                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                    
                    <TableHead className="text-[var(--brand-gray)]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentRecords.map((user) => (
                    <TableRow
                        key={user.id}
                        data-id={user.id}
                        className="cursor-pointer hover:bg-[var(--brand-color2)] hover:border-l-4 hover:border-l-[var(--brand-color)] border-l-4 border-transparent"
                        onClick={() => handleRowClick(user)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-full overflow-hidden">
                            <img
                                src={photo}
                                alt={user.name}
                                className="h-14 w-14 object-cover"
                            />
                            </div>
                            <div className="flex justify-start items-center">
                              <div className="font-medium">{user.name}</div>
                            </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{user.contact.email}</div>
                        <div className="text-xs text-[var(--brand-gray2)]">
                          {user.contact.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{`${user.location}`}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="standard">{user.type}</Badge>
                      </TableCell>
                      
                      <TableCell>
                        <div className="text-sm">{user.claimStatus}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{user.coaches}</div>
                      </TableCell>
                      <TableCell>{user.sessions}</TableCell>
                      <TableCell>
                        <div className="text-sm">{user.registered}</div>
                        <div className="text-xs text-[var(--brand-gray2)]">{user.lastActive}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="standard"
                            size="sm"
                            className="bg-white border-0 shadow-none"
                            // onClick={() => navigate(`/user-details/${user.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="outline" size="sm" className="bg-white border-0 shadow-none">
                            <MessageCircle className="h-4 w-4" />
                            <span className="sr-only">Chat</span>
                          </Button>
    
                          <Button variant="outline" size="sm" className="bg-white border-0 shadow-none">
                            <Flag className="h-4 w-4" />
                            <span className="sr-only">Flag</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
    
            <div className="flex items-center justify-between border-t p-4 flex-wrap gap-2">
              <div className="flex items-center gap-4">
                <span className="text-sm text-[var(--brand-gray2)]">
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
                    className={`h-8 w-8 p-0 ${page === currentPage ? "text-white" : "text-[var(--brand-gray4)]"}`}
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
    
    
    
        <div className="xl:block hidden">
          <div className="lg:h-[500px] lg:min-w-100 sticky xl:top-[10px] shadow-none lg:scale-100 min-w-full h-fit">
            <AnimatePresence>
              {selectedCoachStack.map((coach, index) => {
                const isTopCard =
                  coach.id === Number(focusedCoachId) ||
                  (focusedCoachId === null && index === 0);
                const cardIndex = selectedCoachStack.length - 1 - index;
    
                return (
                  <motion.div
                    key={coach.id}
                    className="absolute left-0 right-0 mx-auto max-w-md w-full h-max cursor-pointer shadow-none"
                    style={{
                      top: `${cardIndex * 30}px`,
                      zIndex: isTopCard ? 100 : 10 + cardIndex,
                    }}
                    onClick={() => bringToTop(coach.id)}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: isTopCard ? 1 : 0.95,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={isTopCard ? {} : { scale: 0.97 }}
                  >
                    <motion.div
                      className="relative border h-full border-border rounded-lg overflow-hidden bg-background"
                      whileTap={isTopCard ? { scale: 0.98 } : {}}
                    >
                      {!isTopCard && (
                        <motion.div
                          className="flex items-center justify-between text-xs text-muted-foreground px-4 py-2 bg-accent/10 rounded-t-lg z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div>
                            <span className="truncate max-w-[100px] block">
                              {coach.name}
                            </span>
                          </div>
                          <div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeCoach(coach.id);
                              }}
                              className="text-destructive hover:text-destructive/70 text-[16px]"
                            >
                              ×
                            </button>
                          </div>
                        </motion.div>
                      )}
    
                      {isTopCard && (
                        
                        <motion.div
                          className="flex  flex-col  justify-center items-center p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                        <div className="flex-col">
                        <motion.img
                        src={photo}
                        alt={coach.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg m-auto"
                        whileHover={{ scale: 1.05 }}
                      />
                          <h1 className="text-xl font-semibold mt-4 text-[var(--brand-gray)]">
                            {coach.name}
                          </h1>
                          <h2 className="text-sm text-[var(--brand-gray3)] mb-2">
                            {coach.location}
                          </h2>
    
                          <div className="flex justify-center gap-3 mt-2">
                            <motion.button
                              className="bg-[var(--brand-green2)] rounded-full p-2 hover:[var(--brand-green2)/80] transition-colors"
                              title="Call"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Phone className="w-5 h-5 text-[var(--brand-green)]" />
                            </motion.button>
                            <motion.button
                              className="bg-[var(--brand-red2)] rounded-full p-2 hover:bg-[var(--brand-red2)/80] transition-colors"
                              title="Email"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Mail className="w-5 h-5 text-[var(--brand-red)]" />
                            </motion.button>
                            <motion.button
                              className="bg-[var(--brand-yellow2)] rounded-full p-2 hover:bg-[var(--brand-yellow2)/80] transition-colors"
                              title="Message"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <MessageCircle className="w-5 h-5 text-[var(--brand-yellow)]" />
                            </motion.button>
                          </div>
                          </div>
                          <div className="mt-6 text-sm text-left w-full">
                            <h3 className="font-semibold text-[var(--brand-gray4)] mb-1">
                              PERSONAL INFORMATION
                            </h3>
                            <p className="text-[var(--brand-gray3)] text-sm mb-4">
                              This coach has not added a bio.
                            </p>
                            <div className="grid grid-cols-2 gap-y-2 text-sm text-[var(--brand-gray3)]">
                              <div className="font-medium">Designation</div>
                              <div>{coach.type}</div>
                              <div className="font-medium">Email ID</div>
                              <div>{coach.contact.email}</div>
                              <div className="font-medium">Phone No</div>
                              <div>{coach.contact.phone}</div>
                              <div className="font-medium">Lead Score</div>
                              <div>-</div>
                              <div className="font-medium">Tags</div>
                              <div className="flex gap-2">
                                <Badge variant="brand" className="text-xs ">
                                  Lead
                                </Badge>
                                <Badge variant="brand" className="text-xs">
                                  Partner
                                </Badge>
                              </div>
                              <div className="font-medium">Last Contacted</div>
                              <div>{coach.lastActive}</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        </div>
      );
    }