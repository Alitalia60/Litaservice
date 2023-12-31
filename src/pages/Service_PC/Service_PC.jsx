import './Service_PC.scss';


const Service_PC = ({ title }) => {
  return (
    <div className='page_wrapper'>
      <h2>{title}</h2>
      <ul>
        <li>Установка, настройка программ общего назначения</li>
        <li>Установка, настройка сертификатов ключей банков, ГосУОК</li>
        <li>Установка, восстановление операционных систем (Windows, Linux)</li>
        <li>Установка драйверов периферийных устройств</li>
        <li>Настройка сетей, доступа в интернет</li>
      </ul></div>
  )
}

export default Service_PC;