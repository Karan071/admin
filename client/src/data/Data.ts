import picture1 from "@/assets/asset.jpg"
import picture2 from "@/assets/asset.jpg"
import picture3 from "@/assets/asset.jpg"
import picture4 from "@/assets/asset.jpg"

export const mockUsers = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.s@example.com",
    phone: "+91 9876543210",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (12)",
    profileStage: "Registered",
    assessments: {
      total: 2,
      completed: 1,
    },
    sessions: {
      total: 3,
      missed: 1,
    },
    source: "BA Campaign",
    joinDate: "15 May 2023",
    lastLogin: "17 May 2023",
    status: "Active",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.p@example.com",
    phone: "+91 9876543211",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (10)",
    profileStage: "Enquiry",
    assessments: {
      total: 1,
      completed: 0,
    },
    sessions: {
      total: 1,
      missed: 0,
    },
    source: "Consultant",
    joinDate: "10 May 2023",
    lastLogin: "16 May 2023",
    status: "Active",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.k@example.com",
    phone: "+91 9876543212",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (UG)",
    profileStage: "Registered",
    assessments: {
      total: 2,
      completed: 2,
    },
    sessions: {
      total: 4,
      missed: 0,
    },
    source: "Organisation",
    joinDate: "5 May 2023",
    lastLogin: "15 May 2023",
    status: "Active",
  },
  {
    id: "4",
    name: "Sneha Gupta",
    email: "sneha.g@example.com",
    phone: "+91 9876543213",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (12)",
    profileStage: "Guest",
    assessments: {
      total: 0,
      completed: 0,
    },
    sessions: {
      total: 0,
      missed: 0,
    },
    source: "Organic",
    joinDate: "12 May 2023",
    lastLogin: "12 May 2023",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.s@example.com",
    phone: "+91 9876543214",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (UG)",
    profileStage: "Registered",
    assessments: {
      total: 2,
      completed: 1,
    },
    sessions: {
      total: 2,
      missed: 1,
    },
    source: "BA Campaign",
    joinDate: "8 May 2023",
    lastLogin: "14 May 2023",
    status: "Active",
  },
  {
    id: "6",
    name: "Anjali Mehta",
    email: "anjali.m@example.com",
    phone: "+91 9876543215",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (10)",
    profileStage: "Enquiry",
    assessments: {
      total: 1,
      completed: 1,
    },
    sessions: {
      total: 1,
      missed: 0,
    },
    source: "Consultant",
    joinDate: "9 May 2023",
    lastLogin: "10 May 2023",
    status: "Active",
  },
  {
    id: "7",
    name: "Rohit Verma",
    email: "rohit.v@example.com",
    phone: "+91 9876543216",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (UG)",
    profileStage: "Registered",
    assessments: {
      total: 3,
      completed: 2,
    },
    sessions: {
      total: 3,
      missed: 1,
    },
    source: "Referral",
    joinDate: "6 May 2023",
    lastLogin: "8 May 2023",
    status: "Active",
  },
  {
    id: "8",
    name: "Kavya Reddy",
    email: "kavya.r@example.com",
    phone: "+91 9876543217",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (12)",
    profileStage: "Registered",
    assessments: {
      total: 2,
      completed: 0,
    },
    sessions: {
      total: 2,
      missed: 2,
    },
    source: "Organic",
    joinDate: "7 May 2023",
    lastLogin: "9 May 2023",
    status: "Inactive",
  },
  {
    id: "9",
    name: "Nikhil Joshi",
    email: "nikhil.j@example.com",
    phone: "+91 9876543218",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (PG)",
    profileStage: "Enquiry",
    assessments: {
      total: 1,
      completed: 1,
    },
    sessions: {
      total: 1,
      missed: 0,
    },
    source: "Consultant",
    joinDate: "10 May 2023",
    lastLogin: "11 May 2023",
    status: "Active",
  },
  {
    id: "10",
    name: "Meera Nair",
    email: "meera.n@example.com",
    phone: "+91 9876543219",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (UG)",
    profileStage: "Registered",
    assessments: {
      total: 3,
      completed: 3,
    },
    sessions: {
      total: 3,
      missed: 0,
    },
    source: "BA Campaign",
    joinDate: "11 May 2023",
    lastLogin: "13 May 2023",
    status: "Active",
  },
  {
    id: "11",
    name: "Siddharth Rao",
    email: "siddharth.r@example.com",
    phone: "+91 9876543220",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (12)",
    profileStage: "Guest",
    assessments: {
      total: 0,
      completed: 0,
    },
    sessions: {
      total: 0,
      missed: 0,
    },
    source: "Organisation",
    joinDate: "13 May 2023",
    lastLogin: "13 May 2023",
    status: "Inactive",
  },
  {
    id: "12",
    name: "Pooja Iyer",
    email: "pooja.i@example.com",
    phone: "+91 9876543221",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (PG)",
    profileStage: "Registered",
    assessments: {
      total: 2,
      completed: 2,
    },
    sessions: {
      total: 2,
      missed: 0,
    },
    source: "Referral",
    joinDate: "14 May 2023",
    lastLogin: "15 May 2023",
    status: "Active",
  },
  {
    id: "13",
    name: "Arjun Desai",
    email: "arjun.d@example.com",
    phone: "+91 9876543222",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (10)",
    profileStage: "Guest",
    assessments: {
      total: 0,
      completed: 0,
    },
    sessions: {
      total: 1,
      missed: 1,
    },
    source: "Organic",
    joinDate: "6 May 2023",
    lastLogin: "6 May 2023",
    status: "Inactive",
  },
  {
    id: "14",
    name: "Neha Bansal",
    email: "neha.b@example.com",
    phone: "+91 9876543223",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Female",
    userType: "Student (UG)",
    profileStage: "Registered",
    assessments: {
      total: 3,
      completed: 1,
    },
    sessions: {
      total: 2,
      missed: 1,
    },
    source: "Consultant",
    joinDate: "4 May 2023",
    lastLogin: "6 May 2023",
    status: "Active",
  },
  {
    id: "15",
    name: "Manish Agarwal",
    email: "manish.a@example.com",
    phone: "+91 9876543224",
    photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
    gender: "Male",
    userType: "Student (PG)",
    profileStage: "Enquiry",
    assessments: {
      total: 1,
      completed: 0,
    },
    sessions: {
      total: 1,
      missed: 0,
    },
    source: "BA Campaign",
    joinDate: "3 May 2023",
    lastLogin: "5 May 2023",
    status: "Active",
  }
]


export const API = {
  "user": {
    "id": "",
    "role_id": "",
    "is_active": "",
    "name": "",
    "username": "",
    "email": "",
    "headline": "",
    "phone": "",
    "country": "",
    "language": {
      "id": "",
      "code": "",
      "name": ""
    },
    "status": "",
    "payout": {
      "method": "",
      "icon": "",
      "email": ""
    },
    "created_at": "",
    "updated_at": "",
    "last_activity_at": "",
    "registration_at": "",
    "avatar": "",
    "web_token": "",
    "teach_via": ""
  },
  "details": {
    "id": "",
    "user_id": "",
    "gender": "",
    "dob": "",
    "profile_type": "",
    "class": "",
    "qualification": "",
    "aadhar_details": {
      "status": "",
      "ref_id": "",
      "aadhar_num": "",
      "care_of": "",
      "address": "",
      "dob": "",
      "gender": "",
      "mobile_hash": ""
    },
    "pan_details": {
      "pan_status": "",
      "reference_id": "",
      "name_pan_card": "",
      "pan": "",
      "type": "",
      "aadhaar_seeding_status": ""
    },
    "bank_details": {
      "account_status": "",
      "reference_id": "",
      "name_at_bank": "",
      "bank_name": "",
      "micr": "",
      "ifsc": "",
      "type": "",
      "number": "",
      "address": ""
    },
    "career_classes": {
      "id": "",
      "name": "",
      "qualification_id": "",
      "qus_type": ""
    },
    "created_at": "",
    "updated_at": ""
  }
}

export const CoachProfileData = [
  {
    "id": 1,
    "name": "Dr. Seema Rao",
    "email": "seema@edu.com",
    "phone": "+91-9582292522",
    "speciality": "Psychology",
    "submitted": "17 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "name": "Ramesh Patel",
    "email": "ramesh@career.in",
    "phone": "+91-7756913200",
    "speciality": "STEM",
    "submitted": "16 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "name": "Anjali Mehra",
    "email": "anjali@eduplus.org",
    "phone": "+91-9811122233",
    "speciality": "Life Coaching",
    "submitted": "15 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "name": "Vikram Singh",
    "email": "vikram@techmentor.com",
    "phone": "+91-9922334455",
    "speciality": "Technology",
    "submitted": "14 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "name": "Neha Sharma",
    "email": "neha@wellnesshub.in",
    "phone": "+91-9090909090",
    "speciality": "Health & Wellness",
    "submitted": "13 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "name": "Amit Verma",
    "email": "amit@mathmentor.com",
    "phone": "+91-9898989898",
    "speciality": "Mathematics",
    "submitted": "12 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "name": "Priya Nair",
    "email": "priya@mindworks.org",
    "phone": "+91-9123456789",
    "speciality": "Cognitive Science",
    "submitted": "11 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "name": "Manoj Desai",
    "email": "manoj@skilldev.in",
    "phone": "+91-9988776655",
    "speciality": "Skill Development",
    "submitted": "10 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "name": "Sunita Reddy",
    "email": "sunita@wellbeing.org",
    "phone": "+91-8877665544",
    "speciality": "Mental Health",
    "submitted": "09 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "name": "Karan Mehta",
    "email": "karan@leadcoach.com",
    "phone": "+91-7788990011",
    "speciality": "Leadership",
    "submitted": "08 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 11,
    "name": "Ritika Das",
    "email": "ritika@creativemind.in",
    "phone": "+91-8899776655",
    "speciality": "Creative Thinking",
    "submitted": "07 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 12,
    "name": "Siddharth Roy",
    "email": "sid@aiacademy.org",
    "phone": "+91-9000011122",
    "speciality": "Artificial Intelligence",
    "submitted": "06 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 13,
    "name": "Meera Joshi",
    "email": "meera@eduvision.com",
    "phone": "+91-7000550066",
    "speciality": "Education Strategy",
    "submitted": "05 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 14,
    "name": "Arjun Kapoor",
    "email": "arjun@coachpro.in",
    "phone": "+91-6666555544",
    "speciality": "Sports Psychology",
    "submitted": "04 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 15,
    "name": "Divya Malhotra",
    "email": "divya@growthhub.com",
    "phone": "+91-9911223344",
    "speciality": "Career Growth",
    "submitted": "03 May 2025",
    "profile_link": "View Profile",
    "actions": ["Approve", "Reject"]
  }
];


export const OrganisationProfiles = [
  {
    "id": 1,
    "organisation": "Bright Future School",
    "location": "Pune",
    "contact": "+91-9823123456",
    "type": "School",
    "submitted": "16 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "organisation": "Global Tech Institute",
    "location": "Bengaluru",
    "contact": "+91-9745612345",
    "type": "Institute",
    "submitted": "15 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "organisation": "Sunrise Academy",
    "location": "Delhi",
    "contact": "+91-9810022334",
    "type": "School",
    "submitted": "14 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "organisation": "NextGen Learning",
    "location": "Hyderabad",
    "contact": "+91-9000011122",
    "type": "Institute",
    "submitted": "13 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "organisation": "EduBridge Foundation",
    "location": "Chennai",
    "contact": "+91-9888777666",
    "type": "NGO",
    "submitted": "12 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "organisation": "Inspire Junior School",
    "location": "Ahmedabad",
    "contact": "+91-9556677889",
    "type": "School",
    "submitted": "11 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "organisation": "SkillRise Academy",
    "location": "Kolkata",
    "contact": "+91-9665544332",
    "type": "Institute",
    "submitted": "10 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "organisation": "New Era School",
    "location": "Jaipur",
    "contact": "+91-9776655443",
    "type": "School",
    "submitted": "09 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "organisation": "Future Minds",
    "location": "Lucknow",
    "contact": "+91-9345612398",
    "type": "NGO",
    "submitted": "08 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "organisation": "TechPro Institute",
    "location": "Mumbai",
    "contact": "+91-9876543210",
    "type": "Institute",
    "submitted": "07 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 11,
    "organisation": "Leap High School",
    "location": "Nagpur",
    "contact": "+91-9182736450",
    "type": "School",
    "submitted": "06 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 12,
    "organisation": "Bright Path Institute",
    "location": "Bhopal",
    "contact": "+91-9032165478",
    "type": "Institute",
    "submitted": "05 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 13,
    "organisation": "Hope Foundation",
    "location": "Patna",
    "contact": "+91-9123456780",
    "type": "NGO",
    "submitted": "04 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 14,
    "organisation": "Smart Kids School",
    "location": "Surat",
    "contact": "+91-9112233445",
    "type": "School",
    "submitted": "03 May 2025",
    "docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 15,
    "organisation": "National Institute of Skills",
    "location": "Noida",
    "contact": "+91-9879879876",
    "type": "Institute",
    "submitted": "02 May 2025",
    "docs": "Check Files",
    "actions": ["Approve", "Reject"]
  }
];


export const GoogleMapListings = [
  {
    "id": 1,
    "listing": "Bright Future School",
    "address": "Pune, MH",
    "linked_org": "Bright Future",
    "submitted": "15 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "listing": "Global Tech Institute",
    "address": "Bangalore, KA",
    "linked_org": "Global Tech",
    "submitted": "14 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "listing": "Sunrise Academy",
    "address": "Delhi, DL",
    "linked_org": "Sunrise Edu",
    "submitted": "13 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "listing": "NextGen Learning Hub",
    "address": "Hyderabad, TG",
    "linked_org": "NextGen",
    "submitted": "12 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "listing": "EduBridge Foundation",
    "address": "Chennai, TN",
    "linked_org": "EduBridge",
    "submitted": "11 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "listing": "Inspire Junior School",
    "address": "Ahmedabad, GJ",
    "linked_org": "Inspire",
    "submitted": "10 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "listing": "SkillRise Academy",
    "address": "Kolkata, WB",
    "linked_org": "SkillRise",
    "submitted": "09 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "listing": "New Era School",
    "address": "Jaipur, RJ",
    "linked_org": "New Era Foundation",
    "submitted": "08 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "listing": "Future Minds Institute",
    "address": "Lucknow, UP",
    "linked_org": "Future Minds",
    "submitted": "07 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "listing": "TechPro Campus",
    "address": "Mumbai, MH",
    "linked_org": "TechPro",
    "submitted": "06 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 11,
    "listing": "Leap High School",
    "address": "Nagpur, MH",
    "linked_org": "Leap High",
    "submitted": "05 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 12,
    "listing": "Bright Path Institute",
    "address": "Bhopal, MP",
    "linked_org": "Bright Path",
    "submitted": "04 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 13,
    "listing": "Hope Foundation Center",
    "address": "Patna, BR",
    "linked_org": "Hope Foundation",
    "submitted": "03 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 14,
    "listing": "Smart Kids School",
    "address": "Surat, GJ",
    "linked_org": "Smart Kids",
    "submitted": "02 May 2025",
    "map_preview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 15,
    "listing": "National Skills Campus",
    "address": "Noida, UP",
    "linked_org": "National Institute of Skills",
    "submitted": "01 May 2025",
    "map_preview": "View Map",
    "actions": ["Approve", "Reject"]
  }
];


export const FormsSubmittedData = [
  {
    "id": 1,
    "user": "Aarav Mehta",
    "type": "School",
    "name": "Shining Star Academy",
    "location": "Varanasi",
    "submitted": "17 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 2,
    "user": "Neha Sharma",
    "type": "Organisation",
    "name": "SkillWise Hub",
    "location": "Jaipur",
    "submitted": "15 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 3,
    "user": "Rohit Verma",
    "type": "College",
    "name": "Pioneer Degree College",
    "location": "Delhi",
    "submitted": "14 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 4,
    "user": "Meera Joshi",
    "type": "School",
    "name": "Green Valley Public School",
    "location": "Ahmedabad",
    "submitted": "13 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 5,
    "user": "Amit Rao",
    "type": "Organisation",
    "name": "TechBridge Network",
    "location": "Mumbai",
    "submitted": "12 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 6,
    "user": "Sara Iqbal",
    "type": "College",
    "name": "Lighthouse Women’s College",
    "location": "Kolkata",
    "submitted": "11 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 7,
    "user": "Kunal Malhotra",
    "type": "School",
    "name": "New Generation School",
    "location": "Chandigarh",
    "submitted": "10 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 8,
    "user": "Anita George",
    "type": "Organisation",
    "name": "WellBeing Circle",
    "location": "Bengaluru",
    "submitted": "09 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 9,
    "user": "Dev Sharma",
    "type": "College",
    "name": "Unity Arts College",
    "location": "Hyderabad",
    "submitted": "08 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 10,
    "user": "Isha Anand",
    "type": "School",
    "name": "Rainbow International School",
    "location": "Surat",
    "submitted": "07 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 11,
    "user": "Rajeev Nair",
    "type": "Organisation",
    "name": "EduSpark Foundation",
    "location": "Kochi",
    "submitted": "06 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 12,
    "user": "Priya Bhandari",
    "type": "College",
    "name": "Eastern Commerce College",
    "location": "Patna",
    "submitted": "05 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 13,
    "user": "Tanmay Kapoor",
    "type": "School",
    "name": "Future Scholars School",
    "location": "Indore",
    "submitted": "04 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 14,
    "user": "Ritika Shah",
    "type": "Organisation",
    "name": "Global Youth Initiative",
    "location": "Noida",
    "submitted": "03 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  },
  {
    "id": 15,
    "user": "Manoj Desai",
    "type": "School",
    "name": "Bright Horizon School",
    "location": "Nashik",
    "submitted": "02 May 2025",
    "entry": "View",
    "actions": ["Add to List", "Reject"]
  }
];
interface VideoTableItem {
  id: string;
  title: string;
  speaker: string;
  mode: string;
  category: string;
  mapping: string;
  for: string;
  playCount: number;
  videoUrl: string;
  status: string;
}

export const VideoTableData: VideoTableItem[] = [
  {
    id: "1",
    title: "Career Planning in Tech",
    speaker: "Rahul Sharma",
    mode: "Live",
    category: "Career Guidance",
    mapping: "Tech Careers",
    for: "UG Students",
    playCount: 1240,
    videoUrl: "https://example.com/video1",
    status: "Published"
  },
  {
    id: "2",
    title: "Interview Preparation",
    speaker: "Priya Patel",
    mode: "Recorded",
    category: "Skills",
    mapping: "Job Ready",
    for: "Final Year",
    playCount: 890,
    videoUrl: "https://example.com/video2",
    status: "Published"
  },
  // Add more mock data as needed...
];
export const NewsMentionsData = [
  {
    "id": "1",
    "logo": "![Logo]",
    "title": "Aimshala Recognized by Economic Times",
    "source": "Economic Times",
    "link": "[Read More]",
    "clicks": "1,124",
    "date": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "2",
    "logo": "![Logo]",
    "title": "Career Innovation Spotlight on NDTV",
    "source": "NDTV",
    "link": "[Read More]",
    "clicks": "879",
    "date": "13 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "3",
    "logo": "![Logo]",
    "title": "How Aimshala is Changing Education",
    "source": "Hindustan Times",
    "link": "[Read More]",
    "clicks": "704",
    "date": "09 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "4",
    "logo": "![Logo]",
    "title": "Future of Learning: Aimshala's AI Push",
    "source": "Business Standard",
    "link": "[Read More]",
    "clicks": "945",
    "date": "08 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "5",
    "logo": "![Logo]",
    "title": "Startups to Watch: Aimshala",
    "source": "Inc42",
    "link": "[Read More]",
    "clicks": "1,230",
    "date": "05 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "6",
    "logo": "![Logo]",
    "title": "Aimshala's Journey in EdTech",
    "source": "Forbes India",
    "link": "[Read More]",
    "clicks": "768",
    "date": "02 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "7",
    "logo": "![Logo]",
    "title": "Empowering Rural Youth: Aimshala’s Impact",
    "source": "The Hindu",
    "link": "[Read More]",
    "clicks": "989",
    "date": "30 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "8",
    "logo": "![Logo]",
    "title": "Tech for Good: Aimshala’s Learning Tools",
    "source": "YourStory",
    "link": "[Read More]",
    "clicks": "812",
    "date": "28 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "9",
    "logo": "![Logo]",
    "title": "Aimshala Among Top EdTech Innovators",
    "source": "Entrepreneur India",
    "link": "[Read More]",
    "clicks": "1,015",
    "date": "26 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "10",
    "logo": "![Logo]",
    "title": "EdTech Trends 2025: Featuring Aimshala",
    "source": "Mint",
    "link": "[Read More]",
    "clicks": "653",
    "date": "23 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "11",
    "logo": "![Logo]",
    "title": "Aimshala’s Bootcamps Transforming Lives",
    "source": "TOI",
    "link": "[Read More]",
    "clicks": "912",
    "date": "21 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "12",
    "logo": "![Logo]",
    "title": "Inside Aimshala's Learning Innovation Hub",
    "source": "India Today",
    "link": "[Read More]",
    "clicks": "574",
    "date": "19 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "13",
    "logo": "![Logo]",
    "title": "Learning on Mobile: Aimshala's New App",
    "source": "ET Tech",
    "link": "[Read More]",
    "clicks": "1,156",
    "date": "17 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "14",
    "logo": "![Logo]",
    "title": "How Aimshala Keeps Students Motivated",
    "source": "Indian Express",
    "link": "[Read More]",
    "clicks": "478",
    "date": "14 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "15",
    "logo": "![Logo]",
    "title": "Women in EdTech: Aimshala Leads the Way",
    "source": "Femina",
    "link": "[Read More]",
    "clicks": "833",
    "date": "12 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "16",
    "logo": "![Logo]",
    "title": "AI in Classrooms: Aimshala's Strategy",
    "source": "Analytics India",
    "link": "[Read More]",
    "clicks": "697",
    "date": "10 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "17",
    "logo": "![Logo]",
    "title": "Aimshala Brings Learning to Tier-2 Cities",
    "source": "LiveMint",
    "link": "[Read More]",
    "clicks": "1,042",
    "date": "07 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "18",
    "logo": "![Logo]",
    "title": "Student Voices: How Aimshala Changed My Life",
    "source": "Times Now",
    "link": "[Read More]",
    "clicks": "690",
    "date": "05 Apr 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  }
]
export const testimonialsData = [
  {
    "id": "1",
    "picture": "photo-aanya.jpg",
    "name": "Aanya Kapoor",
    "role": "Student, Class 12",
    "category": "Student",
    "audience": "11–12, UG",
    "type": "Text",
    "contentPreview": "The guidance helped me select my stream",
    "date": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "2",
    "picture": "photo-sandeep.jpg",
    "name": "Sandeep Khosla",
    "role": "Parent of 10th Grader",
    "category": "Parent",
    "audience": "9–10, UG",
    "type": "Video",
    "contentPreview": "Amazing clarity for our son's choices",
    "date": "17 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "3",
    "picture": "photo-neha.jpg",
    "name": "Neha Malhotra",
    "role": "Career Consultant",
    "category": "Coach",
    "audience": "Professionals",
    "type": "Text",
    "contentPreview": "A robust ecosystem for mentor support",
    "date": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "4",
    "picture": "photo-joseph.jpg",
    "name": "Joseph Mathew",
    "role": "Principal, Hope Academy",
    "category": "Partner",
    "audience": "Schools, NGOs",
    "type": "Video",
    "contentPreview": "Great collaboration with our school",
    "date": "14 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "5",
    "picture": "photo-rhea.jpg",
    "name": "Rhea Sharma",
    "role": "Student, Class 11",
    "category": "Student",
    "audience": "11–12",
    "type": "Text",
    "contentPreview": "Cleared all my doubts about future careers",
    "date": "13 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "6",
    "picture": "photo-tarun.jpg",
    "name": "Tarun Bajaj",
    "role": "Working Professional",
    "category": "Coach",
    "audience": "UG, Professionals",
    "type": "Video",
    "contentPreview": "The mentorship boosted my career",
    "date": "12 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "7",
    "picture": "photo-ruchi.jpg",
    "name": "Ruchi Mehta",
    "role": "Parent of Class 9 Student",
    "category": "Parent",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Relieved to have professional support",
    "date": "11 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "8",
    "picture": "photo-amit.jpg",
    "name": "Amit Rawal",
    "role": "NGO Director",
    "category": "Partner",
    "audience": "NGOs",
    "type": "Video",
    "contentPreview": "Valuable impact in remote communities",
    "date": "10 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "9",
    "picture": "photo-meena.jpg",
    "name": "Meena Arora",
    "role": "Student, Class 10",
    "category": "Student",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Made learning more interesting",
    "date": "09 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "10",
    "picture": "photo-harsh.jpg",
    "name": "Harshvardhan Patel",
    "role": "Coach, MBA Prep",
    "category": "Coach",
    "audience": "UG, PG",
    "type": "Text",
    "contentPreview": "Structured and impactful sessions",
    "date": "08 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "11",
    "picture": "photo-rekha.jpg",
    "name": "Rekha Nair",
    "role": "Parent of a College Student",
    "category": "Parent",
    "audience": "UG",
    "type": "Video",
    "contentPreview": "Guidance at the right time",
    "date": "07 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "12",
    "picture": "photo-rajesh.jpg",
    "name": "Rajesh Khanna",
    "role": "Principal, City School",
    "category": "Partner",
    "audience": "Schools",
    "type": "Text",
    "contentPreview": "Inspired teaching through collaboration",
    "date": "06 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "13",
    "picture": "photo-shalini.jpg",
    "name": "Shalini Vyas",
    "role": "Career Coach",
    "category": "Coach",
    "audience": "Professionals",
    "type": "Video",
    "contentPreview": "Career breakthrough for my mentees",
    "date": "05 May 2025",
    "status": "Published",
    "actions": ["View Video", "Archive"]
  },
  {
    "id": "14",
    "picture": "photo-anshul.jpg",
    "name": "Anshul Mehra",
    "role": "Student, Final Year UG",
    "category": "Student",
    "audience": "UG",
    "type": "Text",
    "contentPreview": "Realigned my career goals effectively",
    "date": "04 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "15",
    "picture": "photo-farha.jpg",
    "name": "Farha Qureshi",
    "role": "Counselor",
    "category": "Coach",
    "audience": "9–12",
    "type": "Text",
    "contentPreview": "Students respond so well to the program",
    "date": "03 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "16",
    "picture": "photo-vikram.jpg",
    "name": "Vikram Das",
    "role": "Parent of UG Student",
    "category": "Parent",
    "audience": "UG",
    "type": "Text",
    "contentPreview": "Best decision we took this year",
    "date": "02 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "17",
    "picture": "photo-anita.jpg",
    "name": "Anita Roy",
    "role": "Principal, Future High School",
    "category": "Partner",
    "audience": "Schools",
    "type": "Video",
    "contentPreview": "Collaboration helps our faculty grow",
    "date": "01 May 2025",
    "status": "Pending",
    "actions": ["Review", "Publish"]
  },
  {
    "id": "18",
    "picture": "photo-yash.jpg",
    "name": "Yash Jain",
    "role": "Student, Class 9",
    "category": "Student",
    "audience": "9–10",
    "type": "Text",
    "contentPreview": "Fun and helpful resources",
    "date": "30 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "id": "19",
    "picture": "photo-rina.jpg",
    "name": "Rina Thakur",
    "role": "NGO Project Coordinator",
    "category": "Partner",
    "audience": "NGOs",
    "type": "Text",
    "contentPreview": "Structured and timely assistance",
    "date": "29 Apr 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  }
]
export const teamDirectoryTableData = [
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Riya Malhotra",
    "role": "Co-Founder & Content Head",
    "linkedin": "View Profile",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Ankur Sharma",
    "role": "Lead Backend Engineer",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Neha Joshi",
    "role": "UX/UI Designer",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Ravi Kapoor",
    "role": "Outreach Strategist",
    "linkedin": "LinkedIn",
    "status": "Active",
    "actions": ["Edit", "Deactivate"]
  },
  {
    "picture": "/placeholder-avatar.svg",
    "name": "Rohan Sen",
    "role": "Program Advisor",
    "linkedin": "LinkedIn",
    "status": "Inactive",
    "actions": ["Edit", "Activate"]
  }
]
export const LibraryTableData = [
  {
    "title": "Career Options in Cybersecurity",
    "tags": ["Security", "IT"],
    "for": "UG, PG",
    "source": "Public Data",
    "lastUpdated": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Exploring Graphic Design Paths",
    "tags": ["Creativity", "Media"],
    "for": "UG",
    "source": "On Request",
    "lastUpdated": "16 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const ExamsTableData = [
  {
    "title": "CUET UG 2025 Schedule",
    "tags": ["CUET", "UG"],
    "for": "11–12, UG",
    "source": "Public Data",
    "upcomingDate": "15 July 2025",
    "lastUpdated": "17 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Schedule"]
  },
  {
    "title": "CLAT 2025 Key Dates",
    "tags": ["Law", "Entrance"],
    "for": "UG",
    "source": "Public Data",
    "upcomingDate": "10 Dec 2025",
    "lastUpdated": "18 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  }
]
export const ScholarshipsTableData = [
  {
    "title": "Women in STEM UG Scholarship",
    "tags": ["Gender", "STEM"],
    "for": "UG",
    "source": "On Request",
    "upcomingDate": "05 September 2025",
    "lastUpdated": "18 May 2025",
    "status": "Pending",
    "actions": ["Edit", "Approve"]
  },
  {
    "title": "International Leaders Fund",
    "tags": ["Global", "PG"],
    "for": "PG",
    "source": "Owner",
    "upcomingDate": "30 October 2025",
    "lastUpdated": "14 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const NGOsTableData = [
  {
    "title": "Skill Building for Youth",
    "tags": ["Development", "Edu"],
    "for": "Schools, UG",
    "source": "Owner",
    "lastUpdated": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "NGO-College Career Bridges",
    "tags": ["Awareness", "Support"],
    "for": "UG, PG",
    "source": "Public Data",
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const SurveysTableData = [
  {
    "title": "Career Preferences Survey",
    "createdBy": "Riya Malhotra",
    "for": "11–12, UG",
    "questions": 10,
    "responses": 4120,
    "status": "Active",
    "lastUpdated": "16 May 2025",
    "actions": ["Edit", "Results", "Close"]
  },
  {
    "title": "Online Learning Feedback",
    "createdBy": "Team Aimshala",
    "for": "UG, PG",
    "questions": 8,
    "responses": 2630,
    "status": "Active",
    "lastUpdated": "14 May 2025",
    "actions": ["Edit", "Results", "Close"]
  },
  {
    "title": "Skill Awareness Check",
    "createdBy": "Rahul Sen",
    "for": "PG",
    "questions": 6,
    "responses": 1020,
    "status": "Draft",
    "lastUpdated": "12 May 2025",
    "actions": ["Edit", "Activate", "Delete"]
  }
]
export const HelpArticlesTableData = [
  {
    "title": "How to Book a Session",
    "category": "Sessions",
    "tags": ["Booking", "Call"],
    "for": "Students",
    "author": "Team Aimshala",
    "lastUpdated": "16 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Accessing Your Assessment Results",
    "category": "Assessments",
    "tags": ["Results", "Score"],
    "for": "Students",
    "author": "Riya Malhotra",
    "lastUpdated": "15 May 2025",
    "status": "Published",
    "actions": ["Edit", "Archive"]
  },
  {
    "title": "Resetting Your Password",
    "category": "Technical Support",
    "tags": ["Login", "Account"],
    "for": "All Users",
    "author": "Rahul Sen",
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["Edit", "Publish"]
  }
]
export const FAQsTableData = [
  {
    "pageTitle": "Student Onboarding",
    "for": "Students",
    "questions": 15,
    "lastUpdated": "18 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Coach FAQs",
    "for": "Coaches",
    "questions": 11,
    "lastUpdated": "17 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Parent Support & Guidance",
    "for": "Parents",
    "questions": 9,
    "lastUpdated": "16 May 2025",
    "status": "Draft",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Session & Booking Help",
    "for": "All Users",
    "questions": 14,
    "lastUpdated": "15 May 2025",
    "status": "Active",
    "actions": ["View FAQs →"]
  },
  {
    "pageTitle": "Technical Troubleshooting",
    "for": "All Users",
    "questions": 12,
    "lastUpdated": "13 May 2025",
    "status": "Draft",
    "actions": ["View FAQs →"]
  }
]

export const PublishedTableData = [
  {
    "title": "Future-Proof Careers in 2030",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["AI", "Automation"],
    "for": "UG, PG, Professionals",
    "views": 4010,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "NEET 2025 Prep Guide",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["NEET", "MBBS"],
    "for": "11-12, UG",
    "views": 2220,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Careers in Climate Tech",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["Climate", "Sustainability"],
    "for": "UG, PG",
    "views": 1580,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Understanding CUET UG Exam",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["CUET", "UG"],
    "for": "11-12",
    "views": 1980,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Top 5 Digital Marketing Roles",
    "author": "Ankur Sharma",
    "category": "Careers",
    "tags": ["Marketing", "SEO"],
    "for": "UG, Professionals",
    "views": 3120,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Scholarships for Indian Girls in STEM",
    "author": "Neha Joshi",
    "category": "Scholarships",
    "tags": ["STEM", "Gender"],
    "for": "UG",
    "views": 1420,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Animation & VFX Careers",
    "author": "Ravi Kapoor",
    "category": "Careers",
    "tags": ["Design", "Animation"],
    "for": "UG",
    "views": 1760,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Law Entrance Exams Overview",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["CLAT", "Law"],
    "for": "UG",
    "views": 2450,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "MBA vs PGDM – What to Choose?",
    "author": "Rohan Sen",
    "category": "Higher Education",
    "tags": ["MBA", "PGDM"],
    "for": "PG",
    "views": 1680,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "How to Get Into Ivy League Schools",
    "author": "Team Aimshala",
    "category": "Study Abroad",
    "tags": ["Ivy League", "SAT"],
    "for": "UG",
    "views": 2780,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Beginner’s Guide to Data Science",
    "author": "Riya Malhotra",
    "category": "Careers",
    "tags": ["Data", "Python"],
    "for": "UG, PG",
    "views": 3840,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "International Scholarships for PG Students",
    "author": "Neha Joshi",
    "category": "Scholarships",
    "tags": ["Global", "Funding"],
    "for": "PG",
    "views": 1190,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Coding Bootcamps: Are They Worth It?",
    "author": "Ankur Sharma",
    "category": "Careers",
    "tags": ["Coding", "Bootcamp"],
    "for": "UG, PG",
    "views": 2070,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Top Indian Universities for Arts",
    "author": "Rohan Sen",
    "category": "Colleges",
    "tags": ["Arts", "UG"],
    "for": "UG",
    "views": 2210,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Mastering Time Management for Exams",
    "author": "Team Aimshala",
    "category": "Exams",
    "tags": ["Productivity", "Focus"],
    "for": "Students",
    "views": 1350,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Exploring UI/UX Design Careers",
    "author": "Neha Joshi",
    "category": "Careers",
    "tags": ["Design", "UI/UX"],
    "for": "UG, PG",
    "views": 1940,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  },
  {
    "title": "Financial Aid Tips for College Applicants",
    "author": "Riya Malhotra",
    "category": "Scholarships",
    "tags": ["Finance", "Loans"],
    "for": "UG, PG",
    "views": 1685,
    "status": "Published",
    "actions": ["View", "Edit", "Archive"]
  }
]
export const DraftsTableData = [
  {
    "title": "Interview Tips for Freshers",
    "author": "Meera Kapoor",
    "category": "Skills",
    "lastEdited": "17 May 2025",
    "suggestedTags": ["Communication", "HR"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Mastering Public Speaking",
    "author": "Ravi Sharma",
    "category": "Skills",
    "lastEdited": "16 May 2025",
    "suggestedTags": ["Confidence", "Presentation"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Resume Writing Guide",
    "author": "Anjali Mehta",
    "category": "Careers",
    "lastEdited": "15 May 2025",
    "suggestedTags": ["Resume", "Writing"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Time Management Hacks",
    "author": "Neha Joshi",
    "category": "Productivity",
    "lastEdited": "14 May 2025",
    "suggestedTags": ["Time", "Efficiency"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Basics of Graphic Design",
    "author": "Rohan Sen",
    "category": "Design",
    "lastEdited": "13 May 2025",
    "suggestedTags": ["Creativity", "Visuals"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Coding Bootcamps vs. CS Degrees",
    "author": "Ankur Sharma",
    "category": "Technology",
    "lastEdited": "12 May 2025",
    "suggestedTags": ["Programming", "Career Path"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Effective Group Discussion Tips",
    "author": "Meera Kapoor",
    "category": "Skills",
    "lastEdited": "11 May 2025",
    "suggestedTags": ["GD", "Speaking"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Choosing the Right MBA Specialization",
    "author": "Rahul Sen",
    "category": "Education",
    "lastEdited": "10 May 2025",
    "suggestedTags": ["MBA", "Business"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Introduction to Freelancing",
    "author": "Priya Desai",
    "category": "Careers",
    "lastEdited": "09 May 2025",
    "suggestedTags": ["Freelance", "Gig Economy"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Career Paths in AI",
    "author": "Riya Malhotra",
    "category": "Technology",
    "lastEdited": "08 May 2025",
    "suggestedTags": ["AI", "ML"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "How to Prepare for Campus Placements",
    "author": "Team Aimshala",
    "category": "Careers",
    "lastEdited": "07 May 2025",
    "suggestedTags": ["Campus", "Interviews"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Portfolio Building for Designers",
    "author": "Neha Joshi",
    "category": "Design",
    "lastEdited": "06 May 2025",
    "suggestedTags": ["Portfolio", "Design"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Digital Marketing Basics",
    "author": "Ravi Kapoor",
    "category": "Marketing",
    "lastEdited": "05 May 2025",
    "suggestedTags": ["SEO", "Social Media"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Scholarships for Indian Students Abroad",
    "author": "Priya Desai",
    "category": "Scholarships",
    "lastEdited": "04 May 2025",
    "suggestedTags": ["Abroad", "Funding"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Top Programming Languages in 2025",
    "author": "Ankur Sharma",
    "category": "Technology",
    "lastEdited": "03 May 2025",
    "suggestedTags": ["Coding", "Languages"],
    "actions": ["Edit", "Delete"]
  },
  {
    "title": "Creative Careers After 12th",
    "author": "Riya Malhotra",
    "category": "Careers",
    "lastEdited": "02 May 2025",
    "suggestedTags": ["Design", "Arts"],
    "actions": ["Edit", "Delete"]
  }
]
export const PendingApprovalTableData = [
  {
    "title": "Women in Tech Leadership",
    "author": "Rahul Sen",
    "category": "Careers",
    "submittedOn": "18 May 2025",
    "assignedEditor": "Riya Malhotra",
    "actions": ["Review", "Approve", "Reject"]
  }
]

const coachTypes = ["Coach", "Mentor", "Educator"];

export const coachTableData = [
  {
    id: 1,
    profile: {
      name: "Anjali Verma",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "anjali123"
    },
    specialty: "Psychology, UG Careers",
    contact: {
      email: "anjali@coachhub.org",
      phone: "+91-9876543210"
    },
    status: "Pending",
    sessions: {
      total: 32,
      completed: 28
    },
    assessments: 15,
    orgLinked: "Aim College",
    joined: "12 May",
    lastActive: "17 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 2,
    profile: {
      name: "Rahul Singh",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "rahultech"
    },
    specialty: "Engineering, Aptitude",
    contact: {
      email: "rahul@coachhub.org",
      phone: "+91-9123456780"
    },
    status: "Approved",
    sessions: {
      total: 45,
      completed: 40
    },
    assessments: 20,
    orgLinked: "Tech Academy",
    joined: "05 May",
    lastActive: "27 May",
    actions: ["View", "Block"]
  },
  {
    id: 3,
    profile: {
      name: "Sneha Sharma",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "snehahealth"
    },
    specialty: "Medical Prep",
    contact: {
      email: "sneha@coachhub.org",
      phone: "+91-9988776655"
    },
    status: "Pending",
    sessions: {
      total: 20,
      completed: 18
    },
    assessments: 10,
    orgLinked: "BioMed Academy",
    joined: "02 May",
    lastActive: "18 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 4,
    profile: {
      name: "Vikram Mehta",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "vikramcareer"
    },
    specialty: "Career Counselling",
    contact: {
      email: "vikram@coachhub.org",
      phone: "+91-9876501234"
    },
    status: "Approved",
    sessions: {
      total: 38,
      completed: 35
    },
    assessments: 18,
    orgLinked: "Mentor India",
    joined: "10 April",
    lastActive: "28 May",
    actions: ["View", "Block"]
  },
  {
    id: 5,
    profile: {
      name: "Neha Joshi",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "nehaadmissions"
    },
    specialty: "UG Admissions",
    contact: {
      email: "neha@coachhub.org",
      phone: "+91-9090909090"
    },
    status: "Approved",
    sessions: {
      total: 29,
      completed: 27
    },
    assessments: 12,
    orgLinked: "Future Path",
    joined: "15 March",
    lastActive: "30 May",
    actions: ["View", "Block"]
  },
  {
    id: 6,
    profile: {
      name: "Amit Thakur",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "amitmba"
    },
    specialty: "MBA Prep",
    contact: {
      email: "amit@coachhub.org",
      phone: "+91-9898989898"
    },
    status: "Pending",
    sessions: {
      total: 24,
      completed: 22
    },
    assessments: 8,
    orgLinked: "BizMasters",
    joined: "09 May",
    lastActive: "20 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 7,
    profile: {
      name: "Pooja Iyer",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "pooja_softskills"
    },
    specialty: "Soft Skills, Resume Review",
    contact: {
      email: "pooja@coachhub.org",
      phone: "+91-9555123456"
    },
    status: "Approved",
    sessions: {
      total: 40,
      completed: 39
    },
    assessments: 25,
    orgLinked: "SkillForge",
    joined: "18 March",
    lastActive: "31 May",
    actions: ["View", "Block"]
  },
  {
    id: 8,
    profile: {
      name: "Kunal Rao",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "kunal_sat"
    },
    specialty: "SAT Prep",
    contact: {
      email: "kunal@coachhub.org",
      phone: "+91-9321654987"
    },
    status: "Approved",
    sessions: {
      total: 33,
      completed: 30
    },
    assessments: 13,
    orgLinked: "EduBridge",
    joined: "20 April",
    lastActive: "29 May",
    actions: ["View", "Block"]
  },
  {
    id: 9,
    profile: {
      name: "Divya Kapoor",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "divya_career"
    },
    specialty: "Career Discovery",
    contact: {
      email: "divya@coachhub.org",
      phone: "+91-9312345678"
    },
    status: "Pending",
    sessions: {
      total: 19,
      completed: 15
    },
    assessments: 5,
    orgLinked: "Career Spark",
    joined: "01 May",
    lastActive: "14 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 10,
    profile: {
      name: "Arjun Patel",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "arjun_design"
    },
    specialty: "Design Colleges",
    contact: {
      email: "arjun@coachhub.org",
      phone: "+91-9876611223"
    },
    status: "Approved",
    sessions: {
      total: 27,
      completed: 24
    },
    assessments: 11,
    orgLinked: "Creative Minds",
    joined: "22 March",
    lastActive: "28 May",
    actions: ["View", "Block"]
  },
  {
    id: 11,
    profile: {
      name: "Ritika Shah",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "ritika_gre"
    },
    specialty: "GRE / TOEFL",
    contact: {
      email: "ritika@coachhub.org",
      phone: "+91-9456123456"
    },
    status: "Pending",
    sessions: {
      total: 22,
      completed: 19
    },
    assessments: 7,
    orgLinked: "Global Prep",
    joined: "12 April",
    lastActive: "26 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 12,
    profile: {
      name: "Manish Kaul",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "manish_leadership"
    },
    specialty: "Leadership, Communication",
    contact: {
      email: "manish@coachhub.org",
      phone: "+91-9009090090"
    },
    status: "Approved",
    sessions: {
      total: 36,
      completed: 34
    },
    assessments: 16,
    orgLinked: "NextLead",
    joined: "17 April",
    lastActive: "30 May",
    actions: ["View", "Block"]
  },
  {
    id: 13,
    profile: {
      name: "Ishita Nair",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "ishita_arts"
    },
    specialty: "Liberal Arts",
    contact: {
      email: "ishita@coachhub.org",
      phone: "+91-9988771122"
    },
    status: "Pending",
    sessions: {
      total: 26,
      completed: 20
    },
    assessments: 9,
    orgLinked: "ArtsEdge",
    joined: "08 May",
    lastActive: "19 May",
    actions: ["View", "Approve", "Block"]
  },
  {
    id: 14,
    profile: {
      name: "Nikhil Sharma",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "M",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "nikhil_bootcamp"
    },
    specialty: "Coding Bootcamps",
    contact: {
      email: "nikhil@coachhub.org",
      phone: "+91-9765432100"
    },
    status: "Approved",
    sessions: {
      total: 30,
      completed: 30
    },
    assessments: 14,
    orgLinked: "CodeMasters",
    joined: "28 March",
    lastActive: "01 June",
    actions: ["View", "Block"]
  },
  {
    id: 15,
    profile: {
      name: "Tanya Jain",
      photo: [picture1, picture2, picture3, picture4][Math.floor(Math.random() * 4)],
      gender: "F",
      type: coachTypes[Math.floor(Math.random() * 3)],
      userid: "tanya_finance"
    },
    specialty: "Finance & Commerce",
    contact: {
      email: "tanya@coachhub.org",
      phone: "+91-9874563210"
    },
    status: "Pending",
    sessions: {
      total: 18,
      completed: 16
    },
    assessments: 6,
    orgLinked: "BizEd",
    joined: "05 May",
    lastActive: "22 May",
    actions: ["View", "Approve", "Block"]
  }
];


export const orgTableData = [
  {
    id: 1,
    name: "Future Skills Academy",
    contact: {
      email: "contact@futureskills.org",
      phone: "+91-9876543210"
    },
    location: "Delhi",
    type: "Institute",
    claimStatus: "Claimed",
    coaches: 3,
    sessions: 25,
    registered: "12 Mar",
    lastActive: "17 May",
    actions: ["View", "Approve", "Flag"]
  },
  {
    id: 2,
    name: "Bright Future School",
    contact: {
      email: "info@brightfuture.edu",
      phone: "+91-9123456780"
    },
    location: "Pune",
    type: "School",
    claimStatus: "Public",
    coaches: 0,
    sessions: 0,
    registered: "04 Apr",
    lastActive: "10 May",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 3,
    name: "Excel Learning Hub",
    contact: {
      email: "admin@excelhub.in",
      phone: "+91-9000001111"
    },
    location: "Bangalore",
    type: "Coaching Center",
    claimStatus: "Claimed",
    coaches: 4,
    sessions: 18,
    registered: "10 Mar",
    lastActive: "25 May",
    actions: ["View", "Flag"]
  },
  {
    id: 4,
    name: "Rising Minds Academy",
    contact: {
      email: "hello@risingminds.org",
      phone: "+91-9023456700"
    },
    location: "Chennai",
    type: "NGO",
    claimStatus: "Public",
    coaches: 2,
    sessions: 8,
    registered: "15 Feb",
    lastActive: "10 May",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 5,
    name: "Smart Prep School",
    contact: {
      email: "contact@smartprep.com",
      phone: "+91-9888777666"
    },
    location: "Mumbai",
    type: "School",
    claimStatus: "Claimed",
    coaches: 1,
    sessions: 5,
    registered: "01 Mar",
    lastActive: "28 May",
    actions: ["View", "Approve"]
  },
  {
    id: 6,
    name: "NextGen Learners",
    contact: {
      email: "info@nextgenlearners.org",
      phone: "+91-9955667788"
    },
    location: "Hyderabad",
    type: "Institute",
    claimStatus: "Claimed",
    coaches: 5,
    sessions: 42,
    registered: "22 Feb",
    lastActive: "31 May",
    actions: ["View", "Flag"]
  },
  {
    id: 7,
    name: "Knowledge Tree Foundation",
    contact: {
      email: "support@knowledgetree.org",
      phone: "+91-9898989898"
    },
    location: "Jaipur",
    type: "NGO",
    claimStatus: "Public",
    coaches: 0,
    sessions: 0,
    registered: "18 Jan",
    lastActive: "11 Apr",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 8,
    name: "Elevate Academy",
    contact: {
      email: "connect@elevateedu.com",
      phone: "+91-9090909090"
    },
    location: "Kolkata",
    type: "Coaching Center",
    claimStatus: "Claimed",
    coaches: 6,
    sessions: 38,
    registered: "09 Mar",
    lastActive: "29 May",
    actions: ["View", "Approve", "Flag"]
  },
  {
    id: 9,
    name: "Mindset Academy",
    contact: {
      email: "info@mindsetacademy.in",
      phone: "+91-9123123123"
    },
    location: "Ahmedabad",
    type: "Institute",
    claimStatus: "Public",
    coaches: 0,
    sessions: 0,
    registered: "02 Apr",
    lastActive: "05 May",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 10,
    name: "Pathfinder School",
    contact: {
      email: "admin@pathfinder.edu",
      phone: "+91-9812345678"
    },
    location: "Lucknow",
    type: "School",
    claimStatus: "Claimed",
    coaches: 2,
    sessions: 12,
    registered: "17 Mar",
    lastActive: "25 May",
    actions: ["View", "Approve"]
  },
  {
    id: 11,
    name: "Dream Big Foundation",
    contact: {
      email: "team@dreambig.org",
      phone: "+91-9988776655"
    },
    location: "Chandigarh",
    type: "NGO",
    claimStatus: "Claimed",
    coaches: 1,
    sessions: 6,
    registered: "08 Mar",
    lastActive: "21 May",
    actions: ["View", "Flag"]
  },
  {
    id: 12,
    name: "Bright Minds Academy",
    contact: {
      email: "contact@brightminds.in",
      phone: "+91-9098765432"
    },
    location: "Nagpur",
    type: "Coaching Center",
    claimStatus: "Public",
    coaches: 0,
    sessions: 0,
    registered: "11 Apr",
    lastActive: "13 May",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 13,
    name: "Talent Builders",
    contact: {
      email: "info@talentbuilders.in",
      phone: "+91-9345678123"
    },
    location: "Bhopal",
    type: "Institute",
    claimStatus: "Claimed",
    coaches: 4,
    sessions: 30,
    registered: "19 Feb",
    lastActive: "30 May",
    actions: ["View", "Approve"]
  },
  {
    id: 14,
    name: "Udaan Education Trust",
    contact: {
      email: "hello@udaantrust.org",
      phone: "+91-9012345678"
    },
    location: "Noida",
    type: "NGO",
    claimStatus: "Public",
    coaches: 0,
    sessions: 0,
    registered: "06 Mar",
    lastActive: "12 May",
    actions: ["View", "Invite to Claim"]
  },
  {
    id: 15,
    name: "SkillUp Learning Center",
    contact: {
      email: "contact@skillup.org",
      phone: "+91-9988112233"
    },
    location: "Gurgaon",
    type: "Coaching Center",
    claimStatus: "Claimed",
    coaches: 3,
    sessions: 21,
    registered: "25 Mar",
    lastActive: "31 May",
    actions: ["View", "Flag"]
  }
];
export const FinancePaymentsTableData = [
  {
    "User": "Aisha Khan",
    "Order ID": "ORD230519201",
    "Source": "1:1 Session",
    "Amount": "₹2,800",
    "Code Used": "WELCOME25",
    "Payment Date": "18 May 2025",
    "Status": "Paid",
    "PG Charges": "₹56",
    "Aimshala Earning": "₹336",
    "Partner Earning": "₹2,408",
    "Total Earning": "₹2,800",
    "Payout Status": "Paid"
  },
  {
    "User": "Rohit Verma",
    "Order ID": "ORD230518199",
    "Source": "Assessment",
    "Amount": "₹4,200",
    "Code Used": "TESTPASS",
    "Payment Date": "18 May 2025",
    "Status": "Paid",
    "PG Charges": "₹84",
    "Aimshala Earning": "₹504",
    "Partner Earning": "₹3,612",
    "Total Earning": "₹4,200",
    "Payout Status": "Paid"
  },
  {
    "User": "Karishma Nair",
    "Order ID": "ORD230517187",
    "Source": "Masterclass",
    "Amount": "₹6,000",
    "Code Used": "SPRING100",
    "Payment Date": "17 May 2025",
    "Status": "Refunded",
    "PG Charges": "₹120",
    "Aimshala Earning": "₹720",
    "Partner Earning": "₹5,160",
    "Total Earning": "₹6,000",
    "Payout Status": "Failed"
  },
  {
    "User": "Karan Mehta",
    "Order ID": "ORD230516175",
    "Source": "Subscription",
    "Amount": "₹3,900",
    "Code Used": "SUBSAVE20",
    "Payment Date": "16 May 2025",
    "Status": "Pending",
    "PG Charges": "₹78",
    "Aimshala Earning": "₹468",
    "Partner Earning": "₹3,354",
    "Total Earning": "₹3,900",
    "Payout Status": "Pending"
  }
]
export const FinancePayoutsTableData = [
  {
    "Name": "Nisha Yadav",
    "Request ID": "WDR230518110",
    "Amount": "₹2,500",
    "Partner Balance": "₹6,700",
    "Approval Type": "Auto",
    "Date": "18 May 2025",
    "Status": "Approved",
    "Notes": "Credited to bank account (UTR: BANK5432109876)",
    "Actions": ["View", "Download"]
  },
  {
    "Name": "Gaurav Thakur",
    "Request ID": "WDR230517104",
    "Amount": "₹3,200",
    "Partner Balance": "₹7,100",
    "Approval Type": "Manual",
    "Date": "17 May 2025",
    "Status": "Pending",
    "Notes": "Awaiting finance verification",
    "Actions": ["Approve", "Reject"]
  },
  {
    "Name": "Sakshi Bhandari",
    "Request ID": "WDR230516099",
    "Amount": "₹1,700",
    "Partner Balance": "₹2,000",
    "Approval Type": "Manual",
    "Date": "16 May 2025",
    "Status": "Rejected",
    "Notes": "Bank account details mismatch",
    "Actions": ["Review", "Message"]
  },
  {
    "Name": "Parth Trivedi",
    "Request ID": "WDR230515086",
    "Amount": "₹2,900",
    "Partner Balance": "₹5,800",
    "Approval Type": "Auto",
    "Date": "15 May 2025",
    "Status": "Approved",
    "Notes": "Credited to bank account (UTR: BANK9876543210)",
    "Actions": ["Invoice", "Download"]
  }
]
export const FinanceCommissionsTableData = [
  {
    "Name": "Neeraj Sharma",
    "Role": "Coach",
    "Commission Type": "Session",
    "Linked Session/Order": "ORD230518121",
    "Amount": "₹660",
    "Date Earned": "18 May 2025",
    "Status": "Paid",
    "Actions": ["View", "Invoice"]
  },
  {
    "Name": "Priya Verma",
    "Role": "BA",
    "Commission Type": "Referral",
    "Linked Session/Order": "REF20240517001",
    "Amount": "₹500",
    "Date Earned": "17 May 2025",
    "Status": "Paid",
    "Actions": ["Details"]
  },
  {
    "Name": "Rahul Sen",
    "Role": "Consultant",
    "Commission Type": "Campaign",
    "Linked Session/Order": "CMP230516009",
    "Amount": "₹1,200",
    "Date Earned": "16 May 2025",
    "Status": "Pending",
    "Actions": ["Approve", "Cancel"]
  },
  {
    "Name": "Anjali Rao",
    "Role": "Partner",
    "Commission Type": "Referral",
    "Linked Session/Order": "REF20240515014",
    "Amount": "₹900",
    "Date Earned": "15 May 2025",
    "Status": "Paid",
    "Actions": ["Invoice"]
  }
]

export const assessmentsTable = [
  {
    id: 1,
    name: "Career Aptitude Test",
    targetGroup: "11–12, UG",
    category: "Career",
    status: "Active",
    createdOn: "10 May 2025",
    attempts: 2304,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 2,
    name: "SkillCheck Pro",
    targetGroup: "PG, Professionals",
    category: "Skills",
    status: "Draft",
    createdOn: "05 May 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 3,
    name: "Engineering Stream Selector",
    targetGroup: "10, 11–12",
    category: "Career",
    status: "Active",
    createdOn: "02 May 2025",
    attempts: 1785,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 4,
    name: "Commerce Skill Analyzer",
    targetGroup: "UG",
    category: "Skills",
    status: "Draft",
    createdOn: "28 Apr 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 5,
    name: "Aptitude Benchmark Test",
    targetGroup: "UG, PG",
    category: "Aptitude",
    status: "Active",
    createdOn: "20 Apr 2025",
    attempts: 542,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 6,
    name: "Creativity Quotient Test",
    targetGroup: "11–12",
    category: "Personality",
    status: "Draft",
    createdOn: "15 Apr 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 7,
    name: "Logical Reasoning Test",
    targetGroup: "UG",
    category: "Aptitude",
    status: "Active",
    createdOn: "12 Apr 2025",
    attempts: 911,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 8,
    name: "Communication Skills Survey",
    targetGroup: "PG, Professionals",
    category: "Skills",
    status: "Draft",
    createdOn: "07 Apr 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 9,
    name: "Workplace Readiness Test",
    targetGroup: "UG, PG",
    category: "Career",
    status: "Active",
    createdOn: "01 Apr 2025",
    attempts: 612,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 10,
    name: "Emotional Intelligence Test",
    targetGroup: "Professionals",
    category: "Personality",
    status: "Active",
    createdOn: "29 Mar 2025",
    attempts: 432,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 11,
    name: "Programming Fundamentals",
    targetGroup: "UG",
    category: "Skills",
    status: "Draft",
    createdOn: "25 Mar 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 12,
    name: "Numerical Ability Test",
    targetGroup: "11–12, UG",
    category: "Aptitude",
    status: "Active",
    createdOn: "20 Mar 2025",
    attempts: 1380,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 13,
    name: "Decision-Making Skills",
    targetGroup: "Professionals",
    category: "Personality",
    status: "Draft",
    createdOn: "17 Mar 2025",
    attempts: 0,
    actions: ["Edit", "Activate", "Delete"],
  },
  {
    id: 14,
    name: "Data Interpretation Test",
    targetGroup: "UG, PG",
    category: "Aptitude",
    status: "Active",
    createdOn: "12 Mar 2025",
    attempts: 789,
    actions: ["View", "Edit", "Questions", "Results"],
  },
  {
    id: 15,
    name: "Leadership Style Profiler",
    targetGroup: "PG, Professionals",
    category: "Personality",
    status: "Active",
    createdOn: "10 Mar 2025",
    attempts: 156,
    actions: ["View", "Edit", "Questions", "Results"],
  },
];

export const upcomingAssessmentsTable = [
  [
    {
      "id": 1,
      "User": "Aarav Mehta",
      "Coach": "Dr. Seema Rao",
      "Coach Type": "Counselor",
      "Date/Time": "18 May, 3:00 PM",
      "Type": "1:1",
      "Amount": "₹1,000",
      "Status Timeline": "Booked (16 May, 2:00 PM) → Auto Approved (16 May, 2:05 PM) → Confirmed (17 May, 9:30 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 2,
      "User": "Neha Kapoor",
      "Coach": "Mr. Rahul Sen",
      "Coach Type": "Fitness Trainer",
      "Date/Time": "19 May, 10:00 AM",
      "Type": "Group",
      "Amount": "₹800",
      "Status Timeline": "Booked (17 May, 11:15 AM) → Auto Approved (17 May, 11:20 AM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 3,
      "User": "Rohan Gupta",
      "Coach": "Dr. Pooja Iyer",
      "Coach Type": "Nutritionist",
      "Date/Time": "20 May, 5:30 PM",
      "Type": "1:1",
      "Amount": "₹1,200",
      "Status Timeline": "Booked (18 May, 9:45 AM) → Auto Approved (18 May, 9:50 AM) → Confirmed (19 May, 2:00 PM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 4,
      "User": "Simran Singh",
      "Coach": "Mr. Amit Verma",
      "Coach Type": "Life Coach",
      "Date/Time": "21 May, 1:00 PM",
      "Type": "1:1",
      "Amount": "₹900",
      "Status Timeline": "Booked (19 May, 3:20 PM) → Auto Approved (19 May, 3:25 PM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 5,
      "User": "Vikram Patel",
      "Coach": "Ms. Leena Das",
      "Coach Type": "Yoga Instructor",
      "Date/Time": "22 May, 8:00 AM",
      "Type": "Group",
      "Amount": "₹700",
      "Status Timeline": "Booked (20 May, 7:00 AM) → Auto Approved (20 May, 7:05 AM) → Confirmed (21 May, 6:30 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 6,
      "User": "Priya Sharma",
      "Coach": "Dr. Manoj Gupta",
      "Coach Type": "Therapist",
      "Date/Time": "23 May, 4:00 PM",
      "Type": "1:1",
      "Amount": "₹1,500",
      "Status Timeline": "Booked (21 May, 10:10 AM) → Auto Approved (21 May, 10:15 AM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 7,
      "User": "Karan Mehta",
      "Coach": "Ms. Richa Khanna",
      "Coach Type": "Career Counselor",
      "Date/Time": "24 May, 2:30 PM",
      "Type": "1:1",
      "Amount": "₹1,100",
      "Status Timeline": "Booked (22 May, 1:00 PM) → Auto Approved (22 May, 1:05 PM) → Confirmed (23 May, 9:00 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 8,
      "User": "Anjali Desai",
      "Coach": "Mr. Nikhil Rao",
      "Coach Type": "Sports Coach",
      "Date/Time": "25 May, 6:00 PM",
      "Type": "Group",
      "Amount": "₹750",
      "Status Timeline": "Booked (23 May, 5:20 PM) → Auto Approved (23 May, 5:25 PM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 9,
      "User": "Rahul Nair",
      "Coach": "Dr. Deepa Menon",
      "Coach Type": "Dietician",
      "Date/Time": "26 May, 11:00 AM",
      "Type": "1:1",
      "Amount": "₹1,300",
      "Status Timeline": "Booked (24 May, 8:45 AM) → Auto Approved (24 May, 8:50 AM) → Confirmed (25 May, 10:00 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 10,
      "User": "Sneha Roy",
      "Coach": "Mr. Vikram Singh",
      "Coach Type": "Mindfulness Coach",
      "Date/Time": "27 May, 9:30 AM",
      "Type": "Group",
      "Amount": "₹650",
      "Status Timeline": "Booked (25 May, 2:30 PM) → Auto Approved (25 May, 2:35 PM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 11,
      "User": "Aditya Joshi",
      "Coach": "Ms. Kavita Sharma",
      "Coach Type": "Business Coach",
      "Date/Time": "28 May, 3:45 PM",
      "Type": "1:1",
      "Amount": "₹1,400",
      "Status Timeline": "Booked (26 May, 12:15 PM) → Auto Approved (26 May, 12:20 PM) → Confirmed (27 May, 11:00 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 12,
      "User": "Meera Iyer",
      "Coach": "Dr. Sunil Kapoor",
      "Coach Type": "Psychologist",
      "Date/Time": "29 May, 5:00 PM",
      "Type": "1:1",
      "Amount": "₹1,250",
      "Status Timeline": "Booked (27 May, 4:00 PM) → Auto Approved (27 May, 4:05 PM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 13,
      "User": "Sahil Verma",
      "Coach": "Ms. Anu Patel",
      "Coach Type": "Leadership Coach",
      "Date/Time": "30 May, 2:00 PM",
      "Type": "Group",
      "Amount": "₹800",
      "Status Timeline": "Booked (28 May, 9:00 AM) → Auto Approved (28 May, 9:05 AM) → Confirmed (29 May, 8:30 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    },
    {
      "id": 14,
      "User": "Tara Khanna",
      "Coach": "Dr. Rohit Deshpande",
      "Coach Type": "Sleep Specialist",
      "Date/Time": "31 May, 7:30 PM",
      "Type": "1:1",
      "Amount": "₹1,600",
      "Status Timeline": "Booked (29 May, 6:10 PM) → Auto Approved (29 May, 6:15 PM)",
      "Actions": ["View", "Cancel"]
    },
    {
      "id": 15,
      "User": "Devansh Aggarwal",
      "Coach": "Ms. Priyanka Jain",
      "Coach Type": "Financial Coach",
      "Date/Time": "1 June, 4:15 PM",
      "Type": "1:1",
      "Amount": "₹1,350",
      "Status Timeline": "Booked (30 May, 11:25 AM) → Auto Approved (30 May, 11:30 AM) → Confirmed (31 May, 10:00 AM)",
      "Actions": ["View", "Reschedule", "Cancel"]
    }
  ]
];

export const UpcomingSessionsTable = [
  {
    "id": 1,
    "user": "Aarav Mehta",
    "coach": "Dr. Seema Rao",
    "coachType": "Counselor",
    "dateTime": "18 May, 3:00 PM",
    "type": "1:1",
    "amount": "₹1,000",
    "statusTimeline": [
      "Booked (16 May, 2:00 PM)",
      "Auto Approved (16 May, 2:05 PM)",
      "Confirmed (17 May, 9:30 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 2,
    "user": "Priya Singh",
    "coach": "Mr. Rajiv Kumar",
    "coachType": "Fitness Trainer",
    "dateTime": "20 May, 10:00 AM",
    "type": "Group",
    "amount": "₹800",
    "statusTimeline": [
      "Booked (18 May, 9:00 AM)",
      "Auto Approved (18 May, 9:10 AM)",
      "Confirmed (19 May, 11:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 3,
    "user": "Rohan Patel",
    "coach": "Ms. Nisha Verma",
    "coachType": "Nutritionist",
    "dateTime": "21 May, 2:00 PM",
    "type": "1:1",
    "amount": "₹1,200",
    "statusTimeline": [
      "Booked (19 May, 4:00 PM)",
      "Auto Approved (19 May, 4:05 PM)",
      "Confirmed (20 May, 1:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 4,
    "user": "Ishaan Sharma",
    "coach": "Mr. Mohit Bansal",
    "coachType": "Life Coach",
    "dateTime": "22 May, 5:00 PM",
    "type": "1:1",
    "amount": "₹1,500",
    "statusTimeline": [
      "Booked (20 May, 12:00 PM)",
      "Auto Approved (20 May, 12:10 PM)",
      "Confirmed (21 May, 3:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 5,
    "user": "Sneha Kapoor",
    "coach": "Dr. Arjun Sen",
    "coachType": "Psychologist",
    "dateTime": "23 May, 11:00 AM",
    "type": "1:1",
    "amount": "₹2,000",
    "statusTimeline": [
      "Booked (21 May, 9:00 AM)",
      "Auto Approved (21 May, 9:05 AM)",
      "Confirmed (22 May, 2:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 6,
    "user": "Yash Jain",
    "coach": "Ms. Ritu Sharma",
    "coachType": "Career Coach",
    "dateTime": "24 May, 4:00 PM",
    "type": "Group",
    "amount": "₹1,000",
    "statusTimeline": [
      "Booked (22 May, 3:00 PM)",
      "Auto Approved (22 May, 3:05 PM)",
      "Confirmed (23 May, 5:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 7,
    "user": "Kavya Nair",
    "coach": "Mr. Sandeep Joshi",
    "coachType": "Motivational Coach",
    "dateTime": "25 May, 1:00 PM",
    "type": "1:1",
    "amount": "₹900",
    "statusTimeline": [
      "Booked (23 May, 10:00 AM)",
      "Auto Approved (23 May, 10:05 AM)",
      "Confirmed (24 May, 12:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 8,
    "user": "Ananya Gupta",
    "coach": "Dr. Neha Rana",
    "coachType": "Child Counselor",
    "dateTime": "26 May, 3:00 PM",
    "type": "1:1",
    "amount": "₹1,500",
    "statusTimeline": [
      "Booked (24 May, 2:00 PM)",
      "Auto Approved (24 May, 2:05 PM)",
      "Confirmed (25 May, 11:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 9,
    "user": "Manav Desai",
    "coach": "Mr. Kunal Sharma",
    "coachType": "Sports Coach",
    "dateTime": "27 May, 10:00 AM",
    "type": "Group",
    "amount": "₹700",
    "statusTimeline": [
      "Booked (25 May, 9:00 AM)",
      "Auto Approved (25 May, 9:05 AM)",
      "Confirmed (26 May, 8:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 10,
    "user": "Meera Rao",
    "coach": "Ms. Anita Sharma",
    "coachType": "Yoga Coach",
    "dateTime": "28 May, 9:00 AM",
    "type": "1:1",
    "amount": "₹600",
    "statusTimeline": [
      "Booked (26 May, 1:00 PM)",
      "Auto Approved (26 May, 1:05 PM)",
      "Confirmed (27 May, 2:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 11,
    "user": "Ayaan Ali",
    "coach": "Dr. Rakesh Mehra",
    "coachType": "Therapist",
    "dateTime": "29 May, 2:00 PM",
    "type": "1:1",
    "amount": "₹1,800",
    "statusTimeline": [
      "Booked (27 May, 11:00 AM)",
      "Auto Approved (27 May, 11:05 AM)",
      "Confirmed (28 May, 10:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 12,
    "user": "Riya Khanna",
    "coach": "Mr. Aditya Verma",
    "coachType": "Fitness Trainer",
    "dateTime": "30 May, 12:00 PM",
    "type": "Group",
    "amount": "₹750",
    "statusTimeline": [
      "Booked (28 May, 2:00 PM)",
      "Auto Approved (28 May, 2:05 PM)",
      "Confirmed (29 May, 9:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 13,
    "user": "Vihaan Reddy",
    "coach": "Ms. Deepika Joshi",
    "coachType": "Dance Coach",
    "dateTime": "31 May, 5:00 PM",
    "type": "1:1",
    "amount": "₹1,200",
    "statusTimeline": [
      "Booked (29 May, 3:00 PM)",
      "Auto Approved (29 May, 3:05 PM)",
      "Confirmed (30 May, 4:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 14,
    "user": "Tara Malhotra",
    "coach": "Dr. Manoj Sharma",
    "coachType": "Counselor",
    "dateTime": "1 June, 11:00 AM",
    "type": "1:1",
    "amount": "₹1,000",
    "statusTimeline": [
      "Booked (30 May, 10:00 AM)",
      "Auto Approved (30 May, 10:05 AM)",
      "Confirmed (31 May, 12:00 PM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "id": 15,
    "user": "Arnav Kapoor",
    "coach": "Mr. Vikram Singh",
    "coachType": "Music Coach",
    "dateTime": "2 June, 3:00 PM",
    "type": "1:1",
    "amount": "₹900",
    "statusTimeline": [
      "Booked (31 May, 1:00 PM)",
      "Auto Approved (31 May, 1:05 PM)",
      "Confirmed (1 June, 10:00 AM)"
    ],
    "actions": ["View", "Reschedule", "Cancel"]
  }
];

export const PoolTableData = [
  {
    "id": 1,
    "coach": "Anjali Gupta",
    "coachType": "Mentor",
    "segment": "UG",
    "topic": "Exam Stress Tips",
    "priceCode": "₹500 / INST500",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 2,
    "coach": "Rohit Sinha",
    "coachType": "Educator",
    "segment": "Career Changer",
    "topic": "Resume Walkthrough",
    "priceCode": "₹300 / RSM300",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 3,
    "coach": "Meena Iyer",
    "coachType": "Coach",
    "segment": "PG",
    "topic": "Interview Preparation",
    "priceCode": "₹600 / INT600",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 4,
    "coach": "Nikhil Verma",
    "coachType": "Mentor",
    "segment": "Professional",
    "topic": "Work-Life Balance",
    "priceCode": "₹700 / WLB700",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 5,
    "coach": "Sneha Reddy",
    "coachType": "Educator",
    "segment": "UG",
    "topic": "Time Management",
    "priceCode": "₹400 / TM400",
    "slots": 6,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 6,
    "coach": "Amit Joshi",
    "coachType": "Trainer",
    "segment": "Career Changer",
    "topic": "LinkedIn Profile Review",
    "priceCode": "₹350 / LNK350",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 7,
    "coach": "Divya Malhotra",
    "coachType": "Advisor",
    "segment": "UG",
    "topic": "Study Abroad Guide",
    "priceCode": "₹800 / SBG800",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 8,
    "coach": "Rahul Khanna",
    "coachType": "Mentor",
    "segment": "PG",
    "topic": "Choosing the Right Specialization",
    "priceCode": "₹650 / CRS650",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 9,
    "coach": "Neha Kapoor",
    "coachType": "Educator",
    "segment": "Career Changer",
    "topic": "Switching Careers Smoothly",
    "priceCode": "₹550 / SCS550",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 10,
    "coach": "Siddharth Rao",
    "coachType": "Trainer",
    "segment": "Professional",
    "topic": "Corporate Communication",
    "priceCode": "₹500 / CC500",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 11,
    "coach": "Preeti Sharma",
    "coachType": "Mentor",
    "segment": "UG",
    "topic": "Exam Strategy Planning",
    "priceCode": "₹450 / ESP450",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 12,
    "coach": "Karan Mehta",
    "coachType": "Advisor",
    "segment": "PG",
    "topic": "Master's Application Tips",
    "priceCode": "₹600 / MAT600",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 13,
    "coach": "Tanya Desai",
    "coachType": "Coach",
    "segment": "Career Changer",
    "topic": "Cover Letter Masterclass",
    "priceCode": "₹300 / CLM300",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 14,
    "coach": "Varun Singh",
    "coachType": "Educator",
    "segment": "Professional",
    "topic": "Effective Email Writing",
    "priceCode": "₹350 / EEW350",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "id": 15,
    "coach": "Ritika Ahuja",
    "coachType": "Mentor",
    "segment": "UG",
    "topic": "Staying Motivated During Exams",
    "priceCode": "₹400 / SME400",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  }
];

export const AbuseTableData = [
  {
    "id": 1,
    "reportedBy": "Aarav Mehta",
    "submittedOn": "17 May 2025",
    "reportedIn": "Chat",
    "reportedContent": "Offensive language during session chat",
    "reason": "Harassment",
    "status": "Under Review",
    "actions": ["Review", "Escalate"]
  },
  {
    "id": 2,
    "reportedBy": "Neha Kapoor",
    "submittedOn": "16 May 2025",
    "reportedIn": "Feedback",
    "reportedContent": "Fake testimonial with misleading claim",
    "reason": "Misinformation",
    "status": "Actioned",
    "actions": ["Details", "Archive"]
  },
  {
    "id": 3,
    "reportedBy": "Rahul Bhagat",
    "submittedOn": "15 May 2025",
    "reportedIn": "Public Post",
    "reportedContent": "Spam link in shared resources section",
    "reason": "Spam",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 4,
    "reportedBy": "Sanya Rathi",
    "submittedOn": "14 May 2025",
    "reportedIn": "Session",
    "reportedContent": "Rude behavior by a participant",
    "reason": "Inappropriate Content",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 5,
    "reportedBy": "Ishaan Gupta",
    "submittedOn": "13 May 2025",
    "reportedIn": "Chat",
    "reportedContent": "Threatening message sent during chat",
    "reason": "Abuse",
    "status": "Under Review",
    "actions": ["Review", "Escalate"]
  },
  {
    "id": 6,
    "reportedBy": "Ananya Singh",
    "submittedOn": "12 May 2025",
    "reportedIn": "Feedback",
    "reportedContent": "Copied review from another user",
    "reason": "Plagiarism",
    "status": "Actioned",
    "actions": ["Details", "Archive"]
  },
  {
    "id": 7,
    "reportedBy": "Rohit Sinha",
    "submittedOn": "11 May 2025",
    "reportedIn": "Session",
    "reportedContent": "Disruptive behavior during video call",
    "reason": "Disruption",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 8,
    "reportedBy": "Kavya Nair",
    "submittedOn": "10 May 2025",
    "reportedIn": "Public Post",
    "reportedContent": "Post contains offensive meme",
    "reason": "Inappropriate Content",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 9,
    "reportedBy": "Manav Desai",
    "submittedOn": "9 May 2025",
    "reportedIn": "Feedback",
    "reportedContent": "False claim about mentor's credentials",
    "reason": "Misinformation",
    "status": "Actioned",
    "actions": ["Details", "Archive"]
  },
  {
    "id": 10,
    "reportedBy": "Simran Chopra",
    "submittedOn": "8 May 2025",
    "reportedIn": "Chat",
    "reportedContent": "User shared personal contact details",
    "reason": "Policy Violation",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 11,
    "reportedBy": "Yash Jain",
    "submittedOn": "7 May 2025",
    "reportedIn": "Session",
    "reportedContent": "Participant was shouting and abusive",
    "reason": "Harassment",
    "status": "Under Review",
    "actions": ["Review", "Escalate"]
  },
  {
    "id": 12,
    "reportedBy": "Tara Mehta",
    "submittedOn": "6 May 2025",
    "reportedIn": "Feedback",
    "reportedContent": "Review used hate speech",
    "reason": "Offensive Content",
    "status": "Actioned",
    "actions": ["Details", "Archive"]
  },
  {
    "id": 13,
    "reportedBy": "Arjun Kapoor",
    "submittedOn": "5 May 2025",
    "reportedIn": "Public Post",
    "reportedContent": "Malicious code shared in post",
    "reason": "Security Threat",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 14,
    "reportedBy": "Ritika Ahuja",
    "submittedOn": "4 May 2025",
    "reportedIn": "Session",
    "reportedContent": "Session contained unapproved content",
    "reason": "Content Violation",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 15,
    "reportedBy": "Dev Mehta",
    "submittedOn": "3 May 2025",
    "reportedIn": "Chat",
    "reportedContent": "User sent unsolicited ads",
    "reason": "Spam",
    "status": "Under Review",
    "actions": ["Review", "Escalate"]
  }
];
export const TemplateTableData = [
  {
    id: "1",
    name: "UG Assessment Reminder",
    channel: "WhatsApp",
    type: "Utility",
    status: "Approved",
    metaStatus: "In Review",
  },
  {
    id: "2",
    name: "Feedback Recovery Email",
    channel: "Email",
    type: "Utility",
    status: "Approved",
    metaStatus: "In Review",
  },
  {
    id: "3",
    name: "Promotion – Masterclass",
    channel: "WhatsApp",
    type: "Marketing",
    status: "Pending",
    metaStatus: "Rejected",
  },
  {
    id: "4",
    name: "Coach Toolkit Followup",
    channel: "WhatsApp",
    type: "Utility",
    status: "Pending",
    metaStatus: "Not Pushed",
  },
];

export const ReviewTableData = [
  {
    "id": 1,
    "user": "Niharika Sharma",
    "submittedOn": "18 May 2025",
    "submittedFor": "Platform Experience",
    "submittedBy": "Web App",
    "rating": "★★★★★",
    "content": "Flawless experience with smooth navigation",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 2,
    "user": "Deepak Rawat",
    "submittedOn": "17 May 2025",
    "submittedFor": "Learning Module",
    "submittedBy": "Mobile App",
    "rating": "★★★★☆",
    "content": "More examples would enhance sessions",
    "status": "Pending",
    "actions": ["Respond", "Resolve"]
  },
  {
    "id": 3,
    "user": "Tanya Mehta",
    "submittedOn": "16 May 2025",
    "submittedFor": "Career Session",
    "submittedBy": "WhatsApp",
    "rating": "★★★★★",
    "content": "Very helpful and structured session",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 4,
    "user": "Rajeev Bansal",
    "submittedOn": "15 May 2025",
    "submittedFor": "Mentor Feedback",
    "submittedBy": "Web App",
    "rating": "★★★☆☆",
    "content": "Expected more detailed advice",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 5,
    "user": "Priya Sen",
    "submittedOn": "14 May 2025",
    "submittedFor": "Session Booking",
    "submittedBy": "Mobile App",
    "rating": "★★★★☆",
    "content": "Easy to book but a bit slow",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 6,
    "user": "Kunal Arora",
    "submittedOn": "13 May 2025",
    "submittedFor": "Support",
    "submittedBy": "Email",
    "rating": "★★☆☆☆",
    "content": "Late response from support team",
    "status": "Pending",
    "actions": ["Respond", "Resolve"]
  },
  {
    "id": 7,
    "user": "Ritika Gupta",
    "submittedOn": "12 May 2025",
    "submittedFor": "Content Feedback",
    "submittedBy": "Web App",
    "rating": "★★★★★",
    "content": "Loved the visuals and depth of content",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 8,
    "user": "Aman Verma",
    "submittedOn": "11 May 2025",
    "submittedFor": "Technical Support",
    "submittedBy": "Chatbot",
    "rating": "★★★☆☆",
    "content": "Bot was helpful but limited in solutions",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 9,
    "user": "Sneha Mishra",
    "submittedOn": "10 May 2025",
    "submittedFor": "Webinar Feedback",
    "submittedBy": "Web App",
    "rating": "★★★★★",
    "content": "Engaging and informative session",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 10,
    "user": "Varun Sethi",
    "submittedOn": "09 May 2025",
    "submittedFor": "Profile Review",
    "submittedBy": "Mobile App",
    "rating": "★★★☆☆",
    "content": "Could use more personalized suggestions",
    "status": "Pending",
    "actions": ["Respond", "Resolve"]
  },
  {
    "id": 11,
    "user": "Meghna Tiwari",
    "submittedOn": "08 May 2025",
    "submittedFor": "Mock Interview",
    "submittedBy": "Web App",
    "rating": "★★★★☆",
    "content": "Good feedback but want more questions",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 12,
    "user": "Devansh Kapoor",
    "submittedOn": "07 May 2025",
    "submittedFor": "Course Suggestion",
    "submittedBy": "Mobile App",
    "rating": "★★★☆☆",
    "content": "Suggestions were generic",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 13,
    "user": "Neha Rathore",
    "submittedOn": "06 May 2025",
    "submittedFor": "Mentorship",
    "submittedBy": "WhatsApp",
    "rating": "★★★★★",
    "content": "The mentor provided great insights",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 14,
    "user": "Siddharth Jain",
    "submittedOn": "05 May 2025",
    "submittedFor": "App Usability",
    "submittedBy": "Mobile App",
    "rating": "★★★★☆",
    "content": "Minor bugs but good overall experience",
    "status": "Pending",
    "actions": ["Respond", "Resolve"]
  },
  {
    "id": 15,
    "user": "Shivani Thakur",
    "submittedOn": "04 May 2025",
    "submittedFor": "Account Setup",
    "submittedBy": "Web App",
    "rating": "★★★★★",
    "content": "Setup was quick and easy to follow",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  }
]

export const FeedbackTableData = [
  {
    "id": 1,
    "user": "Riya Kapoor",
    "submittedOn": "18 May 2025",
    "submittedFor": "Session Interface",
    "screenshot": "View",
    "message": "Icons are too small on mobile",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["View", "Resolve"]
  },
  {
    "id": 2,
    "user": "Sarthak Jain",
    "submittedOn": "17 May 2025",
    "submittedFor": "ACE Test Navigation",
    "screenshot": "No",
    "message": "Flow is unclear for test submission",
    "canBeContacted": "No",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 3,
    "user": "Aarti Mehta",
    "submittedOn": "16 May 2025",
    "submittedFor": "Platform Homepage",
    "screenshot": "View",
    "message": "Content overlaps with image slider",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 4,
    "user": "Kunal Desai",
    "submittedOn": "15 May 2025",
    "submittedFor": "Assessment Reports",
    "screenshot": "No",
    "message": "Graphs don't show properly on Firefox",
    "canBeContacted": "Yes",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 5,
    "user": "Meena Soni",
    "submittedOn": "14 May 2025",
    "submittedFor": "Quiz Timer",
    "screenshot": "View",
    "message": "Timer resets when network reconnects",
    "canBeContacted": "No",
    "status": "Pending",
    "actions": ["View", "Resolve"]
  },
  {
    "id": 6,
    "user": "Yash Raj",
    "submittedOn": "13 May 2025",
    "submittedFor": "Mentorship Card",
    "screenshot": "View",
    "message": "Card details cut off on smaller screens",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 7,
    "user": "Simran Kaur",
    "submittedOn": "12 May 2025",
    "submittedFor": "WhatsApp Bot",
    "screenshot": "No",
    "message": "Bot didn't respond after 3rd message",
    "canBeContacted": "Yes",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 8,
    "user": "Rahul Anand",
    "submittedOn": "11 May 2025",
    "submittedFor": "Mobile App Feedback",
    "screenshot": "View",
    "message": "Login screen loads slowly on iOS",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["View", "Resolve"]
  },
  {
    "id": 9,
    "user": "Preeti Chauhan",
    "submittedOn": "10 May 2025",
    "submittedFor": "Calendar Sync",
    "screenshot": "No",
    "message": "Events not syncing with Google Calendar",
    "canBeContacted": "No",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 10,
    "user": "Rohit Bhardwaj",
    "submittedOn": "09 May 2025",
    "submittedFor": "Session Reminder Email",
    "screenshot": "View",
    "message": "Reminder email not received",
    "canBeContacted": "Yes",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 11,
    "user": "Shweta Goyal",
    "submittedOn": "08 May 2025",
    "submittedFor": "Dashboard Insights",
    "screenshot": "View",
    "message": "Insights panel is not updating",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 12,
    "user": "Dev Mehta",
    "submittedOn": "07 May 2025",
    "submittedFor": "Notification Settings",
    "screenshot": "No",
    "message": "Unable to disable email notifications",
    "canBeContacted": "No",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  },
  {
    "id": 13,
    "user": "Naina Kapoor",
    "submittedOn": "06 May 2025",
    "submittedFor": "Payment Gateway",
    "screenshot": "View",
    "message": "Card payment failed multiple times",
    "canBeContacted": "Yes",
    "status": "Pending",
    "actions": ["View", "Resolve"]
  },
  {
    "id": 14,
    "user": "Abhay Nair",
    "submittedOn": "05 May 2025",
    "submittedFor": "Learning Module UI",
    "screenshot": "No",
    "message": "Sidebar overlaps content on scroll",
    "canBeContacted": "Yes",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 15,
    "user": "Tanvi Rana",
    "submittedOn": "04 May 2025",
    "submittedFor": "Session Feedback",
    "screenshot": "View",
    "message": "Session was good but audio was choppy",
    "canBeContacted": "Yes",
    "status": "Resolved",
    "actions": ["View", "Archive"]
  }
]
export const instant_sessions = [
  {
    "coach": "Anjali Gupta",
    "coach_type": "Mentor",
    "segment": "UG",
    "topic": "Exam Stress Tips",
    "price": "₹500",
    "code": "INST500",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Rohit Sinha",
    "coach_type": "Educator",
    "segment": "Career Changer",
    "topic": "Resume Walkthrough",
    "price": "₹300",
    "code": "RSM300",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Sonal Verma",
    "coach_type": "Mentor",
    "segment": "PG",
    "topic": "Thesis Planning",
    "price": "₹450",
    "code": "THS450",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Manav Singh",
    "coach_type": "Educator",
    "segment": "UG",
    "topic": "Exam Strategies",
    "price": "₹350",
    "code": "EXM350",
    "slots": 3,
    "status": "Inactive",
    "actions": ["Edit", "Remove"]
  },
  {
    "coach": "Priya Nair",
    "coach_type": "Coach",
    "segment": "School",
    "topic": "Focus Techniques",
    "price": "₹200",
    "code": "FOC200",
    "slots": 6,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Karan Mehta",
    "coach_type": "Mentor",
    "segment": "Career Changer",
    "topic": "Job Interview Skills",
    "price": "₹600",
    "code": "JOB600",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Neelam Yadav",
    "coach_type": "Consultant",
    "segment": "UG",
    "topic": "Study Habits",
    "price": "₹320",
    "code": "STY320",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Rajiv Kapoor",
    "coach_type": "Coach",
    "segment": "School",
    "topic": "Daily Planning",
    "price": "₹180",
    "code": "DLY180",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Deepa Joshi",
    "coach_type": "Mentor",
    "segment": "PG",
    "topic": "Career Growth",
    "price": "₹550",
    "code": "CRG550",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Aditya Rana",
    "coach_type": "Educator",
    "segment": "UG",
    "topic": "Time Blocking",
    "price": "₹300",
    "code": "BLK300",
    "slots": 1,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Shruti Bansal",
    "coach_type": "Coach",
    "segment": "School",
    "topic": "Memory Boost Tips",
    "price": "₹250",
    "code": "MEM250",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Vikas Sharma",
    "coach_type": "Mentor",
    "segment": "Career Changer",
    "topic": "Cover Letter Tips",
    "price": "₹270",
    "code": "CLT270",
    "slots": 2,
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Kavita Reddy",
    "coach_type": "Educator",
    "segment": "UG",
    "topic": "Group Study Tactics",
    "price": "₹380",
    "code": "GST380",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Tarun Arora",
    "coach_type": "Coach",
    "segment": "PG",
    "topic": "Study-Life Balance",
    "price": "₹500",
    "code": "SLB500",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  },
  {
    "coach": "Nikita Das",
    "coach_type": "Mentor",
    "segment": "School",
    "topic": "Motivation Hacks",
    "price": "₹220",
    "code": "MHK220",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Remove"]
  }
];
export const introductory_sessions = [
  {
    "coach": "Seema Rao",
    "coach_type": "Consultant",
    "organisation": "Aimshala UG College",
    "topic": "Career Mapping",
    "price": "₹700",
    "code": "CMAP700",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Meera Kapoor",
    "coach_type": "Mentor",
    "organisation": "Bright Minds School",
    "topic": "Stream Selection",
    "price": "₹400",
    "code": "STREAM400",
    "slots": 4,
    "status": "Pending Review",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Anupam Dey",
    "coach_type": "Educator",
    "organisation": "NextGen Academy",
    "topic": "Goal Setting",
    "price": "₹350",
    "code": "GOAL350",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Farha Khan",
    "coach_type": "Coach",
    "organisation": "Aspire India School",
    "topic": "Skill Exploration",
    "price": "₹480",
    "code": "SKL480",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Rishi Mehta",
    "coach_type": "Consultant",
    "organisation": "TalentBridge",
    "topic": "Course Alignment",
    "price": "₹390",
    "code": "ALGN390",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Geetanjali Roy",
    "coach_type": "Mentor",
    "organisation": "SmartFuture UG",
    "topic": "College Decision Help",
    "price": "₹420",
    "code": "CDH420",
    "slots": 2,
    "status": "Pending Review",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Ishaan Paul",
    "coach_type": "Educator",
    "organisation": "Edureka School",
    "topic": "Interest Finder",
    "price": "₹310",
    "code": "INTF310",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Simran Kaur",
    "coach_type": "Coach",
    "organisation": "FutureGen Institute",
    "topic": "Peer Comparison Insights",
    "price": "₹250",
    "code": "PCR250",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Naveen Rao",
    "coach_type": "Consultant",
    "organisation": "NewWave Education",
    "topic": "UG vs Diploma",
    "price": "₹500",
    "code": "UGD500",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Sanya Dubey",
    "coach_type": "Mentor",
    "organisation": "Leap Scholars",
    "topic": "Higher Studies Abroad",
    "price": "₹650",
    "code": "HSA650",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Arjun Sen",
    "coach_type": "Coach",
    "organisation": "BrightStart UG",
    "topic": "Choosing Commerce/Science",
    "price": "₹270",
    "code": "CHCS270",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Pallavi Trivedi",
    "coach_type": "Educator",
    "organisation": "Vision School",
    "topic": "Academic Direction",
    "price": "₹300",
    "code": "ACD300",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Jayant Ghosh",
    "coach_type": "Consultant",
    "organisation": "MentorCircle",
    "topic": "Skill vs Degree",
    "price": "₹390",
    "code": "SKVD390",
    "slots": 5,
    "status": "Pending Review",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Tina Roy",
    "coach_type": "Mentor",
    "organisation": "Scholars India",
    "topic": "Board Exam Strategy",
    "price": "₹460",
    "code": "BEX460",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "coach": "Yusuf Khan",
    "coach_type": "Coach",
    "organisation": "Excel Pathways",
    "topic": "Scholarship Guidance",
    "price": "₹390",
    "code": "SCHG390",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  }
];

export const b2b_sessions = [
  {
    "organisation": "SkillEdge Corp",
    "coach": "Amit Tiwari",
    "coach_type": "Educator",
    "topic": "Leadership Essentials",
    "price": "₹900",
    "code": "LEAD900",
    "slots": 6,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "Startup Network",
    "coach": "Ritu Jain",
    "coach_type": "Consultant",
    "topic": "Startup Mindset",
    "price": "₹0",
    "code": "FREEJOIN",
    "slots": 0,
    "status": "Full",
    "actions": ["Edit", "Reschedule"]
  },
  {
    "organisation": "TechBridge India",
    "coach": "Nikhil Verma",
    "coach_type": "Mentor",
    "topic": "Agile Fundamentals",
    "price": "₹800",
    "code": "AGF800",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "FinCorp Solutions",
    "coach": "Pooja Khanna",
    "coach_type": "Educator",
    "topic": "Financial Planning Basics",
    "price": "₹950",
    "code": "FPB950",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "HealthFirst Group",
    "coach": "Dr. Rahul Desai",
    "coach_type": "Consultant",
    "topic": "Workplace Wellness",
    "price": "₹720",
    "code": "WELL720",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "RetailMart Inc.",
    "coach": "Sneha Rao",
    "coach_type": "Coach",
    "topic": "Sales Mastery",
    "price": "₹850",
    "code": "SALE850",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "EduNova Global",
    "coach": "Arjun Patel",
    "coach_type": "Mentor",
    "topic": "Corporate Training Design",
    "price": "₹880",
    "code": "CTD880",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "GreenTech Pvt Ltd",
    "coach": "Megha Sinha",
    "coach_type": "Consultant",
    "topic": "Sustainable Practices",
    "price": "₹600",
    "code": "SUS600",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "BankNet Academy",
    "coach": "Vivek Menon",
    "coach_type": "Educator",
    "topic": "Banking Compliance",
    "price": "₹1050",
    "code": "BANK1050",
    "slots": 6,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "MedicoPro Labs",
    "coach": "Dr. Shweta Iyer",
    "coach_type": "Mentor",
    "topic": "Healthcare Team Management",
    "price": "₹950",
    "code": "HTM950",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "CreativeGurus",
    "coach": "Raj Malhotra",
    "coach_type": "Coach",
    "topic": "Creative Leadership",
    "price": "₹780",
    "code": "CLDR780",
    "slots": 2,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "LegalBridge LLP",
    "coach": "Adv. Smita Rani",
    "coach_type": "Consultant",
    "topic": "Corporate Law Essentials",
    "price": "₹1100",
    "code": "LAW1100",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "NextGen Logistics",
    "coach": "Harshita Dubey",
    "coach_type": "Educator",
    "topic": "Supply Chain Basics",
    "price": "₹680",
    "code": "SCB680",
    "slots": 4,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "FutureHub Co.",
    "coach": "Abhishek Jain",
    "coach_type": "Mentor",
    "topic": "Innovation in Business",
    "price": "₹990",
    "code": "INNOV990",
    "slots": 5,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  },
  {
    "organisation": "Infinity Labs",
    "coach": "Shraddha Kapoor",
    "coach_type": "Coach",
    "topic": "Team Motivation Tactics",
    "price": "₹760",
    "code": "TMT760",
    "slots": 3,
    "status": "Active",
    "actions": ["Assign", "Edit", "Disable"]
  }
];

export const pending_approvals = [
  {
    "coach": "Neha Sharma",
    "session_type": "Instant",
    "topic": "Time Management Tips",
    "price": "₹250",
    "code": "TMT250",
    "submitted_on": "17 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Aditya Rao",
    "session_type": "Introductory",
    "topic": "Career Pivoting",
    "price": "₹300",
    "code": "CPIV300",
    "submitted_on": "10 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Pallavi Joshi",
    "session_type": "Instant",
    "topic": "Interview Hacks",
    "price": "₹450",
    "code": "INTVH450",
    "submitted_on": "12 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Raghav Bansal",
    "session_type": "B2B",
    "topic": "Work Culture Fit",
    "price": "₹600",
    "code": "WCF600",
    "submitted_on": "18 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Meena Iyer",
    "session_type": "Introductory",
    "topic": "Stream Choice Guidance",
    "price": "₹350",
    "code": "SCG350",
    "submitted_on": "14 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Sourabh Taneja",
    "session_type": "Instant",
    "topic": "Goal Clarity",
    "price": "₹280",
    "code": "GLCL280",
    "submitted_on": "16 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Farida Ansari",
    "session_type": "Introductory",
    "topic": "Finding Your Passion",
    "price": "₹400",
    "code": "FYP400",
    "submitted_on": "19 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Sanjay Grover",
    "session_type": "B2B",
    "topic": "Team Communication",
    "price": "₹700",
    "code": "TCOM700",
    "submitted_on": "13 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Divya Kapoor",
    "session_type": "Instant",
    "topic": "Concentration Techniques",
    "price": "₹200",
    "code": "CTECH200",
    "submitted_on": "15 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Nitin Malhotra",
    "session_type": "Introductory",
    "topic": "Overcoming Self-Doubt",
    "price": "₹390",
    "code": "OSD390",
    "submitted_on": "20 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Anita Deshmukh",
    "session_type": "B2B",
    "topic": "Inclusive Leadership",
    "price": "₹980",
    "code": "INCL980",
    "submitted_on": "22 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Kunal Saxena",
    "session_type": "Instant",
    "topic": "Effective Learning Methods",
    "price": "₹310",
    "code": "ELM310",
    "submitted_on": "23 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Priya Kulkarni",
    "session_type": "Introductory",
    "topic": "Parent Communication",
    "price": "₹460",
    "code": "PRNT460",
    "submitted_on": "25 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Yash Oberoi",
    "session_type": "B2B",
    "topic": "Agile Collaboration",
    "price": "₹810",
    "code": "AGCL810",
    "submitted_on": "26 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  },
  {
    "coach": "Tanvi Gupta",
    "session_type": "Instant",
    "topic": "Exam Preparation Tips",
    "price": "₹275",
    "code": "EXPT275",
    "submitted_on": "27 May 2025",
    "status": "Pending",
    "actions": ["Review", "Approve", "Reject"]
  }
];


export const ProblemTableData = [
  {
    "id": 1,
    "user": "Kavya Sharma",
    "submittedOn": "18 May 2025",
    "issueType": "Profile",
    "description": "Unable to update mobile number",
    "screenshot": "View",
    "status": "Under Review",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 2,
    "user": "Mohit Sinha",
    "submittedOn": "17 May 2025",
    "issueType": "Booking",
    "description": "Session got cancelled but still charged",
    "screenshot": "View",
    "status": "New",
    "actions": ["Review", "Refund"]
  },
  {
    "id": 3,
    "user": "Priya Tiwari",
    "submittedOn": "16 May 2025",
    "issueType": "Assessment",
    "description": "Test screen froze midway",
    "screenshot": "No",
    "status": "Resolved",
    "actions": ["Confirm", "Archive"]
  },
  {
    "id": 4,
    "user": "Akhil Ranjan",
    "submittedOn": "15 May 2025",
    "issueType": "Access",
    "description": "Unable to login after OTP",
    "screenshot": "No",
    "status": "Archived",
    "actions": ["Restore"]
  },
  {
    "id": 5,
    "user": "Sneha Kapoor",
    "submittedOn": "14 May 2025",
    "issueType": "Payment",
    "description": "Transaction failed but amount deducted",
    "screenshot": "View",
    "status": "New",
    "actions": ["Investigate", "Refund"]
  },
  {
    "id": 6,
    "user": "Rajat Mehta",
    "submittedOn": "13 May 2025",
    "issueType": "Profile",
    "description": "Name not updating after edit",
    "screenshot": "No",
    "status": "Under Review",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 7,
    "user": "Pooja Arora",
    "submittedOn": "12 May 2025",
    "issueType": "Booking",
    "description": "Double booking confirmed",
    "screenshot": "View",
    "status": "Resolved",
    "actions": ["Confirm", "Archive"]
  },
  {
    "id": 8,
    "user": "Ankit Verma",
    "submittedOn": "11 May 2025",
    "issueType": "Access",
    "description": "OTP not received",
    "screenshot": "No",
    "status": "New",
    "actions": ["Send OTP", "Contact"]
  },
  {
    "id": 9,
    "user": "Divya Nair",
    "submittedOn": "10 May 2025",
    "issueType": "Assessment",
    "description": "Result not displayed",
    "screenshot": "View",
    "status": "Under Review",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 10,
    "user": "Rohan Bhatia",
    "submittedOn": "09 May 2025",
    "issueType": "Payment",
    "description": "Charged twice for the same session",
    "screenshot": "View",
    "status": "Resolved",
    "actions": ["Confirm", "Refund"]
  },
  {
    "id": 11,
    "user": "Tanvi Saxena",
    "submittedOn": "08 May 2025",
    "issueType": "Booking",
    "description": "Booking confirmation not received",
    "screenshot": "No",
    "status": "New",
    "actions": ["Resend Confirmation"]
  },
  {
    "id": 12,
    "user": "Yash Rajput",
    "submittedOn": "07 May 2025",
    "issueType": "Access",
    "description": "Email login failed repeatedly",
    "screenshot": "No",
    "status": "Under Review",
    "actions": ["Assign", "Debug"]
  },
  {
    "id": 13,
    "user": "Nisha Jain",
    "submittedOn": "06 May 2025",
    "issueType": "Assessment",
    "description": "MCQs not loading in test",
    "screenshot": "View",
    "status": "Resolved",
    "actions": ["Confirm", "Archive"]
  },
  {
    "id": 14,
    "user": "Gaurav Singh",
    "submittedOn": "05 May 2025",
    "issueType": "Profile",
    "description": "Photo upload fails",
    "screenshot": "View",
    "status": "New",
    "actions": ["Assign", "Resolve"]
  },
  {
    "id": 15,
    "user": "Ayesha Khan",
    "submittedOn": "04 May 2025",
    "issueType": "Payment",
    "description": "No invoice generated",
    "screenshot": "No",
    "status": "Archived",
    "actions": ["Restore", "Notify"]
  }
];


export const BugsTableData = [
  {
    "id": 1,
    "user": "Akanksha Verma",
    "submittedOn": "18 May 2025",
    "module": "Notifications",
    "priority": "High",
    "description": "Push alerts not showing in mobile",
    "screenshot": "View",
    "status": "In Progress",
    "actions": ["Fix", "Verify", "Comment"]
  },
  {
    "id": 2,
    "user": "Devansh Patel",
    "submittedOn": "17 May 2025",
    "module": "Assessments",
    "priority": "Critical",
    "description": "Timer resets during ACE test",
    "screenshot": "View",
    "status": "New",
    "actions": ["Assign", "Debug"]
  },
  {
    "id": 3,
    "user": "Sneha Chatterji",
    "submittedOn": "16 May 2025",
    "module": "Platform",
    "priority": "Medium",
    "description": "Dashboard layout breaks in Safari",
    "screenshot": "No",
    "status": "Fixed",
    "actions": ["Confirm", "Archive"]
  },
  {
    "id": 4,
    "user": "Harshit Meena",
    "submittedOn": "15 May 2025",
    "module": "Sessions",
    "priority": "Low",
    "description": "Coach details don't update instantly",
    "screenshot": "No",
    "status": "Verified",
    "actions": ["Close", "Archive"]
  },
  {
    "id": 5,
    "user": "Megha Yadav",
    "submittedOn": "14 May 2025",
    "module": "Payments",
    "priority": "Critical",
    "description": "Invoice generation fails on bulk export",
    "screenshot": "View",
    "status": "New",
    "actions": ["Assign", "Fix"]
  },
  {
    "id": 6,
    "user": "Aditya Rawal",
    "submittedOn": "13 May 2025",
    "module": "Login",
    "priority": "High",
    "description": "OTP screen not responsive on iOS",
    "screenshot": "View",
    "status": "In Progress",
    "actions": ["Fix", "Verify"]
  },
  {
    "id": 7,
    "user": "Tanya Malhotra",
    "submittedOn": "12 May 2025",
    "module": "Assessments",
    "priority": "Medium",
    "description": "MCQ options not selectable on Firefox",
    "screenshot": "No",
    "status": "Fixed",
    "actions": ["Confirm", "Comment"]
  },
  {
    "id": 8,
    "user": "Rohit Singh",
    "submittedOn": "11 May 2025",
    "module": "Platform",
    "priority": "Low",
    "description": "Dropdown menu overlaps on zoom",
    "screenshot": "No",
    "status": "Verified",
    "actions": ["Close"]
  },
  {
    "id": 9,
    "user": "Neha Dubey",
    "submittedOn": "10 May 2025",
    "module": "Notifications",
    "priority": "High",
    "description": "Email alerts delayed by hours",
    "screenshot": "View",
    "status": "In Progress",
    "actions": ["Fix", "Comment"]
  },
  {
    "id": 10,
    "user": "Arjun Vyas",
    "submittedOn": "09 May 2025",
    "module": "Sessions",
    "priority": "Medium",
    "description": "Session summary not saving edits",
    "screenshot": "No",
    "status": "New",
    "actions": ["Assign", "Debug"]
  },
  {
    "id": 11,
    "user": "Sanya Bedi",
    "submittedOn": "08 May 2025",
    "module": "Login",
    "priority": "Critical",
    "description": "Password reset fails for new users",
    "screenshot": "View",
    "status": "New",
    "actions": ["Assign", "Fix"]
  },
  {
    "id": 12,
    "user": "Vivek Chauhan",
    "submittedOn": "07 May 2025",
    "module": "Payments",
    "priority": "Low",
    "description": "Currency mismatch on international cards",
    "screenshot": "No",
    "status": "Verified",
    "actions": ["Close", "Archive"]
  },
  {
    "id": 13,
    "user": "Ritika Joshi",
    "submittedOn": "06 May 2025",
    "module": "Platform",
    "priority": "Medium",
    "description": "White screen on logout",
    "screenshot": "View",
    "status": "Fixed",
    "actions": ["Confirm", "Archive"]
  },
  {
    "id": 14,
    "user": "Ishaan Desai",
    "submittedOn": "05 May 2025",
    "module": "Notifications",
    "priority": "High",
    "description": "Repeated push notifications",
    "screenshot": "No",
    "status": "In Progress",
    "actions": ["Fix", "Comment"]
  },
  {
    "id": 15,
    "user": "Palak Mahajan",
    "submittedOn": "04 May 2025",
    "module": "Assessments",
    "priority": "Low",
    "description": "Hints not loading in test view",
    "screenshot": "View",
    "status": "New",
    "actions": ["Assign", "Debug"]
  }
]
export const Upcoming =[
      {
        "user": "Aarav Mehta",
        "coach": "Dr. Seema Rao",
        "coachType": "Counselor",
        "dateTime": "2025-05-18T15:00:00",
        "type": "1:1",
        "amount": "₹1,000",
        "statusTimeline": [
          "Booked (2025-05-16T14:00:00)",
          "Auto Approved (2025-05-16T14:05:00)",
          "Confirmed (2025-05-17T09:30:00)"
        ],
        "actions": ["View", "Reschedule", "Cancel"]
      },
      {
    "user": "Aarav Mehta",
    "coach": "Dr. Seema Rao",
    "coachType": "Counselor",
    "dateTime": "18 May, 3:00 PM",
    "type": "1:1",
    "amount": "₹1,000",
    "statusTimeline": ["Booked (16 May, 2:00 PM) → Auto Approved (16 May, 2:05 PM) → Confirmed (17 May, 9:30 AM)"],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "user": "Isha Verma",
    "coach": "Ankit Sharma",
    "coachType": "Mentor",
    "dateTime": "20 May, 10:00 AM",
    "type": "1:1",
    "amount": "₹850",
    "statusTimeline": ["Booked (18 May, 4:00 PM) → Auto Approved (18 May, 4:15 PM)"],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "user": "Yash Mittal",
    "coach": "Pooja Batra",
    "coachType": "Coach",
    "dateTime": "22 May, 11:30 AM",
    "type": "Ask Q",
    "amount": "₹500",
    "statusTimeline": ["Booked (19 May, 2:00 PM) → Manual Approved (20 May, 9:00 AM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Tanya Singh",
    "coach": "Rakesh Yadav",
    "coachType": "Counselor",
    "dateTime": "19 May, 4:00 PM",
    "type": "1:1",
    "amount": "₹1,200",
    "statusTimeline": ["Booked (16 May, 1:00 PM) → Auto Approved (16 May, 1:10 PM) → Confirmed (17 May, 10:00 AM)"],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "user": "Nikhil Roy",
    "coach": "Shweta Desai",
    "coachType": "Mentor",
    "dateTime": "21 May, 9:00 AM",
    "type": "Group",
    "amount": "₹600",
    "statusTimeline": ["Booked (18 May, 8:30 AM)"],
    "actions": ["View"]
  },
  {
    "user": "Meera Chopra",
    "coach": "Dr. Abhay Kaul",
    "coachType": "Educator",
    "dateTime": "23 May, 1:00 PM",
    "type": "1:1",
    "amount": "₹950",
    "statusTimeline": ["Booked (19 May, 3:00 PM) → Manual Approved (20 May, 10:00 AM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Saurav Jain",
    "coach": "Neha Kapoor",
    "coachType": "Coach",
    "dateTime": "24 May, 12:00 PM",
    "type": "Ask Q",
    "amount": "₹700",
    "statusTimeline": ["Booked (20 May, 4:00 PM) → Auto Approved (20 May, 4:05 PM)"],
    "actions": ["View", "Reschedule", "Cancel"]
  },
  {
    "user": "Priya Sinha",
    "coach": "Manoj Sharma",
    "coachType": "Mentor",
    "dateTime": "25 May, 2:00 PM",
    "type": "1:1",
    "amount": "₹1,100",
    "statusTimeline": ["Booked (21 May, 9:00 AM) → Auto Approved (21 May, 9:10 AM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Rahul Khanna",
    "coach": "Kritika Das",
    "coachType": "Educator",
    "dateTime": "26 May, 10:30 AM",
    "type": "1:1",
    "amount": "₹800",
    "statusTimeline": ["Booked (22 May, 11:00 AM) → Manual Approved (23 May, 8:00 AM)"],
    "actions": ["View", "Reschedule"]
  },
  {
    "user": "Divya Narayan",
    "coach": "Ashok Rao",
    "coachType": "Coach",
    "dateTime": "27 May, 3:00 PM",
    "type": "Ask Q",
    "amount": "₹550",
    "statusTimeline": ["Booked (23 May, 12:30 PM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Kunal Aggarwal",
    "coach": "Megha Rani",
    "coachType": "Counselor",
    "dateTime": "28 May, 4:30 PM",
    "type": "1:1",
    "amount": "₹1,300",
    "statusTimeline": ["Booked (24 May, 1:00 PM) → Auto Approved (24 May, 1:10 PM)"],
    "actions": ["View", "Reschedule"]
  },
  {
    "user": "Ritika Mehra",
    "coach": "Dr. Rajeev Sinha",
    "coachType": "Mentor",
    "dateTime": "29 May, 11:00 AM",
    "type": "Group",
    "amount": "₹750",
    "statusTimeline": ["Booked (25 May, 9:45 AM)"],
    "actions": ["View"]
  },
  {
    "user": "Arjun Deshmukh",
    "coach": "Pallavi Singh",
    "coachType": "Educator",
    "dateTime": "30 May, 10:00 AM",
    "type": "1:1",
    "amount": "₹950",
    "statusTimeline": ["Booked (26 May, 10:00 AM) → Manual Approved (26 May, 3:00 PM) → Confirmed (27 May, 9:00 AM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Sneha Das",
    "coach": "Ravi Tripathi",
    "coachType": "Coach",
    "dateTime": "31 May, 1:30 PM",
    "type": "Ask Q",
    "amount": "₹600",
    "statusTimeline": ["Booked (27 May, 11:00 AM)"],
    "actions": ["View", "Cancel"]
  },
  {
    "user": "Amit Bhalla",
    "coach": "Preeti Nair",
    "coachType": "Counselor",
    "dateTime": "1 June, 2:15 PM",
    "type": "1:1",
    "amount": "₹1,050",
    "statusTimeline": ["Booked (28 May, 9:30 AM) → Auto Approved (28 May, 9:35 AM)"],
    "actions": ["View", "Reschedule"]
  }
    ]
export const Live=  [
      {
        "user": "Ravi Kumar",
        "coach": "Neha Joshi",
        "coachType": "Mentor",
        "dateTime": "2025-05-18T14:30:00",
        "type": "1:1",
        "amount": "₹950",
        "statusTimeline": [
          "Booked",
          "Auto Approved",
          "Live (2025-05-18T14:30:00)"
        ],
        "actions": ["Join Now", "View"]
      },
      {
        "user": "Aanya Kapoor",
        "coach": "Manish Rao",
        "coachType": "Educator",
        "dateTime": "2025-05-18T14:45:00",
        "type": "Ask Q",
        "amount": "₹700",
        "statusTimeline": [
          "Booked",
          "Manual Approved",
          "Live (2025-05-18T14:45:00)"
        ],
        "actions": ["Join Now", "View"]
      },
        {
    "user": "Ravi Kumar",
    "coach": "Neha Joshi",
    "coachType": "Mentor",
    "dateTime": "2025-05-18T14:30:00",
    "type": "1:1",
    "amount": "₹950",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T14:30:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Aanya Kapoor",
    "coach": "Manish Rao",
    "coachType": "Educator",
    "dateTime": "2025-05-18T14:45:00",
    "type": "Ask Q",
    "amount": "₹700",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T14:45:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Simran Kaur",
    "coach": "Dr. Mehul Sinha",
    "coachType": "Counselor",
    "dateTime": "2025-05-18T15:00:00",
    "type": "1:1",
    "amount": "₹1,000",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T15:00:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Karan Patel",
    "coach": "Anita Joshi",
    "coachType": "Mentor",
    "dateTime": "2025-05-18T15:15:00",
    "type": "Ask Q",
    "amount": "₹650",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T15:15:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Priya Malhotra",
    "coach": "Vivek Shah",
    "coachType": "Coach",
    "dateTime": "2025-05-18T15:30:00",
    "type": "Group",
    "amount": "₹800",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T15:30:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Dev Sharma",
    "coach": "Rina Das",
    "coachType": "Educator",
    "dateTime": "2025-05-18T15:45:00",
    "type": "1:1",
    "amount": "₹900",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T15:45:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Anjali Rana",
    "coach": "Tarun Mehta",
    "coachType": "Mentor",
    "dateTime": "2025-05-18T16:00:00",
    "type": "Ask Q",
    "amount": "₹750",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T16:00:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Nikhil Joshi",
    "coach": "Meena Roy",
    "coachType": "Coach",
    "dateTime": "2025-05-18T16:15:00",
    "type": "1:1",
    "amount": "₹1,200",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T16:15:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Sanya Bhatia",
    "coach": "Dr. Harsh Vardhan",
    "coachType": "Counselor",
    "dateTime": "2025-05-18T16:30:00",
    "type": "Group",
    "amount": "₹850",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T16:30:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Arjun Thakur",
    "coach": "Sneha Iyer",
    "coachType": "Educator",
    "dateTime": "2025-05-18T16:45:00",
    "type": "1:1",
    "amount": "₹950",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T16:45:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Ritika Sharma",
    "coach": "Rahul Saxena",
    "coachType": "Mentor",
    "dateTime": "2025-05-18T17:00:00",
    "type": "Ask Q",
    "amount": "₹700",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T17:00:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Abhay Verma",
    "coach": "Sonal Jain",
    "coachType": "Coach",
    "dateTime": "2025-05-18T17:15:00",
    "type": "1:1",
    "amount": "₹1,100",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T17:15:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Neha Goyal",
    "coach": "Anuj Kapoor",
    "coachType": "Educator",
    "dateTime": "2025-05-18T17:30:00",
    "type": "Group",
    "amount": "₹600",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T17:30:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Amit Rawat",
    "coach": "Dr. Kavita Rao",
    "coachType": "Counselor",
    "dateTime": "2025-05-18T17:45:00",
    "type": "1:1",
    "amount": "₹980",
    "statusTimeline": [
      "Booked",
      "Auto Approved",
      "Live (2025-05-18T17:45:00)"
    ],
    "actions": ["Join Now", "View"]
  },
  {
    "user": "Pooja Singh",
    "coach": "Rohan Arora",
    "coachType": "Mentor",
    "dateTime": "2025-05-18T18:00:00",
    "type": "Ask Q",
    "amount": "₹720",
    "statusTimeline": [
      "Booked",
      "Manual Approved",
      "Live (2025-05-18T18:00:00)"
    ],
    "actions": ["Join Now", "View"]
  }
      
    ]
export const Completed=[
      {
        "user": "Raghav Sharma",
        "coach": "Anjali Gupta",
        "coachType": "Mentor",
        "dateTime": "2025-05-17T11:00:00",
        "type": "Instant",
        "amount": "₹1,200",
        "statusTimeline": [
          "Booked (2025-05-16T16:10:00)",
          "Auto Approved (2025-05-16T16:15:00)",
          "Completed (2025-05-17T11:45:00)"
        ],
        "recording": "Available",
        "actions": ["Watch Recording", "View"]
      },
      {
        "user": "Meera Sharma",
        "coach": "Ravi Kapoor",
        "coachType": "Consultant",
        "dateTime": "2025-05-15T10:00:00",
        "type": "B2B",
        "amount": "₹1,500",
        "statusTimeline": [
          "Booked (2025-05-13T11:30:00)",
          "Auto Approved (2025-05-13T11:35:00)",
          "Passed (2025-05-15T10:45:00)"
        ],
        "recording": "Available",
        "actions": ["Watch Recording", "Receipt"]
      }
    ]
    export const Cancelled =[
      {
        "user": "Priya Nair",
        "coach": "Vinod Malhotra",
        "coachType": "Educator",
        "dateTime": "2025-05-16T17:00:00",
        "type": "Ask Q",
        "amount": "₹800",
        "statusTimeline": [
          "Booked (2025-05-14T12:00:00)",
          "Manual Approved (2025-05-15T10:00:00)",
          "Cancelled (2025-05-15T15:00:00)"
        ],
        "actions": ["View", "Refund Process"]
      }
    ]
     export const RefundRequested=[
      {
        "user": "Priya Nair",
        "coach": "Vinod Malhotra",
        "coachType": "Educator",
        "dateTime": "2025-05-16T17:00:00",
        "type": "Ask Q",
        "amount": "₹800",
        "statusTimeline": ["Booked", "Cancelled"],
        "refundStatus": "Requested",
        "actions": ["Approve", "Deny"]
      },
      {
        "user": "Sanya Jain",
        "coach": "Karan Oberoi",
        "coachType": "Mentor",
        "dateTime": "2025-05-14T18:30:00",
        "type": "In-Person",
        "amount": "₹1,000",
        "statusTimeline": [
          "Booked (2025-05-12T09:45:00)",
          "Manual Approved (2025-05-13T13:00:00)",
          "Missed (2025-05-14T19:00:00)"
        ],
        "refundStatus": "Requested",
        "actions": ["Approve Refund"]
      }
    ]

export const FollowupTable = [
  {
    "id": 1,
    "name": "Ritika Sharma",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Onboarding Follow-up",
    "nextFollowup": "12 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 2,
    "name": "Greenfield High",
    "type": "Partner",
    "leadType": "Upsell",
    "concern": "Demo Scheduling",
    "nextFollowup": "13 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 3,
    "name": "Vivek Mehta",
    "type": "Explorer",
    "leadType": "Upsell",
    "concern": "Missed Session",
    "nextFollowup": "11 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 4,
    "name": "Anjali Verma",
    "type": "Coach",
    "leadType": "Guide",
    "concern": "Feedback",
    "nextFollowup": "15 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 5,
    "name": "Future Learners Org",
    "type": "Org",
    "leadType": "Upsell",
    "concern": "Onboarding",
    "nextFollowup": "16 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 6,
    "name": "Rajeev Kapoor",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Retention",
    "nextFollowup": "18 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 7,
    "name": "Athena School",
    "type": "Partner",
    "leadType": "Upsell",
    "concern": "Setup",
    "nextFollowup": "20 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 8,
    "name": "Simran Kaur",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Assessments",
    "nextFollowup": "21 July",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 9,
    "name": "Bright Minds Org",
    "type": "Org",
    "leadType": "Guide",
    "concern": "Feedback",
    "nextFollowup": "22 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 10,
    "name": "Aman Tiwari",
    "type": "Coach",
    "leadType": "Guide",
    "concern": "Session",
    "nextFollowup": "23 July",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 11,
    "name": "Inspire Edu",
    "type": "Partner",
    "leadType": "Upsell",
    "concern": "Visitor",
    "nextFollowup": "25 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 12,
    "name": "Reena Gupta",
    "type": "Explorer",
    "leadType": "Upsell",
    "concern": "Onboarding Follow-up",
    "nextFollowup": "26 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 13,
    "name": "Harsh Malik",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Abandoned Cart",
    "nextFollowup": "27 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 14,
    "name": "Eduforce Academy",
    "type": "Org",
    "leadType": "Upsell",
    "concern": "Retention",
    "nextFollowup": "28 July",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 15,
    "name": "Nidhi Chauhan",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Session",
    "nextFollowup": "29 July",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 16,
    "name": "School Connect",
    "type": "Partner",
    "leadType": "Upsell",
    "concern": "Demo Scheduling",
    "nextFollowup": "30 July",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 17,
    "name": "Ishaan Agarwal",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Stream Change",
    "nextFollowup": "31 July",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 18,
    "name": "Excel Minds",
    "type": "Org",
    "leadType": "Guide",
    "concern": "Onboarding",
    "nextFollowup": "1 Aug",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 19,
    "name": "Tanya Sen",
    "type": "Explorer",
    "leadType": "Upsell",
    "concern": "Missed Session",
    "nextFollowup": "2 Aug",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 20,
    "name": "Manav Chopra",
    "type": "Coach",
    "leadType": "Guide",
    "concern": "Feedback",
    "nextFollowup": "3 Aug",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 21,
    "name": "Global Achievers",
    "type": "Org",
    "leadType": "Upsell",
    "concern": "Setup",
    "nextFollowup": "4 Aug",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 22,
    "name": "Karan Bhatt",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Retention",
    "nextFollowup": "5 Aug",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 23,
    "name": "Sparkle Academy",
    "type": "Partner",
    "leadType": "Upsell",
    "concern": "Demo Scheduling",
    "nextFollowup": "6 Aug",
    "stage": "Step 1/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 24,
    "name": "Priya Soni",
    "type": "Explorer",
    "leadType": "Guide",
    "concern": "Onboarding Follow-up",
    "nextFollowup": "7 Aug",
    "stage": "Step 2/3",
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 25,
    "name": "EduGrow Solutions",
    "type": "Org",
    "leadType": "Upsell",
    "concern": "Feedback",
    "nextFollowup": "8 Aug",
    "stage": "Step 3/3",
    "actions": ["View", "Done", "Note"]
  }
]

export const CoachReview = [

  {
    "id": 1,
    "name": "Akanksha Verma",
    "submittedOn": "18 May 2025",
    "email": "Akanksha@gmail.com",
    "phone": "+919999999999",
    "speciality": "Psychology",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "name": "Rohan Mehta",
    "submittedOn": "20 May 2025",
    "email": "rohan.mehta@example.com",
    "phone": "+918888888888",
    "speciality": "Career Coaching",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "name": "Sneha Kapoor",
    "submittedOn": "22 May 2025",
    "email": "sneha.kapoor@example.com",
    "phone": "+917777777777",
    "speciality": "Nutrition",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "name": "Arjun Nair",
    "submittedOn": "25 May 2025",
    "email": "arjun.nair@example.com",
    "phone": "+916666666666",
    "speciality": "Fitness",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "name": "Priya Sharma",
    "submittedOn": "28 May 2025",
    "email": "priya.sharma@example.com",
    "phone": "+915555555555",
    "speciality": "Mindfulness",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "name": "Vikram Joshi",
    "submittedOn": "30 May 2025",
    "email": "vikram.joshi@example.com",
    "phone": "+914444444444",
    "speciality": "Motivational Speaking",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "name": "Neha Bhatia",
    "submittedOn": "01 June 2025",
    "email": "neha.bhatia@example.com",
    "phone": "+913333333333",
    "speciality": "Life Coaching",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "name": "Rahul Das",
    "submittedOn": "03 June 2025",
    "email": "rahul.das@example.com",
    "phone": "+912222222222",
    "speciality": "Parenting",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "name": "Isha Gupta",
    "submittedOn": "06 June 2025",
    "email": "isha.gupta@example.com",
    "phone": "+911111111111",
    "speciality": "Emotional Intelligence",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "name": "Karan Singh",
    "submittedOn": "08 June 2025",
    "email": "karan.singh@example.com",
    "phone": "+919898989898",
    "speciality": "Finance Coaching",
    "Profile": "View Profile",
    "actions": ["Approve", "Reject"]
  }
]


export const OrgReview = [
  {
    "id": 1,
    "organization": "Bright Future School",
    "submittedOn": "18 May 2025",
    "location": "Pune",
    "contact": "+919999999999",
    "Type": "School",
    "Docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "organization": "Mindset Academy",
    "submittedOn": "20 May 2025",
    "location": "Mumbai",
    "contact": "+918888888888",
    "Type": "Institute",
    "Docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "organization": "Green Valley High",
    "submittedOn": "22 May 2025",
    "location": "Delhi",
    "contact": "+917777777777",
    "Type": "School",
    "Docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "organization": "TechLead Institute",
    "submittedOn": "25 May 2025",
    "location": "Bangalore",
    "contact": "+916666666666",
    "Type": "College",
    "Docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "organization": "Success Path School",
    "submittedOn": "28 May 2025",
    "location": "Hyderabad",
    "contact": "+915555555555",
    "Type": "School",
    "Docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "organization": "Future Vision Academy",
    "submittedOn": "30 May 2025",
    "location": "Ahmedabad",
    "contact": "+914444444444",
    "Type": "Institute",
    "Docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "organization": "Inspire Learning Hub",
    "submittedOn": "01 June 2025",
    "location": "Chennai",
    "contact": "+913333333333",
    "Type": "College",
    "Docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "organization": "Dream Scholars Institute",
    "submittedOn": "03 June 2025",
    "location": "Kolkata",
    "contact": "+912222222222",
    "Type": "Institute",
    "Docs": "Check Files",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "organization": "Bright Minds School",
    "submittedOn": "06 June 2025",
    "location": "Jaipur",
    "contact": "+911111111111",
    "Type": "School",
    "Docs": "Verify",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "organization": "NextGen Learning Center",
    "submittedOn": "08 June 2025",
    "location": "Lucknow",
    "contact": "+919898989898",
    "Type": "Institute",
    "Docs": "Check Files",
    "actions": ["Approve", "Reject"]
  }
]


export const GoogleMapReview = [
  {
    "id": 1,
    "Listing": "Bright Future School",
    "submittedOn": "18 May 2025",
    "Address": "Pune, MH",
    "LinkedOrg": "Bright Future",
    "MapPreview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 2,
    "Listing": "Mindset Academy",
    "submittedOn": "20 May 2025",
    "Address": "Mumbai, MH",
    "LinkedOrg": "Mindset Org",
    "MapPreview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 3,
    "Listing": "Green Valley High",
    "submittedOn": "22 May 2025",
    "Address": "Delhi, DL",
    "LinkedOrg": "Green Valley Foundation",
    "MapPreview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 4,
    "Listing": "TechLead College",
    "submittedOn": "25 May 2025",
    "Address": "Bangalore, KA",
    "LinkedOrg": "TechLead Education",
    "MapPreview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 5,
    "Listing": "Success Path School",
    "submittedOn": "28 May 2025",
    "Address": "Hyderabad, TS",
    "LinkedOrg": "Success Path",
    "MapPreview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 6,
    "Listing": "Visionary Learning",
    "submittedOn": "30 May 2025",
    "Address": "Ahmedabad, GJ",
    "LinkedOrg": "Visionary Org",
    "MapPreview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 7,
    "Listing": "Inspire Junior College",
    "submittedOn": "01 June 2025",
    "Address": "Chennai, TN",
    "LinkedOrg": "Inspire Foundation",
    "MapPreview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 8,
    "Listing": "Dream Scholars Institute",
    "submittedOn": "03 June 2025",
    "Address": "Kolkata, WB",
    "LinkedOrg": "Dream Scholars Org",
    "MapPreview": "Map Link",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 9,
    "Listing": "Bright Minds School",
    "submittedOn": "06 June 2025",
    "Address": "Jaipur, RJ",
    "LinkedOrg": "Bright Minds Trust",
    "MapPreview": "View Map",
    "actions": ["Approve", "Reject"]
  },
  {
    "id": 10,
    "Listing": "NextGen Learning Center",
    "submittedOn": "08 June 2025",
    "Address": "Lucknow, UP",
    "LinkedOrg": "NextGen Foundation",
    "MapPreview": "Map Link",
    "actions": ["Approve", "Reject"]
  }
]


export const FormsDataReview = [
  {
    "id": 1,
    "User": "Aarav Mehta",
    "Type": "Organisation",
    "submittedOn": "18 May 2025",
    "Address": "Varanasi",
    "Name": "Shining Star Academy",
    "Entry": "View",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 2,
    "User": "Meera Iyer",
    "Type": "Individual",
    "submittedOn": "20 May 2025",
    "Address": "Bhopal",
    "Name": "Meera Coaching",
    "Entry": "Details",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 3,
    "User": "Rohan Kapoor",
    "Type": "Organisation",
    "submittedOn": "22 May 2025",
    "Address": "Surat",
    "Name": "Bright Minds Institute",
    "Entry": "View",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 4,
    "User": "Simran Kaur",
    "Type": "Organisation",
    "submittedOn": "24 May 2025",
    "Address": "Chandigarh",
    "Name": "NorthLight Academy",
    "Entry": "Details",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 5,
    "User": "Kunal Verma",
    "Type": "Individual",
    "submittedOn": "26 May 2025",
    "Address": "Agra",
    "Name": "Verma Coaching Classes",
    "Entry": "View",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 6,
    "User": "Aisha Khan",
    "Type": "Organisation",
    "submittedOn": "28 May 2025",
    "Address": "Lucknow",
    "Name": "Rising Edge School",
    "Entry": "Details",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 7,
    "User": "Dev Joshi",
    "Type": "Organisation",
    "submittedOn": "30 May 2025",
    "Address": "Indore",
    "Name": "Excel Point Academy",
    "Entry": "View",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 8,
    "User": "Pooja Rao",
    "Type": "Individual",
    "submittedOn": "01 June 2025",
    "Address": "Patna",
    "Name": "Smart Scholars Coaching",
    "Entry": "Details",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 9,
    "User": "Aniket Shah",
    "Type": "Organisation",
    "submittedOn": "03 June 2025",
    "Address": "Nashik",
    "Name": "Infinity Learning",
    "Entry": "View",
    "actions": ["Add to list", "Reject"]
  },
  {
    "id": 10,
    "User": "Sanya Malhotra",
    "Type": "Organisation",
    "submittedOn": "05 June 2025",
    "Address": "Raipur",
    "Name": "Future Vision School",
    "Entry": "Details",
    "actions": ["Add to list", "Reject"]
  }
]



export const AccountTable = [
  {
    "id": 1,
    "name": "Ritika Sharma",
    "type": "Explorer",
    "lastActivity": "10 Jul",
    "nextFollowUp": "12 Jul",
    "stage": "Step 2/3",
    "daysLeft": 173,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 2,
    "name": "EduCorp Pvt Ltd",
    "type": "Org",
    "lastActivity": "8 Jul",
    "nextFollowUp": "13 Jul",
    "stage": "Step 1/3",
    "daysLeft": 175,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 3,
    "name": "Aarti Verma",
    "type": "Coach",
    "lastActivity": "9 Jul",
    "nextFollowUp": "11 Jul",
    "stage": "Step 2/3",
    "daysLeft": 174,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 4,
    "name": "Manoj Singh",
    "type": "Explorer",
    "lastActivity": "7 Jul",
    "nextFollowUp": "15 Jul",
    "stage": "Step 1/3",
    "daysLeft": 172,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 5,
    "name": "Bright Future School",
    "type": "Org",
    "lastActivity": "6 Jul",
    "nextFollowUp": "14 Jul",
    "stage": "Step 3/3",
    "daysLeft": 176,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 6,
    "name": "Priya Anand",
    "type": "Coach",
    "lastActivity": "9 Jul",
    "nextFollowUp": "13 Jul",
    "stage": "Step 2/3",
    "daysLeft": 174,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 7,
    "name": "TechEd Academy",
    "type": "Org",
    "lastActivity": "5 Jul",
    "nextFollowUp": "16 Jul",
    "stage": "Step 1/3",
    "daysLeft": 177,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 8,
    "name": "Ravi Bhushan",
    "type": "Explorer",
    "lastActivity": "8 Jul",
    "nextFollowUp": "12 Jul",
    "stage": "Step 2/3",
    "daysLeft": 175,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 9,
    "name": "Aman Gupta",
    "type": "Coach",
    "lastActivity": "10 Jul",
    "nextFollowUp": "17 Jul",
    "stage": "Step 1/3",
    "daysLeft": 171,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 10,
    "name": "NextGen Institute",
    "type": "Org",
    "lastActivity": "6 Jul",
    "nextFollowUp": "11 Jul",
    "stage": "Step 3/3",
    "daysLeft": 172,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 11,
    "name": "Kritika Mehra",
    "type": "Explorer",
    "lastActivity": "7 Jul",
    "nextFollowUp": "13 Jul",
    "stage": "Step 2/3",
    "daysLeft": 174,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 12,
    "name": "SkillBridge",
    "type": "Org",
    "lastActivity": "9 Jul",
    "nextFollowUp": "14 Jul",
    "stage": "Step 1/3",
    "daysLeft": 170,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 13,
    "name": "Neha Arora",
    "type": "Coach",
    "lastActivity": "8 Jul",
    "nextFollowUp": "15 Jul",
    "stage": "Step 3/3",
    "daysLeft": 169,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 14,
    "name": "Aryan Taneja",
    "type": "Explorer",
    "lastActivity": "10 Jul",
    "nextFollowUp": "16 Jul",
    "stage": "Step 2/3",
    "daysLeft": 168,
    "actions": ["View", "Done", "Note"]
  },
  {
    "id": 15,
    "name": "EduSpark Pvt Ltd",
    "type": "Org",
    "lastActivity": "6 Jul",
    "nextFollowUp": "12 Jul",
    "stage": "Step 1/3",
    "daysLeft": 176,
    "actions": ["View", "Done", "Note"]
  }
]
export const NewTable=[
  {
    "Logo": "![Logo]",
    "Title": "Aimshala Recognized by Economic Times",
    "Source": "Economic Times",
    "Link": "Read More",
    "Clicks": 1124,
    "Date": "16 May 2025",
    "Status": "Published",
    "Actions": ["Edit", "Archive"]
  },
  {
    "Logo": "![Logo]",
    "Title": "Career Innovation Spotlight on NDTV",
    "Source": "NDTV",
    "Link": "Read More",
    "Clicks": 879,
    "Date": "13 May 2025",
    "Status": "Published",
    "Actions": ["Edit", "Archive"]
  },
  {
    "Logo": "![Logo]",
    "Title": "How Aimshala is Changing Education",
    "Source": "Hindustan Times",
    "Link": "Read More",
    "Clicks": 704,
    "Date": "09 May 2025",
    "Status": "Pending",
    "Actions": ["Review", "Publish"]
  }
]

export const HelpTable=[
  {
    "Title": "How to Book a Session",
    "Category": "Sessions",
    "Tags": ["Booking", "Call"],
    "For": "Students",
    "Author": "Team Aimshala",
    "Last Updated": "16 May 2025",
    "Status": "Published",
    "Actions": ["Edit", "Archive"]
  },
  {
    "Title": "Accessing Your Assessment Results",
    "Category": "Assessments",
    "Tags": ["Results", "Score"],
    "For": "Students",
    "Author": "Riya Malhotra",
    "Last Updated": "15 May 2025",
    "Status": "Published",
    "Actions": ["Edit", "Archive"]
  },
  {
    "Title": "Resetting Your Password",
    "Category": "Technical Support",
    "Tags": ["Login", "Account"],
    "For": "All Users",
    "Author": "Rahul Sen",
    "Last Updated": "13 May 2025",
    "Status": "Draft",
    "Actions": ["Edit", "Publish"]
  },
  {
    "Title": "Joining a Live Class",
    "Category": "Sessions",
    "Tags": ["Live", "Classroom"],
    "For": "Students",
    "Author": "Priya Desai",
    "Last Updated": "11 May 2025",
    "Status": "Published",
    "Actions": ["Edit", "Archive"]
  },
  {
    "Title": "Updating Your Profile Information",
    "Category": "Technical Support",
    "Tags": ["Profile", "Account"],
    "For": "All Users",
    "Author": "Team Aimshala",
    "Last Updated": "10 May 2025",
    "Status": "Draft",
    "Actions": ["Edit", "Publish"]
  }
]
