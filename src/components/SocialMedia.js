import React from 'react';
import './SocialMedia.css';
import {
    FaLinkedin,
    FaGithub,
    FaSpotify,
    FaInstagram,
    FaSnapchatGhost,
    FaDiscord,
    FaSteam,
    FaYoutube,
    FaStackOverflow,
} from 'react-icons/fa'; // Import React Icons

const socialMediaLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aruj-punia-024a5323a/', icon: <FaLinkedin />, color: '#0077B5' },
    { name: 'GitHub', url: 'https://github.com/puniaruj', icon: <FaGithub />, color: '#333' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ArujPunia/', icon: '🧮', color: '#FFA116' }, // Replace with image/icon if available
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/29086886/aruj-punia', icon: <FaStackOverflow />, color: '#F48024' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/7mgniraw79hqa3lpeiwlkimqq?si=c1507a9a402045e5', icon: <FaSpotify />, color: '#1DB954' },
    { name: 'Instagram', url: 'https://www.instagram.com/arujpunia/', icon: <FaInstagram />, color: '#C13584' },
    { name: 'Snapchat', url: 'https://www.snapchat.com/add/aruj_punia21?share_id=izljs_P3Qbc&locale=en-US', icon: <FaSnapchatGhost />, color: '#FFFC00' },
    { name: 'Discord', url: 'https://discord.com/user/706755456130875464', icon: <FaDiscord />, color: '#5865F2' },
    { name: 'Steam', url: 'https://steamcommunity.com/profiles/76561199202624134/', icon: <FaSteam />, color: '#171A21' },
    { name: 'YouTube', url: 'https://www.youtube.com/@arujpunia7072', icon: <FaYoutube />, color: '#FF0000' },
];

const SocialMedia = () => {
    return (
        <div className="social-media-grid">
            {socialMediaLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    style={{ boxShadow: `0px 4px 10px ${social.color}` }}
                >
                    <div className="social-icon" style={{ color: social.color }}>
                        {social.icon}
                    </div>
                    <h2>{social.name}</h2>
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
