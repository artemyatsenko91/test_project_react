import style from './style.module.scss';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className='container'>
				<div className={style.footer_wrap}>
                    Это футер тут чтото должно быть
                </div>
			</div>
		</footer>
	);
};

export default Footer;
