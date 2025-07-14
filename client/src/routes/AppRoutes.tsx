import { Routes, Route } from "react-router-dom";
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

import { Relation as Relations } from "@/pages/RelationDesk/Relation";
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

import { Insights as DigitalInsights } from "@/pages/DigitalDesk/Insights";
import { VideoLibraries as DigitalVideoLibraries } from "@/pages/DigitalDesk/VideoLibrary";
import { News as DigitalNews } from "@/pages/DigitalDesk/News";
import { Testimonials as DigitalTestimonials } from "@/pages/DigitalDesk/Testimonials";
import { Libraries as DigitalLibrary } from "@/pages/DigitalDesk/Libraries";
import { Help as DigitalHelp } from "@/pages/DigitalDesk/Help";
import { Faqs as DigitalFaqs } from "@/pages/DigitalDesk/Faqs";
import { Teams as DigitalTeam } from "@/pages/DigitalDesk/Teams";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Desk Routes */}
      <Route path="coaches" element={<Coaches />} />
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

      {/* Relation Desk Routes */}
      <Route path="relation" element={<Relations />} />
      <Route path="user-org-search" element={<RelationSearchOrgs />} />
      <Route path="active-users" element={<RelationActiveusers />} />
      <Route path="explorers" element={<RelationExplorer />} />
      <Route path="coaches" element={<RelationCoach />} />
      <Route path="partners" element={<RelationPartner />} />
      <Route path="problems" element={<RelationProblem />} />
      <Route path="bugs" element={<RelationBug />} />
      <Route path="abuses" element={<RelationAbuses />} />
      <Route path="feedback" element={<RelationFeedback />} />
      <Route path="review" element={<RelationReviews />} />

      {/* Digital Desk */}
      <Route path="insights" element={<DigitalInsights />} />
      <Route path="video-library" element={<DigitalVideoLibraries />} />
      <Route path="in-news" element={<DigitalNews />} />
      <Route path="testimonials" element={<DigitalTestimonials />} />
      <Route path="library" element={<DigitalLibrary />} />
      <Route path="help-articles" element={<DigitalHelp />} />
      <Route path="faqs" element={<DigitalFaqs />} />
      <Route path="teams" element={<DigitalTeam />} />
    </Routes>
  );
}
