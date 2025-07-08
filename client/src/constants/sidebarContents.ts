import {
  AudioWaveform,
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  SquareTerminal,
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
          url:"explorers",
          icon: Bot,
          isActive: true,
        },
        {
          title: "Coaches",
          url:"coaches",
          icon: Bot,
          isActive: true,
        },
        {
          title: "Organisations",
          url:"organisations",
          icon: Bot,
          isActive: true,
        },
        {
          title: "Recent Activities",
          url: "activities",
          icon: SquareTerminal,
          isActive: true,
        },
        {
          title: "Manage",
          url: "#",
          icon: SquareTerminal,
          isActive: true,
          items: [
            { title: "Assessments", url: "assessments" },
            { title: "Sessions", url: "sessions" },
            { title: "Session Pool", url: "session-pool" },
            { title: "Consultant Premium", url: "consultant-premium" },
            { title: "Masterclasses", url: "masterclasses" },
            { title: "Courses", url: "courses" },
            { title: "Access Codes", url: "access-codes" },
            { title: "Desk Users", url: "desk-users" },
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
          icon: Bot,
        },
        {
          title: "Coaches Profiles",
          url: "#",
          icon: Bot,
        },
        {
          title: "Organisations Profiles",
          url: "#",
          icon: Bot,
        },
        {
          title: "Google Map Listing",
          url: "#",
          icon: Bot,
        },
        {
          title: "Forms",
          url: "#",
          icon: Bot,
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
          icon: Bot
        },
        {
          title: "Contents",
          url: "#",
          icon: Bot,
          items: [
            { title: "Insights", url: "#" },
            { title: "Video library", url: "#" },
            { title: "In the news", url: "#" },
            { title: "Testimonials", url: "#" },
            { title: "Libraries", url: "#" },
            { title: "Help Articles", url: "#" },
            { title: "FAQs", url: "#" },
            { title: "Team Profiles", url: "#" },
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
          icon: Bot,
        },
        {
          title: "User/Org Search",
          url: "#",
          icon: Bot,
        },
        {
          title: "Leads",
          url: "#",
          icon: Bot,
          items: [
            { title: "Active Users", url: "#" },
            { title: "Explorers", url: "#" },
            { title: "Coaches", url: "#" },
            { title: "Partners", url: "#" },
          ],
        },
        {
          title: "Supports",
          url: "#",
          icon: Bot,
          items: [
            { title: "Problems", url: "#" },
            { title: "Bugs", url: "#" },
            { title: "Abuses", url: "#" },
          ],
        },
        {
          title: "Feedback",
          url: "#",
          icon: Bot,
        },
        {
          title: "Review",
          url: "#",
          icon: Bot,
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
            icon: Bot,
          },
          {
            title: "Payments",
            url: "#",
            icon: Bot,
          },
          {
            title: "Payouts",
            url: "#",
            icon: Bot,
          },
          {
            title: "P&L",
            url: "#",
            icon: Bot,
          },
          {
            title: "Reports",
            url: "#",
            icon: Bot,
          },
      ],
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
  ],
};
