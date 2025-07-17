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
import { SearchOrgs as RelationSearchOrgs } from "@/pages/RelationDesk/SearchOrg";
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

// Digital Desk \
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

// Approval Desk 
import { Approvals as ApprovalDesk } from "@/pages/ApprovalDesk/Approval";
import { Forms as ApprovalForms } from "@/pages/ApprovalDesk/Forms";
import { GoogleMap as ApprovalGoogleMaps } from "@/pages/ApprovalDesk/Googlemap";
import { ProfileCoach as ApprovalProfileCoach } from "@/pages/ApprovalDesk/ProfileCoach";
import { ProfileOrg as ApprovalProfileOrg } from "@/pages/ApprovalDesk/ProfileOrg";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Desk Routes */}
      <Route path="admin/coaches" element={<Coaches />} />
      <Route path="admin/explorers" element={<Explorers />} />
      <Route path="admin/organisations" element={<Organisations />} />
      <Route path="admin/activities" element={<Activities />} />
      <Route path="admin/assessments" element={<Assessments />} />
      <Route path="admin/sessions" element={<Sessions />} />
      <Route path="admin/session-pool" element={<SessionPool />} />
      <Route path="admin/consultant-premium" element={<ConsultantPremium />} />
      <Route path="admin/masterclasses" element={<Masterclasses />} />
      <Route path="admin/courses" element={<Courses />} />
      <Route path="admin/access-codes" element={<AccessCodes />} />
      <Route path="admin/users" element={<DeskUsers />} />

      {/* Relation Desk Routes */}
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
      <Route path="relation/leaderboard" element={<RelationLeaderboard />} />

      {/* Digital Desk Routes */}
      <Route path="digital/insights" element={<DigitalInsights />} />
      <Route path="digital/video-library" element={<DigitalVideoLibraries />} />
      <Route path="digital/in-news" element={<DigitalNews />} />
      <Route path="digital/testimonials" element={<DigitalTestimonials />} />
      <Route path="digital/library" element={<DigitalLibrary />} />
      <Route path="digital/help-articles" element={<DigitalHelp />} />
      <Route path="digital/faqs" element={<DigitalFaqs />} />
      <Route path="digital/teams" element={<DigitalTeam />} />

      {/* Finance Desk Routes */}
      <Route path="finance/dashboard" element={<FinanceDesk />} />
      <Route path="finance/payments" element={<FinancePayments />} />
      <Route path="finance/payout" element={<FinancePayout />} />
      <Route path="finance/pl" element={<FinancePL />} />
      <Route path="finance/reports" element={<FinanceReports />} />

      {/* Approval Desk Routes */}
      <Route path="approval/dashboard" element={<ApprovalDesk />} />
      <Route path="approval/forms" element={<ApprovalForms />} />
      <Route path="approval/google-map" element={<ApprovalGoogleMaps />} />
      <Route path="approval/profile-coach" element={<ApprovalProfileCoach />} />
      <Route path="approval/profile-org" element={<ApprovalProfileOrg />} />

      {/* Backward compatibility routes - redirect old paths to new structure */}
      
      {/* <Route path="coaches" element={<Coaches />} />
      <Route path="explorers" element={<Explorers />} />
      <Route path="organisations" element={<Organisations />} />
      <Route path="activities" element={<Activities />} />
      <Route path="assessments" element={<Assessments />} />
      <Route path="sessions" element={<Sessions />} />
      <Route path="session-pool" element={<SessionPool />} />
      <Route path="consultant-premium" element={<ConsultantPremium />} />
      <Route path="masterclasses" element={<Masterclasses />} />
      <Route path="courses" element={<Courses />} />
      <Route path="access-codes" element={<AccessCodes />} />
      <Route path="users" element={<DeskUsers />} />
      <Route path="relation" element={<Relations />} />
      <Route path="followups" element={<RelationFollowup />} />
      <Route path="problems" element={<RelationProblem />} />
      <Route path="bugs" element={<RelationBug />} />
      <Route path="abuses" element={<RelationAbuses />} />
      <Route path="feedback" element={<RelationFeedback />} />
      <Route path="review" element={<RelationReviews />} />
      <Route path="leaderboard" element={<RelationLeaderboard />} />
      <Route path="insights" element={<DigitalInsights />} />
      <Route path="video-library" element={<DigitalVideoLibraries />} />
      <Route path="in-news" element={<DigitalNews />} />
      <Route path="testimonials" element={<DigitalTestimonials />} />
      <Route path="library" element={<DigitalLibrary />} />
      <Route path="help-articles" element={<DigitalHelp />} />
      <Route path="faqs" element={<DigitalFaqs />} />
      <Route path="teams" element={<DigitalTeam />} />
      <Route path="finance" element={<FinanceDesk />} />
      <Route path="payments" element={<FinancePayments />} />
      <Route path="payout" element={<FinancePayout />} />
      <Route path="pl" element={<FinancePL />} />
      <Route path="reports" element={<FinanceReports />} />
      <Route path="approval" element={<ApprovalDesk />} />
      <Route path="forms" element={<ApprovalForms />} />
      <Route path="google-map" element={<ApprovalGoogleMaps />} />
      <Route path="profile-coach" element={<ApprovalProfileCoach />} />
      <Route path="profile-org" element={<ApprovalProfileOrg />} /> */}

      {/* <Route path="user-org-search" element={<RelationSearchOrgs />} /> */}
      {/* <Route path="active-users" element={<RelationActiveusers />} /> */}
      {/* <Route path="partners" element={<RelationPartner />} /> */}
    </Routes>
  );
}