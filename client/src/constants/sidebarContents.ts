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
} from "lucide-react";

export const SidebarData = {
  user: {
    name: "Karn",
    email: "Karan@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      title: "Admin",
      isHeading: true,
      items: [
        {
          title: "Admin Desk",
          url: "/desk/admin/desk",
          icon: Activity,
        },
        {
          title: "Recent Activities",
          url: "/desk/admin/activities",
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
              url: "/desk/admin/explorers",
              icon: Users,
            },
            {
              title: "Organisations",
              url: "/desk/admin/organisations",
              icon: Building2,
            },
            {
              title: "Channel Partner",
              url: "/desk/admin/channels",
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
              url: "/desk/admin/problems",
              icon: AlertCircle,
            },
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
          ],
        },
        {
          title: "Feedback",
          url: "/desk/admin/feedback",
          icon: MessageSquare,
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
          icon: Building,
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
              title: "Access Codes",
              url: "/desk/admin/access-codes",
              icon: Key,
            },
            {
              title: "Consultant Premium",
              url: "/desk/admin/consultant-premium",
              icon: Crown,
            },
          ],
        },
        {
          title: "Desk IAM",
          url: "/desk/admin/desk-iam",
          icon: Settings,
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
              icon: Briefcase 
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
              icon: FileText 
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
          icon: Briefcase 
        },
        { 
          title: "Campaigns", 
          url: "/desk/digital/careers", 
          icon: Briefcase 
        },
        {
          title: "Comments",
          url: "/desk/digital/scholarships",
          icon: Award,
        },
        { 
          title: "Helpful", 
          url: "/desk/digital/helpful", 
          icon: Briefcase 
        },
        {
          title: "Insights",
          url: "/desk/digital/insights",
          icon: TrendingUp,
        },
        {
          title: "Video",
          url: "/desk/digital/video",
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
          url: "/desk/digital/faqs",
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
              url: "/desk/digital/careers", 
              icon: Briefcase 
            },
            {
              title: "Schools",
              url: "/desk/digital/courses",
              icon: BookOpen,
            },
            {
              title: "Colleges",
              url: "/desk/digital/exams",
              icon: FileText,
            },
            {
              title: "Companies",
              url: "/desk/digital/colleges",
              icon: School,
            },
            {
              title: "University",
              url: "/desk/digital/skills",
              icon: Target,
            },
            {
              title: "NGO's",
              url: "/desk/digital/scholarships",
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
              icon: Briefcase 
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
          url: "/desk/digital/faqs",
          icon: MessageCircle,
        },
        

        {
          title: "Teams Directory",
          url: "/desk/contents/teams",
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
          url: "/desk/finance/commisssion",
          icon: CreditCard,
        },
        {
          title: "Payouts",
          url: "/desk/finance/payouts",
          icon: DollarSign,
        },
        {
          title: "Platform",
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
