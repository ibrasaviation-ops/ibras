import Navbar from '@/components/Navbar';
import ChatBot from '@/components/ChatBot'; // We'll create this
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
// import '../globals.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main
        id="scroll-container"
        className="h-screen overflow-y-auto md:snap-y md:snap-mandatory bg-background overflow-x-hidden"
      >
        <ToastContainer />
        {children}
        <Footer />
      </main>
      <ChatBot />
    </>
  );
}
