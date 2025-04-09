import Header from './core/components/Header/Header'
import NotesSection from './features/notes/presentation/pages/NotesSection'
import RemindersSection from './features/reminders/presentation/pages/RemindersSection'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <NotesSection />
        <RemindersSection />
      </div>
    </div>
  )
}

export default App