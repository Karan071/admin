import { Clock, CircleArrowUp,MessageCircle,Flag, CircleArrowDown,Search, X,Check, Bell,Users, FileCheck2, FileText, CheckCircle2,  FileDown,  BadgeQuestionMark,  Plus, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, ChevronRight, ChevronLeft } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Upcoming,
  Live,
  Cancelled ,
  Completed,
  RefundRequested,
  
} from "@/data/Data";
import * as React from "react";

import { useEffect } from "react";
import RadioButton from "@/components/ui/Radiobutton";
import DatePick from "@/components/ui/DatePicker";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;
const Stats = [
  {
    title: "Total Sessions Booked",
    value: "5,248",
    icon: Users,
    performance: Up,
  },
  {
    title: "Completed Sessions",
    value: "3,780",
    icon: FileCheck2,
    performance: Down,
  },
  {
    title: "Missed / No-Show",
    value: "341",
    icon: FileText,
    performance: Up,
  },
  {
    title: "Upcoming Sessions",
    value: "446",
    icon: Clock,
    performance: Up,
  },
  {
    title: "Live Sessions",
    value: "12",
    icon: CheckCircle2,
    performance: Up,
  },
   {
    title: "Session Recordings Available",
    value: "298",
    icon: Clock,
    performance: Up,
  },
   {
    title: "Refund Requests",
    value: "27",
    icon: Clock,
    performance: Up,
  },
   {
    title: "Refunds Processed",
    value: " ₹42,500",
    icon: CheckCircle2,
    performance: Up,
  },
];

export default function Organisation() {


  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-[var(--text-head)]">Sessions Pool </h1>
      <StatCard />
      <Buttonbar />
      

      <SessionTabs />
    </div>
  );
}

function Buttonbar() {
    const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button variant="brand" size="new">
        <Plus className="h-3 w-3" />
        <span className=""> Create Manual Session</span>
      </Button>
      <div className="flex gap-4">
         <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className=""> Find Coach by Expertise / Type</span>
        </Button>
        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className=""> Export Session Logs</span>
        </Button>
        <Button variant="standard" size="new">
          <Eye className="h-3 w-3" />
          <span className="">Refund Requests Queue</span>
        </Button>
        <Button variant="standard" size="new">
          <BadgeQuestionMark className="h-3 w-3" />
          <span className="">View Live Sessions</span>
        </Button>
        <Button variant="standard" size="new">
          <Eye className="h-3 w-3" />
          <span className="">Access Recordings</span>
        </Button>
        <Button
        variant="border"
        onClick={() => setShowFilter(true)}
        className="flex items-center gap-2 self-end"
      >
        <Filter className="h-4 w-4" />
        {showFilter ? "Hide Filters" : "Show Filters"}
      </Button>

      {showFilter && <AssessFilter onClose={() => setShowFilter(false)} />}
      </div>
    </div>
  );
}
interface Session {
  user: string;
  coach: string;
  coachType: string;
  dateTime: string;
  type: string;
  amount: string;
  statusTimeline: string[];
  actions: string[];
  recording?: string;   // Make optional
  refundStatus?: string; // Make optional
}
interface FilterProps {
  onClose: () => void;
}

function AssessFilter({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("General");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }
      const target = e.target as HTMLElement;
      if (target.closest("[data-radix-popper-content-wrapper]")) {
        return;
      }
      onClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const [group, setGroup] = useState("6-8");
  const [category, setCategory] = useState("Career");
  const [status, setStatus] = useState("Active");

  const tabList = [
    "General",
    "Target Group",
    "Category",
    "Status",
    "Created By",
    "Date Range",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-xl bg-[var(--background)] "
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
        <div className="flex ">
          <div className="overflow-y-auto min-w-[180px] border-r-1 h-[360px]">
            <div className="flex flex-col ">
              {tabList.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left text-sm px-3 py-3 border-l-3  ${activeTab === tab
                    ? "bg-[var(--brand-color3)] text-[var(--brand-color)] border-[var(--brand-color)]"
                    : "text-[var(--text)] hover:bg-[var(--faded)] border-transparent"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 overflow-y-auto relative w-full">
            {activeTab === "General" && (
              <>
                <label htmlFor="Gen" className="text-[var(--text)]">Enter Assessment Name :</label>
                <Input id="Gen" placeholder="Enter .." type="text" className="mt-4 w-full " />
              </>
            )}

            {activeTab === "Target Group" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Target Group:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "6-8",
                    "9-10",
                    "11-12",
                    "UG",
                    "PG",
                    "Professionals",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={group}
                      onChange={setGroup}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Category" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Category :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Career",
                    "Aptitude",
                    "Personality",
                    "Skills",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={category}
                      onChange={setCategory}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Choose Status :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Active",
                    "Inactive",
                    "Draft",
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

            {activeTab === "Created By" && (
              <>
                <label htmlFor="Gen" className="text-[var(--text)]">Enter The Creator/Coach / Admin Name :</label>
                <Input id="Gen" placeholder="Enter.." type="text" className="mt-4 w-full " />
              </>
            )}

            {activeTab === "Date Range" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">Enter the Last Assessment Date :</label>
                <div className="mt-4 min-w-full">
                  <DatePick />
                </div>
              </>
            )}

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

function StatCard() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-4">
      {Stats.map((stat, index) => (
        <Card key={index} className="xl:rounded-sm shadow-none bg-[var(--background)]">
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
                <stat.icon className={`h-8 w-8 ${color2}`} />
              </div>
              <div className={`${color2} text-2xl`}>{stat.value}</div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}



function SessionTabs() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);

  const getCurrentData = (): Session[] => {
    switch (activeTab) {
      case "upcoming": return Upcoming;
      case "live": return Live;
      case "completed": return Completed;
      case "cancelled": return Cancelled;
      case "refund": return RefundRequested;
      default: return [];
    }
  };

  const getBadgeStyles = (status: string) => {
    const statusMap: Record<string, string> = {
      "Confirmed": "bg-[var(--green2)] text-[var(--green)]",
      "Live": "bg-[var(--green2)] text-[var(--green)]",
      "Completed": "bg-[var(--green2)] text-[var(--green)]",
      "Passed": "bg-[var(--green2)] text-[var(--green)]",
      "Cancelled": "bg-[var(--red2)] text-[var(--red)]",
      "Missed": "bg-[var(--red2)] text-[var(--red)]",
      "Requested": "bg-[var(--blue2)] text-[var(--blue)]"
    };
    
    return statusMap[status] || "bg-[var(--faded)] text-[var(--text)]";
  };

  const currentData = getCurrentData();
  
  let sortedData = [...currentData];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const key = sortConfig.key as keyof Session;
      const aValue = a[key];
      const bValue = b[key];
      
      if (aValue === undefined || bValue === undefined) return 0;
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
  const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig?.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

 

  const toggleSelectSession = (sessionId: string) => {
    setSelectedSessions(
      selectedSessions.includes(sessionId)
        ? selectedSessions.filter(id => id !== sessionId)
        : [...selectedSessions, sessionId]
    );
  };

  const getCurrentStatus = (statusTimeline: string[]) => {
    const lastStatus = statusTimeline[statusTimeline.length - 1];
    return lastStatus.split('(')[0].trim();
  };

  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Define table headers per tab
  const getTableHeaders = () => {
    switch (activeTab) {
      case "upcoming":
      case "live":
      case "cancelled":
        return (
          <>
            <TableHead
              onClick={() => requestSort("user")}
              className="cursor-pointer text-[var(--text)]"
            >
              User {sortConfig?.key === "user" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coach")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach {sortConfig?.key === "coach" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coachType")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach Type {sortConfig?.key === "coachType" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("dateTime")}
              className="cursor-pointer text-[var(--text)]"
            >
              Date & Time {sortConfig?.key === "dateTime" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("type")}
              className="cursor-pointer text-[var(--text)]"
            >
              Type {sortConfig?.key === "type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("amount")}
              className="cursor-pointer text-[var(--text)]"
            >
              Amount {sortConfig?.key === "amount" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("statusTimeline")}
              className="cursor-pointer text-[var(--text)]"
            >
              Status {sortConfig?.key === "statusTimeline" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
          </>
        );
        
      case "completed":
        return (
          <>
            <TableHead
              onClick={() => requestSort("user")}
              className="cursor-pointer text-[var(--text)]"
            >
              User {sortConfig?.key === "user" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coach")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach {sortConfig?.key === "coach" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coachType")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach Type {sortConfig?.key === "coachType" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("dateTime")}
              className="cursor-pointer text-[var(--text)]"
            >
              Date & Time {sortConfig?.key === "dateTime" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("type")}
              className="cursor-pointer text-[var(--text)]"
            >
              Type {sortConfig?.key === "type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("amount")}
              className="cursor-pointer text-[var(--text)]"
            >
              Amount {sortConfig?.key === "amount" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("statusTimeline")}
              className="cursor-pointer text-[var(--text)]"
            >
              Status {sortConfig?.key === "statusTimeline" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("recording")}
              className="cursor-pointer text-[var(--text)]"
            >
              Recording {sortConfig?.key === "recording" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
          </>
        );
        
      case "refund":
        return (
          <>
            <TableHead
              onClick={() => requestSort("user")}
              className="cursor-pointer text-[var(--text)]"
            >
              User {sortConfig?.key === "user" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coach")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach {sortConfig?.key === "coach" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("coachType")}
              className="cursor-pointer text-[var(--text)]"
            >
              Coach Type {sortConfig?.key === "coachType" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("dateTime")}
              className="cursor-pointer text-[var(--text)]"
            >
              Date & Time {sortConfig?.key === "dateTime" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("type")}
              className="cursor-pointer text-[var(--text)]"
            >
              Type {sortConfig?.key === "type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("amount")}
              className="cursor-pointer text-[var(--text)]"
            >
              Amount {sortConfig?.key === "amount" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("statusTimeline")}
              className="cursor-pointer text-[var(--text)]"
            >
              Status {sortConfig?.key === "statusTimeline" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              onClick={() => requestSort("refundStatus")}
              className="cursor-pointer text-[var(--text)]"
            >
              Refund Status {sortConfig?.key === "refundStatus" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
          </>
        );
        
      default:
        return null;
    }
  };

  // Render table cells based on active tab
  const renderTableCells = (session: Session) => {
    const currentStatus = getCurrentStatus(session.statusTimeline);
    
    switch (activeTab) {
      case "upcoming":
      case "live":
      case "cancelled":
        return (
          <>
            <TableCell className="font-medium">{session.user}</TableCell>
            <TableCell>{session.coach}</TableCell>
            <TableCell>{session.coachType}</TableCell>
            <TableCell>{formatDateTime(session.dateTime)}</TableCell>
            <TableCell>{session.type}</TableCell>
            <TableCell>{session.amount}</TableCell>
            <TableCell>
              <Badge className={getBadgeStyles(currentStatus)}>
                {currentStatus}
              </Badge>
            </TableCell>
          </>
        );
        
      case "completed":
        return (
          <>
            <TableCell className="font-medium">{session.user}</TableCell>
            <TableCell>{session.coach}</TableCell>
            <TableCell>{session.coachType}</TableCell>
            <TableCell>{formatDateTime(session.dateTime)}</TableCell>
            <TableCell>{session.type}</TableCell>
            <TableCell>{session.amount}</TableCell>
            <TableCell>
              <Badge className={getBadgeStyles(currentStatus)}>
                {currentStatus}
              </Badge>
            </TableCell>
            <TableCell>
             
                {session.recording}
             
            </TableCell>
          </>
        );
        
      case "refund":
        return (
          <>
            <TableCell className="font-medium">{session.user}</TableCell>
            <TableCell>{session.coach}</TableCell>
            <TableCell>{session.coachType}</TableCell>
            <TableCell>{formatDateTime(session.dateTime)}</TableCell>
            <TableCell>{session.type}</TableCell>
            <TableCell>{session.amount}</TableCell>
            <TableCell>
              <Badge className={getBadgeStyles(currentStatus)}>
                {currentStatus}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className="bg-[var(--blue2)] text-[var(--blue)]">
                {session.refundStatus}
              </Badge>
            </TableCell>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-0 w-full">
      {/* Tab Navigation */}
      <div className="flex border-b">
        <Button
          variant={activeTab === "upcoming" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg"
          onClick={() => {
            setActiveTab("upcoming");
            setCurrentPage(1);
            setSelectedSessions([]);
          }}
        >
          Upcoming
        </Button>
        <Button
          variant={activeTab === "live" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("live");
            setCurrentPage(1);
            setSelectedSessions([]);
          }}
        >
          <span>Live</span>
        </Button>
        <Button
          variant={activeTab === "completed" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("completed");
            setCurrentPage(1);
            setSelectedSessions([]);
          }}
        >
          <span>Completed</span>
        </Button>
        <Button
          variant={activeTab === "cancelled" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("cancelled");
            setCurrentPage(1);
            setSelectedSessions([]);
          }}
        >
          <span>Cancelled</span>
        </Button>
        <Button
          variant={activeTab === "refund" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("refund");
            setCurrentPage(1);
            setSelectedSessions([]);
          }}
        >
          <span>Refund Requested</span>
        </Button>
      </div>

      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto">
        <div className="flex items-center justify-between border-b h-20 p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4">
            <div className="flex items-center gap-2 border-none shadow-none">
          
            </div>

            {selectedSessions.length > 0 && (
              <div className="flex gap-2 ml-2">
                <Button variant="border" size="sm" className="text-[var(--text)]">
                  <Bell className="h-4 w-4" />
                  Send Reminder
                </Button>
                {activeTab === "refund" && (
                  <Button variant="border" size="sm" className="text-[var(--text)]">
                    <Check className="h-4 w-4" />
                    Approve All
                  </Button>
                )}
                <Button variant="delete" size="sm" className="text-[var(--text)]">
                  <X className="h-4 w-4" />
                  Cancel All
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-end items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="border"
                  size="sm"
                  className="flex items-center gap-2 text-low text-[var(--text)]"
                >
                  {recordsPerPage}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-[var(--text)] dark:bg-[var(--background)]">
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
                <TableHead className="min-w-[40px]"></TableHead>
                {getTableHeaders()}
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((session) => {
                const sessionId = `${session.user}-${session.coach}-${session.dateTime}`;
                
                return (
                  <TableRow
                    key={sessionId}
                    className={cn(
                      "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]"
                    )}
                  >
                    <TableCell
                      className={cn(
                        "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)] border-transparent"
                      )}
                    >
                      <Checkbox
                        checked={selectedSessions.includes(sessionId)}
                        onClick={(e) => e.stopPropagation()}
                        onCheckedChange={() => toggleSelectSession(sessionId)}
                      />
                    </TableCell>
                    {renderTableCells(session)}
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
                        <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                          <MessageCircle className="h-4 w-4" />
                          <span className="sr-only">Chat</span>
                        </Button>
                        <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                          <Flag className="h-4 w-4" />
                          <span className="sr-only">Flag</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 p-4">
          <div className="flex items-center gap-4">
          
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