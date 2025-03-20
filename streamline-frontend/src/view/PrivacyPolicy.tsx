import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
      <Header/>
      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">1. Information We Collect</h2>
        <p className="text-gray-700 mt-2">
          We collect personal information such as your name, email, and payment details when you place an order. Additionally, we may collect usage data through cookies and analytics tools.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          <li>To process and fulfill orders</li>
          <li>To improve our website and services</li>
          <li>To send promotional emails (you can opt out anytime)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">3. Data Security</h2>
        <p className="text-gray-700 mt-2">
          We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">4. Third-Party Services</h2>
        <p className="text-gray-700 mt-2">
          We may use third-party services (e.g., payment processors, analytics tools) that collect and process data according to their policies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">5. Your Rights</h2>
        <p className="text-gray-700 mt-2">
          You have the right to access, modify, or delete your personal data. Contact us at support@example.com for any requests.
        </p>
      </section>
     <Footer />
    </div>
  );
}

export default PrivacyPolicy;
