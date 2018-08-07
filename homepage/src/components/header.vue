<template>
	<div class="header">
		<div class="header__top-line">
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
				<div class="header__row row">
					<div class="header__block col-3">
						<div class="header__logo ">
							<img src="https://i.snag.gy/iSpaHI.jpg" class="mr-2" alt="">
							<img src="https://i.snag.gy/ktOpuU.jpg" alt="">
						</div>
					</div>
					<div class="header__block col-4 col-lg-5">
						<div class="header__search-form">
							<input type="text" class="header__search-form-field" placeholder="Поиск среди более 100 000 товаров">
							<button class="header__search-form-submit">Найти</button>

						</div>
					</div>
					<div class="header__block col-5 col-lg-4">
						<div class="header__store-control">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc">Сравнение</div>
						</div>
						<div class="header__store-control">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc">Избранное</div>
						</div>
						<div class="header__store-control">
							<div class="header__store-control__icon">
								<div class="icon-cart"></div>
							</div>
							<div class="header__store-control__desc">Корзина</div>
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
.header{
	box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.14);
	background-color: rgb(256, 256, 256);
	margin-bottom: 1.5rem;
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

.header__logo {
	display: flex;
	align-items: center;
}

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