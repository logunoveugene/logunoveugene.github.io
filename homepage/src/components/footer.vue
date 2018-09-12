<template>
	<div class="footer">
		<div class="footer__container container">
			<div class="footer__row row">
				<div class="footer__col col-12 col-lg-2">
					<div class="footer__col-head  ">Компания DNS</div>
					<ul class="footer__menu-list list-unstyled small d-none d-lg-block">
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Корпоративные продажи</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Обратная связь</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Вакансии</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Новости</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Контакты для СМИ</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Персональные данные</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Партнерам</a>
						</li>
					</ul>
				</div>
				<div class="footer__col col-12 col-lg-2">
					<div class="footer__col-head  ">Покупателям</div>
					<ul class="footer__menu-list list-unstyled small d-none d-lg-block">
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Бонусная программа</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Подарочные карты</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Проверка оплаты счёта</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Кредиты</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Услуги</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Доставка</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Сервисные центры</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Статус оборудования СЦ</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Клуб экспертов DNS</a>
						</li>
					</ul>
				</div>
				<div class="footer__col col-12 col-lg-2">
					<div class="footer__col-head  ">Помощь</div>
					<ul class="footer__menu-list list-unstyled small d-none d-lg-block">
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Как оформить заказ</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Обмен и возврат товара</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Гарантийное обслуживание</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Информация для юр. лиц</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">Статусы заказов</a>
						</li>
						<li class="footer__menu-item">
							<a href="#" class="link link--color-grey">База знаний</a>
						</li>
					</ul>
				</div>
				<div class="footer__col col-12 col-lg-2 " >
					<div class="footer__col-head ">Способы оплаты</div>

				</div>
				<div class="footer__col col-12 col-lg-2 d-none d-lg-block">
					<div class="footer__col-head ">Мы в соцсетях</div>
				</div>
				<div class="footer__col col-12 col-lg-2 d-none d-lg-block">
					<div class="footer__col-head ">Всегда по рукой</div>

				</div>
			</div>
			<div class="d-flex py-3">
				<img src="https://as.dns-shop.ru/assets/80328d4a/images/theme/footer-mobile-app-icons/google-play.png" alt="" class="mr-3">
			<img src="https://as.dns-shop.ru/assets/80328d4a/images/theme/footer-mobile-app-icons/app-store.png" alt="" class="">
			</div>
			
		</div>
	</div>
</template>


<style>

.footer{
	background: #DFE4E8;
	padding-top: 0;
	margin-top: 2rem;

}

	.footer__col-head {
	margin-bottom: 0;
	font-size: 14px;
	font-weight: 700;
	width: 100%;
	padding: .75rem 0;
	border-bottom:  1px solid #c7c7c7;
	font-weight: 500;
	position: relative;
}

.footer__col-head:after{
	content: "\73";
	font-family: "homepage-dns" !important;
	position: absolute;
	right: 0;
}
@media (min-width: 992px){
	.footer{
	
			padding-top: 2rem;
	}
	.footer__col-head:after{
			content: "";
	}
	.footer__col-head {
	margin-bottom: 1rem;
	font-size: 18px;
	font-weight: 700;
	padding: 0;
	border-bottom: none;

}

}

.footer__menu-item{
	margin-bottom: .5rem;
}

</style>