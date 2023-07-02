import style from './index.module.scss'

const Footer = () => {
return (
    <div className={style.footer}>
      <hr className={style.break}/>
      <span className={style.name}>
        Made by{" "}
        <a href="#" target="__blank">
          Gagan Gupta
        </a>
      </span>
      <div className={style['icon-container']}>
        <a href="https://www.linkedin.com/in/gagan-gupta-348381121" target="__blank">
          Linkedin
        </a>
      </div>
    </div>
)
}
export default Footer