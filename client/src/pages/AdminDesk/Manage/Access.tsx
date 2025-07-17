import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, Eye, SquarePen, } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AccessCode } from "@/data/Data";


export default function AcessCode() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text)]">Access Code</h1>
        <CodeForm />
        <CodeTableSection/>
      </div>
    </div>
  );
}

function CodeForm() {
  const [codeType, setCodeType] = useState("Single");
  const [discount, setDiscount] = useState(10);
  const [appliesTo, setAppliesTo] = useState("Assessment");
  const [partnerType, setPartnerType] = useState<"Channel Partner" | "Organisation" | "">("");
  const [partnerName, setPartnerName] = useState("");
  const [trackCommission, setTrackCommission] = useState(false);

  const partnerOptions = {
    "Channel Partner": ["Channel One", "Channel Two"],
    "Organisation": ["Org Alpha", "Org Beta"]
  };

  return (
    <div className="flex flex-col gap-6 p-6 border rounded-md bg-[var(--background)] text-[var(--text)]">
      
      <div className="flex flex-col gap-2">
        <Label className="text-xl font-semibold">Code Type :</Label>
        <RadioGroup
          defaultValue="Single"
          value={codeType}
          onValueChange={setCodeType}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Single" id="single" />
            <Label htmlFor="single">Single</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Group" id="group" />
            <Label htmlFor="group">Group</Label>
          </div>
        </RadioGroup>
      </div>

      
      <div className="flex flex-col gap-2">
        <Label className="text-xl font-semibold">Discount: <span className="font-normal">{discount}%</span></Label>
        <Slider
          defaultValue={[discount]}
          max={50}
          step={1}
          onValueChange={([val]) => setDiscount(val)}
        />
      </div>

      
      <div className="flex flex-col gap-2">
        <Label className="text-xl font-semibold">Applies To</Label>
        <Select value={appliesTo} onValueChange={setAppliesTo}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Assessment">Assessment</SelectItem>
            <SelectItem value="Pool Session">Pool Session</SelectItem>
            <SelectItem value="Masterclass">Masterclass</SelectItem>
          </SelectContent>
        </Select>
      </div>

      
      <div className="flex flex-col gap-2">
        <Label className="text-xl font-semibold">Partner Type</Label>
        <RadioGroup
          value={partnerType}
          onValueChange={(val: "Channel Partner" | "Organisation") => {
            setPartnerType(val);
            setPartnerName(""); // reset the name
          }}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Channel Partner" id="channel" />
            <Label htmlFor="channel">Channel Partner</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Organisation" id="org" />
            <Label htmlFor="org">Organisation</Label>
          </div>
        </RadioGroup>
      </div>

      {partnerType && (
        <div className="flex flex-col gap-2">
          <Label className="text-xl font-semibold">Partner Name</Label>
          <Select value={partnerName} onValueChange={setPartnerName}>
            <SelectTrigger>
              <SelectValue placeholder="Select partner" />
            </SelectTrigger>
            <SelectContent>
              {partnerOptions[partnerType]?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              )) ?? null}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* 🔗 Track Commission */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="track-commission"
          checked={trackCommission}
          onCheckedChange={(val) => setTrackCommission(!!val)}
        />
        <Label htmlFor="track-commission" className="text-sm">
          Track Commission
        </Label>
      </div>
    </div>
  );
}


function CodeTableSection() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedStack, setSelectedStack] = useState<
    typeof AccessCode
  >(AccessCode[0] ? [AccessCode[0]] : []);
  const [focusedId, setFocusedId] = useState<number | null>(AccessCode[0]?.id || null);

  // Sorting logic
  const sortedData = [...AccessCode];
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

  const handleRowClick = (user: (typeof AccessCode)[0]) => {
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
                  onClick={() => requestSort("CodeName")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Code Name{" "}
                  {sortConfig?.key === "CodeName" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Type")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Type{" "}
                  {sortConfig?.key === "Type" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Discount")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Discount{" "}
                  {sortConfig?.key === "Discount" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Product")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Product{" "}
                  {sortConfig?.key === "Product" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("PartnerType")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Partner Type{" "}
                  {sortConfig?.key === "PartnerType" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("PartnerName")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Partner Name{" "}
                  {sortConfig?.key === "PartnerName" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Uses")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Uses{" "}
                  {sortConfig?.key === "Uses" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Validity")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Validity{" "}
                  {sortConfig?.key === "Validity" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("Status")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Status{" "}
                  {sortConfig?.key === "Status" &&
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
                          <div className="font-medium">{user.CodeName}</div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.Type}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.Discount}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.Product}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">
                      <div>{`${user.PartnerType}`}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.PartnerName}</div>
                  </TableCell>
                  <TableCell>{user.Uses}</TableCell>
                  <TableCell>
                    <div className="text-low">{user.Validity}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.Status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      // onClick={() => navigate(`/user-details/${user.id}`)}
                      >
                        <SquarePen className="h-4 w-3" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      // onClick={() => navigate(`/user-details/${user.id}`)}
                      >
                        <Eye className="h-4 w-3" />
                        <span className="sr-only">View</span>
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
