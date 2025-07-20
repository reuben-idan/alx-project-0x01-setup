import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Users Page</h1>
        <p>List of users will go here.</p>
      </main>
    </div>
  );
};

export default Users;
