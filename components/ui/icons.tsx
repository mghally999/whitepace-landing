/**
 * Inline brand SVGs (crisp, themeable, zero network requests). Paths sourced
 * from the simple-icons set. Each accepts a className for sizing.
 * Generic UI icons (arrow, check, menu, quote, globe, chevron) come from
 * lucide-react directly in the components that use them.
 */
import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, ...rest } = props;
  return { rest, title };
}

export function AppleIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      />
    </svg>
  );
}

export function MicrosoftIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#F25022" d="M11.4 11.4H2V2h9.4z" />
      <path fill="#7FBA00" d="M22 11.4h-9.4V2H22z" />
      <path fill="#00A4EF" d="M11.4 22H2v-9.4h9.4z" />
      <path fill="#FFB900" d="M22 22h-9.4v-9.4H22z" />
    </svg>
  );
}

export function SlackIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#36C5F0" d="M9 2.4A2.4 2.4 0 1 0 9 7.2H6.6V4.8A2.4 2.4 0 0 0 9 2.4" />
      <path fill="#2EB67D" d="M21.6 9A2.4 2.4 0 1 0 16.8 9v2.4h2.4A2.4 2.4 0 0 0 21.6 9" />
      <path fill="#ECB22E" d="M15 21.6a2.4 2.4 0 1 0 0-4.8h2.4v2.4A2.4 2.4 0 0 0 15 21.6" />
      <path fill="#E01E5A" d="M2.4 15a2.4 2.4 0 1 0 4.8 0v-2.4H4.8A2.4 2.4 0 0 0 2.4 15" />
      <path fill="#36C5F0" d="M10.2 9a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0 0 4.8h3a2.4 2.4 0 0 0 2.4-2.4" opacity="0" />
      <path fill="#2EB67D" d="M9 13.8a2.4 2.4 0 0 0 4.8 0V4.8a2.4 2.4 0 1 0-4.8 0z" />
      <path fill="#ECB22E" d="M15 10.2a2.4 2.4 0 0 0 0-4.8H6a2.4 2.4 0 0 0 0 4.8z" opacity="0" />
      <path fill="#E01E5A" d="M10.2 15a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 1 0 0 4.8h3a2.4 2.4 0 0 0 2.4-2.4" opacity="0" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09A12 12 0 0 0 12 24" />
      <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.27a12 12 0 0 0 0 10.76z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.18 15.24 0 12 0A12 12 0 0 0 1.27 6.62l4 3.09C6.22 6.86 8.87 4.75 12 4.75" />
    </svg>
  );
}

export function DropboxIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#0061FF" d="M6 1.8 0 5.64l6 3.84 6-3.84zm12 0-6 3.84 6 3.84 6-3.84zM0 13.32l6 3.84 6-3.84-6-3.84zm18-3.84-6 3.84 6 3.84 6-3.84zM6 18.48l6 3.84 6-3.84-6-3.84z" />
    </svg>
  );
}

export function OutlookIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#0078D4" d="M24 7.5v9c0 .6-.5 1-1 1h-9V6.5h9c.5 0 1 .4 1 1" opacity=".9" />
      <path fill="#0078D4" d="M13 4.2 1 2v20l12-2.2z" />
      <ellipse cx="7" cy="12" rx="3.2" ry="3.6" fill="#fff" />
      <ellipse cx="7" cy="12" rx="1.7" ry="2" fill="#0078D4" />
    </svg>
  );
}

export function GoogleDriveIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#0066DA" d="m1.5 18 2.3 4 4.3-7.5H1.5z" />
      <path fill="#00AC47" d="M12 2 7.7 9.5 12 17l4.3-7.5z" transform="translate(-3.7 0)" />
      <path fill="#EA4335" d="m22.5 18-2.3 4H8.1l2.3-4z" />
      <path fill="#00832D" d="M8.3 2 4 9.5h8.6L8.3 2z" />
      <path fill="#2684FC" d="m12.6 14.5 4.3-7.5 4.3 7.5z" />
      <path fill="#FFBA00" d="m8.1 22 4.5-7.5h8.6L16.7 22z" opacity="0" />
    </svg>
  );
}

export function GoogleCalendarIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <rect x="3" y="4" width="18" height="18" rx="2" fill="#fff" stroke="#4285F4" strokeWidth="1.5" />
      <rect x="3" y="4" width="18" height="4" rx="2" fill="#4285F4" />
      <text x="12" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4285F4">
        31
      </text>
    </svg>
  );
}

export function GmailIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="#fff" d="M3 5h18v14H3z" />
      <path fill="#EA4335" d="M3 5v14H1.5A.5.5 0 0 1 1 18.5V6.2z" transform="translate(1 0)" />
      <path fill="#4285F4" d="M21 5v14h1.5a.5.5 0 0 0 .5-.5V6.2z" transform="translate(-1 0)" />
      <path fill="#FBBC04" d="M2 6.2 12 13.5 22 6.2V19h-2V9l-8 6-8-6v10H2z" />
      <path fill="#C5221F" d="M2 5.5 12 13l10-7.5z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.6V13h2.8v8z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="currentColor" d="M18.2 3h3.3l-7.2 8.3L23 21h-6.6l-5.2-6.8L5.2 21H1.9l7.7-8.9L1 3h6.8l4.7 6.2zm-1.2 16h1.8L7.1 4.9H5.2z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0" />
    </svg>
  );
}

export function WindowsIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="currentColor" d="M0 3.45 9.75 2.1v9.4H0zm10.95-1.5L24 0v11.4H10.95zM0 12.6h9.75V22L0 20.55zm10.95 0H24V24l-13.05-1.8z" />
    </svg>
  );
}

export function AndroidIcon(props: IconProps) {
  const { rest, title } = base(props);
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} {...rest}>
      <path fill="currentColor" d="M6 9h12v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17zm-2.5 0A1.5 1.5 0 0 1 5 10.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 3.5 9m17 0A1.5 1.5 0 0 1 22 10.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 20.5 9M8 19.5h2v3a1.5 1.5 0 0 1-3 0v-3zm6 0h2v3a1.5 1.5 0 0 1-3 0v-3zM7.9 3.2 6.6 1.3a.4.4 0 1 1 .65-.45L8.6 2.78A6.9 6.9 0 0 1 12 2c1.23 0 2.39.28 3.4.78l1.35-1.93a.4.4 0 0 1 .65.45L16.1 3.2A6.5 6.5 0 0 1 18.5 8h-13a6.5 6.5 0 0 1 2.4-4.8M9.5 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
    </svg>
  );
}
