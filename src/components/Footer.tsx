export function Footer() {
  return <footer className="border-t border-gray-100">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Wanderly Inc. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-primary-600">Privacy</a>
        <a href="#" className="hover:text-primary-600">Terms</a>
      </div>
    </div>
  </footer>
}
