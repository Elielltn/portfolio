import './Service.css'

const Service = ({ src, text }: any) => {
  return (
    <div className='service'>
      <div className='service-content-wrap'>
        <img src={src} alt="" />
        <p className='service-content-para'>{text}</p>
      </div>
    </div>
  )
}

export default Service