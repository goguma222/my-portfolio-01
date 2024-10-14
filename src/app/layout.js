import Head from 'next/head';
import '@/assets/scss/style.scss'; // 사용자 정의 스타일
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS 포함
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // 자동 CSS 추가 비활성화

export const metadata = {
  title: 'JangHee Portfolio',
  description: '이장희 포트폴리오 페이지입니다.',
  keywords: ['포트폴리오', 'Portfolio', '이장희포트폴리오'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 파비콘 링크 추가 */}
        {/* <link rel="icon" type="image/svg+xml" href="favicon.svg" /> */}
        {/* Font Awesome CSS 링크 추가 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-SOME-INTEGRITY-HASH"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* 구조화된 데이터 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: metadata.title,
              url: 'https://your-portfolio-url.com', // 포트폴리오 URL
              description: metadata.description,
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://your-portfolio-url.com/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
