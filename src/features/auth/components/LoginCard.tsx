import LogoSection from "./LogoSection";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

export default function LoginCard() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#ffffff_0%,#eef2f7_100%)]" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-[460px] rounded-[28px] bg-white px-10 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <LogoSection />

        <LoginHeader />

        <LoginForm />

        <Footer />
      </div>
    </div>
  );
}