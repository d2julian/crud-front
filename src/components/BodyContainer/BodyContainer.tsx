type BodyContainerProps = {
  children: React.ReactNode;
};
const BodyContainer = ({ children }: BodyContainerProps) => {
  return (
    <section id="main" className="bg-slate-200 flex flex-1 max-w-full overflow-auto lg:justify-center xs:justify-start">
      {children}
    </section>
  );
};
export default BodyContainer;
