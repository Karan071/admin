
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Search,
    Check,
    X,
    Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { addTeamMember } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";


export function AddTeamMember(){
    return(
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[var(--text-head)]">Add Team Member</h1>
            <UserForm />
            <TeamTable/>
        </div>
    );
}

type PermissionSet = {
  add: boolean;
  edit: boolean;
  disable: boolean;
  viewOwn: boolean;
  viewTeam: boolean;
  viewGlobal: boolean;
};

const deskPermissions: Record<string, PermissionSet> = {
  "Relation Desk": {
    add: true,
    edit: true,
    disable: false,
    viewOwn: true,
    viewTeam: true,
    viewGlobal: false,
  },
  "Review Desk": {
    add: false,
    edit: true,
    disable: true,
    viewOwn: true,
    viewTeam: false,
    viewGlobal: false,
  },
  "Digital Desk": {
    add: true,
    edit: false,
    disable: false,
    viewOwn: true,
    viewTeam: true,
    viewGlobal: true,
  },
  "Finance Desk": {
    add: true,
    edit: true,
    disable: true,
    viewOwn: true,
    viewTeam: true,
    viewGlobal: true,
  },
};

function UserForm() {

  const [selectedDesk, setSelectedDesk] = useState("");
 const permissions = selectedDesk && deskPermissions[selectedDesk]
    ? deskPermissions[selectedDesk]
    : null;

  const [editablePermissions, setEditablePermissions] = useState<PermissionSet | null>(null);

  return (
    <div className=" p-6 border space-y-6 bg-[var(--background)] rounded-xl text-[var(--text)]">

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name <span className="text-[var(--red)]">*</span></Label>
          <Input id="fullName" name="fullName" placeholder="Enter Name here.." required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-[var(--red)]">*</span></Label>
          <Input id="email" name="email" type="email" placeholder="user@example.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number <span className="text-[var(--red)]">*</span></Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="+91 9876543210"
            pattern="^\+\d{1,3}\s\d{4,14}$"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role <span className="text-[var(--red)]">*</span></Label>
          <Select name="role" required>
            <SelectTrigger id="role" className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Head">Head</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
              <SelectItem value="Lead">Lead</SelectItem>
              <SelectItem value="Executive">Executive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="desks">Desk Assigned <span className="text-[var(--red)]">*</span></Label>
          <Select name="desks" required onValueChange={(value) => {
  setSelectedDesk(value);
  setEditablePermissions(deskPermissions[value]);
}}>
            <SelectTrigger id="desks" className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Relation Desk">Relation Desk</SelectItem>
              <SelectItem value="Review Desk">Review Desk</SelectItem>
              <SelectItem value="Digital Desk">Digital Desk</SelectItem>
              <SelectItem value="Finance Desk">Finance Desk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {permissions && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Permissions</h3>
            <div className="border p-4 rounded-xl">
              <h4 className="font-semibold mb-2">{selectedDesk}</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(permissions).map(([perm,]) => (
                  <label key={perm} className="flex items-center space-x-2">
                    <Checkbox
  id={`${selectedDesk}-${perm}`}
  checked={editablePermissions?.[perm as keyof PermissionSet] || false}
  onCheckedChange={(checked) =>
    setEditablePermissions((prev) =>
      prev ? { ...prev, [perm]: checked } : prev
    )
  }
/>
                    <span className="capitalize">{perm.replace(/([A-Z])/g, ' $1')}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}


        <Button variant="brand">
          Submit
        </Button>
      </form>
    </div>
  );
}




function TeamTable() {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "ascending" | "descending";
    } | null>(null);
    const [selectedStack, setSelectedStack] = useState<
        typeof addTeamMember
    >(addTeamMember[0] ? [addTeamMember[0]] : []);
    const [focusedId, setFocusedId] = useState<number | null>(addTeamMember[0]?.id || null);

    // Sorting logic
    const sortedData = [...addTeamMember];
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
            const isInStack = selectedStack.some((card) => card.id === id);
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


    const handleRowClick = (user: (typeof addTeamMember)[0]) => {
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
                <div className="flex items-center justify-between border-b h-20 p-4 mt-auto">
                    <div className="flex items-center justify-between pl-0 p-4">
                        
                    </div>
                    <div className="flex justify-end items-center gap-4 ">

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
                                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                                    Companies {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("location")} className="cursor-pointer text-[var(--text)]">
                                    Location {sortConfig?.key === "location" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("contact")} className="cursor-pointer text-[var(--text)]">
                                    Contact {sortConfig?.key === "contact" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>

                                <TableHead onClick={() => requestSort("submittedOn")} className="cursor-pointer text-[var(--text)]">
                                    Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("Docs")} className="cursor-pointer text-[var(--text)]">
                                    Docs {sortConfig?.key === "Docs" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
                                        {user.name}
                                    </TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.desksAssigned}</TableCell>
                                    <TableCell>
                                        <Badge variant="border">
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                                className="border-0 shadow-none"
                                            // onClick={() => navigate(`/user-details/${user.id}`)}
                                            >
                                                <Eye className="h-4 w-3" />
                                                <span className="sr-only">View</span>
                                            </Button>
                                            <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                                                <Check className="h-4 w-3 text-[var(--green)]" />
                                                <span className="sr-only">Approve</span>
                                            </Button>

                                            <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                                                <X className="h-4 w-3 text-[var(--red)]" />
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
