import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learning Science & Cognition',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我曾亲身试图用蛮力将知识塞入脑海，却总是事倍功半。我曾看到同学们在学习时间上比我少，却在考试和论文中表现得更好。我曾读过许多关于学习方法的书，却发现它们要么过于宽泛，要么与我的实际情况脱节。
      </>
    ),
  },
  {
    title: 'LLM Research & Practice',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Transformer横空出世，是谁写下了"Attention is all you need"？BERT为NLP开辟新路，GPT又如何一步步走向通用人工智能？在这里，我将与你分享我对LLM技术发展的学习笔记、深入思考和实践经验。
      </>
    ),
  },
  {
    title: 'Technical Guides',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        "It should be simple". 在爆红的迷因中，在陌生的Terminal里，在数不清的bug和永远看不懂的官方文档里，我们需要的或许只是一份简单直接、能解决问题的技术指南。
      </>
    ),
  },
  {
    title: 'Life Reflections',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        在频频受挫的大学生活中，我常常反思一个或许也在困扰大家的问题：当事情搞砸了，我们该如何面对那个不理想的结果，以及那个似乎"搞砸了"的自己？
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
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

export default function HomepageFeatures(): ReactNode {
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
