import { Routes, Route } from "react-router-dom";

// Admin Desk Components
import Coaches from "@/pages/AdminDesk/Coaches";
import Explorers from "@/pages/AdminDesk/Explorers";
import Organisations from "@/pages/AdminDesk/Organisations";
import Activities from "@/pages/AdminDesk/Activities";
import Assessments from "@/pages/AdminDesk/Manage/Assessments";
import Sessions from "@/pages/AdminDesk/Manage/Sessions";
import SessionPool from "@/pages/AdminDesk/Manage/SessionPool";
import ConsultantPremium from "@/pages/AdminDesk/Manage/Consultant";
import Masterclasses from "@/pages/AdminDesk/Manage/Masterclass";
import Courses from "@/pages/AdminDesk/Manage/Courses";
import AccessCodes from "@/pages/AdminDesk/Manage/Access";
import DeskUsers from "@/pages/AdminDesk/Manage/Users";

// Relation Desk
import { Relation as Relations } from "@/pages/RelationDesk/Relation";
import { MyAccounts as RelationAccount } from "@/pages/RelationDesk/MyAccount";
import { Activeusers as RelationActiveusers } from "@/pages/RelationDesk/ActiveUsers";
import { Explorers as RelationExplorer } from "@/pages/RelationDesk/Explorers";
import { Coaches as RelationCoach } from "@/pages/RelationDesk/Coaches";
import { Partners as RelationPartner } from "@/pages/RelationDesk/Partners";
import { Problems as RelationProblem } from "@/pages/RelationDesk/Problems";
import { Bugs as RelationBug } from "@/pages/RelationDesk/Bugs";
import { Abuses as RelationAbuses } from "@/pages/RelationDesk/Abuses";
import { Feedback as RelationFeedback } from "@/pages/RelationDesk/Feedback";
import { Reviews as RelationReviews } from "@/pages/RelationDesk/Reviews";
import { Followup as RelationFollowup } from "@/pages/RelationDesk/Followups";
import { Leaderboard as RelationLeaderboard } from "@/pages/RelationDesk/Leaderboard";

// Digital/Contents Desk
import { Insights as DigitalInsights } from "@/pages/DigitalDesk/Insights";
import { VideoLibraries as DigitalVideoLibraries } from "@/pages/DigitalDesk/VideoLibrary";
import { News as DigitalNews } from "@/pages/DigitalDesk/News";
import { Testimonials as DigitalTestimonials } from "@/pages/DigitalDesk/Testimonials";
import { Libraries as DigitalLibrary } from "@/pages/DigitalDesk/Libraries";
import { Help as DigitalHelp } from "@/pages/DigitalDesk/Help";
import { Faqs as DigitalFaqs } from "@/pages/DigitalDesk/Faqs";
import { Teams as DigitalTeam } from "@/pages/DigitalDesk/Teams";

// Finance Desk
import { Finance as FinanceDesk } from "@/pages/FinanceDesk/Finance";
import { Payments as FinancePayments } from "@/pages/FinanceDesk/Payments";
import { Payout as FinancePayout } from "@/pages/FinanceDesk/Payout";
import { PL as FinancePL } from "@/pages/FinanceDesk/PL";
import { Reports as FinanceReports } from "@/pages/FinanceDesk/Reports";
import { Commission as FinanceCommission } from "@/pages/FinanceDesk/Commission";
import { Earning as FinanceEarning } from "@/pages/FinanceDesk/Earning";

// Review Desk
import { Approvals as ReviewDesk } from "@/pages/ApprovalDesk/Approval";
import { Forms as ReviewForms } from "@/pages/ApprovalDesk/Forms";
import { GoogleMap as ReviewGoogleMaps } from "@/pages/ApprovalDesk/Googlemap";
import { ProfileCoach as ReviewProfileCoach } from "@/pages/ApprovalDesk/ProfileCoach";
import { ProfileOrg as ReviewProfileOrg } from "@/pages/ApprovalDesk/ProfileOrg";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Desk Routes */}
      <Route path="admin/activities" element={<Activities />} />
      <Route path="admin/leads" element={<div>Admin Leads Page</div>} />
      <Route path="admin/bugs" element={<RelationBug />} />
      <Route path="admin/abuses" element={<RelationAbuses />} />
      <Route path="admin/problems" element={<RelationProblem />} />
      <Route path="admin/feedback" element={<RelationFeedback />} />
      <Route path="admin/review" element={<RelationReviews />} />
      <Route path="admin/explorers" element={<Explorers />} />
      <Route path="admin/coaches" element={<Coaches />} />
      <Route path="admin/organisations" element={<Organisations />} />
      <Route path="admin/plans" element={<div>Admin Plans Page</div>} />
      <Route path="admin/assessments" element={<Assessments />} />
      <Route path="admin/sessions" element={<Sessions />} />
      <Route path="admin/session-pool" element={<SessionPool />} />
      <Route path="admin/masterclasses" element={<Masterclasses />} />
      <Route path="admin/access-codes" element={<AccessCodes />} />
      <Route path="admin/consultant-premium" element={<ConsultantPremium />} />
      <Route path="admin/desk-iam" element={<DeskUsers />} />

      {/* Approval Desk Routes */}
      <Route path="review/coach-profiles" element={<ReviewProfileCoach />} />
      <Route path="review/companies" element={<div>Approval Companies Page</div>} />
      <Route path="review/courses" element={<Courses />} />
      <Route path="review/schools" element={<div>Approval Schools Page</div>} />
      <Route path="review/institutes" element={<div>Approval Institutes Page</div>} />
      <Route path="review/colleges" element={<div>Approval Colleges Page</div>} />
      <Route path="review/universities" element={<div>Approval Universities Page</div>} />
      <Route path="review/ngos" element={<div>Approval NGOs Page</div>} />
      <Route path="review/exams" element={<div>Approval Exams Page</div>} />
      <Route path="review/careers" element={<div>Approval Careers Page</div>} />
      <Route path="review/scholarships" element={<div>Approval Scholarships Page</div>} />
      <Route path="review/map-listing" element={<ReviewGoogleMaps />} />
      <Route path="review/forms" element={<ReviewForms />} />

      {/* Contents Desk Routes */}
      <Route path="contents/insights" element={<DigitalInsights />} />
      <Route path="contents/video-library" element={<DigitalVideoLibraries />} />
      <Route path="contents/in-the-news" element={<DigitalNews />} />
      <Route path="contents/testimonials" element={<DigitalTestimonials />} />
      <Route path="contents/careers" element={<div>Contents Careers Page</div>} />
      <Route path="contents/courses" element={<div>Contents Courses Page</div>} />
      <Route path="contents/exams" element={<div>Contents Exams Page</div>} />
      <Route path="contents/colleges" element={<div>Contents Colleges Page</div>} />
      <Route path="contents/skills" element={<div>Contents Skills Page</div>} />
      <Route path="contents/scholarships" element={<div>Contents Scholarships Page</div>} />
      <Route path="contents/companies" element={<div>Contents Companies Page</div>} />
      <Route path="contents/help-articles" element={<DigitalHelp />} />
      <Route path="contents/faqs" element={<DigitalFaqs />} />
      <Route path="contents/teams" element={<DigitalTeam />} />

      {/* Relation Desk Routes */}
      <Route path="relation/follow-ups" element={<RelationFollowup />} />
      <Route path="relation/leads" element={<div>Relation Leads Page</div>} />
      <Route path="relation/cases" element={<div>Relation Cases Page</div>} />
      <Route path="relation/my-accounts" element={<RelationAccount />} />
      <Route path="relation/my-teams" element={<div>Relation My Teams Page</div>} />
      <Route path="relation/leaderboard" element={<RelationLeaderboard />} />

      {/* Finance Desk Routes */}
      <Route path="finance/payments" element={<FinancePayments />} />
      <Route path="finance/payouts" element={<FinancePayout />} />
      <Route path="finance/earnings" element={<FinanceEarning />} />
      <Route path="finance/pl" element={<FinancePL />} />
      <Route path="finance/reports" element={<FinanceReports />} />

      {/* Legacy Routes for backward compatibility */}
      <Route path="admin/users" element={<DeskUsers />} />
      <Route path="relation/dashboard" element={<Relations />} />
      <Route path="relation/followups" element={<RelationFollowup />} />
      <Route path="relation/account" element={<RelationAccount />} />
      <Route path="relation/active-users" element={<RelationActiveusers />} />
      <Route path="relation/explorers" element={<RelationExplorer />} />
      <Route path="relation/coaches" element={<RelationCoach />} />
      <Route path="relation/partners" element={<RelationPartner />} />
      <Route path="relation/problems" element={<RelationProblem />} />
      <Route path="relation/bugs" element={<RelationBug />} />
      <Route path="relation/abuses" element={<RelationAbuses />} />
      <Route path="relation/feedback" element={<RelationFeedback />} />
      <Route path="relation/review" element={<RelationReviews />} />
      <Route path="digital/insights" element={<DigitalInsights />} />
      <Route path="digital/video-library" element={<DigitalVideoLibraries />} />
      <Route path="digital/in-news" element={<DigitalNews />} />
      <Route path="digital/testimonials" element={<DigitalTestimonials />} />
      <Route path="digital/library" element={<DigitalLibrary />} />
      <Route path="digital/help-articles" element={<DigitalHelp />} />
      <Route path="digital/faqs" element={<DigitalFaqs />} />
      <Route path="digital/teams" element={<DigitalTeam />} />
      <Route path="finance/dashboard" element={<FinanceDesk />} />
      <Route path="finance/payout" element={<FinancePayout />} />
      <Route path="finance/commission" element={<FinanceCommission />} />
      <Route path="finance/earning" element={<FinanceEarning />} />
      <Route path="approval/dashboard" element={<ReviewDesk />} />
      <Route path="approval/google-map" element={<ReviewGoogleMaps />} />
      <Route path="approval/profile-coach" element={<ReviewProfileCoach />} />
      <Route path="approval/profile-org" element={<ReviewProfileOrg />} />
    </Routes>
  );
}
