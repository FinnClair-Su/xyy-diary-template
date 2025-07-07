import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

// ASCII码动态展示组件
function ASCIIDemo() {
  const text = "Learning never stops ";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cumulativeSum, setCumulativeSum] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentCharASCII, setCurrentCharASCII] = useState(0);
  const [segmentStates, setSegmentStates] = useState([true, true, true, true]); // 控制每个数字段的显示状态

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        const charCode = text.charCodeAt(currentIndex);
        setCurrentCharASCII(charCode);
        setCumulativeSum(prev => prev + charCode);
        setCurrentIndex(prev => prev + 1);
      }, 500); // 每秒2个字符
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      
      // 在2025停留3秒后开始逐段熄灭动画
      setTimeout(() => {
        let segmentIndex = 0;
        const disappearInterval = setInterval(() => {
          setSegmentStates(prev => {
            const newStates = [...prev];
            newStates[segmentIndex] = false;
            return newStates;
          });
          segmentIndex++;
          
          if (segmentIndex >= 4) {
            clearInterval(disappearInterval);
            // 所有段都熄灭后，重新开始循环
            setTimeout(() => {
              handleRestart();
            }, 500);
          }
        }, 400);
      }, 3000);
    }
  }, [currentIndex, text.length, isComplete]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setCumulativeSum(0);
    setIsComplete(false);
    setCurrentCharASCII(0);
    setSegmentStates([true, true, true, true]);
  };

  // 将数字转换为4位字符串
  const formatNumber = (num) => {
    return num.toString().padStart(4, '0');
  };

  // 七段数码管组件
  const DigitalDisplay = ({ digit, isVisible }) => {
    const segments = {
      '0': [1, 1, 1, 1, 1, 1, 0],
      '1': [0, 1, 1, 0, 0, 0, 0],
      '2': [1, 1, 0, 1, 1, 0, 1],
      '3': [1, 1, 1, 1, 0, 0, 1],
      '4': [0, 1, 1, 0, 0, 1, 1],
      '5': [1, 0, 1, 1, 0, 1, 1],
      '6': [1, 0, 1, 1, 1, 1, 1],
      '7': [1, 1, 1, 0, 0, 0, 0],
      '8': [1, 1, 1, 1, 1, 1, 1],
      '9': [1, 1, 1, 1, 0, 1, 1]
    };
    
    const digitSegments = segments[digit] || [0, 0, 0, 0, 0, 0, 0];
    
    return (
      <div className={styles.digitalDigit}>
        <div className={`${styles.segment} ${styles.segmentA} ${digitSegments[0] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentB} ${digitSegments[1] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentC} ${digitSegments[2] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentD} ${digitSegments[3] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentE} ${digitSegments[4] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentF} ${digitSegments[5] && isVisible ? styles.segmentOn : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentG} ${digitSegments[6] && isVisible ? styles.segmentOn : ''}`}></div>
      </div>
    );
  };

  const numberString = formatNumber(cumulativeSum);

  return (
    <div className={styles.asciiDemo}>
      <div className={styles.asciiText}>
        <span className={styles.quote}>"</span>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={clsx(
              styles.asciiChar,
              index < currentIndex && styles.revealed,
              index === currentIndex - 1 && styles.current
            )}
          >
            {char}
          </span>
        ))}
        <span className={styles.quote}>"</span>
      </div>
      
      {/* 当前字符ASCII显示 */}
      <div className={styles.currentCharInfo}>
        {currentIndex === 0 ? (
          "./start.sh"
        ) : currentIndex <= text.length ? (
          `'${text[currentIndex - 1]}' → ASCII ${currentCharASCII}`
        ) : (
          "./start.sh"
        )}
      </div>
      
      {/* 数码管显示 */}
      <div className={styles.digitalContainer}>
        <div className={styles.digitalDisplay}>
          <DigitalDisplay digit={numberString[0]} isVisible={segmentStates[0]} />
          <DigitalDisplay digit={numberString[1]} isVisible={segmentStates[1]} />
          <DigitalDisplay digit={numberString[2]} isVisible={segmentStates[2]} />
          <DigitalDisplay digit={numberString[3]} isVisible={segmentStates[3]} />
        </div>
      </div>
      
      <div className={styles.asciiComplete}>
        {!isComplete ? (
          <div className={styles.interimMessage}>
            Constructing understanding...
          </div>
        ) : (
          <div className={styles.completeMessage}>
            Meta cognition, Desirable difficulty
          </div>
        )}
      </div>
    </div>
  );
}

// 模块介绍砖块组件
function ModuleBlock({ title, content, link, className = '' }) {
  return (
    <Link to={link} className={`${styles.moduleBlock} ${className}`}>
      <div className={styles.moduleContent}>
        <h3 className={styles.moduleTitle}>{title}</h3>
        <div className={styles.moduleText}>
          {content}
        </div>
      </div>
    </Link>
  );
}

// 主页组件
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Science of Learning and Cognition；The Art of LLM and Tech Tools">
      
      <main className={styles.mainContainer}>
        {/* 中央内容区域 */}
        <div className={styles.centerContent}>
          {/* 头像区域 */}
          <Link to="/about">
            <div className={styles.avatarSection}>
              <img 
                src="/img/authors/your-avatar.jpg" 
                alt="Your Name" 
                className={styles.avatar}
              />
              <div className={styles.avatarBorder}></div>
            </div>
          </Link>

          {/* Tagline */}
          <p className={styles.tagline}>{siteConfig.tagline}</p>

          {/* ASCII码动态演示区域 */}
          <div className={styles.signatureSection}>
            <ASCIIDemo />
          </div>

          {/* 模块介绍砖块区域 */}
          <div className={styles.modulesSection}>
            <ModuleBlock
              title="Learning & Growth"
              link="/learning"
              content={
                <>
                  <p>This section is dedicated to exploring how we learn, grow, and develop both personally and professionally.</p>
                  <p>Share your insights on effective learning strategies, cognitive science, and personal development.</p>
                  <p>Document your journey of continuous learning and the lessons you've discovered along the way.</p>
                </>
              }
            />
            
            <ModuleBlock
              title="Tech & Research"
              link="/blog"
              content={
                <>
                  <p>Explore the latest developments in technology, research, and innovation.</p>
                  <p>Share your thoughts on emerging technologies, research findings, and their implications.</p>
                  <p>Document your technical projects, experiments, and discoveries.</p>
                  <p><strong>Technology shapes our world - let's understand it better.</strong></p>
                </>
              }
            />
            
            <ModuleBlock
              title="Technical Guides"
              link="/docs/intro"
              content={
                <>
                  <p><em>"It should be simple"</em></p>
                  <p>Clear, practical guides for technical challenges and solutions.</p>
                  <p>Step-by-step tutorials, tips, and best practices.</p>
                  <p>Tools, methods, and solutions without unnecessary complexity.</p>
                  <p><strong>Knowledge should be shared. This is what matters most.</strong></p>
                </>
              }
            />

            <ModuleBlock
              title="Life Reflections"
              link="/life"
              className={styles.moduleBlockLast}
              content={
                <>
                  <p>Life is a journey of constant learning and self-discovery.</p>
                  <p>Here I reflect on experiences, challenges, and the lessons they bring.</p>
                  <p>Personal growth, relationships, and finding balance in our busy lives.</p>
                  <p><strong>Good life management should make life more peaceful, not more stressful</strong>. It should be a philosophy, not just a set of techniques.</p>
                  <p><strong>Here, I document life's moments, emotional insights, and continuous exploration of personal growth.</strong></p>
                </>
              }
            />
          </div>
        </div>

        {/* 底部信息 */}
        <footer className={styles.homeFooter}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              🌟 Your Personal Space - A place for thoughts, learning, and life reflections
            </p>
            <div className={styles.socialLinks}>
              <Link to="https://github.com/your-github-username">GitHub</Link>
              <span>·</span>
              <Link to="mailto:your-email@example.com">Email</Link>
              <span>·</span>
              <Link to="/friends">Friends</Link>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
