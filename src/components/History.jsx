import './History.css'

function History({ language }) {
  const historyItems = [
    {
      year: '2024',
      items: ['2024 PlayX4 부스 전시참여'],
      position: 'right'
    },
    {
      year: '2025',
      items: [
        "2025 만들래 콘테스트 '방치편' 7위 - '방관자'",
        "2025 만들래 콘테스트 '방치편' 10위 - '눈사랑'",
        "2025 GameAIfy 공모전 [우수상] 수상 - 'Horrops'",
        "2025 게임인재단 공모전 [대상] 수상 - '쌍륙'",
        "2025 순천 AI 게임잼 [특별상] 수상 - '천만해요, 순천만'"
      ],
      position: 'left'
    },
    {
      year: '11.06',
      items: ['<Hamstory Demo> 스팀 출시'],
      position: 'right'
    }
  ]

  return (
    <section id="history" className="history">
      <h2 className="section-title">History</h2>
      <div className="timeline">
        <div className="timeline-vertical-line"></div>
        {historyItems.map((yearData, yearIndex) => (
          <div key={yearIndex} className={`timeline-year ${yearData.position}`}>
            <div className="year-content">
              <div className="year-horizontal-line"></div>
              <h3 className="year-title">{yearData.year}</h3>
              <ul className="year-items">
                {yearData.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="year-item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="year-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default History

