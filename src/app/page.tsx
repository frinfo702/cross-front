"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ヘッダー */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* ロゴ部分 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            <span className="font-bold text-xl text-gray-800">Cross</span>
          </div>
          {/* ナビ（ダミー） */}
          <nav className="space-x-4 text-sm text-gray-600">
            <Link href="#features" className="hover:text-gray-800">Features</Link>
            <Link href="#pricing" className="hover:text-gray-800">Pricing</Link>
            <Link href="#faq" className="hover:text-gray-800">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="py-16 bg-gradient-to-r from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              The Easiest Way to Manage and Embed <br className="hidden sm:block" />
              Your Job Listings
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-8">
              Crossは“Stripe for Jobs”のように求人を簡単に埋め込み、
              応募管理や分析も一括でできる次世代プラットフォームです。
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Takes only 1 minute
            </p>
          </div>
        </section>

        {/* Features セクション */}
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
              What You Can Do with Cross
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <FeatureCard
                title="Embed in Your Site"
                description="求人をiframe一発で埋め込み。ワンクリックで“Apply with Cross”フォームへ誘導可能。"
              />
              <FeatureCard
                title="Manage Jobs at Once"
                description="ダッシュボードで複数求人を管理。応募数やステータスをリアルタイムに追跡。"
              />
              <FeatureCard
                title="Visual Analytics"
                description="応募数や採用数の推移をグラフで可視化。エンジニアリングに強い印象を与えられるUI。"
              />
            </div>
          </div>
        </section>

        {/* Pricing セクション(ダミー) */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Simple and Flexible Pricing
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              ストライプのように使った分だけ支払う従量課金も、固定プランも用意。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <PricingCard
                title="Free"
                price="$0"
                features={["1 Job Posting", "Community Support", "Basic Analytics"]}
              />
              <PricingCard
                title="Pro"
                price="$19 / month"
                features={["Unlimited Postings", "Email Support", "Advanced Analytics"]}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={["All Pro Features", "Dedicated Manager", "Custom Integrations"]}
              />
            </div>
          </div>
        </section>

        {/* FAQセクション(ダミー) */}
        <section id="faq" className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <FaqItem
                question="Crossを利用するのにプログラミング知識は必要ですか？"
                answer="いいえ、iframeコードをコピペするだけでOKです。高度なカスタマイズも可能です。"
              />
              <FaqItem
                question="支払いはどのように行いますか？"
                answer="Stripeを通じて従量課金や月額プランでお支払いいただけます。"
              />
              <FaqItem
                question="応募者のデータは安全に保管されますか？"
                answer="AWS上で暗号化し、セキュアに保管されます。ご安心ください。"
              />
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500 text-center">
          © 2025 Cross Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// --- ここからはUIを少し分割したコンポーネント例 ---

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="w-full max-w-sm bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-2xl font-extrabold text-gray-900">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {features.map((feat, idx) => (
          <li key={idx}>• {feat}</li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="block mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-2 rounded-md font-semibold hover:opacity-90"
      >
        Get Started
      </Link>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div>
      <h4 className="font-medium text-gray-800 mb-1">{question}</h4>
      <p className="text-sm text-gray-600">{answer}</p>
    </div>
  );
}
