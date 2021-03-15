import MainLayout from '../components/layouts/Main';

export default function Custom404() {
  return (
    <MainLayout title="404 – Page Not Found">
      <div className="flex justify-center items-center flex-col h-screen w-full">
        <h1 className="font-bold text-primary text-9xl">404</h1>
        <p className="text-primary text-md">Oops! Something went wrong</p>
      </div>
    </MainLayout>
  );
}
