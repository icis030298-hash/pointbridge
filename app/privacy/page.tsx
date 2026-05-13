import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
            <p>
              Welcome to Point Bridge ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at contact@pointbridge.io.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
            </p>
            <h3 className="text-xl font-medium text-primary mt-4 mb-2">Google AdSense and Third-Party Advertising</h3>
            <p>
              We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may contact our Data Protection Officer by email at contact@pointbridge.io or by post to:
            </p>
            <address className="not-italic mt-4 p-4 bg-secondary rounded-lg border border-border">
              <strong>Point Bridge</strong><br />
              36, Dongtanjungsimsangga 1-gil, Hwaseong-si,<br />
              Gyeonggi-do, Republic of Korea
            </address>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          Last updated: May 13, 2026
        </div>
      </div>
    </div>
  );
}
