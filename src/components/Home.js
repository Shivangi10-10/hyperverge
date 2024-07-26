  import React, { useState, useEffect } from 'react';
  import './Home.css';
  import Announcements from './Announcements';
  import BookQuote from './BookQuote';
  import DailyGoal from './DailyGoal';
  import ChatGPTWidget from './ChatGPTWidget';
  import GoogleCalendar from './GoogleCalender'
  import GoogleForm from './GoogleForm';
  import GoogleKeep from './GoogleKeep';
  import GoogleMeet from './GoogleMeet';
  import GoogleSlides from './GoogleSlides';
  import GoogleSpreadsheet from './GoogleSpreadsheet';
  import IssueTracker from './IssueTracker';
  import Music from './Music';
  import Notes from './Notes';
  import Notion from './Notion';
  import OpportunityBoard from './Opportunity';
  import Poll from './Poll';
  import PomodoroTimer from './PomodoroTimer';
  import StepsTracker from './StepsTracker';
  import TIL from './TIL';
  import pic from '../assets/home.png';
  import shivangi from '../assets/shivangi.jpg';
  import mayank from '../assets/mayank.jpg';
  import bhavya from '../assets/bhavya.jpg';

  const Home = () => {
    const [activeSection, setActiveSection] = useState('A');

    useEffect(() => {
      const sections = document.querySelectorAll('.widget-section');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.5 });

      sections.forEach(section => observer.observe(section));

      return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const scrollToSection = (letter) => {
      const section = document.getElementById(letter);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className="home-container">
        <header className="header">
          <div className="logo">
            <svg className="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="logo-text">Widget Wall</span>
          </div>
         
        </header>

        <main className="main">
          <div className="main-content">
            <div className="text-section">
              <h1 className="main-title">Revolutionizing Workplace Collaboration</h1>
              <section className="team">
                <h2 className="team-title">Meet the Team</h2>
                <div className="team-members">
                  {[
                    { name: "Shivangi", role: "The Visionary Architect", img: shivangi },
                    { name: "Bhavya", role: "The Optimization Girl", img: bhavya },
                    { name: "Mayank", role: "The Integration Maestro", img: mayank }
                  ].map((member, index) => (
                    <div key={index} className="team-member">
                      <img src={member.img} alt={member.name} className="member-avatar" />
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="image-section">
              <img src={pic} alt="Widget Wall Demo" className="office-image" />
            </div>
          </div>
          
          <section className="widgets">
            <h1 className="widgets-title">Dashboard</h1>
            
            <div className="alphabet-navigation">
              {['A', 'B','C', 'D', 'G', 'I', 'M', 'N', 'O', 'P', 'S', 'T'].map(letter => (
                <button
                  key={letter}
                  className={`nav-button ${activeSection === letter ? 'active' : ''}`}
                  onClick={() => scrollToSection(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>

            <div className="widgets-container">
              <div id="A" className="widget-section">
                <h2 className="section-title">A</h2>
                <div className="widget-grid">
                  <Announcements onClose={() => {}} />
                </div>
              </div>

              <div id="B" className="widget-section">
                <h2 className="section-title">B</h2>
                <div className="widget-grid">
                  <BookQuote onClose={() => {}} />
                </div>
              </div>

              
              <div id="C" className="widget-section">
                <h2 className="section-title">C</h2>
                <div className="widget-grid">
                  <ChatGPTWidget onClose={() => {}} />
                </div>
              </div>

              <div id="D" className="widget-section">
                <h2 className="section-title">D</h2>
                <div className="widget-grid">
                  <DailyGoal onClose={() => {}} />
                </div>
              </div>

              <div id="G" className="widget-section">
                <h2 className="section-title">G</h2>
                <div className="widget-grid">
                  <GoogleCalendar onClose={() => {}} />
                  <GoogleForm onClose={() => {}} />
                  <GoogleKeep onClose={() => {}} />
                  <GoogleMeet onClose={() => {}} />
                  <GoogleSlides onClose={() => {}} />
                  <GoogleSpreadsheet onClose={() => {}} />
                </div>
              </div>

              <div id="I" className="widget-section">
                <h2 className="section-title">I</h2>
                <div className="widget-grid">
                  <IssueTracker onClose={() => {}} />
                </div>
              </div>

              <div id="M" className="widget-section">
                <h2 className="section-title">M</h2>
                <div className="widget-grid">
                  <Music onClose={() => {}} />
                </div>
              </div>

              <div id="N" className="widget-section">
                <h2 className="section-title">N</h2>
                <div className="widget-grid">
                  <Notes onClose={() => {}} />
                  <Notion onClose={() => {}} />
                </div>
              </div>

              <div id="O" className="widget-section">
                <h2 className="section-title">O</h2>
                <div className="widget-grid">
                  <OpportunityBoard onClose={() => {}} />
                </div>
              </div>

              <div id="P" className="widget-section">
                <h2 className="section-title">P</h2>
                <div className="widget-grid">
                  <Poll onClose={() => {}} />
                  <PomodoroTimer onClose={() => {}} />
                </div>
              </div>

              <div id="S" className="widget-section">
                <h2 className="section-title">S</h2>
                <div className="widget-grid">
                  <StepsTracker onClose={() => {}} />
                </div>
              </div>

              <div id="T" className="widget-section">
                <h2 className="section-title">T</h2>
                <div className="widget-grid">
                  <TIL onClose={() => {}} />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Widget Wall - Created for HyperVerge Hackathon</p>
            <div className="copyright">
            &copy; 2024 Shivangi, Bhavya, Mayank
          </div>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;
