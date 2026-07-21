import UploadCard from "../components/UploadCard";
import ResumeScore from "../components/ScoreChart";
import RecentAnalysis from "../components/RecentAnalysis";
import SuggestionCard from "../components/SuggestionCard";
import ImprovementBanner from "../components/ImprovementBanner";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UploadCard />
        <ResumeScore />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAnalysis />
        <SuggestionCard />
      </div>

      <ImprovementBanner />
    </div>
  );
}

export default Dashboard;