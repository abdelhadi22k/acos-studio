// HomeSection.jsx
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const HomeSection = () => {
  // إعدادات الـ typewriter
  const words = ["Welcome to", "acos", "studio"];
  const loop = true;
  const typeSpeed = 50;
  const deleteSpeed = 100;
  const delay = 5000;
  const cursor = true;
  const cursorChar = "|";
  const gradientWords = ["acos"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text !== currentWord) {
        timer = setTimeout(
          () => setText(currentWord.substring(0, text.length + 1)),
          typeSpeed
        );
      } else {
        // انتظر قبل البدء بالحذف
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (text !== "") {
        timer = setTimeout(
          () => setText(currentWord.substring(0, text.length - 1)),
          deleteSpeed
        );
      } else {
        // انتهى الحذف -> الانتقال للكلمة التالية
        setIsDeleting(false);
        setWordIndex((prev) => {
          const next = prev + 1;
          if (next >= words.length) return loop ? 0 : prev; // لو no loop نثبت على الأخيرة
          return next;
        });
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]); // لا تضف الـ setters هنا

  const needsGradient = gradientWords.includes(words[wordIndex]);

  return (
    <section className="homePage" id="home">
      <Container>
        <div className="mainTextContainer">
          <div className="imgText">
            <p className="paragraphB1">
             Who are we? , a creative team specializing <br />
             in SEO, Web Design, UI/UX, and Business Automation.
            </p>
            <img alt="" src="sources/website img/home page img 1.png" />
          </div>

          <div className="mainText">
            <h1 className="heroTitle">
              <h1 className="typewriter-wrapper" aria-live="polite">
                {needsGradient ? (
                  <span className="gradient-text">{text}</span>
                ) : (
                  <span>{text}</span>
                )}
                {cursor && <span className="tw-cursor">{cursorChar}</span>}
              </h1>
            </h1>
          </div>

          <div className="imgText">
            <img alt="" src="sources/website img/home page img 2.png" />
            <p className="paragraphB1">
               We're here to make your digital growth <br />
               happen through strategy, creativity, and technology.
            </p>
          </div>
        </div>
        <div className='ButtonHolder'>

        <a  href="#contact" className='mainButton1'>Start your project now</a>

        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
