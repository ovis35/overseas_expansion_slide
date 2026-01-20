import { SlideContent } from '../../data/slides';
import SlideImage from '../SlideImage';

interface CTASlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function CTASlide({ slide }: CTASlideProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText('contact@example.com');
    alert('Email 已複製到剪貼簿！');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {slide.image && (
        <div className="absolute inset-0">
          <SlideImage
            query={slide.image.query}
            alt={slide.image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-primary-900/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-3xl animate-fade-in">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500/20 border border-primary-500/30">
            <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {slide.title}
        </h2>

        {/* Claim */}
        {slide.claim && (
          <p className="text-xl text-primary-300 mb-12">
            {slide.claim}
          </p>
        )}

        {/* CTA Options */}
        {slide.bullets && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {slide.bullets.slice(0, 3).map((bullet, index) => (
              <div
                key={index}
                className="highlight-box text-left"
              >
                <div className="relative z-10">
                  <div className="text-3xl mb-3">
                    {index === 0 ? '💬' : index === 1 ? '📍' : '🤝'}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {bullet.text.split('：')[0]}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {bullet.text.split('：')[1] || bullet.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-slate-400">聯絡方式</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600
                         text-white rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@example.com
              <svg className="w-4 h-4 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="text-slate-500">或</span>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600
                         text-white rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              預約諮詢（需補充調研）
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        {slide.legalDisclaimer && (
          <p className="mt-12 text-xs text-slate-500 italic">
            本簡報內容僅供參考，涉及法規/稅務/簽證部分不構成法律意見（No legal advice）
          </p>
        )}
      </div>

      {/* Bottom Attribution */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-slate-500">
          Image: Unsplash
        </p>
      </div>
    </div>
  );
}
