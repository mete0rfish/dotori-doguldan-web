import { useState } from 'react'
import './BusinessInquiry.css'

function BusinessInquiry({ language }) {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 폼 제출 로직은 나중에 구현
    console.log('Form submitted:', formData)
  }

  const labels = {
    en: {
      title: 'Business Inquiry',
      email: 'Email Address',
      subject: 'Title',
      content: 'Contents',
      submit: 'Submit'
    },
    ko: {
      title: '비즈니스 문의',
      email: '메일',
      subject: '제목',
      content: '내용',
      submit: '전송'
    }
  }

  const text = labels[language]

  return (
    <section id="business-inquiry" className="business-inquiry">
      <h2 className="section-title">{text.title}</h2>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">{text.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">{text.subject}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">{text.content}</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>
        <button type="submit" className="submit-button">{text.submit}</button>
      </form>
    </section>
  )
}

export default BusinessInquiry

