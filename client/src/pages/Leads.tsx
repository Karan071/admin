import { useState } from "react";
import { cn } from "@/lib/utils";
// import avatarProfile from "@/assets/avatar.png" 
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
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
// Add missing imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Bell,
    FileDown,
    X,
    Eye,
    MessageCircle,
    Flag,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Define the data type
interface TableDataItem {
    id: string;
    project: string;
    task: string;
    client_name: string;
    assigned_to: string;
    due_date: string;
    status: string;
    priority: string;
}

export default function Leads() {
    return (
        <div>
            Leads
            <Leadtable />
        </div>
    );
}

function Leadtable() {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "ascending" | "descending";
    } | null>(null);
    
    // Add missing state variables
    const [selectedStack, setSelectedStack] = useState<TableDataItem[]>([]);
    const [focusedId, setFocusedId] = useState<string | null>(null);

    // Sorting logic
    const sortedData = [...tableData];
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

    const toggleSelectAll = () => {
        if (selectedUsers.length === currentRecords.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(
                currentRecords.map((user): string => user.id.toString())
            );
        }
    };

    const bringToTop = (userId: string) => {
        const coach = selectedStack.find((c) => c.id === userId);
        if (coach) {
            setSelectedStack((prev) => [
                coach,
                ...prev.filter((c) => c.id !== userId),
            ]);
            setFocusedId(userId);
        }
    };

    const toggleSelectUser = (userId: string) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    // Add missing handleRowClick function
    const handleRowClick = (item: TableDataItem) => {
        const isAlreadySelected = selectedStack.some((c) => c.id === item.id);
        if (isAlreadySelected) {
            bringToTop(item.id);
        } else {
            setSelectedStack((prev) => [item, ...prev]);
            setFocusedId(item.id);
        }
    };

    return (
        <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
                <div className="flex h-20 items-center justify-between border-b p-4 mt-auto">
                    <div className="flex items-center justify-between pl-0 p-4">
                        <div className="flex items-center gap-2 border-none shadow-none">
                            <Checkbox
                                id="select-all"
                                checked={
                                    selectedUsers.length === currentRecords.length &&
                                    currentRecords.length > 0
                                }
                                onCheckedChange={toggleSelectAll}
                            />
                            <label
                                htmlFor="select-all"
                                className="text-sm font-medium text-[var(--text)]"
                            >
                                Select All
                            </label>
                            {selectedUsers.length > 0 && (
                                <Badge variant="outline" className="ml-2 ">
                                    {selectedUsers.length} selected
                                </Badge>
                            )}
                        </div>

                        {selectedUsers.length > 0 && (
                            <div className="flex gap-2 ml-2">
                                <Button variant="outline" size="sm">
                                    <Bell className="h-4 w-4" />
                                    Send Reminder
                                </Button>
                                <Button variant="outline" size="sm">
                                    <FileDown className=" h-4 w-4" />
                                    Export list
                                </Button>
                                <Button variant="destructive" size="sm">
                                    <X className=" h-4 w-4 text-[var(--red)]" />
                                    Mark Inactive / Remove
                                </Button>
                            </div>
                        )}
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
                                variant="default"
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
                                    onClick={() => requestSort("id")}
                                    className="cursor-pointer text-[var(--text)] text-low"
                                >
                                    ID{" "}
                                    {sortConfig?.key === "id" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("project")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Project{" "}
                                    {sortConfig?.key === "project" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("task")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Task{" "}
                                    {sortConfig?.key === "task" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("client_name")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Client{" "}
                                    {sortConfig?.key === "client_name" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("assigned_to")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Assigned To{" "}
                                    {sortConfig?.key === "assigned_to" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("due_date")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Due Date{" "}
                                    {sortConfig?.key === "due_date" &&
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
                                    onClick={() => requestSort("priority")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Priority{" "}
                                    {sortConfig?.key === "priority" &&
                                        (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead className="text-[var(--text)]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="overflow-visible relative z-0">
                            {currentRecords.map((item) => (
                                <TableRow
                                    key={item.id}
                                    data-id={item.id}
                                    className={cn(
                                        "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                                        selectedStack.some((c) => c.id === item.id)
                                            ? "bg-[var(--brand-color3)]"
                                            : ""
                                    )}
                                    onClick={() => {
                                        toggleSelectUser(item.id);
                                        handleRowClick(item);
                                    }}
                                >
                                    <TableCell
                                        className={cn(
                                            "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                                            selectedStack.some((c) => c.id === item.id)
                                                ? focusedId === item.id
                                                    ? "border-[var(--brand-color)]"
                                                    : "border-transparent"
                                                : "border-transparent"
                                        )}
                                    >
                                        <Checkbox
                                            checked={selectedUsers.includes(item.id)}
                                            onCheckedChange={() => toggleSelectUser(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.project}</TableCell>
                                    <TableCell>{item.task}</TableCell>
                                    <TableCell>{item.client_name}</TableCell>
                                    <TableCell>{item.assigned_to}</TableCell>
                                    <TableCell>{item.due_date}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                item.status === "Inprogress" ? "default" : "secondary"
                                            }
                                            className={
                                                item.status === "Inprogress"
                                                    ? "bg-[var(--green2)] text-[var(--green)]"
                                                    : "bg-[var(--red2)] text-[var(--red)]"
                                            }
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                item.priority === "High"
                                                    ? "destructive"
                                                    : item.priority === "Medium"
                                                    ? "default"
                                                    : "secondary"
                                            }
                                        >
                                            {item.priority}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <MessageCircle className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <Flag className="h-4 w-4" />
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
                                    variant="outline"
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
                            {sortedData.length} tasks
                        </span>
                    </div>
                    <div className="flex items-center gap-2 ">
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
                                className={`h-8 w-8 p-0 ${
                                    page === currentPage ? "text-white" : "text-[var(--text)]"
                                }`}
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
        </div>
    );
}

const tableData: TableDataItem[] = [
    {
        "id": "#VLZ11",
        "project": "Karan Chourasia",
        "task": "Hey there",
        "client_name": "Karan",
        "assigned_to": "Karan",
        "due_date": "16 Jul, 2025",
        "status": "Inprogress",
        "priority": "High"
    },
    {
        "id": "#VLZ10",
        "project": "Symox v1.0.0",
        "task": "Add Dynamic Contact List",
        "client_name": "RH Nichols",
        "assigned_to": "",
        "due_date": "15 Dec, 2020",
        "status": "Inprogress",
        "priority": "Medium"
    },
    {
        "id": "#VLZ12",
        "project": "Project Alpha",
        "task": "Database Migration",
        "client_name": "Tech Corp",
        "assigned_to": "Sarah Johnson",
        "due_date": "22 Jul, 2025",
        "status": "Pending",
        "priority": "High"
    },
    {
        "id": "#VLZ13",
        "project": "E-commerce Platform",
        "task": "Payment Gateway Integration",
        "client_name": "ShopEasy",
        "assigned_to": "Mike Chen",
        "due_date": "25 Jul, 2025",
        "status": "Inprogress",
        "priority": "Medium"
    },
    {
        "id": "#VLZ14",
        "project": "Mobile App v2.1",
        "task": "UI/UX Redesign",
        "client_name": "StartupXYZ",
        "assigned_to": "Emma Wilson",
        "due_date": "30 Jul, 2025",
        "status": "Pending",
        "priority": "Medium"
    },
    {
        "id": "#VLZ15",
        "project": "CRM System",
        "task": "Customer Analytics Dashboard",
        "client_name": "Business Solutions Inc",
        "assigned_to": "David Rodriguez",
        "due_date": "02 Aug, 2025",
        "status": "Inprogress",
        "priority": "Low"
    },
    {
        "id": "#VLZ16",
        "project": "Website Redesign",
        "task": "Homepage Layout",
        "client_name": "Creative Agency",
        "assigned_to": "Lisa Park",
        "due_date": "05 Aug, 2025",
        "status": "Pending",
        "priority": "Medium"
    },
    {
        "id": "#VLZ17",
        "project": "API Development",
        "task": "REST API Documentation",
        "client_name": "DataFlow Ltd",
        "assigned_to": "Alex Thompson",
        "due_date": "08 Aug, 2025",
        "status": "Inprogress",
        "priority": "High"
    },
    {
        "id": "#VLZ18",
        "project": "Cloud Migration",
        "task": "Server Configuration",
        "client_name": "Enterprise Solutions",
        "assigned_to": "Rachel Green",
        "due_date": "10 Aug, 2025",
        "status": "Pending",
        "priority": "Low"
    },
    {
        "id": "#VLZ19",
        "project": "Security Audit",
        "task": "Vulnerability Assessment",
        "client_name": "SecureBank",
        "assigned_to": "John Smith",
        "due_date": "12 Aug, 2025",
        "status": "Inprogress",
        "priority": "High"
    },
    {
        "id": "#VLZ20",
        "project": "Marketing Platform",
        "task": "Email Campaign Module",
        "client_name": "MarketPro",
        "assigned_to": "Anna Lee",
        "due_date": "15 Aug, 2025",
        "status": "Pending",
        "priority": "Medium"
    },
    {
        "id": "#VLZ21",
        "project": "Inventory Management",
        "task": "Stock Tracking System",
        "client_name": "Retail Chain Co",
        "assigned_to": "Tom Wilson",
        "due_date": "18 Aug, 2025",
        "status": "Inprogress",
        "priority": "Low"
    },
    {
        "id": "#VLZ22",
        "project": "Learning Management",
        "task": "Quiz Module Development",
        "client_name": "EduTech",
        "assigned_to": "Sophie Brown",
        "due_date": "20 Aug, 2025",
        "status": "Pending",
        "priority": "Medium"
    },
    {
        "id": "#VLZ23",
        "project": "IoT Dashboard",
        "task": "Real-time Data Visualization",
        "client_name": "SmartHome Inc",
        "assigned_to": "Carlos Martinez",
        "due_date": "22 Aug, 2025",
        "status": "Inprogress",
        "priority": "High"
    },
    {
        "id": "#VLZ24",
        "project": "Social Media Tool",
        "task": "Content Scheduler",
        "client_name": "Social Buzz",
        "assigned_to": "Maya Patel",
        "due_date": "25 Aug, 2025",
        "status": "Pending",
        "priority": "Medium"
    }
];
