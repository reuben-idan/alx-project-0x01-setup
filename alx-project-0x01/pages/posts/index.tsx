import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Posts Page</h1>
        <p>List of posts will go here.</p>
      </main>
    </div>
  );
};

export default Posts;
