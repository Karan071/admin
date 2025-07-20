import { Button } from "@/components/ui/button";
import {
    Search,
    Building2,
    Filter,
    Check,
    X,
    MapIcon,
    ScrollText,
    GraduationCap,
    Handshake,
    ClipboardList,
    FileDown,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
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
import { OrgReview, CoachReview, FormsDataReview, GoogleMapReview } from "@/data/Data";
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
        title: "Coach Profiles",
        value: "34",
        icon: Users,
        performance: Up,
    },
    {
        title: "Organisation Profiles",
        value: "12",
        icon: Building2,
        performance: Up,
    },
    {
        title: "Map Listings",
        value: "7",
        icon: MapIcon,
        performance: Down,
    },
    {
        title: "Forms Data Submissions",
        value: "15",
        icon: ScrollText,
        performance: Up,
    },
];

export function Approvals() {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[var(--text-head)]">Approvals</h1>
                <StatsCards />
                {/*<Buttonbar />*/}
                <Button
                    variant="border"
                    onClick={() => setShowFilter(true)}
                    className="flex items-center gap-2 self-end"
                >
                    <Filter className="h-4 w-4" />
                    {showFilter ? "Hide Filters" : "Show Filters"}
                </Button>

                {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}


                <ApprovalTable />
            </div>
        </div>
    );
}

interface FilterProps {
    onClose: () => void;
}


function AdvancedFilters({ onClose }: FilterProps) {
    const modalRef = React.useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState("General");

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

    const [type, setType] = useState("Coach");

    const tabList = [
        "General",
        "type",
        "Submitted Date",
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
                        {activeTab === "General" && (
                            <>
                                <label htmlFor="Gen" className="text-[var(--text)]">Enter Name/Email/Phone :</label>
                                <Input id="Gen" placeholder="Enter .." type="text" className="mt-4 w-full " />

                            </>
                        )}

                        {activeTab === "type" && (
                            <>
                                <p className="text-sm text-[var(--text-head)] mb-4">
                                    Select the Approval Type:
                                </p>
                                <div className="flex flex-col gap-4 text-[var(--text)] ">
                                    {[
                                        "Coach",
                                        "Organisation",
                                        "Map Listing",
                                        "Form Data",
                                    ].map((option) => (
                                        <RadioButton
                                            key={option}
                                            label={option}
                                            value={option}
                                            selected={type}
                                            onChange={setType}
                                        />
                                    ))}
                                </div>
                            </>
                        )}


                        {activeTab === "Submitted Date" && (
                            <>
                                <label htmlFor="act" className="text-[var(--text)]">Choose by Submittion Date:</label>
                                <div className="mt-4 min-w-full">
                                    <DatePicker />
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




function ApprovalTable() {
    const [activeTab, setActiveTab] = useState("Coach");
    const [selectedSessions, setSelectedSessions] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState({
        key: "id",
        direction: "ascending"
    });

    interface ItemWithId {
        id: number;
        [key: string]: any;
    }
    const [selectedCoachStack, setSelectedCoachStack] = useState<ItemWithId[]>([]);
    const [focusedCoachId, setFocusedCoachId] = useState<number | null>(null);;

    const getCurrentData = () => {
        switch (activeTab) {
            case "Coach": return CoachReview;
            case "Org": return OrgReview;
            case "Map": return GoogleMapReview;
            case "Form": return FormsDataReview;
            default: return [];
        }
    };

    const currentData = getCurrentData();
    let sortedData = [...currentData] as Record<string, any>[];
    if (
        sortConfig &&
        typeof sortConfig.key === "string" &&
        typeof sortConfig.direction === "string"
    ) {
        sortedData = sortedData.filter(item => item && typeof item === "object");

        sortedData.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue === undefined || bValue === undefined) return 0;

            if (typeof aValue === "string" && typeof bValue === "string") {
                return sortConfig.direction === "ascending"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            if (typeof aValue === "number" && typeof bValue === "number") {
                return sortConfig.direction === "ascending"
                    ? aValue - bValue
                    : bValue - aValue;
            }

            return 0;
        });
    }




    const totalPages = Math.ceil(sortedData.length / recordsPerPage);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

    const requestSort = (key: any) => {
        let direction = "ascending";

        if (sortConfig?.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        setSortConfig({ key, direction });
    };

    const toggleSelectAll = () => {
        if (selectedSessions.length === currentRecords.length) {
            setSelectedSessions([]);
        } else {
            setSelectedSessions(currentRecords.map((item) => item.id || item.coach));
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

    const handleRowClick = (user: ItemWithId) => {
        const exists = selectedCoachStack.find((c) => c.id === user.id);
        if (!exists) {
            setSelectedCoachStack((prev) => [user, ...prev].slice(0, 5));
            setFocusedCoachId(user.id);
        } else {
            bringToTop(user.id);
        }
    };

    const toggleSelectUser = (userId: number) => {
        if (selectedSessions.includes(userId)) {
            setSelectedSessions(selectedSessions.filter((id) => id !== userId));
        } else {
            setSelectedSessions([...selectedSessions, userId]);
        }
    };


    useEffect(() => {
        const allRows = document.querySelectorAll("tr[data-id]");
        allRows.forEach((row) => {
            const id = Number(row.getAttribute("data-id"));
            const isInStack = (selectedCoachStack as ItemWithId[]).some((coach) => coach.id === id);
            const isTop = focusedCoachId === id;
            row.classList.remove("bg-[var(--brand-color3)]", "border-l-[var(--brand-color)]");
            if (isInStack) {
                row.classList.add("bg-[var(--brand-color3)]");
                if (isTop) {
                    row.classList.add("border-l-[var(--brand-color)]");
                }
            }
        });
    }, [selectedCoachStack, focusedCoachId]);

    // getTableHeaders and renderTableCells must be moved **outside** the return
    const getTableHeaders = () => {
        switch (activeTab) {
            case "Coach":
                return (
                    <>
                        <TableHead onClick={() => requestSort("name")} className="cursor-pointer text-[var(--text)]">
                            Name {sortConfig?.key === "name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("email")} className="cursor-pointer text-[var(--text)]">
                            Email {sortConfig?.key === "email" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("phone")} className="cursor-pointer text-[var(--text)]">
                            Phone {sortConfig?.key === "phone" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("speciality")} className="cursor-pointer text-[var(--text)]">
                            Speciality {sortConfig?.key === "speciality" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("submittedOn")} className="cursor-pointer text-[var(--text)]">
                            Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("profile")} className="cursor-pointer text-[var(--text)]">
                            Profile {sortConfig?.key === "profile" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>

                    </>
                );

            case "Org":
                return (
                    <>
                        <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                            Organisation {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("location")} className="cursor-pointer text-[var(--text)]">
                            Location {sortConfig?.key === "location" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("contact")} className="cursor-pointer text-[var(--text)]">
                            Contact {sortConfig?.key === "contact" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Type")} className="cursor-pointer text-[var(--text)]">
                            Type {sortConfig?.key === "Type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("submittedOn")} className="cursor-pointer text-[var(--text)]">
                            Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Docs")} className="cursor-pointer text-[var(--text)]">
                            Docs {sortConfig?.key === "Docs" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>

                    </>
                );

            case "Map":
                return (
                    <>
                        <TableHead onClick={() => requestSort("Listing")} className="cursor-pointer text-[var(--text)]">
                            Listing {sortConfig?.key === "Listing" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Address")} className="cursor-pointer text-[var(--text)]">
                            Address {sortConfig?.key === "Address" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Linked Org")} className="cursor-pointer text-[var(--text)]">
                            Linked Org {sortConfig?.key === "Linked Org" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("submittedOn")} className="cursor-pointer text-[var(--text)]">
                            Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Map Preview")} className="cursor-pointer text-[var(--text)]">
                            Map Preview {sortConfig?.key === "Map Preview" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>

                    </>
                );

            case "Form":
                return (
                    <>
                        <TableHead onClick={() => requestSort("User")} className="cursor-pointer text-[var(--text)]">
                            User {sortConfig?.key === "User" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Type")} className="cursor-pointer text-[var(--text)]">
                            Type {sortConfig?.key === "Type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Name")} className="cursor-pointer text-[var(--text)]">
                            Name {sortConfig?.key === "Name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Location")} className="cursor-pointer text-[var(--text)]">
                            Location {sortConfig?.key === "Location" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("submittedOnn")} className="cursor-pointer text-[var(--text)]">
                            Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead onClick={() => requestSort("Entry")} className="cursor-pointer text-[var(--text)]">
                            Entry {sortConfig?.key === "Entry" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                        </TableHead>
                    </>
                );

            default:
                return null;
        }
    };

    const renderTableCells = (session: Record<string, any>) => {
        switch (activeTab) {
            case "Coach":
                return (
                    <>
                        <TableCell className="font-medium">{session.name}</TableCell>
                        <TableCell>{session.email}</TableCell>
                        <TableCell>{session.phone}</TableCell>
                        <TableCell><Badge variant="border">{session.speciality}</Badge></TableCell>
                        <TableCell>{session.submittedOn}</TableCell>
                        <TableCell>
                            <Badge variant="border">
                                {session.Profile}
                            </Badge>
                        </TableCell>
                    </>
                );

            case "Org":
                return (
                    <>
                        <TableCell className="font-medium">{session.organization}</TableCell>
                        <TableCell>{session.location}</TableCell>
                        <TableCell>{session.contact}</TableCell>
                        <TableCell><Badge variant="border">{session.Type}</Badge></TableCell>
                        <TableCell>{session.submittedOn}</TableCell>
                        <TableCell>
                            <Badge variant="border">
                                {session.Docs}
                            </Badge>
                        </TableCell>
                    </>
                );

            case "Map":
                return (
                    <>
                        <TableCell className="font-medium">{session.Listing}</TableCell>
                        <TableCell>{session.Address}</TableCell>
                        <TableCell>{session.LinkedOrg}</TableCell>
                        <TableCell>{session.submittedOn}</TableCell>
                        <TableCell>
                            <Badge variant="border">
                                {session.MapPreview}
                            </Badge>
                        </TableCell>
                    </>
                );

            case "Form":
                return (
                    <>
                        <TableCell className="font-medium">{session.User}</TableCell>
                        <TableCell>{session.Type}</TableCell>
                        <TableCell>{session.Name}</TableCell>
                        <TableCell>{session.Address}</TableCell>
                        <TableCell>{session.submittedOn}</TableCell>
                        <TableCell>
                            <Badge variant="border">
                                {session.Entry}
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
                    variant={activeTab === "Coach" ? "brand" : "border"}
                    className="rounded-b-none rounded-r-lg"
                    onClick={() => {
                        setActiveTab("Coach");
                        setCurrentPage(1);
                        setSelectedSessions([]);
                    }}
                >
                    Coach Profiles
                </Button>
                <Button
                    variant={activeTab === "Org" ? "brand" : "border"}
                    className="rounded-b-none rounded-r-lg flex items-center gap-2"
                    onClick={() => {
                        setActiveTab("Org");
                        setCurrentPage(1);
                        setSelectedSessions([]);
                    }}
                >
                    <GraduationCap className="h-4 w-4" />
                    <span>Organisation Profiles</span>
                </Button>
                <Button
                    variant={activeTab === "Map" ? "brand" : "border"}
                    className="rounded-b-none rounded-r-lg flex items-center gap-2"
                    onClick={() => {
                        setActiveTab("Map");
                        setCurrentPage(1);
                        setSelectedSessions([]);
                    }}
                >
                    <Handshake className="h-4 w-4" />
                    <span>Google Map Listings</span>
                </Button>
                <Button
                    variant={activeTab === "Form" ? "brand" : "border"}
                    className="rounded-b-none rounded-r-lg flex items-center gap-2"
                    onClick={() => {
                        setActiveTab("Form");
                        setCurrentPage(1);
                        setSelectedSessions([]);
                    }}
                >
                    <ClipboardList className="h-4 w-4" />
                    <span>Forms Data</span>
                </Button>
            </div>

            {/* Table Controls */}
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto">
                <div className="flex items-center justify-between border-b h-20 p-4">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="select-all"
                            checked={selectedSessions.length === currentRecords.length && currentRecords.length > 0}
                            onCheckedChange={toggleSelectAll}
                        />
                        <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                            Select All
                        </label>
                        {selectedSessions.length > 0 && (
                            <Badge variant="border" className="ml-2">
                                {selectedSessions.length} selected
                            </Badge>
                        )}
                        {selectedSessions.length > 0 && (
                            <div className="flex gap-2 ml-4">
                                <Button variant="border" size="sm">
                                    <Check className="h-4 w-4 text-[var(--green)]" />
                                    Approve
                                </Button>
                                <Button variant="delete" size="sm">
                                    <X className="h-4 w-4 text-[var(--red)]" />
                                    Reject
                                </Button>
                                <Button variant="border" size="sm">
                                    <FileDown className="h-4 w-4" />
                                    Export
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-md overflow-hidden bg-[var(--faded)]">
                            <Input
                                placeholder="Search"
                                className="border-none focus:ring-0 focus:outline-none px-2 py-1 w-40"
                            />
                            <Button type="submit" size="icon" variant="default" className="bg-[var(--button)] rounded-none rounded-r-md">
                                <Search className="h-5 w-5 text-[var(--text)]" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto text-[var(--text)] w-full">
                    <Table className="w-full border-collapse">
                        <TableHeader className="bg-[var(--faded)]">
                            <TableRow>
                                <TableHead className="min-w-[40px]"></TableHead>
                                {getTableHeaders()}
                                <TableHead className="text-[var(--text)]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentRecords.map((session) => (
                                <TableRow
                                    key={session.id}
                                    data-id={session.id}
                                    className={cn(
                                        "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                                        selectedCoachStack.some((c) => c.id === session.id)
                                            ? "bg-[var(--brand-color3)]"
                                            : ""
                                    )}
                                    onClick={() => {
                                        toggleSelectUser(session.id);
                                        handleRowClick(session as ItemWithId);
                                    }}
                                >
                                    <TableCell
                                        className={cn(
                                            "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                                            selectedCoachStack.some((c) => c.id === session.id)
                                                ? focusedCoachId === session.id
                                                    ? "border-[var(--brand-color)]"
                                                    : "border-transparent"
                                                : "border-transparent"
                                        )}
                                    >
                                        <Checkbox
                                            checked={selectedSessions.includes(session.id)}
                                            onClick={(e) => e.stopPropagation()}
                                            onCheckedChange={() => toggleSelectUser(session.id)}
                                        />
                                    </TableCell>
                                    {renderTableCells(session)}
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="noborder" size="icon"><Check className="h-4 w-4 text-[var(--green)]" /></Button>
                                            <Button variant="noborder" size="icon"><X className="h-4 w-4 text-[var(--red)]" /></Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="flex items-center gap-2">
                                    {recordsPerPage}
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[var(--background)] text-[var(--text)]">
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
                        <span className="text-[var(--text)]">
                            Showing {indexOfFirstRecord + 1}–
                            {Math.min(indexOfLastRecord, sortedData.length)} of {sortedData.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
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
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

