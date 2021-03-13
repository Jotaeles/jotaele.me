import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="404 – Page Not Found">
      <div className="flex justify-center items-center flex-col h-screen w-full">
        <h1 className="font-bold text-primary text-9xl">404</h1>
        <p className="text-primary text-md">Oops! Something went wrong</p>
      </div>
    </Layout>
  );
}
