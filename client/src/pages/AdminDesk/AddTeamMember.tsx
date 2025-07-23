import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";


export function AddTeamMember() {
  const [activeTab, setActiveTab] = useState<"profile" | "permission">("profile");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-[var(--text-head)]">Add Desk User</h1>

      <div className="bg-[var(--background)] rounded-sm p-4 ">
        {/* Tabs */}
        <div className="border-b-1 mb-6 flex">
          <button
            onClick={() => setActiveTab("profile")}
            className={`font-medium px-4 p-3 rounded-b-none rounded-sm border-b-2 ${activeTab === "profile" ? "text-[var(--text-head)] border-[var(--brand-color)] bg-[var(--brand-color3)]" : "text-[var(--text)] border-transparent"}`}
          >
            Profiles
          </button>
          <button
            onClick={() => setActiveTab("permission")}
            className={`font-medium px-4 p-3 rounded-b-none rounded-sm border-b-2 ${activeTab === "permission" ? "text-[var(--text-head)] border-[var(--brand-color)] bg-[var(--brand-color3)]" : "text-[var(--text)] border-transparent"}`}
          >
            Permission
          </button>
        </div>

        {/* Conditional tab view */}
        {activeTab === "profile" ? (
          <UserForm onNext={() => setActiveTab("permission")} />
        ) : (
          <PermissionForm onBack={() => setActiveTab("profile")} />
        )}
      </div>
    </div>
  );
}


function UserForm({ onNext }: { onNext: () => void }) {

  return (
    <form className="grid grid-cols-2 gap-6 text-[var(--text)]">
      <div className="col-span-2 flex items-center gap-4">
        <div className="h-20 w-20 bg-[var(--faded)] rounded-full flex items-center justify-center text-[var(--text)] text-xl">👤</div>
        <div className="space-y-1 flex gap-2 items-center">
          <Button variant="border" size="sm">Upload new picture</Button>
        </div>
      </div>

      <div className="gap-2 flex flex-col">
        <Label>Employee ID </Label>
        <Input placeholder="Enter Employee ID" required />
      </div>
      <div className="gap-2 flex flex-col">
        <Label>Full Name </Label>
        <Input placeholder="Enter Employee Name" />
      </div>

      <div className="gap-2 flex flex-col">
        <Label>Designation </Label>
        <Input placeholder="Enter Employee Designation" required />
      </div>
      <div className="gap-2 flex flex-col">
        <Label>Department </Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Relations">Relations</SelectItem>
            <SelectItem value="Review">Review</SelectItem>
            <SelectItem value="Digital">Digital</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="DevOps">DevOps</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="gap-2 flex flex-col col-span-2">
        <Label>Reporting To </Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Reporting To" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Branch1">A</SelectItem>
            <SelectItem value="Branch1">B</SelectItem>
            <SelectItem value="Branch1">C</SelectItem>
            <SelectItem value="Branch1">D</SelectItem>
          </SelectContent>
        </Select>
      </div>

    
      <div className="gap-2 flex flex-col">
        <Label>Email ID </Label>
        <Input placeholder="Enter Email ID" type="email" required />
      </div>
      <div className="gap-2 flex flex-col">
        <Label>Mobile Number</Label>
        <Input placeholder="+91 | Enter Mobile No" required />
      </div>
      

      <div className="col-span-2 flex justify-between gap-4 mt-4">
        <Button variant="border" type="button">Cancel</Button>
        <Button variant="brand" type="submit" onClick={onNext}>Next</Button>
      </div>
    </form>
  );
}

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


function PermissionForm({ onBack }: { onBack: () => void }) {
  const [isOpen, setIsOpen] = useState(true);

  const rows = [
    "Organisation",
    "Department",
    "Branches",
    "Designations",
    "Staff",
    "Non Staff",
    "Security",
    "Security Posts",
  ];

  return (
    <div className="space-y-4 text-[var(--text)] flex flex-col">
      {/* User Role */}
      <div className="grid grid-cols-2 pb-4">
        <div className="col-span-2 flex flex-col gap-2">
          <Label className="text-lg font-semibold">User Role</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select User Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="HOD">HOD</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
              <SelectItem value="Team Lead">Team Lead</SelectItem>
              <SelectItem value="Executive">Executive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Permissions Title */}
      <h2 className="text-lg font-semibold">Permissions</h2>

      {/* Table Header */}
      <div className="space-y-2 text-sm font-medium">

  {/* Header Row */}
  <div className="grid grid-cols-7 lg:grid-cols-6 gap-2 px-4 py-2 items-center rounded-t-sm">
    <span className="col-span-2">Roles & Permissions</span>
    <span className="text-center">Edit</span>
    <span className="text-center">Add</span>
    <span className="text-center">Delete</span>
    <div className="col-span-2 lg:col-span-1">
      <div className="text-center ">View</div>
      <div className="flex justify-center gap-4 text-xs font-normal px-4 mt-1">
        <span>Global</span>
        <span>Branch</span>
        <span>Own</span>
      </div>
    </div>
  </div>

  {/* Collapsible Section */}
<div className="border border-t-0 rounded-b-sm overflow-hidden">
  <button
    type="button"
    onClick={() => setIsOpen(!isOpen)}
    className="bg-[var(--faded)] px-4 py-3 text-sm font-semibold w-full flex justify-between items-center"
  >
    <span>Master Data</span>
    <ChevronDown
      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
      size={18}
    />
  </button>

  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        key="permissions"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {rows.map((label) => (
          <div
            key={label}
            className="grid grid-cols-7 lg:grid-cols-6 gap-2 px-4 py-2 items-center border-t text-sm"
          >
            <span className="col-span-2">{label}</span>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center items-center flex justify-center">
                <Checkbox />
              </div>
            ))}
            <div className="col-span-2 lg:col-span-1 flex justify-center gap-8 px-4">
              {[...Array(3)].map((_, i) => (
                <Checkbox key={i} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>



      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <Button variant="border" onClick={onBack}>Back</Button>
        <Button variant="brand">Add</Button>
      </div>
    </div>
    </div>
  );
}


