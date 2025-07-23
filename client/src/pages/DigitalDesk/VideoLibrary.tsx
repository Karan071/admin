import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus,
  Funnel,
  Search,
  ExternalLink,
  Upload,
  Download,
  Eye,
  Bell,
  FileDown,
  X,
} from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Video, BookPlus, Clock, MessageSquare } from "lucide-react";
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
import { Trash, Edit} from "lucide-react";
import { VideoTableData } from "@/data/Data";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const trend = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;

const stats = [
  {
    title: "Total Videos",
    value: "236",

    icon: Video,
    performance: trend,
  },
  {
    title: "Published Videos",
    value: "192",
    icon: BookPlus,
    performance: Up,
  },
  {
    title: "Pending Review",
    value: "22",
    icon: Clock,
    performance: Down,
  },
  {
    title: "Video Formats",
    value: "642",
    icon: MessageSquare,
    performance: Up,
  },
  {
    title: "Total Plays (30d)",
    value: "42,310",
    icon: Eye,
    performance: Down,
  },
];

export  function VideoLibraries() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Video Library 
        </h1>
        <StatsCards />
        <Buttonbar />
        <CoachTableSection />
      </div>
    </div>
  );
}

function StatsCards() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="xl:rounded-sm shadow-none bg-[var(--background)]"
        >
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

function Buttonbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <div className="flex gap-4 flex-wrap">
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span className=""> Upload New Video</span>
        </Button>
        
   
        
      
      </div>
      
      <div className="flex gap-4">
        <Button variant="standard" size="new">
          <Download className="h-3 w-3" />
          <span className="">Import Bulk Videos</span>
        </Button>
        
        <Button variant="standard" size="new">
          <Upload className="h-3 w-3" />
          <span className=""> Export Video Analytics</span>
        </Button>
        
      
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="standard" size="new">
              <Funnel className="h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
     
            
            
        </DropdownMenu>
      </div>
    </div>
  );
}
function CoachTableSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  // Selection state for checkboxes
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedCoachStack, setSelectedCoachStack] = useState<typeof VideoTableData>(
    VideoTableData[0] ? [VideoTableData[0]] : []
  );
  const [focusedCoachId, setFocusedCoachId] = useState<string | null>(
    VideoTableData[0]?.id || null
  );

  // Sorting logic
  const sortedData = [...VideoTableData];
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

  // --- Selection helpers ---
  const toggleSelectAll = () => {
    if (selectedVideos.length === currentRecords.length) {
      setSelectedVideos([]);
    } else {
      setSelectedVideos(currentRecords.map((video) => video.id));
    }
  };

  const toggleSelectVideo = (videoId: string) => {
    if (selectedVideos.includes(videoId)) {
      setSelectedVideos(selectedVideos.filter((id) => id !== videoId));
    } else {
      setSelectedVideos([...selectedVideos, videoId]);
    }
  };

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

  const bringToTop = (userId: string) => {
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
      const id = row.getAttribute("data-id");
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

  const handleRowClick = (video: (typeof VideoTableData)[0]) => {
    // Double-click detected
    const exists = selectedCoachStack.find((c) => c.id === video.id);
    if (!exists) {
      setSelectedCoachStack((prev) => {
        const updated = [video, ...prev];
        return updated.slice(0, 5); // limit to 5
      });
      setFocusedCoachId(video.id);
    } else {
      bringToTop(video.id);
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex h-20 items-center justify-between border-b p-4 mt-auto">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={selectedVideos.length === currentRecords.length && currentRecords.length > 0}
              onCheckedChange={toggleSelectAll}
            />
            <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
              Select All
            </label>
            {selectedVideos.length > 0 && (
              <Badge variant="border" className="ml-2">
                {selectedVideos.length} selected
              </Badge>
            )}

            {selectedVideos.length > 0 && (
              <div className="flex gap-2 ml-2">
                <Button variant="border" size="sm">
                  <Bell className="h-4 w-4" />
                  Send Reminder
                </Button>
                <Button variant="border" size="sm">
                  <FileDown className="h-4 w-4" />
                  Export list
                </Button>
                <Button variant="delete" size="sm">
                  <X className="h-4 w-4 text-[var(--red)]" />
                  Delete
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
                  onClick={() => requestSort("title")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Title{" "}
                  {sortConfig?.key === "title" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("speaker")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Speaker{" "}
                  {sortConfig?.key === "speaker" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("mode")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Mode{" "}
                  {sortConfig?.key === "mode" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("category")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Category{" "}
                  {sortConfig?.key === "category" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("mapping")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Mapping{" "}
                  {sortConfig?.key === "mapping" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("for")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  For{" "}
                  {sortConfig?.key === "for" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("playCount")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Play Count{" "}
                  {sortConfig?.key === "playCount" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("videoUrl")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Video URL{" "}
                  {sortConfig?.key === "videoUrl" &&
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
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((video) => (
                <TableRow
                  key={video.id}
                  data-id={video.id}
                  className={cn(
                    "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                    selectedCoachStack.some((c) => c.id === video.id)
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => {
                    toggleSelectVideo(video.id);
                    handleRowClick(video);
                  }}
                >
                  <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                      selectedCoachStack.some((c) => c.id === video.id)
                        ? focusedCoachId === video.id
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                        : "border-transparent"
                    )}
                  >
                    <Checkbox
                      checked={selectedVideos.includes(video.id)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleSelectVideo(video.id)}
                    />
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-medium">{video.title}</div>
                        <div className="text-sm text-[var(--text)]">Duration: 12:34</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{video.speaker}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{video.mode}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{video.category}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{video.mapping}</div>
                  </TableCell>
                  <TableCell>{video.for}</TableCell>
                  <TableCell>
                    <div className="text-low">{video.playCount}</div>
                  </TableCell>
                <TableCell>
  <Button
    variant="border"
    size="sm"
    className="h-8"
    onClick={(e) => {
      e.stopPropagation(); // Prevent row click event
      window.open(video.videoUrl, '_blank');
    }}
  >
    <ExternalLink className="h-4 w-4 mr-2" />
    View Video
  </Button>
</TableCell>
                  <TableCell>
                    <Badge variant={video.status === "Published" ? "brand" : "border"}>
                      {video.status}
                    </Badge>
                  </TableCell>
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
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
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
              {sortedData.length} videos
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
                className={`h-8 w-8 p-0 ${
                  page === currentPage ? "text-white" : "text-[var(--text)]"
                }`}
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
