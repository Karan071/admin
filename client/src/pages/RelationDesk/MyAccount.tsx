import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AccountTable } from "@/data/Data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, ChevronLeft, Eye, Search, X, Bell, Check, Phone, Mail, MessageCircle, Notebook } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AnimatePresence, motion } from "framer-motion";

export function MyAccounts() {
    return (
        <div>
            <h1>My Account</h1>
            <TopBar />
            <AccountTableComponent />
        </div>
    )
}

function TopBar() {
    return (
        <div className="mt-2 flex justify-between items-center mb-4 p-4 bg-[var(--background)] rounded-lg">
            {/* Left Section */}
            <div className="flex items-center gap-5">
                <Button variant="border" size="sm" className="text-sm px-3 py-1.5">
                    🔙 Back to Relations Desk
                </Button>
                <div className="text-sm font-semibold text-[var(--text)]">
                    📛 Aisha Khan <span className="text-[var(--text-low)] font-normal">(Account Manager)</span>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <div className="text-xs text-[var(--text-low)]">
                    📅 Managing Until: <span className="text-[var(--text)] font-medium">Jan 6, 2026</span>{" "}
                    <span className="text-[var(--text-low)]">(180 Days)</span>
                </div>
                <Button variant="border" size="sm" className="text-sm px-3 py-1.5">
                    🔁 Transfer Account
                </Button>
                <Button variant="brand" size="sm" className="text-sm px-3 py-1.5">
                    ⏰ Overdue Followups
                </Button>
            </div>
        </div>
    );
}

function AccountTableComponent() {
    const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "ascending" | "descending" } | null>(null);
    const [selectedAccountStack, setSelectedAccountStack] = useState<typeof AccountTable>(AccountTable[0] ? [AccountTable[0]] : []);
    const [focusedAccountId, setFocusedAccountId] = useState<number | null>(AccountTable[0]?.id || null);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter data based on search term
    const filteredData = AccountTable.filter(account =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.lastActivity.toLowerCase().includes(searchTerm.toLowerCase())
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
        if (selectedAccounts.length === currentRecords.length) {
            setSelectedAccounts([]);
        } else {
            setSelectedAccounts(currentRecords.map(account => account.id));
        }
    };

    const bringToTop = (accountId: number) => {
        const account = selectedAccountStack.find(a => a.id === accountId);
        if (account) {
            setSelectedAccountStack(prev => [
                account,
                ...prev.filter(a => a.id !== accountId),
            ]);
            setFocusedAccountId(accountId);
        }
    };

    const removeAccount = (accountId: number) => {
        setSelectedAccountStack(prev => prev.filter(a => a.id !== accountId));
        if (focusedAccountId === accountId) {
            setFocusedAccountId(null);
        }
    };

    const handleRowClick = (account: typeof AccountTable[0]) => {
        const exists = selectedAccountStack.find(a => a.id === account.id);
        if (!exists) {
            setSelectedAccountStack(prev => {
                const updated = [account, ...prev];
                return updated.slice(0, 5); // limit to 5
            });
            setFocusedAccountId(account.id);
        } else {
            bringToTop(account.id);
        }
    };

    const toggleSelectAccount = (accountId: number) => {
        if (selectedAccounts.includes(accountId)) {
            setSelectedAccounts(selectedAccounts.filter(id => id !== accountId));
        } else {
            setSelectedAccounts([...selectedAccounts, accountId]);
        }
    };

    return (
        <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap ">
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
                <div className="flex items-center justify-between border-b h-20 p-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="select-all"
                                checked={selectedAccounts.length === currentRecords.length && currentRecords.length > 0}
                                onCheckedChange={toggleSelectAll}
                            />
                            <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                                Select All
                            </label>
                            {selectedAccounts.length > 0 && (
                                <Badge variant="secondary" className="bg-[var(--faded)] text-[var(--text)]">
                                    {selectedAccounts.length} selected
                                </Badge>
                            )}
                        </div>

                        {selectedAccounts.length > 0 && (
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
                                placeholder="Search accounts..."
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
                                    onClick={() => requestSort("lastActivity")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Last Activity {sortConfig?.key === "lastActivity" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead
                                    onClick={() => requestSort("nextFollowUp")}
                                    className="cursor-pointer text-[var(--text)]"
                                >
                                    Next Followup {sortConfig?.key === "nextFollowUp" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
                            {currentRecords.map((account) => (
                                <TableRow
                                    key={account.id}
                                    data-id={account.id}
                                    className={cn(
                                        "cursor-pointer group hover:bg-[var(--brand-color2)]",
                                        selectedAccountStack.some(a => a.id === account.id) ? "bg-[var(--brand-color3)]" : ""
                                    )}
                                    onClick={() => {
                                        toggleSelectAccount(account.id);
                                        handleRowClick(account);
                                    }}
                                >
                                    <TableCell className="w-10">
                                        <Checkbox
                                            checked={selectedAccounts.includes(account.id)}
                                            onClick={(e) => e.stopPropagation()}
                                            onCheckedChange={() => toggleSelectAccount(account.id)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium text-[var(--text)]">{account.name}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="standard">{account.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-[var(--text)]">{account.lastActivity}</TableCell>
                                    <TableCell>
                                        <Badge className="bg-[var(--faded)] text-[var(--text)]">{account.nextFollowUp}</Badge>
                                    </TableCell>
                                    <TableCell className="text-[var(--text)]">{account.stage}</TableCell>
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
                                                <span className="text-sm"><Notebook /></span>
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
                            Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, sortedData.length)} of {sortedData.length} accounts
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
                        {selectedAccountStack.map((account, index) => {
                            const isTopCard = account.id === focusedAccountId || (focusedAccountId === null && index === 0);
                            const cardIndex = selectedAccountStack.length - 1 - index;

                            return (
                                <motion.div
                                    key={account.id}
                                    className="absolute left-0 right-0 mx-auto w-full cursor-pointer"
                                    style={{
                                        top: `${cardIndex * 20}px`,
                                        zIndex: isTopCard ? 100 : 10 + cardIndex,
                                    }}
                                    onClick={() => bringToTop(account.id)}
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
                                                    {account.name}
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeAccount(account.id);
                                                    }}
                                                    className="text-[var(--red)] hover:text-[var(--red-dark)] text-lg"
                                                >
                                                    <X />
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
                                                    <h1 className="text-xl font-semibold text-[var(--text-head)]">{account.name}</h1>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="standard">{account.type}</Badge>
                                                        <Badge variant="standard">{account.lastActivity}</Badge>
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
                                                        <h3 className="font-medium text-[var(--text-low)]">LAST ACTIVITY</h3>
                                                        <p className="mt-1 text-[var(--text)]">{account.lastActivity}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-[var(--text-low)]">NEXT FOLLOWUP</h3>
                                                        <p className="mt-1 font-medium text-[var(--text)]">{account.nextFollowUp}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-[var(--text-low)]">STAGE</h3>
                                                        <div className="mt-1">
                                                            <Badge variant="standard">{account.stage}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 mt-4">
                                                        <Button variant="brand" size="sm" className="flex-1">
                                                            <Check className="h-4 w-4 mr-2" />
                                                            Mark Done
                                                        </Button>
                                                        <Button variant="border" size="sm" className="flex-1">
                                                            <Notebook />
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