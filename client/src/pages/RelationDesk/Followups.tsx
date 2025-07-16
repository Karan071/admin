import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { FollowupTable } from "@/data/Data";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, ChevronLeft, Eye, Search, X, Bell, Check, Phone, Mail, MessageCircle, Notebook } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AnimatePresence, motion } from "framer-motion";

export function Followup() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-[var(--text-head)]">Followup</h1>
            <Topbar />
            <FollowupComponent />
        </div>
    )
}

function Topbar() {
    return (
        <div className="flex justify-between items-center mb-4 p-4 bg-[var(--background)] rounded-lg">
            <div className="flex items-center gap-4">
                <Button variant="border" size="sm">
                    Back to Relation Desk
                </Button>
                <div className="font-medium text-[var(--text)]">Aisha (Account Manager)</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-sm text-[var(--text-low)]">Managing until (180 days)</div>
                <Button variant="border" size="sm">Transfer Account</Button>
                <Button variant="brand" size="sm">OrderDue Followups</Button>
            </div>
        </div>
    )
}

function FollowupComponent() {
    const [selectedFollowups, setSelectedFollowups] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "ascending" | "descending" } | null>(null);
    const [selectedFollowupStack, setSelectedFollowupStack] = useState<typeof FollowupTable>(FollowupTable[0] ? [FollowupTable[0]] : []);
    const [focusedFollowupId, setFocusedFollowupId] = useState<number | null>(FollowupTable[0]?.id || null);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter data based on search term
    const filteredData = FollowupTable.filter(followup => 
        followup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        followup.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        followup.concern.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting logic
    const sortedData = [...filteredData];
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
    const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

    const requestSort = (key: string) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const toggleSelectAll = () => {
        if (selectedFollowups.length === currentRecords.length) {
            setSelectedFollowups([]);
        } else {
            setSelectedFollowups(currentRecords.map(followup => followup.id));
        }
    };

    const bringToTop = (followupId: number) => {
        const followup = selectedFollowupStack.find(f => f.id === followupId);
        if (followup) {
            setSelectedFollowupStack(prev => [
                followup,
                ...prev.filter(f => f.id !== followupId),
            ]);
            setFocusedFollowupId(followupId);
        }
    };

    const removeFollowup = (followupId: number) => {
        setSelectedFollowupStack(prev => prev.filter(f => f.id !== followupId));
        if (focusedFollowupId === followupId) {
            setFocusedFollowupId(null);
        }
    };

    const handleRowClick = (followup: typeof FollowupTable[0]) => {
        const exists = selectedFollowupStack.find(f => f.id === followup.id);
        if (!exists) {
            setSelectedFollowupStack(prev => {
                const updated = [followup, ...prev];
                return updated.slice(0, 5); // limit to 5
            });
            setFocusedFollowupId(followup.id);
        } else {
            bringToTop(followup.id);
        }
    };

    const toggleSelectFollowup = (followupId: number) => {
        if (selectedFollowups.includes(followupId)) {
            setSelectedFollowups(selectedFollowups.filter(id => id !== followupId));
        } else {
            setSelectedFollowups([...selectedFollowups, followupId]);
        }
    };

    return (
        <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
                <div className="flex items-center justify-between border-b h-20 p-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="select-all"
                                checked={selectedFollowups.length === currentRecords.length && currentRecords.length > 0}
                                onCheckedChange={toggleSelectAll}
                            />
                            <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                                Select All
                            </label>
                            {selectedFollowups.length > 0 && (
                                <Badge variant="secondary" className="bg-[var(--faded)] text-[var(--text)]">
                                    {selectedFollowups.length} selected
                                </Badge>
                            )}
                        </div>

                        {selectedFollowups.length > 0 && (
                            <div className="flex gap-2">
                                <Button variant="border" size="sm">
                                    <Bell className="h-4 w-4 mr-2" />
                                    Send Reminder
                                </Button>
                                <Button variant="border" size="sm">
                                    <Check className="h-4 w-4 mr-2" />
                                    Mark as Done
                                </Button>
                                <Button variant="delete" size="sm">
                                    <X className="h-4 w-4 mr-2" />
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative bg-[var(--faded)] rounded-md overflow-hidden">
                            <Input
                                placeholder="Search followups..."
                                className="pl-8 pr-4 py-2 w-48 sm:w-64 bg-transparent border-none focus:ring-0"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--text-low)]" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto w-full text-[var(--text)]">
                    <Table>
                        <TableHeader className="bg-[var(--faded)]">
                            <TableRow>
                                <TableHead className="w-10"></TableHead>
                                <TableHead 
                                    onClick={() => requestSort("name")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Name {sortConfig?.key === "name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead 
                                    onClick={() => requestSort("type")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Type {sortConfig?.key === "type" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead 
                                    onClick={() => requestSort("leadType")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Lead Type {sortConfig?.key === "leadType" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead 
                                    onClick={() => requestSort("concern")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Concern {sortConfig?.key === "concern" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead 
                                    onClick={() => requestSort("nextFollowup")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Next Followup {sortConfig?.key === "nextFollowup" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead 
                                    onClick={() => requestSort("stage")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Stage {sortConfig?.key === "stage" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead className="text-[var(--text)]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentRecords.map((followup) => (
                                <TableRow
                                    key={followup.id}
                                    data-id={followup.id}
                                    className={cn(
                                        "cursor-pointer group hover:bg-[var(--brand-color2)]",
                                        selectedFollowupStack.some(f => f.id === followup.id) ? "bg-[var(--brand-color3)]" : ""
                                    )}
                                    onClick={() => {
                                        toggleSelectFollowup(followup.id);
                                        handleRowClick(followup);
                                    }}
                                >
                                    <TableCell className="w-10">
                                        <Checkbox
                                            checked={selectedFollowups.includes(followup.id)}
                                            onClick={(e) => e.stopPropagation()}
                                            onCheckedChange={() => toggleSelectFollowup(followup.id)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium text-[var(--text)]">{followup.name}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="standard">{followup.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-[var(--text)]">{followup.leadType}</TableCell>
                                    <TableCell className="text-[var(--text)]">{followup.concern}</TableCell>
                                    <TableCell>
                                        <Badge className="bg-[var(--faded)] text-[var(--text)]">{followup.nextFollowup}</Badge>
                                    </TableCell>
                                    <TableCell className="text-[var(--text)]">{followup.stage}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                                className="bg-[var(--background)]"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // view logic
                                                }}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                                className="bg-[var(--background)]"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // done logic
                                                }}
                                            >
                                                <Check className="h-4 w-4 text-[var(--green)]" />
                                            </Button>
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                                className="bg-[var(--background)]"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // note logic
                                                }}
                                            >
                                                <span className="text-sm"><Notebook/></span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-between p-4 border-t">
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="border" className="flex items-center gap-2 text-[var(--text)]">
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
                                        className="focus:bg-[var(--faded)]"
                                    >
                                        {size}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <span className="text-sm text-[var(--text-low)]">
                            Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, sortedData.length)} of {sortedData.length} followups
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="border"
                            size="icon"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="xl:block hidden w-[var(--sidebar-width)]">
                <div className="h-[500px] sticky top-4">
                    <AnimatePresence>
                        {selectedFollowupStack.map((followup, index) => {
                            const isTopCard = followup.id === focusedFollowupId || (focusedFollowupId === null && index === 0);
                            const cardIndex = selectedFollowupStack.length - 1 - index;

                            return (
                                <motion.div
                                    key={followup.id}
                                    className="absolute left-0 right-0 mx-auto w-full cursor-pointer"
                                    style={{
                                        top: `${cardIndex * 20}px`,
                                        zIndex: isTopCard ? 100 : 10 + cardIndex,
                                    }}
                                    onClick={() => bringToTop(followup.id)}
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
                                        className="relative border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--background)]"
                                        whileTap={isTopCard ? { scale: 0.98 } : {}}
                                    >
                                        {!isTopCard && (
                                            <motion.div
                                                className="flex items-center justify-between px-4 py-2 bg-[var(--faded)] rounded-t-lg z-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <div className="text-sm font-medium text-[var(--text)] truncate">
                                                    {followup.name}
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFollowup(followup.id);
                                                    }}
                                                    className="text-[var(--red)] hover:text-[var(--red-dark)] text-lg"
                                                >
                                                    <X/>
                                                </button>
                                            </motion.div>
                                        )}

                                        {isTopCard && (
                                            <motion.div
                                                className="flex flex-col p-6"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="flex-col">
                                                    <h1 className="text-xl font-semibold text-[var(--text-head)]">{followup.name}</h1>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="standard">{followup.type}</Badge>
                                                        <Badge variant="standard">{followup.leadType}</Badge>
                                                    </div>

                                                    <div className="flex justify-center gap-3 mt-4">
                                                        <motion.button
                                                            className="bg-[var(--green2)] rounded-full p-2 hover:bg-[var(--green2-dark)] transition-colors"
                                                            title="Call"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Phone className="w-5 h-5 text-[var(--green)]" />
                                                        </motion.button>
                                                        <motion.button
                                                            className="bg-[var(--red2)] rounded-full p-2 hover:bg-[var(--red2-dark)] transition-colors"
                                                            title="Email"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Mail className="w-5 h-5 text-[var(--red)]" />
                                                        </motion.button>
                                                        <motion.button
                                                            className="bg-[var(--yellow2)] rounded-full p-2 hover:bg-[var(--yellow2-dark)] transition-colors"
                                                            title="Message"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <MessageCircle className="w-5 h-5 text-[var(--yellow)]" />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                                <div className="mt-6 space-y-4">
                                                    <div>
                                                        <h3 className="font-medium text-[var(--text-low)]">CONCERN</h3>
                                                        <p className="mt-1 text-[var(--text)]">{followup.concern}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-[var(--text-low)]">NEXT FOLLOWUP</h3>
                                                        <p className="mt-1 font-medium text-[var(--text)]">{followup.nextFollowup}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-[var(--text-low)]">STAGE</h3>
                                                        <div className="mt-1">
                                                            <Badge variant="standard">{followup.stage}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 mt-4">
                                                        <Button variant="brand" size="sm" className="flex-1">
                                                            <Check className="h-4 w-4 mr-2" />
                                                            Mark Done
                                                        </Button>
                                                        <Button variant="border" size="sm" className="flex-1">
                                                            <Notebook/>
                                                            <span>Note</span>
                                                        </Button>
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