import Head from 'next/head'
import { SiteLayout } from '@/layouts/SiteLayout'
import { FeatureGrid } from '@/components/FeatureGrid'
import { Destinations } from '@/components/Destinations'
import { Calculator } from '@/components/Calculator'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import HalalTourLanding from '@/components/Hero'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>Wanderly — Smart travel planning</title>
        <meta name="description" content="Plan your next trip with transparent budgeting, curated itineraries, and real human experts." />
        <meta property="og:title" content="Wanderly — Smart travel planning" />
        <meta property="og:description" content="Plan your next trip with transparent budgeting, curated itineraries, and real human experts." />
        <meta property="og:type" content="website" />
      </Head>
      <HalalTourLanding />
      {/* <FeatureGrid />
      <Destinations />
      <Calculator />
      <Testimonials />
      <CTA />
      <Contact /> */}
    </SiteLayout>
  )
}
