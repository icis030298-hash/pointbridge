"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Methodology } from "@/components/methodology";
import { Footer } from "@/components/footer";

export type Language = "en" | "ko";

export const TRANSLATIONS = {
  en: {
    nav: {
      services: "Services",
      methodology: "Methodology",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Data-Driven Insights for Strategic Growth",
      description: "We transform complex data into actionable strategies, empowering enterprises to make confident decisions and achieve sustainable growth.",
      ctaPrimary: "Schedule Consultation",
      ctaSecondary: "View Case Studies",
    },
    services: {
      badge: "Our Services",
      title: "Comprehensive Solutions for Modern Enterprises",
      description: "We offer end-to-end services that bridge the gap between data complexity and strategic clarity.",
      item1: {
        title: "Advanced Data Analytics",
        description: "Transform raw data into actionable intelligence with our cutting-edge analytics solutions.",
        features: ["Predictive modeling & machine learning", "Real-time dashboard development", "Custom KPI tracking systems", "Data visualization & reporting"],
      },
      item2: {
        title: "Strategic Consulting",
        description: "Navigate complex business challenges with expert guidance and proven methodologies.",
        features: ["Market analysis & competitive intelligence", "Growth strategy development", "Operational efficiency optimization", "Digital transformation roadmaps"],
      },
    },
    footer: {
      description: "Transforming businesses through data-driven insights and strategic consulting. We help enterprises navigate complexity and achieve sustainable growth.",
      aboutUs: "Point Bridge is a knowledge service export company specialized for global partners.",
      address: "36, Dongtanjungsimsangga 1-gil, Hwaseong-si, \nGyeonggi-do, Republic of Korea",
      brn: "BRN: 564-12-03412",
    }
  },
  ko: {
    nav: {
      services: "서비스",
      methodology: "방법론",
      contact: "문의하기",
      getStarted: "시작하기",
    },
    hero: {
      title: "글로벌 시장 데이터 분석 및 전략 수립 전문 파트너",
      description: "복잡한 데이터를 실행 가능한 전략으로 변환하여, 기업이 확신 있는 결정을 내리고 지속 가능한 성장을 달성할 수 있도록 지원합니다.",
      ctaPrimary: "컨설팅 예약",
      ctaSecondary: "케이스 스터디",
    },
    services: {
      badge: "주요 서비스",
      title: "지식 서비스 수출 전문 솔루션",
      description: "데이터의 복잡성과 전략적 명확성 사이의 가교 역할을 하는 엔드투엔드 서비스를 제공합니다.",
      item1: {
        title: "데이터 분석 솔루션",
        description: "해외 기업이 필요로 하는 원천 데이터를 수집하고 분석하여 정제된 정보를 제공합니다.",
        features: ["예측 모델링 및 머신러닝", "실시간 대시보드 개발", "맞춤형 KPI 추적 시스템", "데이터 시각화 및 리포팅"],
      },
      item2: {
        title: "전략 컨설팅",
        description: "분석된 데이터를 기반으로 파트너사의 리스크 관리 및 글로벌 사업 확장 전략을 수립합니다.",
        features: ["시장 분석 및 경쟁사 정보", "성장 전략 수립", "운영 효율성 최적화", "디지털 전환 로드맵"],
      },
    },
    footer: {
      description: "데이터 기반의 통찰력과 전략적 컨설팅을 통해 비즈니스를 혁신합니다. 우리는 복잡한 비즈니스 환경을 탐색하고 지속 가능한 성장을 달성하도록 돕습니다.",
      aboutUs: "포인트 브릿지는 글로벌 파트너사를 위한 지식 서비스 수출 전문 기업입니다.",
      address: "경기도 화성시 동탄중심상가1길 36",
      brn: "사업자등록번호: 564-12-03412",
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  const t = TRANSLATIONS[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero t={t.hero} />
        <Services t={t.services} />
        <Methodology lang={lang} />
        <Footer t={t.footer} />
      </main>
    </>
  );
}
