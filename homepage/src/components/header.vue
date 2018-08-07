<template>
	<div class="header">
		<div class="header__top-line d-none d-lg-flex">
			<div class="header__container container">
				<div class="header__row row">
					<div class="header__block col-3">
						<div class="header__city ">
							<div class="header__city-link">
								<a class="link link--color-grey" href="#">Владивосток</a>
							</div>
						</div>
					</div>
					<div class="header__block col-9">
						<div class="header__nav ">
							<ul class="nav">
								<li class="nav__link">
									<a class="link link--color-grey link--dropdown" href="#">Магазины</a>
								</li>
								<li class="nav__link">
									<a class="link link--color-grey link--dropdown" href="#">Покупателям</a>
								</li>
								<li class="nav__link">
									<a class="link link--color-grey link--dropdown" href="#">Наши проекты</a>
								</li>
							</ul>
						</div>
						<div class="header__phone">
							<div class="header__phone-number">8-800-77-07-999</div>
							<div class="header__phone-time">(c 03:00 до 22:00)</div>
						</div>
						<div class="header__user-auth">
							<div class="header__sign-in-link">
								<a class="link link--color-grey" href="#">Вход</a>
							</div>
							<div class="header__sign-up-link">
								<a class="link link--color-grey" href="#">Регистрация</a>
							</div>  
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header__bottom-line">
			<div class="header__container container">
				<div class="header__row ">
					<div class="flex-shrink-1 d-lg-none">
						<div class="header__mobile-menu">
							<div class="icon-menu"></div>
							
						</div>
					</div>
					<div class="header__block flex-shrink-1">
						<div class="header__logo ">
							<img src="https://i.snag.gy/iSpaHI.jpg" class="header__logo-main"  alt="">
							<img src="https://i.snag.gy/ktOpuU.jpg" class="header__logo-desc ml-2 d-none d-lg-block " alt="">
						</div>
					</div>
					<div class="header__block  flex-grow-1">
						<div class="header__search-form">
							<input type="search" class="header__search-form-field" placeholder="Поиск среди более 100 000 товаров">
							<button class="header__search-form-submit">0</button>

						</div>
					</div>
					<div class="header__block  flex-shrink-1">
						<div class="header__store-control d-none d-lg-flex">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc">Сравнение</div>
						</div>
						<div class="header__store-control d-none d-lg-flex">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc">Избранное</div>
						</div>
						<div class="header__store-control ">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc d-none d-lg-flex">Корзина</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	import FixedHeader from 'vue-fixed-header'

	export default {
		components: {
			FixedHeader
		},

		data: function() {
			return {
				isFixed: false
			}
		}
	}
</script>

<style>
@media (max-width: 992px){
	.col-shrink{
		flex: 0 0 auto;
		max-width: 100%;
		display: flex;
		width: auto;
		padding-right: 10px;
		padding-left: 10px;
	}
}

.header{
	box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.14);
	background-color: rgb(256, 256, 256);
	margin-bottom: 1.5rem;
}

.header__row{
	flex-wrap: nowrap;
	display: flex;
}
.header__top-line{
	height: 35px;
	background-color: rgb(246, 246, 246);
	font-size: 0.875rem;
	display: flex;
	align-items: center;

}

.header__bottom-line {
	height: 65px;
	display: flex;
	align-items: center;
}

.header__block{
	display: flex;
	justify-content: space-between;
}
.header__phone{
	display: flex;
}
.header__phone-number{
	margin-right: .5rem;
}

.header__user-auth{
	display: flex;
}
.header__sign-in-link{
	margin-right: .5rem;
}

.header__mobile-menu{
	display: flex;
	align-items: center;
	height: 100%;
	margin: 0 8px;
	padding-top: 7px;
	color: #999;
}

.header__logo {
	display: flex;
	align-items: center;
	margin: 0 8px;
}
@media (max-width: 992px){
.header__logo-main{
	width: 60px;
}}

.header__store-control {
	display: flex;
	align-items: center;
	cursor: pointer;
}
.header__store-control__icon {
	margin-right: .5rem;
}


.header__search-form{
	width: 100%;
	display: flex;
	margin: 0 8px;
}


.header__search-form-field:focus, .header__search-form-field:focus ~ .header__search-form-submit   {
	border-color: #fca608;
}

.header__search-form-field{
	border-radius: 8px 0 0 8px  ;
	border: 1px solid rgb(210, 210, 210);
	border-right:  0;
	background-color: rgb(255, 255, 255);
	width: 100%;
	height: 40px;
	padding:8px 15px;

}

.header__search-form-submit{
	border-radius:  0 8px 8px 0 ;
	border: 1px solid rgb(210, 210, 210);
	border-left: 0;
	background-color: rgb(255, 255, 255);
	width: auto;
	height: 40px;
	padding: 7px 15px;
	cursor: pointer;

}

</style>