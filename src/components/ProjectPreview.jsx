import { useState } from 'react'
import './ProjectPreview.css'
import { games } from '../data/games'

function ProjectPreview({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0)

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
        <div className="carousel-wrapper">
          {games.map((game, index) => {
            const offset = index - currentIndex
            const isActive = offset === 0
            const isLeft = offset < 0
            const isRight = offset > 0

            return (
              <div
                key={game.id}
                className={`carousel-item ${isActive ? 'active' : ''} ${isLeft ? 'left' : ''} ${isRight ? 'right' : ''}`}
              >
                <div className="game-preview-image">
                  {/* 이미지는 사용자가 나중에 추가할 예정 */}
                </div>
              </div>
            )
          })}
        </div>
        <button className="carousel-nav carousel-next" onClick={handleNext}>
          ▶
        </button>
      </div>
    </section>
  )
}

export default ProjectPreview

