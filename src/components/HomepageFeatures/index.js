import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer-Friendly APIs',
    icon: '🚀',
    description: (
      <>
        RESTful APIs with comprehensive documentation, SDKs for popular languages, 
        and sandbox environment for testing your integrations safely.
      </>
    ),
  },
  {
    title: 'Secure & Compliant',
    icon: '🛡️',
    description: (
      <>
        PCI DSS Level 1 certified, GDPR compliant, and PSD2 licensed. 
        Advanced fraud detection with 3D Secure 2.0 authentication.
      </>
    ),
  },
  {
    title: 'Global Payment Coverage',
    icon: '🌍',
    description: (
      <>
        Accept payments in 25+ countries with 30+ currencies. Support for cards, 
        bank transfers, digital wallets, and alternative payment methods.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
