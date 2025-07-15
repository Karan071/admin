import { Button } from "@/components/ui/button";
import {
  Search,
  Download,
  Trash,
  Archive,
  Pen,
  Eye,
  Filter,
  Check,
  X,
  Bell,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BookOpenCheck,
  FileEdit,
  Clock,
} from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
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
import { PublishedTableData,
  DraftsTableData,
  PendingApprovalTableData,  } from "@/data/Data";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerWithRange } from "@/components/application-component/date-range-picker";


interface Filters {
  source: string;
  status: {
    published: boolean;
    pending: boolean;
  };
  dateRange: { from: Date; to: Date } | undefined;
}

// Tabs configuration
const tabs = [
  { id: "published", label: "Published", icon: BookOpenCheck },
  { id: "drafts", label: "Drafts", icon: FileEdit },
  { id: "pending", label: "Pending Approval", icon: Clock },
];

// Define colors for the StatsCards component
const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";

// Stats cards for Insights
const insightsStats = [
  {
    title: "Total Insights Published:",
    value: "468",
    icon: BookOpenCheck,
    performance: null,
  },
  {
    title: "Pending Approval",
    value: "23",
    icon: Clock,
    performance: null,
  },
  {
    title: "Total Views Last 30 Days",
    value: "19,320",
    icon: Eye,
    performance: null,
  },
  {
    title: "Total Comments on Insights",
    value: "412",
    icon: Bell,  
    performance: null,
  },
];

function StatsCards() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 lg:grid-cols-4">
      {insightsStats.map((stat, index) => (
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
            <div className="flex items-center gap-4">
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

function InsightsAdvancedFilters({
  filters,
  setFilters,
  onReset,
  onApply
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  onReset: () => void;
  onApply: () => void;
}) {
  return (
    <Card className="mt-8 shadow-none bg-[var(--background)]">
      <CardHeader>
        <div className="text-lg font-bold text-[var(--text-head)]">Filters</div>
      </CardHeader>
      <div className="px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-[var(--text)]">
          <div className="space-y-2">
            <label className="text-sm font-medium">Source</label>
            <Input
              placeholder="Search by news source"
              className="mt-2"
              value={filters.source}
              onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="published"
                  checked={filters.status.published}
                  onCheckedChange={(checked) =>
                    setFilters({
                      ...filters,
                      status: { ...filters.status, published: checked as boolean }
                    })
                  }
                />
                <label htmlFor="published" className="text-sm">
                  Published
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pending"
                  checked={filters.status.pending}
                  onCheckedChange={(checked) =>
                    setFilters({
                      ...filters,
                      status: { ...filters.status, pending: checked as boolean }
                    })
                  }
                />
                <label htmlFor="pending" className="text-sm">
                  Pending
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Date Range</label>
            <div className="mt-2">
              <DatePickerWithRange
                value={filters.dateRange}
                onChange={(range) => setFilters({ ...filters, dateRange: range })}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-2 ">
          <Button variant="border" onClick={onReset}>Reset</Button>
          <Button variant="brand" onClick={onApply}>Apply Filters</Button>
        </div>
      </div>
    </Card>
  );
}

interface BaseItem {
  title: string;
  author: string;
  category: string;
  actions: string[];
}

interface PublishedItem extends BaseItem {
  tags: string[];
  for: string;
  views: number;
  status: string;
}

interface DraftItem extends BaseItem {
  lastEdited: string;
  suggestedTags: string[];
}

interface PendingItem extends BaseItem {
  submittedOn: string;
  assignedEditor: string;
}

type ContentItem = PublishedItem | DraftItem | PendingItem;

export default function Insights() {
  const [activeTab, setActiveTab] = useState("published");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    source: "",
    status: { published: true, pending: true },
    dateRange: undefined
  });
  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  

  const handleApplyFilters = () => {
    setFiltersOpen(false);
    console.log("Filters applied:", filters);
  };
  
  // Reset filters handler
  const handleResetFilters = () => {
    setFilters({
      source: "",
      status: { published: true, pending: true },
      dateRange: undefined,
    });
    console.log("Filters reset");
  }

  // Get current data based on active tab
  const getCurrentData = (): ContentItem[] => {
    switch (activeTab) {
      case "published": return PublishedTableData;
      case "drafts": return DraftsTableData;
      case "pending": return PendingApprovalTableData;
      default: return PublishedTableData;
    }
  };

  // Sorting logic
  let sortedData = [...getCurrentData()];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      // @ts-ignore: Dynamic property access
      const aValue = a[sortConfig.key];
      // @ts-ignore: Dynamic property access
      const bValue = b[sortConfig.key];
      
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
  const indexLast = page * recordsPerPage;
  const indexFirst = indexLast - recordsPerPage;
  const currentRecords = sortedData.slice(indexFirst, indexLast);

  // Reset page and selections when tab changes
  useEffect(() => {
    setPage(1);
    setSelectedItems([]);
    setSortConfig(null);
  }, [activeTab]);

  // Selection handlers
  const toggleSelectAll = () => {
    setSelectedItems(
      selectedItems.length === currentRecords.length 
        ? [] 
        : currentRecords.map(item => item.title)
    );
  };

  const toggleSelectItem = (title: string) => {
    setSelectedItems(
      selectedItems.includes(title)
        ? selectedItems.filter(t => t !== title)
        : [...selectedItems, title]
    );
  };

  // Action icons mapping
  const actionToIcon = {
    "View": <Eye className="h-4 w-4" />,
    "Edit": <Pen className="h-4 w-4" />,
    "Archive": <Archive className="h-4 w-4" />,
    "Delete": <Trash className="h-4 w-4" />,
    "Review": <Eye className="h-4 w-4" />,
    "Approve": <Check className="h-4 w-4" />,
    "Reject": <X className="h-4 w-4" />,
  };

  // Type guards for content items
  const isPublishedItem = (item: ContentItem): item is PublishedItem => 'views' in item;
  const isDraftItem = (item: ContentItem): item is DraftItem => 'suggestedTags' in item;
  const isPendingItem = (item: ContentItem): item is PendingItem => 'assignedEditor' in item;

  // Get tags based on item type
  const getTagsToDisplay = (item: ContentItem): string[] => {
    if (isPublishedItem(item)) return item.tags;
    if (isDraftItem(item)) return item.suggestedTags;
    if (isPendingItem(item)) return [item.assignedEditor];
    return [];
  };

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig?.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Insights</h1>
        
        {/* Stats Cards */}
        <StatsCards />

        {/* Filters Button */}
        <div className="flex justify-end mt-4">
          <Button
            variant="border"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {filtersOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Advanced Filters */}
        {filtersOpen && (
          <InsightsAdvancedFilters
            filters={filters}
            setFilters={setFilters}
            onReset={handleResetFilters}
            onApply={handleApplyFilters}
          />
        )}

        {/* Tabs */}
        <div className="flex justify-between items-center mb-6 mt-6">
          <div className="flex">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "brand" : "border"}
                className={`rounded-b-none rounded-r-lg`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>
          <Button variant="brand">
            <Plus className="text-white mr-2" />
            <span>Add Insight</span>
          </Button>
        </div>

        {/* Content Section */}
        <div className="rounded-md border bg-[var(--background)] overflow-x-auto">
          {/* Selection Header */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="select-all"
                checked={selectedItems.length === currentRecords.length && currentRecords.length > 0}
                onCheckedChange={toggleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
                Select All
              </label>
              {selectedItems.length > 0 && (
                <Badge variant="border" className="ml-2">
                  {selectedItems.length} selected
                </Badge>
              )}
            </div>

            {selectedItems.length > 0 && (
              <div className="flex gap-2">
                <Button variant="border" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Send Notification
                </Button>
                <Button variant="border" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export Selected
                </Button>
                <Button variant="delete" size="sm">
                  <X className="mr-2 h-4 w-4" />
                  Mark Inactive
                </Button>
              </div>
            )}
          </div>

          {/* Search and Records Per Page */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="border"
                    size="sm"
                    className="flex items-center gap-2 text-[var(--text-head)]"
                  >
                    {recordsPerPage}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-[var(--text)] bg-[var(--background)]">
                  {[5, 10, 25, 50, 100].map((size) => (
                    <DropdownMenuItem
                      key={size}
                      onClick={() => {
                        setRecordsPerPage(size);
                        setPage(1);
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

          {/* Content Table */}
          <div className="overflow-x-auto text-[var(--text)] w-full">
            <Table className="w-full caption-top border-collapse">
              <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)]">
                <TableRow>
                  <TableHead className="min-w-[40px]">
                    <Checkbox
                      checked={
                        selectedItems.length === currentRecords.length &&
                        currentRecords.length > 0
                      }
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("title")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Title {sortConfig?.key === "title" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("author")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Author {sortConfig?.key === "author" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  {activeTab === "published" && (
                    <TableHead
                      onClick={() => requestSort("category")}
                      className="cursor-pointer text-[var(--text)]"
                    >
                      Category {sortConfig?.key === "category" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                    </TableHead>
                  )}
                  <TableHead className="cursor-pointer text-[var(--text)]">
                    {activeTab === "published"
                      ? "Tags"
                      : activeTab === "drafts"
                        ? "Suggested Tags"
                        : "Assigned Editor"}
                  </TableHead>
                  {activeTab === "published" && <TableHead className="cursor-pointer text-[var(--text)]">Audience</TableHead>}
                  {activeTab === "published" && <TableHead className="cursor-pointer text-[var(--text)]">Views</TableHead>}
                  {activeTab === "drafts" && <TableHead className="cursor-pointer text-[var(--text)]">Last Edited</TableHead>}
                  {activeTab === "pending" && <TableHead className="cursor-pointer text-[var(--text)]">Submitted On</TableHead>}
  <TableHead className="text-[var(--text)]">
  <span className="ml-15">Actions</span>
</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentRecords.map((item) => (
                  <TableRow 
                    key={item.title}
                    className="group hover:bg-[var(--brand-col"
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedItems.includes(item.title)}
                        onCheckedChange={() => toggleSelectItem(item.title)}
                      />
                    </TableCell>
                    <TableCell className="font-medium ">{item.title}</TableCell>
                    <TableCell className="text-[var(--text)]">{item.author}</TableCell>

                    {activeTab === "published" && (
                      <TableCell>
                        <Badge variant="standard">{item.category}</Badge>
                      </TableCell>
                    )}

                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {getTagsToDisplay(item).map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="standard"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>

                    {activeTab === "published" && isPublishedItem(item) && (
                      <TableCell className="text-[var(--text)]">{item.for}</TableCell>
                    )}

                    {activeTab === "published" && isPublishedItem(item) && (
                      <TableCell>
                        <Badge variant="secondary">
                          {item.views.toLocaleString()}
                        </Badge>
                      </TableCell>
                    )}

                    {activeTab === "drafts" && isDraftItem(item) && (
                      <TableCell className="text-[var(--text)]">{item.lastEdited}</TableCell>
                    )}

                    {activeTab === "pending" && isPendingItem(item) && (
                      <TableCell className="text-[var(--text)]">{item.submittedOn}</TableCell>
                    )}

                <TableCell >
                      <div className="flex justify-center gap-2 ">
                        {item.actions.map((action, index) => (
                          <Button
                            key={index}
                            variant="noborder"
                            size="icon"
                            title={action}
                            className="bg-[var(--background)]"
                          >
                            {actionToIcon[action as keyof typeof actionToIcon]}
                            <span className="sr-only">{action}</span>
                          </Button>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between flex-wrap gap-2 p-4">
            <div className="flex items-center gap-4">
              <span className="text-[var(--text)]">
                Showing {indexFirst + 1}-
                {Math.min(indexLast, sortedData.length)} of{" "}
                {sortedData.length} items
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="border"
                size="icon"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <Button
                    key={pageNum}
                    variant={pageNum === page ? "brand" : "border"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${pageNum === page ? "text-white" : "text-[var(--text)]"}`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                )
              )}
              <Button
                variant="border"
                size="icon"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}