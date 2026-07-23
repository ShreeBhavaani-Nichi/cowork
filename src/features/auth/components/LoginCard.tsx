import LogoSection from "./LogoSection";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

export default function LoginCard() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl07aX8BvTDOzxpt87-qOO3fGBghoSi5C8fec9XVkkOavacfdWLwyHp1L1Ml5UX2UluKZrlXq9cTD3KqJPbIEQAPRExoCaU90fXQLl0VR9OFu4mp2WqtNeQzUT0HzYqzphei434XaJ8V2R5pG21e77Nc8mMHAHH5odaNcmsZu70kOQPHntkR9yPsrOPnMyD-xg44wPKYoZEpwKmUUMo29_rrtQn7jZM0WJB3v0yD5En_9hEvU3a1J7SnnoTt6k6edsMpZSZsqOAUE')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />

      {/* Login Card */}
      <div className="relative z-10 mx-4 w-full max-w-[390px] rounded-[22px] border border-[#c3c6d7] bg-white px-7 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.08),0_8px_22px_rgba(0,0,0,0.06)]">
        <LogoSection />
        <LoginHeader />
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
}