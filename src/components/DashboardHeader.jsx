const DashboardHeader = ({ heading, text }) => {
    return (
      <header className="py-6 border-b">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className="text-gray-600">{text}</p>
      </header>
    );
  };
  
  export default DashboardHeader;
  