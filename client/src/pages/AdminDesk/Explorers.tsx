import { useState } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Filter, NotebookText } from "lucide-react"
import { DatePickerWithRange } from "@/components/application-component/date-range-picker"
import  ExplorerTable from "@/components/application-component/explorer-table"
import {
  Users,
  UserCheck,
  UserPlus,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";


const color = "text-[var(--text)]";
const color2 ="text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;

const stats = [
  {
    title: "Total Users",
    value: "12,457",
    icon: Users,
    performance: Up,
  },
  {
    title: "Active Learners (30 Days)",
    value: "4,385",
    icon: UserCheck,
    performance: Up,
  },
  {
    title: "New Signups (This Week)",
    value: "312",
    icon: UserPlus,
    performance: Down,
  },
  {
    title: "Total Enquiries",
    value: "642",
    icon: MessageSquare,
    performance: Up,
  },
  {
    title: "Users with Sessions Booked",
    value: "1,205",
    icon: Calendar,
    performance: Down,
  },
  {
    title: "Users Completed ACE Test",
    value: "3,785",
    icon: NotebookText,
    performance: Down,
  },
];


export default function Explorer() {
    const [filtersOpen, setFiltersOpen] = useState(false)
    return (
        <div className="flex flex-col">
            <main className="flex flex-col gap-4">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <h1 className="text-2xl font-bold text-[var(--text-head)]">Explorers Dashboard</h1>
                    {/*<div className="flex gap-2">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                        <Button>Bulk Actions</Button>
                    </div>*/}
                </div>

                <StatsCards />

                {filtersOpen && <AdvancedFilters />}
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

                <div className="mt-6">
                    <ExplorerTable/>
                </div>
            </main>
        </div>
    )
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


function AdvancedFilters() {
    return (
        <Card className="mt-8 bg-[var(--background)] shadow-none">
            <CardHeader>
                <CardTitle className="text-lg text-[var(--text-head)]">Filters</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-[var(--text)]">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name / Email / Phone</label>
                        <Input placeholder="Search by name, email or phone" className="mt-2" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">User Type</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="registered" />
                                <label htmlFor="registered" className="text-sm">
                                    Registered
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="enquiry" />
                                <label htmlFor="enquiry" className="text-sm">
                                    Enquiry
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="inactive" />
                                <label htmlFor="inactive" className="text-sm">
                                    Inactive (30/60/90 Days)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Age Group</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="age-10-13" />
                                <label htmlFor="age-10-13" className="text-sm">
                                    10-13
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="age-14-17" />
                                <label htmlFor="age-14-17" className="text-sm">
                                    14-17
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="age-18-25" />
                                <label htmlFor="age-18-25" className="text-sm">
                                    18-25
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="age-25-plus" />
                                <label htmlFor="age-25-plus" className="text-sm">
                                    25+
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Class / Grade</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="class-6-12" />
                                <label htmlFor="class-6-12" className="text-sm">
                                    6-12
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="college" />
                                <label htmlFor="college" className="text-sm">
                                    College
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="graduate" />
                                <label htmlFor="graduate" className="text-sm">
                                    Graduate
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">State / City</label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="border" className="w-full justify-between mt-2">
                                    <span>Select location</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[200px] text-[var(--text)]">
                                <DropdownMenuItem>Delhi</DropdownMenuItem>
                                <DropdownMenuItem>Mumbai</DropdownMenuItem>
                                <DropdownMenuItem>Bangalore</DropdownMenuItem>
                                <DropdownMenuItem>Chennai</DropdownMenuItem>
                                <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Test Status</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="test-taken" />
                                <label htmlFor="test-taken" className="text-sm">
                                    Taken
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="test-not-taken" />
                                <label htmlFor="test-not-taken" className="text-sm">
                                    Not Taken
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="test-in-progress" />
                                <label htmlFor="test-in-progress" className="text-sm">
                                    In Progress
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Session Status</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-1">
                                <Checkbox id="session-booked" />
                                <label htmlFor="session-booked" className="text-sm">
                                    Booked
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="session-completed" />
                                <label htmlFor="session-completed" className="text-sm">
                                    Completed
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="session-missed" />
                                <label htmlFor="session-missed" className="text-sm">
                                    Missed
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="session-none" />
                                <label htmlFor="session-none" className="text-sm">
                                    No Sessions
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Referral Source</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="source-ba" />
                                <label htmlFor="source-ba" className="text-sm">
                                    BA
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="source-consultant" />
                                <label htmlFor="source-consultant" className="text-sm">
                                    Consultant
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="source-organisation" />
                                <label htmlFor="source-organisation" className="text-sm">
                                    Organisation
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="source-organic" />
                                <label htmlFor="source-organic" className="text-sm">
                                    Organic
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Last Activity</label>
                        <div className="">
                            <DatePickerWithRange />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-2 ">
                    <Button variant="border">Reset</Button>
                    <Button variant="brand">Apply Filters</Button>
                </div>
            </CardContent>
        </Card>
    )
}
