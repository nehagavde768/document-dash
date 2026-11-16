// Deployment settings. Override any of them with Vite env vars (see .env.example).

// Rajyotsav certificate service: generates the winner's PDF certificate and its QR code
export const CERTIFICATE_API_URL =
  import.meta.env.VITE_CERTIFICATE_API_URL || 'https://cggeomap.cgstate.gov.in/rajyotsav/api/certificate';

// This game's name as printed on the winner's certificate, so plain words (no underscores)
export const GAME_NAME = import.meta.env.VITE_GAME_NAME || 'Document Dash';

// Length of one round in seconds: a 2-minute countdown unless VITE_TIME_LIMIT_SECONDS says
// otherwise. 0 turns the limit off (for testing): there's no clock and the round ends only when
// all certificates are done or the player finishes.
const timeLimit = Number.parseInt(import.meta.env.VITE_TIME_LIMIT_SECONDS, 10);
export const TIME_LIMIT_SECONDS = Number.isNaN(timeLimit) ? 120 : Math.max(0, timeLimit);

// The round length for texts such as "Beat the 2-minute clock": whole minutes when it divides
// evenly, otherwise seconds
const limitInMinutes = TIME_LIMIT_SECONDS % 60 === 0;
const limitAmount = limitInMinutes ? TIME_LIMIT_SECONDS / 60 : TIME_LIMIT_SECONDS;
export const TIME_LIMIT_LABEL = {
  en: `${limitAmount}-${limitInMinutes ? 'minute' : 'second'}`,
  hi: `${limitAmount} ${limitInMinutes ? 'मिनट' : 'सेकंड'}`
};

// The Rajyotsav portal's home page, which opens this game. Every screen has a Home button to it,
// and the kiosk returns there between players (VITE_LAUNCHER_URL points it elsewhere).
export const LAUNCHER_URL =
  import.meta.env.VITE_LAUNCHER_URL || 'https://cggeomap.cgstate.gov.in/rajyotsav_portal/modules/home/home.html';
