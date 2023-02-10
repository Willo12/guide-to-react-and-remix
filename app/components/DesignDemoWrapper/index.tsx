interface DesignDemoWrapperProps {
  children: React.ReactNode;
}

const DesignDemoWrapper = ({ children }: DesignDemoWrapperProps) => {
  return (
    <main className="relative block min-h-screen bg-slate-400 p-16 lg:flex lg:flex-row lg:items-center lg:justify-center">
      {children}
    </main>
  );
};

export default DesignDemoWrapper;
