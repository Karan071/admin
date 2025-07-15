import { Card, CardHeader } from "@/components/ui/card";
import {Users, UserCheck, UserPlus, Funnel, Plus, Trash2  } from "lucide-react"
import { Button } from "@/components/ui/button";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";

const stats = [
    {
      title: "Total Abuse Reports",
      value: "12,457",
      icon: Users,
    },
    {
      title: "Under Investigation",
      value: "6",
      icon: UserCheck,
    },
    {
      title: "Reported Areas",
      value: "Chat, Sessions, Comments, Public Posts",
      icon: UserPlus,
    },
    {
        title: "Last Updated",
        value: "18 May 2025",
        icon: UserPlus,
      },
  ];

export  function Abuses(){
    return (
        <div>
            <h1>Abuses</h1>
            <StatsCards/>
            <Buttonbar/>
        </div>
    )
}

function StatsCards() {
    return (
      <div className="grid gap-4 xl:gap-2 md:grid-cols-2 xl:grid-cols-4 mt-4">
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
              </div>
              <div className="flex  items-center gap-4">
                <div className={`rounded-full `}>
                  <stat.icon className={`h-8 w-8 ${color2}`} />
                </div>
                <div className={`${color2} text-xl`}>{stat.value}</div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  function Buttonbar() {
    return (
      <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none mt-5">
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span className="">Add Contacts</span>
        </Button>
        <div className="flex gap-4">
          <Button variant="delete" size="new">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="standard" size="new">
            <Funnel className="h-3 w-3" />
            <span className="">Filter</span>
          </Button>
          <Button variant="standard" size="new">
            <span className="">Import</span>
          </Button>
        </div>
      </div>
    );
  }

  