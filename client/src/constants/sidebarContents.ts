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
  History,
  Rocket,
  Atom,
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
  Compass,
  Monitor,
} from "lucide-react";

export const SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
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
          url: "explorers",
          icon: Users,
          isActive: true,
        },
        {
          title: "Coaches",
          url: "coaches",
          icon: Users,
          isActive: true,
        },
        {
          title: "Organisations",
          url: "organisations",
          icon: Building2,
          isActive: true,
        },
        {
          title: "Recent Activities",
          url: "activities",
          icon: Activity,
          isActive: true,
        },
        {
          title: "Manage",
          url: "#",
          icon: Settings,
          isActive: true,
          items: [
            { title: "Assessments", url: "assessments", icon: FileText },
            { title: "Sessions", url: "sessions", icon: Video },
            { title: "Session Pool", url: "session-pool", icon: Library },
            {
              title: "Consultant Premium",
              url: "consultant-premium",
              icon: Award,
            },
            {
              title: "Masterclasses",
              url: "masterclasses",
              icon: ClipboardList,
            },
            { title: "Courses", url: "courses", icon: BookOpen },
            { title: "Access Codes", url: "access-codes", icon: Shield },
            { title: "Desk Users", url: "users", icon: Users },
          ],
        },
      ],
    },
    {
      name: "Approval Desk.",
      logo: AudioWaveform,
      plan: "Approvals",
      navMain: [
        {
          title: "Approval Desk",
          url: "#",
          icon: ThumbsUp,
        },
        {
          title: "Coaches Profiles",
          url: "#",
          icon: Users,
        },
        {
          title: "Organisations Profiles",
          url: "#",
          icon: Building2,
        },
        {
          title: "Google Map Listing",
          url: "#",
          icon: MapPin,
        },
        {
          title: "Forms",
          url: "#",
          icon: FileText,
        },
      ],
    },
    {
      name: "Digital Desk.",
      logo: AudioWaveform,
      plan: "Digital Content",
      navMain: [
        {
          title: "Digital Desk",
          url: "#",
          icon: Monitor,
        },
        {
          title: "Contents",
          url: "#",
          icon: FileText,
          items: [
            { title: "Insights", url: "#", icon: TrendingUp },
            { title: "Video library", url: "#", icon: Video },
            { title: "In the news", url: "#", icon: Newspaper },
            { title: "Testimonials", url: "#", icon: MessageSquare },
            { title: "Libraries", url: "#", icon: Library },
            { title: "Help Articles", url: "#", icon: HelpCircle },
            { title: "FAQs", url: "#", icon: HelpCircle },
            { title: "Team Profiles", url: "#", icon: Users },
          ],
        },
      ],
    },
    {
      name: "Relations Desk.",
      logo: AudioWaveform,
      plan: "Relations",
      navMain: [
        {
          title: "Relation Desk",
          url: "#",
          icon: Handshake,
        },
        {
          title: "User/Org Search",
          url: "#",
          icon: Search,
        },
        {
          title: "Leads",
          url: "#",
          icon: TrendingUp,
          items: [
            { title: "Active Users", url: "#", icon: Users },
            { title: "Explorers", url: "#", icon: Users },
            { title: "Coaches", url: "#", icon: Users },
            { title: "Partners", url: "#", icon: Handshake },
          ],
        },
        {
          title: "Supports",
          url: "#",
          icon: AlertCircle,
          items: [
            { title: "Problems", url: "#", icon: AlertCircle },
            { title: "Bugs", url: "#", icon: Bug },
            { title: "Abuses", url: "#", icon: Shield },
          ],
        },
        {
          title: "Feedback",
          url: "#",
          icon: MessageSquare,
        },
        {
          title: "Review",
          url: "#",
          icon: Star,
        },
      ],
    },
    {
      name: "Finance Desk.",
      logo: AudioWaveform,
      plan: "Finance",
      navMain: [
        {
          title: "Finance Desk",
          url: "#",
          icon: Wallet,
        },
        {
          title: "Payments",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "Payouts",
          url: "#",
          icon: DollarSign,
        },
        {
          title: "P&L",
          url: "#",
          icon: PieChart,
        },
        {
          title: "Reports",
          url: "#",
          icon: FileBarChart,
        },
      ],
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: Rocket,
      isActive: true,
      items: [
        { title: "History", url: "#", icon: History },
        { title: "Starred", url: "#", icon: Star },
        { title: "Settings", url: "#", icon: Settings },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Atom,
      items: [
        { title: "Genesis", url: "#", icon: Rocket },
        { title: "Explorer", url: "#", icon: Compass },
        { title: "Quantum", url: "#", icon: Atom },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#", icon: BookOpen },
        { title: "Get Started", url: "#", icon: Rocket },
        { title: "Tutorials", url: "#", icon: ClipboardList },
        { title: "Changelog", url: "#", icon: History },
      ],
    },
  ],
};
