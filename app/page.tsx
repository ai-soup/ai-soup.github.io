export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Swiss Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold tracking-tighter text-black uppercase">
                SOUP
              </span>
            </div>
            <div className="hidden md:flex space-x-12 text-sm uppercase tracking-wider">
              <a href="#home" className="text-black hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-black hover:text-red-600 transition-colors font-medium">About</a>
              <a href="#features" className="text-black hover:text-red-600 transition-colors font-medium">Service</a>
              <a href="#contact" className="text-black hover:text-red-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Swiss Style */}
      <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
                SMART
                <span className="block">TRAVEL</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-md">
              <span className="font-bold">여행길</span>은 AI 기술로 개인 취향을 분석하여
              지역축제부터 숨은 여행지까지 완벽하게 매칭된 여행 경험을 제공하는
              차세대 스마트 여행 플랫폼입니다.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-black text-white uppercase text-sm tracking-wider font-medium hover:bg-red-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="#features"
                className="px-8 py-3 border-2 border-black text-black uppercase text-sm tracking-wider font-medium hover:bg-black hover:text-white transition-colors"
              >
                Service
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-black"></div>
              </div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Swiss Style */}
      <section id="about" className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ABOUT<span className="block">SOUP</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              데이터 사이언스와 AI 기술로 여행 산업의 패러다임을 혁신합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            <div className="bg-white p-12 border-l-4 border-black">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">AI Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                머신러닝 알고리즘과 빅데이터 분석으로 99.2%의 사용자 만족도를 달성한
                초개인화 여행 추천 엔진을 구축했습니다.
              </p>
            </div>

            <div className="bg-white p-12 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Data-Driven</h3>
              <p className="text-gray-700 leading-relaxed">
                실시간 사용자 피드백과 여행 데이터를 분석하여 지속적으로
                추천 정확도를 향상시키고 최적의 여행 경험을 설계합니다.
              </p>
            </div>

            <div className="bg-white p-12 border-l-4 border-black">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Community Power</h3>
              <p className="text-gray-700 leading-relaxed">
                실제 여행자들이 남긴 10만+ 리뷰와 후기를 통해
                신뢰할 수 있는 여행 정보 생태계를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Swiss Style */}
      <section id="features" className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              SERVICE
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              <strong>여행길</strong>이 제공하는 차별화된 스마트 여행 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">01</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Festival & Event</h3>
              <p className="leading-relaxed mb-6">
                전국 1,500개 이상의 지역축제와 이벤트 정보를 실시간으로 제공하며,
                AI가 분석한 개인 관심사 기반 맞춤형 축제를 추천합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 실시간 축제 일정 및 위치 정보</li>
                <li>→ AI 기반 선호도 분석 추천</li>
                <li>→ 지역 특산품 & 체험 프로그램 안내</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">02</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">AI Travel Curation</h3>
              <p className="leading-relaxed mb-6">
                머신러닝이 분석한 여행 패턴과 취향으로 숨은 명소부터 핫플레이스까지
                평균 95% 이상의 만족도를 보이는 초개인화 여행지를 큐레이션합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 행동 패턴 분석 기반 추천</li>
                <li>→ 실시간 인기도 & 혼잡도 분석</li>
                <li>→ 날씨·계절별 최적 장소 제안</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">03</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Verified Review</h3>
              <p className="leading-relaxed mb-6">
                실제 방문자들의 검증된 후기와 사진으로 신뢰도 높은 여행 정보를 제공하며,
                AI가 리뷰 신뢰도를 분석하여 가짜 후기를 자동으로 필터링합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 방문 인증 기반 리뷰 시스템</li>
                <li>→ AI 신뢰도 검증 & 스팸 필터</li>
                <li>→ 실시간 사진·영상 후기 공유</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">04</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Smart Community</h3>
              <p className="leading-relaxed mb-6">
                월 50만+ 활성 사용자가 실시간으로 여행 정보를 공유하는 커뮤니티에서
                AI 추천 알고리즘이 개인에게 가장 유용한 콘텐츠를 우선적으로 제공합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ AI 맞춤형 피드 큐레이션</li>
                <li>→ 취향 기반 여행 메이트 매칭</li>
                <li>→ 실시간 여행 TIP & 현지 정보</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Swiss Style */}
      <section id="contact" className="py-32 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                CONTACT
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                AI 기반 여행 솔루션으로 함께 성장할 파트너를 찾습니다
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Email</h3>
                <a href="mailto:contact@studyproject.kr" className="text-2xl font-medium hover:text-red-600 transition-colors">
                  contact@studyproject.kr
                </a>
              </div>

              <div className="border-l-4 border-white pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Phone</h3>
                <a href="tel:+821050465043" className="text-2xl font-medium hover:text-red-600 transition-colors">
                  +82 10-5046-5043
                </a>
              </div>

              {/*<div className="border-l-4 border-white pl-6">*/}
              {/*  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Location</h3>*/}
              {/*  <p className="text-2xl font-medium">서울특별시 강남구</p>*/}
              {/*</div>*/}

              <div className="pt-8">
                <a
                  href="mailto:contact@studyproject.kr"
                  className="inline-block px-8 py-3 bg-red-600 text-white uppercase text-sm tracking-wider font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Swiss Style */}
      <footer className="bg-white border-t-4 border-black py-12 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase">SOUP</h3>
              <p className="text-gray-700">
                AI 기술로 대한민국 여행 문화를 혁신하는 스마트 여행 플랫폼 여행길
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a></li>
                <li><a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Service</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>contact@studyproject.kr</li>
                <li>+82 10-5046-5043</li>
                {/*<li>서울특별시 강남구</li>*/}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              © 2026 SOUP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
