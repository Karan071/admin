// import {
//   Users,
//   UserCheck,
//   UserPlus,
//   MessageSquare,
//   Plus,
//   Trash2,
//   Funnel,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   Flag,
//   Search,
//   MessageCircle,
// } from "lucide-react";
// import { useState } from "react";
// import { Card, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ProblemTableData } from "@/data/Data";

// const color = "text-[var(--text)]";
// const color2 = "text-[var(--text-head)]";
// const stats = [
//   {
//     title: "Total Problems Reported",
//     value: "12,457",
//     icon: Users,
//   },
//   {
//     title: "Issues Under Review",
//     value: "4.4",
//     icon: UserCheck,
//   },
//   {
//     title: "Common Areas: ",
//     value: "312",
//     icon: UserPlus,
//   },
//   {
//     title: "Last Updated",
//     value: "18 May 2025",
//     icon: MessageSquare,
//   },
// ];

// export function Problems() {
//   return (
//     <div>
//       <h1>Problem</h1>
//       <StatsCards />
//       <Buttonbar />
//       <ProblemTable />
//     </div>
//   );
// }

// function StatsCards() {
//   return (
//     <div className="grid gap-4 xl:gap-2 md:grid-cols-2 xl:grid-cols-4 mt-4">
//       {stats.map((stat, index) => (
//         <Card
//           key={index}
//           className="xl:rounded-sm shadow-none bg-[var(--background)]"
//         >
//           <CardHeader className="flex-col items-center px-4 gap-4 py-0 h-full">
//             <div className="flex justify-between h-full items-center">
//               <div
//                 className={`${color} text-xs uppercase text-light line-clamp-1`}
//               >
//                 {stat.title}
//               </div>
//             </div>
//             <div className="flex  items-center gap-4">
//               <div className={`rounded-full `}>
//                 <stat.icon className={`h-8 w-8 ${color2}`} />
//               </div>
//               <div className={`${color2} text-2xl`}>{stat.value}</div>
//             </div>
//           </CardHeader>
//         </Card>
//       ))}
//     </div>
//   );
// }

// function Buttonbar() {
//   return (
//     <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none mt-5">
//       <Button variant="brand" size="new">
//         <Plus className="h-3 w-3" />
//         <span className="">New Problem</span>
//       </Button>
//       <div className="flex gap-4">
//         <Button variant="delete" size="new">
//           <Trash2 className="h-4 w-4" />
//         </Button>
//         <Button variant="standard" size="new">
//           <Funnel className="h-3 w-3" />
//           <span className="">Filter</span>
//         </Button>
//         <Button variant="standard" size="new">
//           <span className="">Import</span>
//         </Button>
//       </div>
//     </div>
//   );
// }

// function ProblemTable() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage, setRecordsPerPage] = useState(5);
//   const [sortConfig, setSortConfig] = useState<{
//     key: string;
//     direction: "ascending" | "descending";
//   } | null>(null);

//   const sortedData = [...ProblemTableData];
//   if (sortConfig !== null) {
//     sortedData.sort((a, b) => {
//       const aValue = a[sortConfig.key as keyof typeof a];
//       const bValue = b[sortConfig.key as keyof typeof b];
//       if (aValue < bValue) {
//         return sortConfig.direction === "ascending" ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortConfig.direction === "ascending" ? 1 : -1;
//       }
//       return 0;
//     });
//   }

//   const totalPages = Math.ceil(sortedData.length / recordsPerPage);
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = sortedData.slice(
//     indexOfFirstRecord,
//     indexOfLastRecord
//   );

//   const requestSort = (key: string) => {
//     let direction: "ascending" | "descending" = "ascending";
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === "ascending"
//     ) {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   return (
//     <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto mt-6">
//       {/* Table controls and header */}
//       <div className="flex items-center justify-between border-b p-4">
//         <div className="flex justify-end items-center gap-4">
//           <div className="flex items-center border-1 rounded-md overflow-hidden bg-[var(--faded)]">
//             <Input
//               placeholder="Search"
//               className="border-none focus:ring-0 focus-visible:ring-0 focus:outline-none px-2 py-1 w-40 sm:w-45"
//             />
//             <Button
//               type="submit"
//               size="icon"
//               variant="standard"
//               className="rounded-none rounded-r-md bg-[var(--button)]"
//               aria-label="Search"
//             >
//               <Search className="h-5 w-5 text-[var(--text)]" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Table content */}
//       <div className="overflow-x-auto text-[var(--text)] w-full px-0 mx-0 text-low">
//         <Table className="w-full caption-top border-collapse overflow-y-visible">
//           <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
//             <TableRow>
//               <TableHead
//                 onClick={() => requestSort("user")}
//                 className="cursor-pointer text-[var(--text)]"
//               >
//                 User{" "}
//                 {sortConfig?.key === "user" &&
//                   (sortConfig.direction === "ascending" ? "↑" : "↓")}
//               </TableHead>
//               <TableHead
//                 onClick={() => requestSort("submittedOn")}
//                 className="cursor-pointer text-[var(--text)]"
//               >
//                 Submitted On{" "}
//                 {sortConfig?.key === "submittedOn" &&
//                   (sortConfig.direction === "ascending" ? "↑" : "↓")}
//               </TableHead>
//               <TableHead
//                 onClick={() => requestSort("issueType")}
//                 className="cursor-pointer text-[var(--text)]"
//               >
//                 Issue Type{" "}
//                 {sortConfig?.key === "issueType" &&
//                   (sortConfig.direction === "ascending" ? "↑" : "↓")}
//               </TableHead>
//               <TableHead className="text-[var(--text)]">Description</TableHead>
//               <TableHead className="text-[var(--text)]">Screenshot</TableHead>
//               <TableHead
//                 onClick={() => requestSort("status")}
//                 className="cursor-pointer text-[var(--text)]"
//               >
//                 Status{" "}
//                 {sortConfig?.key === "status" &&
//                   (sortConfig.direction === "ascending" ? "↑" : "↓")}
//               </TableHead>
//               <TableHead className="text-[var(--text)]">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {currentRecords.map((abuse) => (
//               <TableRow
//                 key={abuse.id}
//                 className="hover:bg-[var(--brand-color2)]"
//               >
//                 <TableCell className="font-medium">{abuse.user}</TableCell>
//                 <TableCell>{abuse.submittedOn}</TableCell>
//                 <TableCell>{abuse.issueType}</TableCell>
//                 <TableCell>{abuse.description}</TableCell>
//                 <TableCell>{abuse.screenshot}</TableCell>
//                 <TableCell>
//                   <Badge
//                     variant={abuse.status === "Resolved" ? "brand" : "standard"}
//                   >
//                     {abuse.status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex gap-2">
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <Eye className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <MessageCircle className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <Flag className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between flex-wrap gap-2 p-4">
//         <div className="flex items-center gap-4">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="border"
//                 size="sm"
//                 className="flex items-center gap-2 text-low text-[var(--text-head)]"
//               >
//                 {recordsPerPage}
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="text-[var(--text)] dark:bg-[var(--background)]">
//               {[5, 10, 25, 50, 100].map((size) => (
//                 <DropdownMenuItem
//                   key={size}
//                   onClick={() => {
//                     setRecordsPerPage(size);
//                     setCurrentPage(1);
//                   }}
//                   className="text-[var(--text)] focus:bg-[var(--faded)]"
//                 >
//                   {size}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <span className="text-low text-[var(--text)]">
//             Showing {indexOfFirstRecord + 1}-
//             {Math.min(indexOfLastRecord, sortedData.length)} of{" "}
//             {sortedData.length} reviews
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button
//             variant="border"
//             size="icon"
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <Button
//               key={page}
//               variant={page === currentPage ? "brand" : "border"}
//               size="sm"
//               className={`h-8 w-8 p-0 ${
//                 page === currentPage ? "text-white" : "text-[var(--text)]"
//               }`}
//               onClick={() => setCurrentPage(page)}
//             >
//               {page}
//             </Button>
//           ))}
//           <Button
//             variant="border"
//             size="icon"
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
export function Problems(){
    return(
        <div>
            Followup
        </div>
    )
}