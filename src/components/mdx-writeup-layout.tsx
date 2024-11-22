export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
        {children}
      </div>
    )
  }