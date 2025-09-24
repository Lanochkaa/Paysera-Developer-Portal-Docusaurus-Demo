import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.logoSection}>
            <div className={styles.payseraLogo}>
              <img src="img/paysera-logo.svg" alt="Paysera" className={styles.logoIcon} />
              <span className={styles.logoText}>Paysera</span>
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              API Documentation
            </Heading>
            <p className={styles.heroSubtitle}>
              Complete guide to integrating with Paysera's payment processing APIs. 
              Build powerful payment solutions with our developer-friendly platform.
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/intro">
            Get Started →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/features">
            View Features
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <div className={styles.featureIcon}>🚀</div>
              <Heading as="h3">Quick Integration</Heading>
              <p>
                Get up and running in minutes with our comprehensive SDKs for PHP, JavaScript, Python, and more.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <div className={styles.featureIcon}>🛡️</div>
              <Heading as="h3">Enterprise Security</Heading>
              <p>
                PCI DSS Level 1 certified with advanced fraud detection and 3D Secure 2.0 support.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <div className={styles.featureIcon}>🌍</div>
              <Heading as="h3">Global Reach</Heading>
              <p>
                Accept payments in 25+ countries with 30+ currencies and multiple payment methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Start Building with Paysera API</Heading>
          <p>Choose your integration path</p>
        </div>
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className={styles.quickStartCard}>
              <Heading as="h3">📖 New to Paysera?</Heading>
              <p>Complete setup guide with step-by-step instructions</p>
              <Link
                className="button button--primary"
                to="/getting-started">
                Getting Started Guide
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className={styles.quickStartCard}>
              <Heading as="h3">⚡ Ready to Code?</Heading>
              <p>Jump into API features and code examples</p>
              <Link
                className="button button--secondary"
                to="/features">
                Explore API Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Paysera API Documentation"
      description="Complete guide to integrating with Paysera's payment processing APIs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
      </main>
    </Layout>
  );
}
