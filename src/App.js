import './Global.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Transcribing from './pages/Transcribing';
import StarterBrief from './pages/StarterBrief';
import TranscriptionEmail from './pages/TranscriptionEmail';
import TranscriptionComplete from './pages/TranscriptionComplete';
import TranscriptionView from './pages/TranscriptionView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transcribing" element={<Transcribing />} />
        <Route path="/starter-brief" element={<StarterBrief />} />
        <Route path="/transcription-email" element={<TranscriptionEmail />} />
        <Route
          path="/transcription-complete"
          element={<TranscriptionComplete />}
        />
        <Route path="/transcription-view" element={<TranscriptionView />} />
      </Routes>
    </div>
  );
}

export default App;
