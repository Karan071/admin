import {
  AudioWaveform,
  BookOpen,
  GalleryVerticalEnd,
  Users,
  Building2,
  Activity,
  Settings,
  FileText,
  Video,
  Newspaper,
  MessageSquare,
  HelpCircle,
  Library,
  Search,
  TrendingUp,
  Wallet,
  Star,
  ClipboardList,
  Shield,
  AlertCircle,
  ThumbsUp,
  Award,
  CreditCard,
  DollarSign,
  PieChart,
  FileBarChart,
  Handshake,
  MapPin,
  Bug,
} from "lucide-react";

export const SidebarData = {
  user: {
    name: "Karn",
    email: "Karan@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Admin Desk",
      logo: GalleryVerticalEnd,
      plan: "Administration",
      navMain: [
        {
          title: "Explorers",
          url: "/dashboard/admin/explorers",
          icon: Users,
          isActive: true,
        },
        {
          title: "Coaches",
          url: "/dashboard/admin/coaches",
          icon: Users,
          isActive: true,
        },
        {
          title: "Organisations",
          url: "/dashboard/admin/organisations",
          icon: Building2,
          isActive: true,
        },
        {
          title: "Recent Activities",
          url: "/dashboard/admin/activities",
          icon: Activity,
          isActive: true,
        },
        {
          title: "Manage",
          url: "#",
          icon: Settings,
          isActive: true,
          items: [
            { title: "Assessments", url: "/dashboard/admin/assessments", icon: FileText },
            { title: "Sessions", url: "/dashboard/admin/sessions", icon: Video },
            { title: "Session Pool", url: "/dashboard/admin/session-pool", icon: Library },
            {
              title: "Consultant Premium",
              url: "/dashboard/admin/consultant-premium",
              icon: Award,
            },
            {
              title: "Masterclasses",
              url: "/dashboard/admin/masterclasses",
              icon: ClipboardList,
            },
            { title: "Courses", url: "/dashboard/admin/courses", icon: BookOpen },
            { title: "Access Codes", url: "/dashboard/admin/access-codes", icon: Shield },
            { title: "Desk Users", url: "/dashboard/admin/users", icon: Users },
          ],
        },
      ],
    },
    {
      name: "Approval Desk",
      logo: AudioWaveform,
      plan: "Approvals",
      navMain: [
        {
          title: "Approval Dashboard",
          url: "/dashboard/approval/dashboard",
          icon: ThumbsUp,
        },
        {
          title: "Coaches Profiles",
          url: "/dashboard/approval/profile-coach",
          icon: Users,
        },
        {
          title: "Organisations Profiles",
          url: "/dashboard/approval/profile-org",
          icon: Building2,
        },
        {
          title: "Google Map Listing",
          url: "/dashboard/approval/google-map",
          icon: MapPin,
        },
        {
          title: "Forms",
          url: "/dashboard/approval/forms",
          icon: FileText,
        },
      ],
    },
    {
      name: "Digital Desk",
      logo: AudioWaveform,
      plan: "Digital Content",
      navMain: [
        {
          title: "Contents",
          url: "#",
          icon: FileText,
          items: [
            { title: "Insights", url: "/dashboard/digital/insights", icon: TrendingUp },
            { title: "Video Library", url: "/dashboard/digital/video-library", icon: Video },
            { title: "In the News", url: "/dashboard/digital/in-news", icon: Newspaper },
            { title: "Testimonials", url: "/dashboard/digital/testimonials", icon: MessageSquare },
            { title: "Libraries", url: "/dashboard/digital/library", icon: Library },
            { title: "Help Articles", url: "/dashboard/digital/help-articles", icon: HelpCircle },
            { title: "FAQs", url: "/dashboard/digital/faqs", icon: HelpCircle },
            { title: "Team Profiles", url: "/dashboard/digital/teams", icon: Users },
          ],
        },
      ],
    },
    {
      name: "Relations Desk",
      logo: AudioWaveform,
      plan: "Relations",
      navMain: [
        {
          title: "Relation Dashboard",
          url: "/dashboard/relation/dashboard",
          icon: Handshake,
        },
        {
          title: "Leaderboard",
          url: "/dashboard/relation/leaderboard",
          icon: Search,
        },
        {
          title: "User/Org Search",
          url: "/dashboard/relation/user-org-search",
          icon: Search,
        },
        {
          title: "Cases",
          icon: TrendingUp,
          url: "#",
          items: [
            { title: "Bugs", url: "/dashboard/relation/bugs", icon: Bug },
            { title: "Abuses", url: "/dashboard/relation/abuses", icon: Shield },
            { title: "Problems", url: "/dashboard/relation/problems", icon: AlertCircle },
          ]
        },
        {
          title: "Leads",
          url: "#",
          icon: TrendingUp,
          items: [
            { title: "Active Users", url: "/dashboard/relation/active-users", icon: Users },
            { title: "Explorers", url: "/dashboard/relation/explorers", icon: Users },
            { title: "Coaches", url: "/dashboard/relation/coaches", icon: Users },
            { title: "Partners", url: "/dashboard/relation/partners", icon: Handshake },
          ],
        },
        {
          title: "Follow Up",
          url: "/dashboard/relation/followups",
          icon: MessageSquare,
        },
        {
          title: "Feedback",
          url: "/dashboard/relation/feedback",
          icon: MessageSquare,
        },
        {
          title: "Review",
          url: "/dashboard/relation/review",
          icon: Star,
        },
      ],
    },
    {
      name: "Finance Desk",
      logo: AudioWaveform,
      plan: "Finance",
      navMain: [
        {
          title: "Finance Dashboard",
          url: "/dashboard/finance/dashboard",
          icon: Wallet,
        },
        {
          title: "Payments",
          url: "/dashboard/finance/payments",
          icon: CreditCard,
        },
        {
          title: "Payouts",
          url: "/dashboard/finance/payout",
          icon: DollarSign,
        },
        {
          title: "P&L",
          url: "/dashboard/finance/pl",
          icon: PieChart,
        },
        {
          title: "Reports",
          url: "/dashboard/finance/reports",
          icon: FileBarChart,
        },
      ],
    },
  ],
};