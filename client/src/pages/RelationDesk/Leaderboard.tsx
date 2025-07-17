import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function Leaderboard() {
    return (
        <div className="text-[var(--text)]">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <p className="text-[var(--text-low)]">Weekly Leaderboards</p>
            <TabComponent />
        </div>
    )
}

function TabComponent() {
    return (
        <div className="mt-4">
            <Tabs defaultValue="account">
                <TabsList className="bg-[var(--faded)]">
                    <TabsTrigger value="account" className="data-[state=active]:bg-[var(--brand-color)] ">
                        Agent Goal Overview
                    </TabsTrigger>
                    <TabsTrigger value="password" className="data-[state=active]:bg-[var(--brand-color)] bg-white">
                        Team Leaderboard
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className="overflow-x-auto w-full">
                        <Agent />
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    <div className="overflow-x-auto w-full">
                        <TeamLeaderboard />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

function Agent() {
    return (
        <Table className="w-full caption-top border-collapse overflow-y-visible bg-white">
            <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
                <TableRow>
                    <TableHead className="text-[var(--text)]">Metric</TableHead>
                    <TableHead className="text-[var(--text)]">This Week</TableHead>
                    <TableHead className="text-[var(--text)]">Target</TableHead>
                    <TableHead className="text-[var(--text)]">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {LeaderboardTableData.map((leader) => (
                    <TableRow
                        key={leader.id}
                        className="hover:bg-[var(--brand-color2)]"
                    >
                        <TableCell className="font-medium">{leader.metric}</TableCell>
                        <TableCell>{leader.thisWeek}</TableCell>
                        <TableCell>{leader.target}</TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    leader.status.includes("✅") ? "brand" :
                                        leader.status.includes("🔶") ? "secondary" :
                                            leader.status.includes("🔺") ? "outline" :
                                                "destructive"
                                }
                            >
                                {leader.status}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

function TeamLeaderboard() {
    return (
        <Table className="w-full caption-top border-collapse overflow-y-visible bg-white">
            <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
                <TableRow>
                    <TableHead className="text-[var(--text)]">Rank</TableHead>
                    <TableHead className="text-[var(--text)]">Agent Name</TableHead>
                    <TableHead className="text-[var(--text)]">Leads Claimed</TableHead>
                    <TableHead className="text-[var(--text)]">Follow ups</TableHead>
                    <TableHead className="text-[var(--text)]">Conversation</TableHead>
                    <TableHead className="text-[var(--text)]">Score</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TeamLeaderboardData.map((leader) => (
                    <TableRow
                        key={leader.id}
                        className="hover:bg-[var(--brand-color2)]"
                    >
                        <TableCell className="font-medium">{leader.rank}</TableCell>
                        <TableCell>{leader.agentName}</TableCell>
                        <TableCell>{leader.leadsClaimed}</TableCell>
                        <TableCell>{leader.followups}</TableCell>
                        <TableCell>{leader.conversions}</TableCell>
                        <TableCell>
                            {(leader.leadsClaimed * 2) + (leader.followups * 1) + (leader.conversions * 5)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

const LeaderboardTableData = [
    {
        "id": 1,
        "metric": "Leads Claimed",
        "thisWeek": 18,
        "target": 20,
        "status": "🔶 Almost There"
    },
    {
        "id": 2,
        "metric": "Followups Completed",
        "thisWeek": 42,
        "target": 40,
        "status": "✅ Achieved"
    },
    {
        "id": 3,
        "metric": "Conversions (Sales)",
        "thisWeek": 6,
        "target": 8,
        "status": "🔺 Push More"
    },
    {
        "id": 4,
        "metric": "Response Time (Avg)",
        "thisWeek": "3h 20m",
        "target": "<4h",
        "status": "✅ On Track"
    },
    {
        "id": 5,
        "metric": "Stale Leads",
        "thisWeek": 2,
        "target": 0,
        "status": "🔴 Review Needed"
    }
]

const TeamLeaderboardData = [
    {
        "id": 1,
        "rank": "🥇 1",
        "agentName": "Aisha Khan",
        "leadsClaimed": 24,
        "followups": 50,
        "conversions": 8,
        "score": 96
    },
    {
        "id": 2,
        "rank": "🥈 2",
        "agentName": "Rohan Gupta",
        "leadsClaimed": 22,
        "followups": 47,
        "conversions": 6,
        "score": 89
    },
    {
        "id": 3,
        "rank": "🥉 3",
        "agentName": "Deepak Sharma",
        "leadsClaimed": 18,
        "followups": 42,
        "conversions": 7,
        "score": 85
    },
    {
        "id": 4,
        "rank": "4",
        "agentName": "Mansi Patel",
        "leadsClaimed": 17,
        "followups": 38,
        "conversions": 5,
        "score": 78
    },
    {
        "id": 5,
        "rank": "5",
        "agentName": "Nikhil Raj",
        "leadsClaimed": 14,
        "followups": 32,
        "conversions": 3,
        "score": 66
    }
]