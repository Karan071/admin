import { Button } from "@/components/ui/button";
import {
  Search,
  Eye,
  Filter,
  BadgeDollarSign,
  Notebook,
  FileDown,
  DollarSign,
  NotebookPenIcon,
  Download,
  Flag,
  Pen,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
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
import { platformTable } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from '@/components/ui/DatePicker';
import React from "react";
import RadioButton from "@/components/ui/Radiobutton";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;

const stats = [
  {
    title: "Total Platform Fee Earned",
    value: "₹42,000",
    icon: Notebook,
    performance: Up,
  },
  {
    title: "GST Payable on Fees (18%)",
    value: "₹7,560",
    icon: BadgeDollarSign,
    performance: Up,
  },
  {
    title: "Average Fee %",
    value: "22.5%",
    icon: DollarSign,
    performance: Down,
  },
  {
    title: "Most Profitable Product",
    value: "Masterclass",
    icon: BadgeDollarSign,
    performance: Up,
  },
];

export function Platform() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Platform</h1>
        <StatsCards />
        <Buttonbar/>
        <Topbar />
        <TableSection/>
      </div>
    </div>
  );
}

function Buttonbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
        <div className="flex gap-4">
      <Button variant="brand" size="new">
        <NotebookPenIcon className="h-3 w-3" />
        <span className="">Adjust Fee</span>
      </Button>
      <Button variant="standard" size="new">
          <Download className="h-3 w-3" />
          <span className="">Download fee + GST report</span>
        </Button>
        </div>
      <div className="flex gap-4">
        <Button variant="standard" size="new">
          <Eye className="h-3 w-3" />
          <span className="">View linked payment/payout record</span>
        </Button>
        <Button variant="standard" size="new">
          <Flag className="h-3 w-3" />
          <span className="">Flag inconsistent or unrecorded fees</span>
        </Button>
      </div>
    </div>
  );
}

function Topbar() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
        <div>
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
      <div className="flex gap-4 align-middle">
         <Button
          variant="standard"
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 self-end min-h-[40px]"
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>

        {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}
        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className="">Export</span>
        </Button>
      </div>
    </div>
  );
}


interface FilterProps {
  onClose: () => void;
}


function AdvancedFilters({ onClose }: FilterProps) {
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

  const [fee, setFee] = useState("10%");
  const [customFee, setCustomFee] = useState("");

  const tabList = [
    "Date Range",
    "Fee",
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
            
            {activeTab === "Fee" && (
  <>
    <p className="text-sm text-[var(--text-head)] mb-4">
      Select the Fee:
    </p>
    <div className="flex flex-col gap-4 text-[var(--text)]">
      {["10%", "20%", "30%", "Custom"].map((option) => (
        <RadioButton
          key={option}
          label={option}
          value={option}
          selected={fee}
          onChange={setFee}
        />
      ))}

      {fee === "Custom" && (
        <input
          type="text"
          placeholder="Enter custom fee"
          className="mt-2 p-2 border border-gray-300 rounded"
          value={customFee}
          onChange={(e) => setCustomFee(e.target.value)}
        />
      )}
    </div>
  </>
)}

            {activeTab === "Date Range" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">Enter the Date range :</label>
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




function TableSection() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedStack, setSelectedStack] = useState<
    typeof platformTable
  >(platformTable[0] ? [platformTable[0]] : []);
  const [focusedId, setFocusedId] = useState<number | null>(platformTable[0]?.id || null);

  // Sorting logic
  const sortedData = [...platformTable];
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

  /*const toggleSelectAll = () => {
    if (selectedUsers.length === currentRecords.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(
        currentRecords.map((user): number => user.id)
      );
    }
  };
  */

  const bringToTop = (userId: number) => {
    const coach = selectedStack.find((c) => c.id === userId);
    if (coach) {
      setSelectedStack((prev) => [
        coach,
        ...prev.filter((c) => c.id !== userId),
      ]);
      setFocusedId(userId);
    }
  };

  useEffect(() => {
    const allRows = document.querySelectorAll("tr[data-id]");

    allRows.forEach((row) => {
      const id = Number(row.getAttribute("data-id"));
      const isInStack = selectedStack.some((us) => us.id === id);
      const isTop = focusedId === id;

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
  }, [selectedStack, focusedId]);

  {/*const removeCoach = (userId: number) => {
    setSelectedCoachStack((prev) => prev.filter((c) => c.id !== userId));
    if (focusedCoachId === userId) {
      setFocusedCoachId(null);
    }
  };*/}

  const handleRowClick = (user: (typeof platformTable)[0]) => {
    // Double-click detected
    const exists = selectedStack.find((c) => c.id === user.id);
    if (!exists) {
      setSelectedStack((prev) => {
        const updated = [user, ...prev];
        return updated.slice(0, 5); // limit to 5
      });
      setFocusedId(user.id);
    } else {
      bringToTop(user.id);
    }
  };

  const toggleSelectUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        

        <div className="overflow-x-auto text-[var(--text)] w-full px-0 mx-0 text-low">
          <Table className="w-full caption-top border-collapse overflow-y-visible">
            <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
              <TableRow>
                <TableHead className="min-w-[40px]"></TableHead>
                <TableHead
                  onClick={() => requestSort("date")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Date{" "}
                  {sortConfig?.key === "date" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("product")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Product{" "}
                  {sortConfig?.key === "product" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("payeeName")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Payee Name{" "}
                  {sortConfig?.key === "payeeName" &&
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
                  onClick={() => requestSort("gross")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Gross ₹{" "}
                  {sortConfig?.key === "gross" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("platformFeePercent")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Platform Fee %{" "}
                  {sortConfig?.key === "platformFeePercent" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("platformFee")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Fee ₹{" "}
                  {sortConfig?.key === "platformFee" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("gst")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  GST ₹ (18%){" "}
                  {sortConfig?.key === "gst" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("netPayout")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Net Payout ₹{" "}
                  {sortConfig?.key === "netPayout" &&
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
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((user) => (
                <TableRow
                  key={user.id}
                  data-id={user.id}
                  className={cn(
                    "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                    selectedStack.some((c) => c.id === user.id)
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => {
                    toggleSelectUser(user.id);
                    handleRowClick(user);
                  }}
                >
                  <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                      selectedStack.some((c) => c.id === user.id)
                        ? focusedId === user.id
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                        : "border-transparent"
                    )}
                  >
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleSelectUser(user.id)}
                    />
                  </TableCell>
                  <TableCell
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="font-medium">{user.date}</div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.product}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.payeeName}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.type}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">
                      <div>{`${user.gross}`}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.platformFeePercent}</div>
                  </TableCell>
                  <TableCell>{user.platformFee}</TableCell>
                  <TableCell>
                    <div className="text-low">{user.gst}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.netPayout}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      // onClick={() => navigate(`/user-details/${user.id}`)}
                      >
                        <Eye className="h-4 w-3" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      // onClick={() => navigate(`/user-details/${user.id}`)}
                      >
                        <Pen className="h-4 w-3" />
                        <span className="sr-only">Edit</span>
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


