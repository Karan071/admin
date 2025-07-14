import { Button } from "@/components/ui/button";
import {
  Search,
  Eye,
  Building2,
  Filter,
  Check,
  X,
  Bell,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  UserCheck,
  UserPlus,
  MessageSquare,
  Calendar,
} from "lucide-react";
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
import { coachTableData } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerWithRange } from "@/components/application-component/date-range-picker";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;

const stats = [
  {
    title: "Total Coaches",
    value: "1,234",
    icon: Users,
    performance: Up,
  },
  {
    title: "Pending Approvals",
    value: "34",
    icon: UserCheck,
    performance: Up,
  },
  {
    title: "New This Week",
    value: "27",
    icon: UserPlus,
    performance: Down,
  },
  {
    title: "Sessions Conducted",
    value: "4,860",
    icon: MessageSquare,
    performance: Up,
  },
  {
    title: "Masterclasses Hosted",
    value: "67",
    icon: Calendar,
    performance: Down,
  },
  {
    title: "Coaches with Orgs",
    value: "182",
    icon: Building2,
    performance: Up,
  },
];

export default function Coaches() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Coaches</h1>
        <StatsCards />
        {/*<Buttonbar />*/}
        {showFilter && <AdvancedFilters />}
        <div className="flex justify-end mt-4 p-4 ">
          <Button
            variant="border"
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFilter ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <CoachTableSection />
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



function AdvancedFilters() {
  return (
    <div className="py-2">
      <Card className="mt-8 shadow-none bg-[var(--background)]">
        <CardHeader>
          <CardTitle className="text-lg text-[var(--text-head)]">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-[var(--text)]">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name / Email / Phone</label>
              <Input placeholder="Search by name, email or phone" className="mt-2" />
            </div>

            <div className="space-y-5">
              <label className="text-sm font-medium">Status</label>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center space-x-2 ">
                  <Checkbox id="Approved" className="h-4 w-4" />
                  <label htmlFor="Approved" className="text-sm">
                    Approved
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Pending" />
                  <label htmlFor="Pending" className="text-sm">
                    Pending
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Blocked" />
                  <label htmlFor="Blocked" className="text-sm">
                    Blocked
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Specialisation</label>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="Career" />
                  <label htmlFor="Career" className="text-sm">
                    Career
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Psychology" />
                  <label htmlFor="Psychology" className="text-sm">
                    Psychology
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="STEM" />
                  <label htmlFor="STEM" className="text-sm">
                    STEM
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Design" />
                  <label htmlFor="Design" className="text-sm">
                    Design
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Law" />
                  <label htmlFor="Law" className="text-sm">
                    Law
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Session Type</label>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="1:1" />
                  <label htmlFor="1:1" className="text-sm">
                    1:1
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Group" />
                  <label htmlFor="Group" className="text-sm">
                    Group
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Instant" />
                  <label htmlFor="Instant" className="text-sm">
                    Instant
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="B2B" />
                  <label htmlFor="B2B" className="text-sm">
                    B2B
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Organisation Linked</label>
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
              <label className="text-sm font-medium">State / City</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="border" className="w-full justify-between mt-2">
                    <span>Select location</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px] text-[var(--text)]">
                  <DropdownMenuItem>Delhi</DropdownMenuItem>
                  <DropdownMenuItem>Mumbai</DropdownMenuItem>
                  <DropdownMenuItem>Bangalore</DropdownMenuItem>
                  <DropdownMenuItem>Chennai</DropdownMenuItem>
                  <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Last Active</label>
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




/*function Buttonbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button variant="brand" size="new">
        <Plus className="h-3 w-3" />
        <span className="">Add Contacts</span>
      </Button>
      <div className="flex gap-4">
        <Button variant="delete" size="new">
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button variant="standard" size="new">
          <Funnel className="h-3 w-3" />
          <span className="">Filter</span>
        </Button>
        <Button variant="standard" size="new">
          <span className="">Import</span>
        </Button>
        <Button variant="standard" size="new">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
*/


function CoachTableSection() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedCoachStack, setSelectedCoachStack] = useState<
    typeof coachTableData
  >(coachTableData[0] ? [coachTableData[0]] : []);
  const [focusedCoachId, setFocusedCoachId] = useState<number | null>(coachTableData[0]?.id || null);

  // Sorting logic
  const sortedData = [...coachTableData];
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
  
 const toggleSelectAll = () => {   if (selectedUsers.length === currentRecords.length) {
    setSelectedUsers([]);   
    } else {
    setSelectedUsers(
      currentRecords.map((user): number => user.id)
     );
  } 
};

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

  {/*const removeCoach = (userId: number) => {
    setSelectedCoachStack((prev) => prev.filter((c) => c.id !== userId));
    if (focusedCoachId === userId) {
      setFocusedCoachId(null);
    }
  };*/}

  const handleRowClick = (user: (typeof coachTableData)[0]) => {
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
        <div className="flex items-center justify-between border-b p-4 mt-auto h-20">
          <div className="flex items-center justify-between pl-0 p-4">
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
                <TableHead
                  onClick={() => requestSort("profile.name")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Profile{" "}
                  {sortConfig?.key === "profile.name" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Specialty")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Specialty{" "}
                  {sortConfig?.key === "Specialty" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("contact.email")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Contact{" "}
                  {sortConfig?.key === "contact.email" &&
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
                  onClick={() => requestSort("sessions.total")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Sessions{" "}
                  {sortConfig?.key === "sessions.total" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("assessments")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Assessments{" "}
                  {sortConfig?.key === "assessments" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("orgLinked")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Org Linked{" "}
                  {sortConfig?.key === "orgLinked" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("lastActive")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Last Active / DOJ{" "}
                  {sortConfig?.key === "lastActive" &&
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
                    selectedCoachStack.some((c) => c.id === user.id)
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => handleRowClick(user)}
                >
                  <TableCell className={cn(
                    "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]", // base classes
                    selectedCoachStack.some((c) => c.id === user.id)
                      ? focusedCoachId === user.id
                        ? "border-[var(--brand-color)]"
                        : "border-transparent"
                      : "border-transparent"
                  )}>
                      <Checkbox
                          checked={selectedUsers.includes(user.id)}
                          onCheckedChange={() => toggleSelectUser(user.id)}
                      />
                  </TableCell>
                  <TableCell 
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden">
                        <img
                          src={user.profile.photo}
                          alt={user.profile.name}
                          className="h-14 w-14 object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="font-medium">{user.profile.name}</div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {user.specialty.split(",").map((special, id) => (
                        <Badge key={id} variant="standard">
                          {special}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.contact.email}</div>
                    <div className="text-xs text-[var(--text)]">
                      {user.contact.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">
                      <div>{`${user.sessions.total}`}</div>
                      <div className="text-xs text-[var(--text)]">{`${user.sessions.completed} Completed`}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.assessments}</div>
                  </TableCell>
                  <TableCell>{user.orgLinked}</TableCell>
                  <TableCell>
                    <div className="text-low">{user.lastActive}</div>
                    <div className="text-xs text-[var(--text)]">{user.joined}</div>
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
                      <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                        <Check className="h-4 w-3" />
                        <span className="sr-only">Approve</span>
                      </Button>

                      <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                        <X className="h-4 w-3" />
                        <span className="sr-only">Block</span>
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



    {/*<div className="xl:block hidden">
    <div className="lg:h-[500px] xl:min-w-90 xxl:min-w-100 sticky xl:top-[10px] shadow-none lg:scale-100 min-w-full h-fit">
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
            <div className="relative border h-full border-border rounded-lg overflow-hidden bg-background">
              
              {!isTopCard && (
                <div className="flex items-center justify-between text-xs text-[var(--text)] px-4 py-2 bg-accent/10 rounded-t-lg z-10">
                  <span className="truncate max-w-[100px] block">{coach.profile.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCoach(coach.id);
                    }}
                    className="text-[var(--red)] hover:text-[var(--red)/70] text-[16px]"
                  >
                    ×
                  </button>
                </div>
              )}

              
              {isTopCard && (
                <div className="flex flex-col justify-center items-center p-6">
                  <div className="w-full max-w-md space-y-6">

                    
                    <section className="text-center">
                      <img
                        src={coach.profile.photo}
                        alt={coach.profile.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-primary mx-auto shadow-md"
                      />
                      <h1 className="text-xl font-semibold mt-4 text-[var(--text-head)]">{coach.profile.name}</h1>
                      <div className="text-sm text-[var(--text)] mb-2">
                        {coach.profile.gender === "M" ? "Male" : "Female"} &bull; {coach.orgLinked}
                      </div>

                      <div className="flex justify-center gap-3 mt-2">
                        <button className="bg-[var(--green2)] rounded-full p-2" title="Call">
                          <Phone className="w-5 h-5 text-[var(--green)]" />
                        </button>
                        <button className="bg-[var(--red2)] rounded-full p-2" title="Email">
                          <Mail className="w-5 h-5 text-[var(--red)]" />
                        </button>
                        <button className="bg-[var(--yellow2)] rounded-full p-2" title="Message">
                          <MessageCircle className="w-5 h-5 text-[var(--yellow)]" />
                        </button>
                      </div>
                    </section>

                    
                    <section className="text-sm text-[var(--text)]">
                      <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-medium">Email ID</div>
                        <div>{coach.contact.email}</div>
                        <div className="font-medium">Phone No</div>
                        <div>{coach.contact.phone}</div>
                        <div className="font-medium">Public Profile</div>
                        <div className="text-blue-600 underline cursor-pointer">View Profile</div>
                      </div>
                    </section>

                    
                    <section className="text-sm text-[var(--text)]">
                      <h3 className="font-semibold text-[var(--text-head)] mb-1">Activities</h3>
                      <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-medium">Sessions Delivered</div>
                        <div>{coach.sessions?.total || 0}</div>
                        <div className="font-medium">Ratings</div>
                        <div>⭐ 4.5</div>
                        <div className="font-medium">Assessments Used</div>
                        <div>{coach.assessments || 0}</div>
                        <div className="font-medium">Masterclasses</div>
                        <div>—</div>
                        <div className="font-medium">Topics Covered</div>
                        <div>—</div>
                      </div>
                    </section>

                    
                    <section className="text-sm text-[var(--text)]">
                      <h3 className="font-semibold text-[var(--text-head)] mb-1">Organisation & Assignments</h3>
                      <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-medium">Linked Institutions</div>
                        <div>{coach.orgLinked}</div>
                        <div className="font-medium">Segments</div>
                        <div>UG, Career Changers</div>
                        <div className="font-medium">Availability</div>
                        <div>Weekends</div>
                      </div>
                    </section>

                    
                    <section className="text-sm text-[var(--text)]">
                      <h3 className="font-semibold text-[var(--text-head)] mb-1">Internal Notes</h3>
                      <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-medium">Admin Comments</div>
                        <div>—</div>
                        <div className="font-medium">Consultant Reviews</div>
                        <div>—</div>
                        <div className="font-medium">Warnings</div>
                        <div>None</div>
                      </div>
                    </section>

                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  </div>
</div>*/}
   </div>
  );
}
