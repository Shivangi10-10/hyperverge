import React, { useState } from 'react';
import ChatGPTWidget from './components/ChatGPTWidget';
import GoogleCalendar from './components/GoogleCalender';
import GoogleMeet from './components/GoogleMeet';
import GoogleKeep from './components/GoogleKeep';
import Notes from './components/Notes';
import Notion from './components/Notion';
import OpportunityBoard from './components/Opportunity';
import Poll from './components/Poll';
import BookQuote from './components/BookQuote';
import DailyGoal from './components/DailyGoal';
import GoogleForm from './components/GoogleForm';
import GoogleSlides from './components/GoogleSlides';
import GoogleSpreadsheet from './components/GoogleSpreadsheet';
import IssueTracker from './components/IssueTracker';
import PomodoroTimer from './components/PomodoroTimer';
import Music from './components/Music';
import TIL from './components/TIL';
import StepsTracker from './components/StepsTracker'
import Announcements from './components/Announcements';
import Home from './components/Home'
const App = () => {
    const [widgets, setWidgets] = useState({
        chatGPT: true,
        googleCalendar: true,
        googleMeet: true,
        notes: true,
        notion: true,
        opportunityBoard: true,
        poll: true,
        googleSlides: true,
        pomodoroTimer: true,
        googleSpreadsheet: true,
        googleForm: true,
        bookQuote: true,
        dailyGoal: true,
        issueTracker: true,
        music: true,
        til:true,
        stepsTracker: true,
        googleKeep:true,
        announcements:true,
    });

    const handleClose = (widget) => {
        setWidgets({ ...widgets, [widget]: false });
    };

    return (
        <div className="App bg-gray-800 min-h-screen text-white">
            <Home/>
            {/* <div className="widgets grid grid-cols-1 gap-4 p-4">
                {widgets.chatGPT && <ChatGPTWidget onClose={() => handleClose('chatGPT')} />}
                {widgets.googleCalendar && <GoogleCalendar onClose={() => handleClose('googleCalendar')} />}
                {widgets.googleMeet && <GoogleMeet onClose={() => handleClose('googleMeet')} />}
                {widgets.notes && <Notes onClose={() => handleClose('notes')} />}
                {widgets.notion && <Notion onClose={() => handleClose('notion')} />}
                {widgets.opportunityBoard && <OpportunityBoard onClose={() => handleClose('opportunityBoard')} />}
                {widgets.poll && <Poll onClose={() => handleClose('poll')} />}
                {widgets.googleSlides && <GoogleSlides onClose={() => handleClose('googleSlides')} />}
                {widgets.pomodoroTimer && <PomodoroTimer onClose={() => handleClose('pomodoroTimer')} />}
                {widgets.googleSpreadsheet && <GoogleSpreadsheet onClose={() => handleClose('googleSpreadsheet')} />}
                {widgets.googleForm && <GoogleForm onClose={() => handleClose('googleForm')} />}
                {widgets.bookQuote && <BookQuote onClose={() => handleClose('bookQuote')} />}
                {widgets.dailyGoal && <DailyGoal onClose={() => handleClose('dailyGoal')} />}
                {widgets.issueTracker && <IssueTracker onClose={() => handleClose('issueTracker')} />}
                {widgets.music && <Music onClose={() => handleClose('music')} />}
                {widgets.til && <TIL onClose={() => handleClose('til')} />}
                {widgets.stepsTracker && <StepsTracker onClose={() => handleClose('stepsTracker')} />}
                {widgets.googleKeep && <GoogleKeep onClose={() => handleClose('googleKeep')} />}
                {widgets.announcements && <Announcements onClose={() => handleClose('announcements')} />}
            </div> */}
        </div>
    );
};

export default App;
