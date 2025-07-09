import { Button } from "@/components/ui/button";
import {
  Plus,
  Trash2,
  Funnel,
  EllipsisVertical,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Eye,
} from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
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
import { Mars, Venus, Flag } from "lucide-react";
import { coachTableData } from "@/data/Data";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const color = "text-[var(--brand-gray3)]";
const Up = <CircleArrowUp className="text-[var(--brand-green)] h-6" />;
const Down = <CircleArrowDown className="text-[var(--brand-red)] h-6" />;

const stats = [
  {
    title: "Total Users",
    value: "12,457",
    icon: Users,
    performance: Up,
  },
  {
    title: "Active Learners (30 Days)",
    value: "4,385",
    icon: UserCheck,
    performance: Up,
  },
  {
    title: "New Signups (This Week)",
    value: "312",
    icon: UserPlus,
    performance: Down,
  },
  {
    title: "Total Enquiries",
    value: "642",
    icon: MessageSquare,
    performance: Up,
  },
  {
    title: "Users with Sessions Booked",
    value: "1,205",
    icon: Calendar,
    performance: Down,
  },
];

export default function Coaches() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Coaches</h1>
        <StatsCards />
        <Buttonbar />
        <CoachTableSection />
      </div>
    </div>
  );
}

function StatsCards() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-5 ">
      {stats.map((stat, index) => (
        <Card key={index} className="xl:rounded-sm shadow-2xs">
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
  );
}

function Buttonbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-white rounded-sm shadow-2xs border">
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

function CoachTableSection() {
  // const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedCoachStack, setSelectedCoachStack] = useState<
    typeof coachTableData
  >([]);
  const [focusedCoachId, setFocusedCoachId] = useState<number | null>(null);

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

  // const toggleSelectUser = (userId: string) => {
  //   if (selectedUsers.includes(userId)) {
  //     setSelectedUsers(selectedUsers.filter((id) => id !== userId));
  //   } else {
  //     setSelectedUsers([...selectedUsers, userId]);
  //   }
  // };

  return (
    <div className="flex flex-row gap-4 w-full h-max flex-wrap">
      <div className="flex-1 rounded-md border bg-white">
        <div className="flex items-center justify-between border-b p-4 mt-auto">
          
          <div className="flex justify-end items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-sm"
                >
                  {recordsPerPage}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[5, 10, 25, 50, 100].map((size) => (
                  <DropdownMenuItem
                    key={size}
                    onClick={() => {
                      setRecordsPerPage(size);
                      setCurrentPage(1);
                    }}
                  >
                    {size}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex justify-around items-center border rounded-md overflow-hidden bg-white">
              <Input
                placeholder="Search"
                className="border-none focus:ring-0 focus-visible:ring-0 focus:outline-none px-2 py-1 w-40 sm:w-45"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="rounded-none rounded-r-md bg-gray-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-500" />
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
                  className="cursor-pointer"
                >
                  Profile{" "}
                  {sortConfig?.key === "profile.name" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("contact.email")}
                  className="cursor-pointer"
                >
                  Contact{" "}
                  {sortConfig?.key === "contact.email" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("status")}
                  className="cursor-pointer"
                >
                  Status{" "}
                  {sortConfig?.key === "status" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("sessions.total")}
                  className="cursor-pointer"
                >
                  Sessions{" "}
                  {sortConfig?.key === "sessions.total" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("assessments")}
                  className="cursor-pointer"
                >
                  Assessments{" "}
                  {sortConfig?.key === "assessments" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("orgLinked")}
                  className="cursor-pointer"
                >
                  Org Linked{" "}
                  {sortConfig?.key === "orgLinked" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("lastActive")}
                  className="cursor-pointer"
                >
                  Last Active / DOJ{" "}
                  {sortConfig?.key === "lastActive" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead>Actions</TableHead>
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
                      <div className="h-14 w-14 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={user.profile.photo}
                          alt={user.profile.name}
                          className="h-14 w-14 object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="font-medium">{user.profile.name}</div>
                          <div className="flex items-center gap-1 ">
                            {user.profile.gender === "M" ? (
                              <Mars className="h-4" />
                            ) : (
                              <Venus className="h-4" />
                            )}
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className="text-xs font-light"
                            >
                              {user.profile.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-gray-500 text-xs">
                            {user.specialty}
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-start items-center gap-2">
                            <div className="text-xs text-gray-900 italic">
                              {`@${user.profile.userid}`}
                            </div>
                          </div>

                          <div className="flex justify-start gap-2 mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.contact.email}</div>
                    <div className="text-xs text-gray-500">
                      {user.contact.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{`${user.sessions.total}`}</div>
                      <div className="text-xs text-gray-400">{`${user.sessions.completed} Completed`}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.assessments}</div>
                  </TableCell>
                  <TableCell>{user.orgLinked}</TableCell>
                  <TableCell>
                    <div className="text-sm">{user.lastActive}</div>
                    <div className="text-xs text-gray-500">{user.joined}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="standard"
                        size="sm"
                        // onClick={() => navigate(`/user-details/${user.id}`)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4" />
                        <span className="sr-only">Chat</span>
                      </Button>

                      <Button variant="outline" size="sm">
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
            <span className="text-sm text-gray-500">
              Showing {indexOfFirstRecord + 1}-
              {Math.min(indexOfLastRecord, sortedData.length)} of{" "}
              {sortedData.length} explorers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
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




      <div className="h-[500px] min-w-100 sticky xxl:top-[10px] ">
        <AnimatePresence>
          {selectedCoachStack.map((coach, index) => {
            const isTopCard =
              coach.id === Number(focusedCoachId) ||
              (focusedCoachId === null && index === 0);
            const cardIndex = selectedCoachStack.length - 1 - index;

            return (
              <motion.div
                key={coach.id}
                className="absolute left-0 right-0 mx-auto max-w-md w-full h-max cursor-pointer"
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
                  className="relative border h-full border-border rounded-lg overflow-hidden shadow-md bg-background"
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
                          {coach.profile.name}
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
                      <div className="flex-col ">
                      <motion.img
                        src={coach.profile.photo}
                        alt={coach.profile.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      />
                      <h1 className="text-xl font-semibold mt-4 text-[var(--brand-gray)]">
                        {coach.profile.name}
                      </h1>
                      <h2 className="text-sm text-[var(--brand-gray3)] mb-2">
                        {coach.orgLinked}
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
                          <div>{coach.profile.type}</div>
                          <div className="font-medium">Email ID</div>
                          <div>{coach.contact.email}</div>
                          <div className="font-medium">Phone No</div>
                          <div>{coach.contact.phone}</div>
                          <div className="font-medium">Lead Score</div>
                          <div>-</div>
                          <div className="font-medium">Tags</div>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs bg-[var(--brand-color2)]">
                              Lead
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-[var(--brand-color2)]">
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
  );
}
