import {
  BookOpen,
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
  TrendingUp,
  Star,
  ClipboardList,
  Shield,
  AlertCircle,
  Award,
  CreditCard,
  DollarSign,
  FileBarChart,
  MapPin,
  Bug,
  CircleUser,
  BadgeDollarSign,
  School,
  Briefcase,
  GraduationCap,
  Heart,
  UserCheck,
  Crown,
  Key,
  MessageCircle,
  Target,
  Calculator,
  PhoneCall,
  UserPlus,
  Trophy,
  Folder,
  Quote,
  Users2,
} from "lucide-react";

export const SidebarData = {
  user: {
    name: "Karn",
    email: "Karan@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      title: "Admin Desk",
      isHeading: true,
      items: [
        {
          title: "Recent Activities",
          url: "/desk/admin/activities",
          icon: Activity,
        },
        {
          title: "Leads",
          url: "/desk/admin/leads",
          icon: UserPlus,
        },
        {
          title: "Cases",
          icon: Folder,
          url: "#",
          isCollapsible: true,
          items: [
            { 
              title: "Bugs", 
              url: "/desk/admin/bugs", 
              icon: Bug 
            },
            {
              title: "Abuses",
              url: "/desk/admin/abuses",
              icon: Shield,
            },
            {
              title: "Problems",
              url: "/desk/admin/problems",
              icon: AlertCircle,
            },
            {
              title: "Feedback",
              url: "/desk/admin/feedback",
              icon: MessageSquare,
            },
          ],
        },
        {
          title: "Review",
          url: "/desk/admin/review",
          icon: Star,
        },
        {
          title: "Explorers",
          url: "/desk/admin/explorers",
          icon: Users,
        },
        {
          title: "Coaches",
          url: "/desk/admin/coaches",
          icon: UserCheck,
        },
        {
          title: "Organisations",
          url: "/desk/admin/organisations",
          icon: Building2,
        },
        {
          title: "Plans",
          url: "/desk/admin/plans",
          icon: ClipboardList,
        },
        {
          title: "Products",
          icon: TrendingUp,
          url: "#",
          isCollapsible: true,
          items: [
            { 
              title: "Assessments", 
              url: "/desk/admin/assessments", 
              icon: FileText 
            },
            {
              title: "Sessions",
              url: "/desk/admin/sessions",
              icon: Video,
            },
            {
              title: "Session Pool",
              url: "/desk/admin/session-pool",
              icon: Library,
            },
            {
              title: "Masterclasses",
              url: "/desk/admin/masterclasses",
              icon: GraduationCap,
            },
            {
              title: "Courses",
              url: "/desk/admin/courses",
              icon: BookOpen,
            },
            {
              title: "Access Codes",
              url: "/desk/admin/access-codes",
              icon: Key,
            },
            {
              title: "Consultant Premium",
              url: "/desk/admin/consultant-premium",
              icon: Crown,
            },
            {
              title: "Desk IAM",
              url: "/desk/admin/desk-iam",
              icon: Settings,
            },
          ],
        },
      ],
    },
    {
      title: "Approval Desk",
      isHeading: true,
      items: [
        {
          title: "Coach Profiles",
          url: "/desk/approval/coach-profiles",
          icon: UserCheck,
        },
        {
          title: "Organisations",
          icon: Building2,
          url: "#",
          isCollapsible: true,
          items: [
            { 
              title: "Companies", 
              url: "/desk/approval/companies", 
              icon: Briefcase 
            },
            {
              title: "Schools",
              url: "/desk/approval/schools",
              icon: School,
            },
            {
              title: "Institutes",
              url: "/desk/approval/institutes",
              icon: GraduationCap,
            },
            {
              title: "Colleges",
              url: "/desk/approval/colleges",
              icon: BookOpen,
            },
            {
              title: "Universities",
              url: "/desk/approval/universities",
              icon: GraduationCap,
            },
            {
              title: "NGO's",
              url: "/desk/approval/ngos",
              icon: Heart,
            },
          ],
        },
        {
          title: "Libraries",
          icon: Library,
          url: "#",
          isCollapsible: true,
          items: [
            { 
              title: "Exams", 
              url: "/desk/approval/exams", 
              icon: FileText 
            },
            {
              title: "Careers",
              url: "/desk/approval/careers",
              icon: Briefcase,
            },
            {
              title: "Scholarships",
              url: "/desk/approval/scholarships",
              icon: Award,
            },
          ],
        },
        {
          title: "Map Listing",
          url: "/desk/approval/map-listing",
          icon: MapPin,
        },
        {
          title: "Forms",
          url: "/desk/approval/forms",
          icon: FileText,
        },
      ],
    },
    {
      title: "Contents Desk",
      isHeading: true,
      items: [
        {
          title: "Insights",
          url: "/desk/contents/insights",
          icon: TrendingUp,
        },
        {
          title: "Video Library",
          url: "/desk/contents/video-library",
          icon: Video,
        },
        {
          title: "In the News",
          url: "/desk/contents/in-the-news",
          icon: Newspaper,
        },
        {
          title: "Testimonials",
          url: "/desk/contents/testimonials",
          icon: Quote,
        },
        {
          title: "Libraries",
          icon: Library,
          url: "#",
          isCollapsible: true,
          items: [
            { 
              title: "Careers", 
              url: "/desk/contents/careers", 
              icon: Briefcase 
            },
            {
              title: "Courses",
              url: "/desk/contents/courses",
              icon: BookOpen,
            },
            {
              title: "Exams",
              url: "/desk/contents/exams",
              icon: FileText,
            },
            {
              title: "Colleges",
              url: "/desk/contents/colleges",
              icon: School,
            },
            {
              title: "Skills",
              url: "/desk/contents/skills",
              icon: Target,
            },
            {
              title: "Scholarships",
              url: "/desk/contents/scholarships",
              icon: Award,
            },
            {
              title: "Companies",
              url: "/desk/contents/companies",
              icon: Briefcase,
            },
          ],
        },
        {
          title: "Help Articles",
          url: "/desk/contents/help-articles",
          icon: HelpCircle,
        },
        {
          title: "FAQs",
          url: "/desk/contents/faqs",
          icon: MessageCircle,
        },
        {
          title: "Teams",
          url: "/desk/contents/teams",
          icon: Users2,
        },
      ],
    },
    {
      title: "Relation Desk",
      isHeading: true,
      items: [
        {
          title: "Follow Ups",
          url: "/desk/relation/follow-ups",
          icon: PhoneCall,
        },
        {
          title: "Leads",
          url: "/desk/relation/leads",
          icon: UserPlus,
        },
        {
          title: "Cases",
          url: "/desk/relation/cases",
          icon: Folder,
        },
        {
          title: "My Accounts",
          url: "/desk/relation/my-accounts",
          icon: CircleUser,
        },
        {
          title: "My Teams",
          url: "/desk/relation/my-teams",
          icon: Users2,
        },
        {
          title: "Leaderboard",
          url: "/desk/relation/leaderboard",
          icon: Trophy,
        },
      ],
    },
    {
      title: "Finance Desk",
      isHeading: true,
      items: [
        {
          title: "Payments",
          url: "/desk/finance/payments",
          icon: CreditCard,
        },
        {
          title: "Payouts",
          url: "/desk/finance/payouts",
          icon: DollarSign,
        },
        {
          title: "Earnings",
          url: "/desk/finance/earnings",
          icon: BadgeDollarSign,
        },
        {
          title: "P&L",
          url: "/desk/finance/pl",
          icon: Calculator,
        },
        {
          title: "Reports",
          url: "/desk/finance/reports",
          icon: FileBarChart,
        },
      ],
    },
  ],
};
