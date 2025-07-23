import { Flag, MessageCircle, Search, X, Check, Bell, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
    OrgReview
} from "@/data/Data";
import { cn } from "@/lib/utils";
import { useEffect } from "react";




export function Organisation() {
    return (
        <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-bold text-[var(--text-head)]">Organization</h1>
            <OrganizarionTable/>
        </div>
    )
}


function OrganizarionTable() {
    const [activeTab, setActiveTab] = useState("Collage");
    const [selected, setSelected] = useState<number[]>([]);
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
    const [selectedStack, setSelectedStack] = useState<ItemWithId[]>([]);
    const [focusedId, setFocusedId] = useState<number | null>(null);;

    const getCurrentData = () => {
    switch (activeTab) {
      case "Collage": return OrgReview;  /* For dummy data Same Data is Used*/
      case "Companies": return OrgReview;
      case "institutes": return OrgReview;
      case "Ngos": return OrgReview;
      case "Schools": return OrgReview;
      case "Universities": return OrgReview;
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
  if (selected.length === currentRecords.length) {
    setSelected([]);
  } else {
    setSelected(currentRecords.map((item) => item.id));
  }
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

    const handleRowClick = (user: ItemWithId) => {
        const exists = selectedStack.find((c) => c.id === user.id);
        if (!exists) {
            setSelectedStack((prev) => [user, ...prev].slice(0, 5));
            setFocusedId(user.id);
        } else {
            bringToTop(user.id);
        }
    };

    const toggleSelectUser = (userId: number) => {
        if (selected.includes(userId)) {
            setSelected(selected.filter((id) => id !== userId));
        } else {
            setSelected([...selected, userId]);
        }
    };


    useEffect(() => {
        const allRows = document.querySelectorAll("tr[data-id]");
        allRows.forEach((row) => {
            const id = Number(row.getAttribute("data-id"));
            const isInStack = (selectedStack as ItemWithId[]).some((coach) => coach.id === id);
            const isTop = focusedId === id;
            row.classList.remove("bg-[var(--brand-color3)]", "border-l-[var(--brand-color)]");
            if (isInStack) {
                row.classList.add("bg-[var(--brand-color3)]");
                if (isTop) {
                    row.classList.add("border-l-[var(--brand-color)]");
                }
            }
        });
    }, [selectedStack, focusedId]);


    // getTableHeaders and renderTableCells must be moved **outside** the return
     const getTableHeaders = () => {
    switch (activeTab) {
      case "Collage":
        return (
            <>
                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                    Collages {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
            </>
        );

      case "Companies":
        return (
          <>
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
            </>
        );

      case "institutes":
        return (
          <>
                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                    institutes {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
            </>
        );

      case "Ngos":
        return (
          <>
                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                    Ngos {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
            </>
        );

      case "Schools":
        return (
          <>
                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                    Schools {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
            </>
        );

      case "Universities":
        return (
          <>
                <TableHead onClick={() => requestSort("organisation")} className="cursor-pointer text-[var(--text)]">
                    Universities {sortConfig?.key === "organisation" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
            </>
        );



      default:
        return null;
    }
  };

    const renderTableCells = (user: any) => {
    switch (activeTab) {
      case "Collage":
            return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
                        </Badge>
                    </TableCell>
                </>
            );

      case "Companies":
        return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
                        </Badge>
                    </TableCell>
                </>
            );

      case "institutes":
        return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
                        </Badge>
                    </TableCell>
                </>
            );

      case "Ngos":
        return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
                        </Badge>
                    </TableCell>
                </>
            );

            case "Schools":
        return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
                        </Badge>
                    </TableCell>
                </>
            );


            case "Universities":
        return (
                <>
                    <TableCell className="font-medium">{user.organization}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.submittedOn}</TableCell>
                    <TableCell>
                        <Badge variant="border">
                            {user.Docs}
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
          variant={activeTab === "Collage" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg"
          onClick={() => {
            setActiveTab("Collage");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          Collage
        </Button>
        <Button
          variant={activeTab === "Companies" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("Companies");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          <span>Companies</span>
        </Button>
        <Button
          variant={activeTab === "institutes" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("institutes");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          <span>institutes</span>
        </Button>
        <Button
          variant={activeTab === "Ngos" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("Ngos");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          <span>Ngos</span>
        </Button>
        <Button
          variant={activeTab === "Schools" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("Schools");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          <span>Schools</span>
        </Button>
        <Button
          variant={activeTab === "Universities" ? "brand" : "border"}
          className="rounded-b-none rounded-r-lg flex items-center gap-2"
          onClick={() => {
            setActiveTab("Universities");
            setCurrentPage(1);
            setSelected([]);
          }}
        >
          <span>Universities</span>
        </Button>
      </div>

            {/* Table Controls */}
            <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto">
                <div className="flex items-center justify-between border-b h-20 p-4">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="select-all"
                            checked={selected.length === currentRecords.length && currentRecords.length > 0}
                            onCheckedChange={toggleSelectAll}
                        />
                        <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                            Select All
                        </label>
                        {selected.length > 0 && (
                            <Badge variant="border" className="ml-2">
                                {selected.length} selected
                            </Badge>
                        )}
                        {selected.length > 0 && (
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
                  Block / Remove
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
                                        selectedStack.some((c) => c.id === session.id)
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
                                            selectedStack.some((c) => c.id === session.id)
                                                ? focusedId === session.id
                                                    ? "border-[var(--brand-color)]"
                                                    : "border-transparent"
                                                : "border-transparent"
                                        )}
                                    >
                                        <Checkbox
                                            checked={selected.includes(session.id)}
                                            onClick={(e) => e.stopPropagation()}
                                            onCheckedChange={() => toggleSelectUser(session.id)}
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
