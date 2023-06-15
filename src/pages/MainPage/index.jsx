import { useEffect, useRef, useState } from "react";
import "./style.scss";

import { Dots } from "../../components";
import BackgroundImg from "../../assets/background.jpg";
import { BiDownArrow } from "react-icons/bi";

const MainPage = () => {
  const [scrollIdx, setScrollIdx] = useState(1);
  const mainWrapperRef = useRef();

  useEffect(() => {
    const wheelHandler = (e) => {
      console.log("wheel");
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = mainWrapperRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(3);
        } else {
          // 현재 3페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          mainWrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          mainWrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(1);
        } else {
          // 현재 3페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(2);
        }
      }
    };

    const wrapperRefCurrent = mainWrapperRef.current;
    wrapperRefCurrent.addEventListener("wheel", wheelHandler);

    // return () => {
    //   wrapperRefCurrent.removeEventHandler("wheel", wheelHandler);
    // };
  }, []);

  return (
    <div className="main-wrapper" ref={mainWrapperRef}>
      <Dots scrollIdx={scrollIdx} />
      <div className="main-item">
        <img src={BackgroundImg} alt="" className="backgroundimg" />
        <div className="black-effect"></div>
        <div className="title-wrapper">
          <h1 className="main-title"></h1>
          <h1 className="main-title">
            <b>한윤석</b> 입니다.
          </h1>
        </div>
        <BiDownArrow className="arrow" />
      </div>

      <div className="main-item">hi2</div>

      <div className="main-item">hi3</div>
    </div>
  );
};

export default MainPage;
