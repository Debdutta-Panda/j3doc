import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Easy to Integrate',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        J3 is crafted for seamless integration with Jetpack Compose, 
        making it a breeze to enhance your app's navigation, 
        toast messages, keyboard interactions, status boards, 
        and activity results. No more hassles – just effortless implementation.
      </>
    ),
  },
  {
    title: '🎯 Focus on Functionality',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Let J3 handle the heavy lifting while you concentrate on perfecting your 
        app's functionality. With J3, managing navigation, toasts, keyboard events, 
        status boards, and activity results becomes a joyride – allowing you to 
        prioritize what truly matters in your project.
      </>
    ),
  },
  {
    title: '🌐 Streamlined Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        J3's documentation is designed with simplicity in mind. Swiftly 
        integrate the library into your project using our clear, concise 
        documentation, allowing you to get your app up and running in 
        no time. Focus on creating, and let J3 take care of the rest.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
