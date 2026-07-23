import LogoSection from "./LogoSection";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

export default function LoginCard() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f9ff] p-4 sm:p-6">

      {/* Temporary Background */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#ffffff_0%,#edf3ff_100%)]" />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />

      {/* Card */}
      <div className="relative z-10 mx-4 w-full max-w-[390px] rounded-[22px] border border-[#c3c6d7] bg-white px-7 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.08),0_8px_22px_rgba(0,0,0,0.06)]">

        <LogoSection />

        <LoginHeader />

        <LoginForm />

        <Footer />

      </div>
    </div>
  );
}