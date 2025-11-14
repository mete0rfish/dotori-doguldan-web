import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.css'
import { games } from '../data/games'

function ProjectPreview({ language }) {  
  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = useRef(null)
  const itemRef = useRef(null)
  const [currentWrapperWidth, setCurrentWrapperWidth] = useState(0)
  const [currentItemWidth, setCurrentItemWidth] = useState(0)

  // 1. CSS와 동기화해야 하는 상수 정의 (초기값은 CSS의 기본값으로 설정)
  const ITEM_GAP = 20; // 항목 간의 간격
  
  // 2. 한 번에 이동할 총 거리 (항목 너비 + 간격)
  const SLIDE_WIDTH = currentItemWidth + ITEM_GAP;

  // 3. 중앙 정렬을 위한 오프셋 계산 (래퍼 중앙 - 항목 중앙)
  const CENTER_OFFSET = (currentWrapperWidth / 2) - (currentItemWidth / 2);

  // 4. 최종 이동 거리 계산
  const totalMovement = -(currentIndex * SLIDE_WIDTH) + CENTER_OFFSET; 

  // 5. transform 문자열 생성
  const translateXValue = `translate3d(${totalMovement}px, 0, 0)`;

  // 너비 측정 및 리사이즈 이벤트 핸들러
  useEffect(() => {
    const measureWidths = () => {
      if (wrapperRef.current && itemRef.current) {
        setCurrentWrapperWidth(wrapperRef.current.offsetWidth);
        setCurrentItemWidth(itemRef.current.offsetWidth);
      }
    };

    measureWidths(); // 컴포넌트 마운트 시 초기 측정
    window.addEventListener('resize', measureWidths); // 리사이즈 이벤트 리스너 추가

    return () => {
      window.removeEventListener('resize', measureWidths); // 언마운트 시 리스너 제거
    };
  }, []); // 빈 배열: 마운트 시 한 번만 실행

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="project-preview" className="project-preview">
      <h2 className="section-title">Project-preview</h2>
      <div className="carousel-container">
        <button className="carousel-nav carousel-prev" onClick={handlePrev}>
          ◀
        </button>
        <div className="carousel-wrapper" ref={wrapperRef}>
          <div
            className="carousel-track"
            style={{
              transform: translateXValue,
              width: `${games.length * SLIDE_WIDTH}px`
            }}
          >
            {games.map((game, index) => {
              const isActive = index === currentIndex;

              return (
                <Link to={`/game/${game.id}`} key={game.id} className="carousel-item-link">
                  <div
                    ref={index === 0 ? itemRef : null} // 첫 번째 항목에만 ref를 할당하여 너비 측정
                    className={`carousel-item ${isActive ? 'active' : ''}`}
                    style={{ marginRight: `${ITEM_GAP}px` }}
                  >
                    <div className="game-preview-image">
                      <img src={game.image} alt={game.title} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <button className="carousel-nav carousel-next" onClick={handleNext}>
          ▶
        </button>
      </div>
    </section>
  )
}

export default ProjectPreview
