 <template>
 	<fixed-header :threshold="35" :fixed.sync="isFixed">

 		<div class="header">
 			<div class="header__top-line d-none d-lg-flex">
 				<div class="header__container container">
 					<div class="header__row row">
 						<div class="header__block col-3">
 							<div class="header__city ">
 								<div class="header__city-link align-items-center">
 									<div class="header__city-link-icon">
 										<div class="icon-placeholder-1"></div>
 									</div>
 									<a class="link link--color-white" href="#">Владивосток</a>
 								</div>
 							</div>
 						</div>
 						<div class="header__block col-9">
 							<div class="header__nav ">
 								<ul class="nav nav--horizontal">
 									<li class="nav__link nav__link--horizontal">
 										<a class="link link--color-white link--dropdown" href="#">Магазины</a>
 									</li>
 									<li class="nav__link nav__link--horizontal">
 										<a class="link link--color-white link--dropdown" href="#">Покупателям</a>
 									</li>
 									<li class="nav__link nav__link--horizontal">
 										<a class="link link--color-white link--dropdown" href="#">Наши проекты</a>
 									</li>
 								</ul>
 							</div>
 							<div class="header__phone">
 								<div class="header__phone-number">8-800-77-07-999</div>
 								<div class="header__phone-time">(c 03:00 до 22:00)</div>
 							</div>
 							<div class="header__user-auth">
 								<div class="header__sign-in-link">
 									<a class="link link--color-white" href="#">Вход</a>
 								</div>
 								<div class="header__sign-up-link">
 									<a class="link link--color-white" href="#">Регистрация</a>
 								</div>  
 							</div>
 						</div>
 					</div>
 				</div>
 			</div>

 			<div class="fixed-plate" :class="{ 'is-fixed': isFixed }">
 				<div class="header__bottom-line" v-bind:class="{ technopoint: isTp }">
 					<div class="header__container container">
 						<div class="header__row row   header__row--bg-fill">

 							<div class="header__block col-auto col-lg-3 flex-shrink-1" >
 								<div class="header__logo w-100" >
 									<img v-if="isTp" @click="$emit('tptodns')" src="https://as.technopoint.ru/assets/549eb8cf/images/theme/logo.png" class="header__logo-tp"  alt="">
 									<img @click="$emit('tptodns')" src="https://i.snag.gy/iSpaHI.jpg" class="header__logo-main"  alt="" v-if="!isTp">
 									<div class="p-relative w-100">
 										<transition name="fade">
 											<img v-if="!showcatalog && !isTp" src="https://i.snag.gy/ktOpuU.jpg" class="header__logo-desc ml-2 d-none d-lg-block" alt="" >

 											
 										</transition>
 										<transition name="fadebutton">
 											<div v-if="showcatalog" class="btn btn-orange d-none d-lg-inline-block ml-auto"  v-on:click="showcatalogList = !showcatalogList">
 												<div class="d-flex align-items-center">
 													<div class="header__catalog-button-icon icon-menu"></div>
 													Каталог  <span class="d-none d-xl-block ml-1"> товаров</span> 
 												</div>
 											</div>
 										</transition>
 									</div>
 									
 									


 								</div>
 								

 								


 							</div>
 							<div class="header__block  flex-grow-1 d-none d-md-flex">
 								<div class="header__search-form ">
 									<input type="search" class="header__search-form-field" placeholder="Поиск по каталогу">
 									<button class="header__search-form-submit"><span class="icon-search"></span></button>

 								</div>
 							</div>




 							<div class="header__block  flex-shrink-1 d-none d-lg-flex">
 								<div class="header__store-control">
 									<div class="header__store-control__icon">
 										<div class="icon-compare"></div>
 									</div>
 									<div class="header__store-control__desc">Сравнение</div>
 								</div>
 								<div class="header__store-control">
 									<div class="header__store-control__icon">
 										<div class="icon-heart"></div>
 									</div>
 									<div class="header__store-control__desc">Избранное</div>
 								</div>
 								<div class="header__store-control ">
 									<div class="header__store-control__icon">
 										<div class="icon-cart"></div>
 									</div>
 									<div class="header__store-control__desc">Корзина</div>
 								</div>
 							</div>



 							<div class="flex-shrink-1 ml-auto d-md-none">
 								<div v-ripple  class="header__mobile-icon">
 									<div class="icon-search"></div>
 								</div>
 							</div>
 							<div  class="flex-shrink-1 d-lg-none">
 								<div v-ripple   class="header__mobile-icon">
 									<div class="icon-cart"></div>

 								</div>
 							</div>
 							<div  class="flex-shrink-1 d-lg-none">
 								<div v-ripple  v-on:click="isDrawer = !isDrawer" class="header__mobile-icon">
 									<div class="icon-menu"></div>

 								</div>
 							</div>
 						</div>


 						<transition name="drop">
 							<div  v-if="showcatalogList && showcatalog"  class="header__drop-catalog ">
 								<catalogmenu   :catalog="catalogitem"></catalogmenu>
 							</div>
 						</transition>
 					</div>
 				</div>
 			</div>
 			<transition name="drawer-fade">			
 				<div v-if="isDrawer" class="drawer" >
 					<div class="w-100 text-right">
 						<button class="btn" v-on:click="isDrawer = !isDrawer">X</button>
 					</div>

 				</div>

 			</transition>

 		</div>

 	</fixed-header>
 </template>

 <script>

 	import FixedHeader from 'vue-fixed-header'
 	import catalogmenu from './catalog-menu.vue'

 	export default {
 		components: {
 			FixedHeader,
 			catalogmenu
 		},


 		props: {
 			isTp: {
 				type: null
 			},
 			showcatalog: {
 				type: null
 			},
 			catalogitem: {
 				type: null
 			}
 		},

 		data: function() {
 			return {
 				isFixed: false,
 				isDrawer:false,

 				showcatalogList: false


 			}
 		}
 	}
 </script>

 <style>
/*.header__logo{
	width: 280px;
	}*/

	.header__city-link{
		display: flex;

	}
	.header__city-link-icon{
		margin-right: .25rem;
		color: #777;
		height: 17px;

	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .3s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	.fadebutton-enter-active, .fadebutton-leave-active {
		transition: opacity .3s;
	}
	.fadebutton-enter, .fadebutton-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
		position: absolute;
		top: 50%;
		right:  0;
		transform: translateY(-50%);
	}






	.drop-enter-active, .drop-leave-active {
		transform: translateY(0);
		transition: all .2s;
		opacity: 1;

	}
	.drop-enter, .drop-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		display: block;
		background: red;
		height: 15px;
		overflow: hidden;
		transform: translateY(-20%);
		opacity: 0;
	}



	.drawer-fade-enter-active {
		transition: all .3s ease;
	}
	.drawer-fade-leave-active {
		transition: all .3s ease;
	}
	.drawer-fade-enter, .drawer-fade-leave-to
	/* .slide-fade-leave-active до версии 2.1.8 */ {
		transform: translateX(40px);
		opacity: 0;
	}


	.drawer{
		z-index: 500;
		display: block;
		width: 100vw;
		position: fixed;
		height: 100vh;
		top: 0;
		right: 0;
		background: white;
		box-shadow: 0 0 25px rgba(0,0,0,0.2);
	}




	.fixed-plate.is-fixed{
		position: fixed;
		top:0;
		z-index: 100;
		box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.14);
		background-color: rgb(256, 256, 256);
		display: block;
		width: 100%;
	}




	.header{
		box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.14);
		background-color: rgb(256, 256, 256);
		position: relative;
		height: 100px;
		z-index: 100;
		display: block;
	}

	.header__row{
		flex-wrap: nowrap;
		display: flex;
		
	}
	.header__top-line{
		height: 35px;
		background-color: #333;
		font-size: 0.875rem;
		display: flex;
		align-items: center;
		color:#fff;

	}

	.header__bottom-line {
		height: 65px;
		display: flex;
		align-items: center;
	}

	.header__bottom-line.technopoint{
		background: rgba(76,47,117,1) ;
		color: #fff;
	}

	.technopoint .header__row{
		background: rgba(76,47,117,1) ;
	}
	.technopoint .header__store-control__icon{
		color: #fff;
	}



	@media (max-width: 992px){
		.header{
			box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.14);
			background-color: rgb(256, 256, 256);
			margin-bottom: 1.5rem;
			height: 55px;
		}
		.header__bottom-line{
			height: 55px;
		}
		.header{
			margin-bottom: 1rem;
		}
		.header__logo {
			margin: 0 10px 0 0;

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
		padding-right: .5rem;
		border-right: 1px solid #666;

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
		padding: 5px 0 0 8px;
		font-size: 19px;
		height: 32px;
	}

	.header__search-form{
		width: 100%;
		display: flex;
		margin: 0 5px;
		align-items: center;
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

	.header__search-icon{
		padding: 6px 7px 0 7px;
		color: #aaa;
		font-size: 18px;
	}
	.header__row--bg-fill{
		background-color: #fff;
		height: 65px;
	}

	@media (max-width: 992px){
		.header__row--bg-fill{
			background-color: #fff;
			height: auto;
		}
		.header__logo-main{
			width: 60px;
			padding-top: 2px;
		}
		.header__logo-desc{
			width: 80px;
			padding-top: 2px;
		}
		.header__logo-tp{
			width: 150px;
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

		.technopoint .header__search-form-field{
			background: #fff;


		}

		.technopoint .header__search-form-submit{
			background: #fff;
			

		}


		.header__mobile-icon{
			display: flex;
			align-items: center;
			height: 100%;
			padding: 12px 16px 8px;
			color: #999;
		}
		.technopoint .header__mobile-icon{

			color: #fff;
		}



	}

	.header__drop-catalog{

		height: 580px;
		background: #fff;
		position: absolute;
		top: 52px;
		box-shadow: 0 15px 15px rgba(0,0,0,0.1), inset 0 35px 15px -15px rgba(0,0,0,0.1);
		width: 280px;
		border-radius: 0 0 8px 8px;
		display: block;
		z-index: -1;
	}
	.header__catalog-button-icon{
		line-height: 12px;
		margin-right: 14px;


	}
	.p-relative{
		position: relative;
		display: flex;
	}
/*.header__drop-catalog:after{
    content: "";
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.6);
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -500;
}*/


</style>