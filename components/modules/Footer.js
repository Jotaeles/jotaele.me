export default function Footer() {
  return (
    <footer>
      <div className="text-sm text-center p-8 text-primary dark:text-gray-300">
        Made with{' '}
        <span className="text-secondary" role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <a
          className="hover:text-secondary"
          href="https://github.com/Jotaeles"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jotaeles
        </a>
      </div>
    </footer>
  );
}
