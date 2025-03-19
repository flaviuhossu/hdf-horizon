import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='container pt-20'>
        <section className='py-24 space-y-8'>
          <h1 className='text-4xl font-bold text-center'>
            Welcome to My Personal Website
          </h1>
          <p className='text-xl text-center text-muted-foreground'>
            I'm a Web Developer passionate about creating and sharing.
          </p>
        </section>
      </div>
    </main>
  );
}
