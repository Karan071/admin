import { Button } from "@/components/ui/button";
import {
  Search,
  Eye,
  Download,
  Upload,
  Funnel,
  Plus,
  FileEdit,
  BookOpenCheck,
  Clock,
  Check,
  X,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
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
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {instant_sessions, b2b_sessions,pending_approvals} from "@/data/Data"



const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";

const stats = [
  {
    title: "Total Pooled Sessions",
    value: "326",
    icon: "Users",
    performance: "Up",
  },
  {
    title: "Instant Sessions Available:",
    value: "112",
    icon: "UserCheck",
    performance: "Up",
  },
  {
    title: "Introductory Sessions Listed",
    value: "89",
    icon: "UserPlus",
    performance: "Down",
  },
  {
    title: "B2B Sessions Published",
    value: "125",
    icon: "MessageSquare",
    performance: "Up",
  },
  {
    title: "Waiting for Coach to Accept",
    value: "21",
    icon: "Calendar",
    performance: "Down",
  },
];

export default function SessionPool() {
  const [activeTab, setActiveTab] = useState("instant_sessions");
  const tabs = [
    { id: "instant_sessions", label: "Instant Sessions", icon: BookOpenCheck },
    { id: "b2b_sessions", label: "B2B Sessions", icon: FileEdit },
    { id: "pending", label: "Pending Approval", icon: Clock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Sessions Pool</h1>
        <StatsCards />
        <Buttonbar />
        
        {/* Tabs */}
        <div className="flex">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "brand" : "border"}
              className={`rounded-b-none rounded-r-lg`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        <SessionTableSection activeTab={activeTab} />
      </div>
    </div>
  );
}

function StatsCards() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="xl:rounded-sm shadow-none bg-[var(--background)]">
          <CardHeader className="flex-col items-center px-4 gap-4 py-0 h-full">
            <div className="flex justify-between h-full items-center">
              <div
                className={`${color} text-xs uppercase text-light line-clamp-1`}
              >
                {stat.title}
              </div>
              <div className={`${stat.performance === "Up" ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                {stat.performance === "Up" ? "↑" : "↓"}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`${color2} text-2xl`}>{stat.value}</div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

function Buttonbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <div className="flex gap-4 flex-wrap">
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span className=" ">Add Session to Pool </span>
        </Button>
      </div>
      
      <div className="flex gap-4">
        <Button variant="standard" size="new">
          <Download className="h-3 w-3" />
          <span className="">Export Pool List</span>
        </Button>
        
        <Button variant="standard" size="new">
          <Upload className="h-3 w-3" />
          <span className=""> Assign Slots</span>
        </Button>
        
        <Button variant="standard" size="new">
          <Download className="h-3 w-3" />
          <span className=""> Manage Availability</span>
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

function SessionTableSection({ activeTab }: { activeTab: string }) {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectedSessions, setSelectedSessions] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  
  useEffect(() => {
    switch(activeTab) {
      case "instant_sessions":
        setTableData(instant_sessions);
        break;
      case "b2b_sessions":
        setTableData(b2b_sessions);
        break;
      case "pending":
        setTableData(pending_approvals);
        break;
      default:
        setTableData([]);
    }
    setSelectedSessions([]);
    setCurrentPage(1);
  }, [activeTab]);

  const totalPages = Math.ceil(tableData.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tableData.slice(indexOfFirstRecord, indexOfLastRecord);

  const toggleSelectAll = () => {
    if (selectedSessions.length === currentRecords.length) {
      setSelectedSessions([]);
    } else {
      setSelectedSessions(currentRecords.map((_, index) => index));
    }
  };

  const toggleSelectSession = (index: number) => {
    if (selectedSessions.includes(index)) {
      setSelectedSessions(selectedSessions.filter(i => i !== index));
    } else {
      setSelectedSessions([...selectedSessions, index]);
    }
  };


  const getHeaders = () => {
    switch(activeTab) {
      case "instant_sessions":
        return ["Coach", "Coach Type", "Segment", "Topic", "Price Code", "Slots", "Status", "Actions"];
      case "b2b_sessions":
        return ["Organisation", "Coach", "Coach Type", "Topic", "Price Code", "Slots", "Status", "Actions"];
      case "pending":
        return ["Coach", "Session Type", "Topic", "Price Code", "Submitted On", "Status", "Actions"];
      default:
        return [];
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex items-center justify-between border-b p-4 mt-auto h-20">
          <div className="flex items-center justify-between pl-0 p-4">
            <div className="flex items-center gap-2 border-none shadow-none">
              <Checkbox
                id="select-all"
                checked={selectedSessions.length === currentRecords.length && currentRecords.length > 0}
                onCheckedChange={toggleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                Select All
              </label>
              {selectedSessions.length > 0 && (
                <Badge variant="border" className="ml-2 ">
                  {selectedSessions.length} selected
                </Badge>
              )}
            </div>

            {selectedSessions.length > 0 && (
              <div className="flex gap-2 ml-2">
                <Button variant="border" size="sm">
                  <Bell className="h-4 w-4" />
                  Send Reminder
                </Button>
                <Button variant="border" size="sm">
                  <Check className=" h-4 w-4" />
                  Approve All
                </Button>
                <Button variant="delete" size="sm">
                  <X className=" h-4 w-4" />
                  Block / Remove
                </Button>
              </div>
            )}
          </div>
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
                <TableHead className="min-w-[40px]"></TableHead>
                {getHeaders().map((header, index) => (
                  <TableHead key={index} className="text-[var(--text)]">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRecords.map((session, index) => (
                <TableRow key={index} className="cursor-pointer  text-low">
                  <TableCell className="pl-3">
                    <Checkbox
                      checked={selectedSessions.includes(index)}
                      onCheckedChange={() => toggleSelectSession(index)}
                    />
                  </TableCell>
                  
                  {activeTab === "instant_sessions" && (
                    <>
                      <TableCell>{session.coach}</TableCell>
                      <TableCell>{session.coach_type}</TableCell>
                      <TableCell>{session.segment}</TableCell>
                      <TableCell>{session.topic}</TableCell>
                      <TableCell>{session.price_code}</TableCell>
                      <TableCell>{session.slots}</TableCell>
                      <TableCell>
                        <Badge variant="standard">{session.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {session.actions.map((action: string, i: number) => (
                            <Button key={i} variant="border" size="sm" className="text-xs">
                              {action}
                            </Button>
                          ))}
                        </div>
                      </TableCell>
                    </>
                  )}
                  
                  {activeTab === "b2b_sessions" && (
                    <>
                      <TableCell>{session.organisation}</TableCell>
                      <TableCell>{session.coach}</TableCell>
                      <TableCell>{session.coach_type}</TableCell>
                      <TableCell>{session.topic}</TableCell>
                      <TableCell>{session.price_code}</TableCell>
                      <TableCell>{session.slots}</TableCell>
                      <TableCell>
                        <Badge variant="standard">{session.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {session.actions.map((action: string, i: number) => (
                            <Button key={i} variant="border" size="sm" className="text-xs">
                              {action}
                            </Button>
                          ))}
                        </div>
                      </TableCell>
                    </>
                  )}
                  
                  {activeTab === "pending" && (
                    <>
                      <TableCell>{session.coach}</TableCell>
                      <TableCell>{session.session_type}</TableCell>
                      <TableCell>{session.topic}</TableCell>
                      <TableCell>{session.price_code}</TableCell>
                      <TableCell>{session.submitted_on}</TableCell>
                      <TableCell>
                        <Badge variant="standard">{session.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {session.actions.map((action: string, i: number) => (
                            <Button key={i} variant="border" size="sm" className="text-xs">
                              {action}
                            </Button>
                          ))}
                        </div>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 p-4">
          <div className="flex items-center gap-4">
            <span className="text-low text-[var(--text)]">
              Showing {indexOfFirstRecord + 1}-
              {Math.min(indexOfLastRecord, tableData.length)} of{" "}
              {tableData.length} sessions
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