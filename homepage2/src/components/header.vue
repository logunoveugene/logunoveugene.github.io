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
							<ul class="nav nav--horizontal">
								<li class="nav__link nav__link--horizontal">
									<a class="link link--color-grey link--dropdown" href="#">Магазины</a>
								</li>
								<li class="nav__link nav__link--horizontal">
									<a class="link link--color-grey link--dropdown" href="#">Покупателям</a>
								</li>
								<li class="nav__link nav__link--horizontal">
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

		<fixed-header class="main-layout"  :threshold="60" :fixed.sync="isFixed">
			<div class="header__bottom-line">
				<div class="header__container container">
					<div class="header__row ">
						<div class="flex-shrink-1 d-lg-none">
							<div class="header__mobile-menu">
								<div class="icon-menu"></div>
								
							</div>
						</div>
						<div class="header__block col-auto col-lg-3 p-0 flex-shrink-1">
							<div class="header__logo ">
								<img src="https://i.snag.gy/iSpaHI.jpg" class="header__logo-main"  alt="">
								<img src="https://i.snag.gy/ktOpuU.jpg" class="header__logo-desc ml-2 d-none d-lg-block " alt="">
							</div>
						</div>
						<div class="header__block  flex-grow-1">
							<div class="header__search-form">
								<input type="search" class="header__search-form-field" placeholder="Поиск по каталогу">
								<button class="header__search-form-submit"><span class="icon-search"></span></button>

							</div>
						</div>
						<div class="header__block  flex-shrink-1">
							
							
							<div class="header__store-control d-none d-lg-flex">
								<div class="header__store-control__icon">
									<div class="icon-compare"></div>
								</div>
								<div class="header__store-control__desc">Сравнение</div>
							</div>
							<div class="header__store-control d-none d-lg-flex">
								<div class="header__store-control__icon">
									<div class="icon-heart"></div>
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
		</fixed-header>
		
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
/*.header__logo{
	width: 280px;
}*/

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

@media (max-width: 992px){
	.header__bottom-line{
		height: 55px;
	}
	.header{
		margin-bottom: 1rem;
	}
	.header__logo {
margin: 0 10px;

}
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

}


.header__store-control {
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-left:  .75rem;
}
.header__store-control__icon {
	margin-right: .75rem; 
	color: #aaa;
	padding: 7px 0 0 8px;
	font-size: 19px;
	height: 32px;
}

.header__search-form{
	width: 100%;
	display: flex;
	margin: 0 5px;
}


.header__search-form-field:focus, .header__search-form-field:focus ~ .header__search-form-submit   {
	
}

.header__search-form-field{
	border-radius: 8px 0 0 8px  ;
	border: 1px solid rgb(210, 210, 210);
	border-right:  0;
	background-color: rgb(255, 255, 255);
	width: 100%;
	height: 40px;
	padding:8px 0 8px  15px;

}

.header__search-form-submit{
	border-radius:  0 8px 8px 0 ;
	border: 1px solid rgb(210, 210, 210);
	border-left: 0;
	background-color: rgb(255, 255, 255);
	width: 40px;
	height: 40px;
	cursor: pointer;
	color: #ababab;
	padding-top: 10px;

}

@media (max-width: 992px){
	.header__logo-main{
		width: 60px;
		padding-top: 2px;
	}

	.header__search-form-field{
		background: rgba(0,0,0,.05);
		height: 36px;
		padding: 7px 0 6px 10px;
		font-size: 14px;
		border: none;

	}

	.header__search-form-submit{
		width: 40px;
		height:36px;
		background: rgba(0,0,0,.05);
		padding-top: 8px;
		border: none;

	}



}

</style>