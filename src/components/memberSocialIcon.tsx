import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
  faLinkedin,
  faPinterest,
  faPixiv,
  faSnapchat,
  faSoundcloud,
  faSpotify,
  faSteam,
  faTiktok,
  faTwitch,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const getDomain = (url: string): string => {
  const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (domain != null && domain.length > 2 && domain[2].length > 0) {
    return domain[2];
  }
  return url;
};

export const getIcon = (domain: string): React.JSX.Element => {
  switch (domain) {
    case 'twitter.com':
      return <FontAwesomeIcon icon={faXTwitter} />;
    case 'x.com':
      return <FontAwesomeIcon icon={faXTwitter} />;
    case 'instagram.com':
      return <FontAwesomeIcon icon={faInstagram} />;
    case 'youtube.com':
      return <FontAwesomeIcon icon={faYoutube} />;
    case 'twitch.tv':
      return <FontAwesomeIcon icon={faTwitch} />;
    case 'github.com':
      return <FontAwesomeIcon icon={faGithub} />;
    case 'discord.com':
      return <FontAwesomeIcon icon={faDiscord} />;
    case 'facebook.com':
      return <FontAwesomeIcon icon={faFacebook} />;
    case 'linkedin.com':
      return <FontAwesomeIcon icon={faLinkedin} />;
    case 'tiktok.com':
      return <FontAwesomeIcon icon={faTiktok} />;
    case 'snapchat.com':
      return <FontAwesomeIcon icon={faSnapchat} />;
    case 'spotify.com':
      return <FontAwesomeIcon icon={faSpotify} />;
    case 'soundcloud.com':
      return <FontAwesomeIcon icon={faSoundcloud} />;
    case 'steam.com':
      return <FontAwesomeIcon icon={faSteam} />;
    case 'line.com':
      return <FontAwesomeIcon icon={faLine} />;
    case 'pixiv.com':
      return <FontAwesomeIcon icon={faPixiv} />;
    case 'whatsapp.com':
      return <FontAwesomeIcon icon={faWhatsapp} />;
    case 'pinterest.com':
      return <FontAwesomeIcon icon={faPinterest} />;

    default:
      return <FontAwesomeIcon icon={faGlobe} />;
  }
};
