import React from 'react';
import { House, Play } from 'lucide-react';
import Icon from './Icon';
import './ExitConfirmModal.css';

// Asks before leaving a round for the home page, since the round's progress is lost.
// The race clock is paused while it's open (see the timer in App).
export default function ExitConfirmModal({ lang = 'en', onStay, onLeave }) {
  const isEn = lang === 'en';

  return (
    <div className="modal-overlay active" role="dialog" aria-modal="true" aria-labelledby="exit-confirm-title">
      <div className="exit-confirm-box">
        <h2 id="exit-confirm-title" className="exit-confirm-title">
          <Icon as={House} /> {isEn ? 'Go to the home page?' : 'होम पेज पर जाएं?'}
        </h2>
        <p className="exit-confirm-text">
          {isEn
            ? 'This game will end and its progress will be lost.'
            : 'यह खेल समाप्त हो जाएगा और इसकी प्रगति सहेजी नहीं जाएगी।'}
        </p>
        <div className="exit-confirm-actions">
          <button type="button" className="exit-confirm-stay" onClick={onStay}>
            <Icon as={Play} /> {isEn ? 'Keep playing' : 'खेलना जारी रखें'}
          </button>
          <button type="button" className="exit-confirm-leave" onClick={onLeave}>
            <Icon as={House} /> {isEn ? 'Go to home' : 'होम पर जाएं'}
          </button>
        </div>
      </div>
    </div>
  );
}
