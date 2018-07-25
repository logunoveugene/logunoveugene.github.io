<template>
	<div class="header">
		<div class="header__top-line d-none d-lg-block">
			<div class="header__container container">
				<div class="header__top-grid row">
					<div class="header__top-block col-8 col-lg-8">
						<div class="header__project-nav">
							<ul class="nav small">
								<li class="nav__link">
									<a class="link link--color-grey" href="#">DNS</a>
								</li>
								<li class="nav__link">
									<a class="link link--color-grey" href="#">DNS Технопоинт</a>
								</li>
								<li class="nav__link">
									<a class="link link--color-grey" href="#">DNS Сервис</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="header__top-block col-2 col-lg-4">
						<div class="small" v-on:click="$emit('liveonp')" v-if="live == ''"><a href="#" class="link link--color-grey">Прямой эфир</a></div>
						<div class="header__user-nav">
							<ul class="nav small">
								<li class="nav__link">
									<a class="link link--color-grey" href="#">Вход</a>
								</li>
								<li class="nav__link">
									<a class="link link--color-grey" href="#">Регистрация</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header__bottom-line">
			<div class="header__container container">
				<div class="header__bottom-grid row">
					<div class="header__bottom-block col-2 d-lg-none">
						<div class="header__mobile-menu">
							<img src="https://i.snag.gy/23I0JN.jpg" alt="">
						</div>
					</div>
					<div class="header__bottom-block col-8 col-lg-8">
						<img class="heaader__logo" src="https://i.snag.gy/p4txCj.jpg" alt="" > 
						<div class="header__main-nav d-none d-lg-flex">
							<a href="#" class="link link--color-grey">Дайджест</a> 
							<a href="#" class="link link--color-grey">Обзоры</a> 
							<a href="#" class="link link--color-grey">Лайфхаки</a>
							<a href="#" class="link link--color-grey ">Обсуждения</a>
						</div>
					</div>
					<div class="header__bottom-block col-2 col-lg-4">
						<div class="header__create-controls d-none d-lg-flex">
							<div class="header__create-controls-item">
								<div class="header__create-controls-icon">
									<div class="icon-pen"></div>
								</div>
								<a href="#" class="link link--color-grey">Написать</a>
							</div>
							<div class="header__create-controls-item">
								<div class="header__create-controls-icon">
									<div class="icon-ask"></div>
								</div>
								<a href="#" class="link link--color-grey">Спросить</a>
							</div>
						</div>
						<div class="header__search">
							<img src="https://i.snag.gy/7rBCoa.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>


		<fixed-header class="main-layout" :class="live" :threshold="60" :fixed.sync="isFixed">
			<div class="fixed-plate" :class="{ 'is-fixed': isFixed }">
				<div class="header__fixed-bottom-line">
					<div class="header__container container">
						<div class="header__bottom-grid row">
							<div class="header__bottom-block col-2 d-lg-none">
								<div class="header__mobile-menu">
									<img src="https://i.snag.gy/23I0JN.jpg" alt="">
								</div>
							</div>
							<div class="header__bottom-block col-8 col-lg-8">
								<img class="heaader__logo" src="https://i.snag.gy/p4txCj.jpg" alt="" > 
								<div class="header__main-nav d-none d-lg-flex">
									<a href="#" class="link link--color-grey">Дайджест</a> 
									<a href="#" class="link link--color-grey">Обзоры</a> 
									<a href="#" class="link link--color-grey">Лайфхаки</a>
									<a href="#" class="link link--color-grey ">Обсуждения</a>
								</div>
							</div>
							<div class="header__bottom-block col-2 col-lg-4">
								<div class="header__create-controls d-none d-lg-flex">
									<div class="header__create-controls-item">
										<div class="header__create-controls-icon">
											<div class="icon-pen"></div>
										</div>
										<a href="#" class="link link--color-grey">Написать</a>
									</div>
									<div class="header__create-controls-item">
										<div class="header__create-controls-icon">
											<div class="icon-ask"></div>
										</div>
										<a href="#" class="link link--color-grey">Спросить</a>
									</div>
								</div>
								<div class="header__search">
									<img src="https://i.snag.gy/7rBCoa.jpg" alt="">
								</div>
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
		props: { 
			live: {
				type: null,
				default: "showlive"
			}
		},
		data: function() {
			return {
				isFixed: false
			}
		}
	}
</script>

<style>


.fixed-plate{
	position: fixed;

display: none;
}
.fixed-plate.is-fixed{
	position: fixed;
	top:0;

	z-index: 100;
	width: 100%;
	background-color: #fff;
	display: block;
}
.header__fixed-bottom-line{
	padding: 1rem 0;
	box-shadow: 0 0 15px rgba(0,0,0,.1);
}

.header__top-line {
	width: auto;
	background-color: #f6f6f6;
	padding: .5rem 0;

}
.header__top-grid{
	-ms-flex-pack: distribute;
	justify-content: space-between;
	-ms-flex-direction: row;
	flex-direction: row;
	display: -ms-flexbox;
	display: flex;
}
.header__top-block{
	justify-content: space-between;
	flex-direction: row;
	display: flex;
}

.header__bottom-line{
	padding: 1rem 0;
}

@media (min-width: 992px) {
	.header__bottom-line{
		padding: 3rem 0 2rem;
	}
}




.heaader__logo {
	height: 20px;
	width: auto;

}

.header__user-nav{
	text-align: right;
	justify-content: flex-end;
	flex-grow: 1;
	display: flex;
}


.header__main-nav{
	width: 100%;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: distribute;
	justify-content: space-around;
	-ms-flex-direction: row;
	flex-direction: row;
	display: -ms-flexbox;
	display: flex;
	font-size: 13px;
	font-weight: 700;
	text-transform: uppercase;
	margin:0 3rem;
}

.header__bottom-grid {
	display: flex;
	align-items: center;
}


.header__bottom-block{
	display: flex;
	justify-content: center;
}
.header__create-controls{
	display: -ms-flexbox;
	display: flex;
}
.header__create-controls-item {
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-direction: row;
	flex-direction: row;
	display: -ms-flexbox;
	display: flex;
	font-size: .875rem;
	font-weight: 700;
	margin-right: 3rem;

}
.header__create-controls-icon{
	margin-right: .5rem
}


.header__search {
	text-align: right;
	width: 100%;
}

.header__mobile-menu{
	justify-content: start;
	width: 100%;
}
</style>