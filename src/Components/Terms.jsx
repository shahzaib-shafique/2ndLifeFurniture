import React from "react";
import MinimalHeader from "./MinimalHeader";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 mt-">
      <MinimalHeader />

      <div className="bg-gradient-to-r from-green-100 to-green-50 py-12 text-center shadow-sm">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please read these terms carefully before using{" "}
          <span className="font-semibold text-green-700">
            Second Life Furniture
          </span>
          . By creating an account or using our services, you agree to these
          Terms.
        </p>
      </div>

      <div className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Account Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Provide accurate, complete, and up-to-date information when
              registering.
            </li>
            <li>Keep your account credentials safe and confidential.</li>
            <li>
              Notify us immediately if you suspect unauthorized access to your
              account.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. Listing and Selling Items
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Only second-hand furniture items are allowed to be listed.</li>
            <li>Include accurate descriptions and real images of the items.</li>
            <li>No fake, duplicate, or misleading listings are allowed.</li>
            <li>
              Sellers are responsible for arranging delivery or pickup with
              buyers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Buying Items
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Communicate respectfully and honestly with sellers.</li>
            <li>Inspect items carefully before making payment or purchase.</li>
            <li>
              We are not responsible for the quality, condition, or delivery of
              items purchased.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Prohibited Activities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Do not post stolen, illegal, or counterfeit items.</li>
            <li>Do not spam, scam, harass, or abuse other users.</li>
            <li>Do not attempt to hack or disrupt the platform in any way.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Platform Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium text-green-700">
              Second Life Furniture
            </span>
            is a listing platform only. We are not involved in the actual
            transaction between buyers and sellers and do not guarantee the
            quality, safety, or legality of listed items. Any disputes must be
            resolved directly between the buyer and seller.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Termination of Accounts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate your account at any
            time if you violate these Terms or engage in fraudulent or harmful
            activities.
          </p>
        </section>

        <p className="text-gray-500 text-sm text-center pt-6">
          Last updated: September 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
