export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="container-px py-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-dim">
        <p>© {new Date().getFullYear()} Prabesh Maharjan. Built with Next.js.</p>
        <p>Kathmandu, Nepal</p>
      </div>
    </footer>
  );
}
