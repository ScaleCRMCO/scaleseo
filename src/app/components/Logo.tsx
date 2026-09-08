/**
 * Scale SEO "X" mark, extracted from the Canva SVG export (the rest of that
 * file was Canva canvas/mask noise — this single path is the actual logo).
 * Renders with fill="currentColor" so it inherits the CSS `color` of
 * whatever wraps it — used by Nav so the mark can flip between ink/cream
 * the same way the nav links already do via the .darkMode class.
 * For a fixed-color version (e.g. the footer), wrap it in an element with
 * an explicit `color` set, or use /images/logo-mark.svg instead.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 675"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 449.996094 418.410156 C 280.851562 643.261719 143.730469 506.144531 368.585938 336.996094 C 143.730469 167.851562 280.851562 30.734375 449.996094 255.585938 C 619.140625 30.734375 756.261719 167.851562 531.410156 336.996094 C 756.261719 506.144531 619.140625 643.261719 449.996094 418.410156 Z M 449.996094 418.410156"
        fillRule="nonzero"
      />
    </svg>
  );
}
