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
  Building,
  TrophyIcon,
} from "lucide-react";

export const SidebarData = {
  user: {
    name: "Karn",
    email: "Karan@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      title: "Platform",
      isHeading: true,
      items: [
        {
          title: "Platform Desk",
          url: "/desk/platform/desk",
          icon: Activity,
        },
        {
          title: "Recent Activities",
          url: "/desk/platform/activities",
          icon: Activity,
        },
        {
          title: "Leads",
          icon: UserPlus,
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Explorers",
              url: "/desk/platform/explorers",
              icon: Users,
            },
            {
              title: "Organisations",
              url: "/desk/platform/organisations",
              icon: Building2,
            },
            {
              title: "Channel Partner",
              url: "/desk/platform/channels",
              icon: Building2,
            },
          ],
        },
        {
          title: "Cases",
          icon: Folder,
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Problems",
              url: "/desk/platform/problems",
              icon: AlertCircle,
            },
            {
              title: "Bugs",
              url: "/desk/platform/bugs",
              icon: Bug,
            },
            {
              title: "Abuses",
              url: "/desk/platform/abuses",
              icon: Shield,
            },
          ],
        },
        {
          title: "Feedback",
          url: "/desk/platform/feedback",
          icon: MessageSquare,
        },
        {
          title: "Review",
          url: "/desk/platform/review",
          icon: Star,
        },
        {
          title: "Explorers",
          url: "/desk/platform/explorers",
          icon: Users,
        },
        {
          title: "Coaches",
          url: "/desk/platform/coaches",
          icon: UserCheck,
        },
        {
          title: "Organisations",
          url: "/desk/platform/organisations",
          icon: Building,
        },
        {
          title: "Plans",
          url: "/desk/platform/plans",
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
              url: "/desk/platform/assessments",
              icon: FileText,
            },
            {
              title: "Sessions",
              url: "/desk/platform/sessions",
              icon: Video,
            },
            {
              title: "Session Pool",
              url: "/desk/platform/session-pool",
              icon: Library,
            },
            {
              title: "Masterclasses",
              url: "/desk/platform/masterclasses",
              icon: GraduationCap,
            },
            {
              title: "Access Codes",
              url: "/desk/platform/access-codes",
              icon: Key,
            },
            {
              title: "Consultant Premium",
              url: "/desk/platform/consultant-premium",
              icon: Crown,
            },
          ],
        },
        {
          title: "Desk IAM",
          url: "/desk/platform/desk-iam",
          icon: Settings,
        },
        {
          title: "Add Team Member",
          url: "/desk/platform/addTeamMember",
          icon: Newspaper,
        },
      ],
    },
    {
      title: "Review",
      isHeading: true,
      items: [
        {
          title: "Review Desk",
          url: "/desk/review/coach-profiles",
          icon: UserCheck,
        },
        {
          title: "Coach Profiles",
          url: "/desk/review/coach-profiles",
          icon: UserCheck,
        },
        {
          title: "Organisations",
          icon: Building2,
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Institutes",
              url: "/desk/review/institutes",
              icon: GraduationCap,
            },
            {
              title: "Schools",
              url: "/desk/review/schools",
              icon: School,
            },
            {
              title: "Colleges",
              url: "/desk/review/colleges",
              icon: BookOpen,
            },
            {
              title: "Universities",
              url: "/desk/review/universities",
              icon: GraduationCap,
            },
            {
              title: "Companies",
              url: "/desk/review/companies",
              icon: Briefcase,
            },
            {
              title: "NGO's",
              url: "/desk/review/ngos",
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
              title: "Careers",
              url: "/desk/review/careers",
              icon: Briefcase,
            },
            {
              title: "Exams",
              url: "/desk/review/exams",
              icon: FileText,
            },
            {
              title: "Courses",
              url: "/desk/review/courses",
              icon: BookOpen,
            },
            {
              title: "Scholarships",
              url: "/desk/review/scholarships",
              icon: Award,
            },
            {
              title: "Skills",
              url: "/desk/review/skills",
              icon: Award,
            },
          ],
        },
        {
          title: "Map Listing",
          url: "/desk/review/map-listing",
          icon: MapPin,
        },
        {
          title: "Forms",
          url: "/desk/review/forms",
          icon: FileText,
        },
      ],
    },
    {
      title: "Digital",
      isHeading: true,
      items: [
        {
          title: "Digital Desk",
          url: "/desk/digital/desk",
          icon: Briefcase,
        },
        {
          title: "Campaigns",
          url: "/desk/digital/campaigns",
          icon: Briefcase,
        },
        {
          title: "Comments",
          url: "/desk/digital/comments",
          icon: Award,
        },
        {
          title: "Helpful",
          url: "/desk/digital/helpful",
          icon: Briefcase,
        },
        {
          title: "Insights",
          url: "/desk/digital/insights",
          icon: TrendingUp,
        },
        {
          title: "Video",
          url: "/desk/digital/videolibraries",
          icon: Video,
        },
        {
          title: "In the News",
          url: "/desk/digital/in-the-news",
          icon: Newspaper,
        },
        {
          title: "Testimonials",
          url: "/desk/digital/testimonials",
          icon: Quote,
        },
        {
          title: "Surveys",
          url: "/desk/digital/surveys",
          icon: MessageCircle,
        },
        {
          title: "Organisations",
          icon: Library,
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Institutes",
              url: "/desk/digital/institutes",
              icon: Briefcase,
            },
            {
              title: "Schools",
              url: "/desk/digital/schools",
              icon: BookOpen,
            },
            {
              title: "Colleges",
              url: "/desk/digital/colleges",
              icon: FileText,
            },
            {
              title: "Companies",
              url: "/desk/digital/companies",
              icon: School,
            },
            {
              title: "University",
              url: "/desk/digital/university",
              icon: Target,
            },
            {
              title: "NGO's",
              url: "/desk/digital/ngos",
              icon: Award,
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
              url: "/desk/digital/exams",
              icon: FileText,
            },
            {
              title: "Careers",
              url: "/desk/digital/careers",
              icon: Briefcase,
            },
            {
              title: "Courses",
              url: "/desk/digital/courses",
              icon: BookOpen,
            },
            {
              title: "Scholarships",
              url: "/desk/digital/scholarships",
              icon: School,
            },
            {
              title: "Skills",
              url: "/desk/digital/skills",
              icon: Target,
            },
          ],
        },
        {
          title: "Help Articles",
          url: "/desk/digital/help-articles",
          icon: HelpCircle,
        },
        {
          title: "FAQs",
          url: "/desk/digital/faqs",
          icon: MessageCircle,
        },
        {
          title: "Templates",
          url: "/desk/digital/templates",
          icon: MessageCircle,
        },

        {
          title: "Teams Directory",
          url: "/desk/digital/teams",
          icon: Users2,
        },
      ],
    },
    {
      title: "Relation ",
      isHeading: true,
      items: [
        {
          title: "Relations Desk",
          url: "/desk/relation/desk",
          icon: PhoneCall,
        },
        {
          title: "Search",
          url: "/desk/relation/search",
          icon: PhoneCall,
        },
        {
          title: "Follow Ups",
          url: "/desk/relation/follow-ups",
          icon: PhoneCall,
        },
        {
          title: "Pool",
          url: "/desk/relation/follow-ups",
          icon: PhoneCall,
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
      title: "DevOps",
      isHeading: true,
      items: [
        {
          title: "DevOps Desk",
          url: "/desk/devops/desk",
          icon: TrophyIcon,
        },
        {
          title: "Pipeline",
          url: "/desk/devops/pipeline",
          icon: TrophyIcon,
        },
        {
          title: "Cases",
          url: "/desk/devops/cases",
          icon: TrophyIcon,
        },
        {
          title: "Leaderboard",
          url: "/desk/devops/leaderboard",
          icon: TrophyIcon,
        },
      ],
    },
    {
      title: "Finance",
      isHeading: true,
      items: [
        {
          title: "Finance Desk",
          url: "/desk/finance/desk",
          icon: CreditCard,
        },
        {
          title: "Payments",
          url: "/desk/finance/payments",
          icon: CreditCard,
        },
        {
          title: "Commission",
          url: "/desk/finance/commission",
          icon: CreditCard,
        },
        {
          title: "Payouts",
          url: "/desk/finance/payouts",
          icon: DollarSign,
        },
        {
          title: "Platform",
          url: "/desk/finance/platform",
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
