<template>
	<div class=" catalog-menu__item nav-list__item  ">
		<div   v-ripple  class="catalog-menu__item-link-wrap d-flex align-items-center " v-on:click="collapseSubMenu" > 

			<div class=" ">
				<!-- <div :class="mainNavItem.img"></div> -->
				<img :src="mainNavItem.imgr" alt="" class="catalog-menu__item-img">
			</div>

			<div class="catalog-menu__item-info d-flex flex-lg-column align-items-center align-items-lg-start w-100">
				<div class="catalog-menu__item-info-title">{{mainNavItem.title}} </div>
				<div class="catalog-menu__item-info-sub-cat-list small d-none d-lg-flex ">
					<a v-ripple v-for="(subcat, index) in mainNavItem.subcategories" :key="index" href="#"  class="catalog-menu__item-info-sub-cat link link--color-grey">{{subcat}}</a>
				</div>
			</div>
			<div class="d-lg-none">
				<div v-if="!collapse" class=" pt-1 icon-arrow-down"></div>
				<div v-if="collapse" class=" pt-1 icon-arrow-up"></div>
			</div>
		</div>
		<div class="d-lg-none">
			<transition name="slide-fade">
				<div v-if="collapse" v-bind:class="{ catalogMenu__subcatWrap: collapse }">
					<div v-ripple  class="pl-5 pr-1  py-2 catalog-menu__subcat-item  d-flex  align-items-center justify-content-between" v-for="(subcatFull, index) in mainNavItem.subcategoriesFull" :key="index">
						<div class="">{{subcatFull}}</div>
						<div class="h5 mb-0 icon-arrow-right pt-1 pr-2"></div>
					</div>
				
				</div>
			</transition>
		</div>
	</div>


</template>

<script>

	export default  {
		props: { 
			mainNavItem: {
				type: null,
				default: ""
			}

		},
		methods: {
			handleResize() {
				this.window.width = window.innerWidth;
				this.window.height = window.innerHeight;

			},
			collapseSubMenu(){
				if (this.window.width < 992) {
					this.collapse = !this.collapse;
				}
			}

		},
		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},
		data: function() {
			return {
				collapse: false,
				window: {
					width: 0,
					height: 0
				},
			}
		},
		components: { 
		}
	}
</script>

<style>



/*-----------анимация */
.slide-fade-enter-active {
	transition: all .2s ease;
}
.slide-fade-leave-active {
	transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {

	transform: translateX(-10px);
	opacity: 0;
}








.catalog-menu__item:first-child{
	margin-top: .75rem;
}

.catalog-menu__item:last-child{
	padding-bottom: .25rem;
	border-top: 1px solid #eee;

}


.catalog-menu__item:last-child .catalog-menu__item-img {
	color: #999;
}

.catalog-menu__item {
	height: 100%;
flex: 1 1 auto;
display: flex;
	cursor: pointer;
	flex-direction: column;
}


.catalog-menu__item:hover {
	background: rgba(0,0,0,0.05);
	transition:  background ease .1s;
}

.catalog-menu__item:hover  .catalog-menu__item-img {
		color: #FC7B08;
}


.catalog-menu__item-info-title{
	white-space: nowrap; 
	user-select:none;
	line-height: 1.1;
	font-size: 16px;
}



.catalog-menu__item-info-sub-cat{
	margin-right: .5rem;
	white-space: nowrap; 
	user-select:none;
}

.catalog-menu__item-img {
	font-size: 32px;
	color: #FC7B08;
	height: 32px;
	width: 32px;
	margin-right: 1.5rem;
}




.catalog-menu__item-link-wrap{
	padding: 0 1.5rem;
	width:  100%;
	flex: 1 1 auto!important;
}
.catalog-menu__item-link-wrap.active{
box-shadow: 0 0 15px rgba(0,0,0,0.2)
}

.catalogMenu__subcatWrap{
	box-shadow: inset 0px 15px 15px -15px rgba(0,0,0,0.2), inset 0px -15px 15px -15px rgba(0,0,0,0.2);
	
}

@media (max-width: 1200px){

	.catalog-menu__item-img {
		font-size: 26px;
		color: #FF860F;
		height: auto;
		margin-right: 1rem;
	}
	.catalog-menu__item {
		height: 100%;

		cursor: pointer;
	}

	.catalog-menu__item-info-title{
		font-size: 15px;
	}


	.catalog-menu__item:last-child {
		padding-bottom: .0;

	}

	.catalog-menu__item-link-wrap{

		padding: 0 1rem;
	}



}

@media (max-width: 992px){


	.catalog-menu__item-link-wrap{
		height: 50px;
		padding: 0 .75rem 0 .75rem;
	}

	.catalog-menu__item-img {
		font-size: 24px;
		color: #FF860F;
		height: 24px;
		width: 24px;
		margin-right: .75rem;
	}



	.catalog-menu__item {
		height: auto;
		min-height: 50px;

		cursor: pointer;
		border-bottom: 1px solid #eee;
		position: relative;

	}


	.catalog-menu__item-info-title{
		margin-right: .5rem;
		font-size:16px;
	}



	.catalog-menu__subcat-item {
			height: auto;
	min-height: 50px;
	cursor: pointer;
	border-top: 1px solid #eee;
	}

/*.catalog-menu__item-info-title{
	color:#0d61af;
	}*/
/*.catalog-menu__item:nth-child(1) .catalog-menu__item-info-title, .catalog-menu__item:nth-child(2) .catalog-menu__item-info-title,.catalog-menu__item:nth-child(3) .catalog-menu__item-info-title{
		font-weight: 700;
		}*/


		.catalog-menu__item:first-child{
			margin-top: 0;
		}

		.catalog-menu__item:last-child{
			padding-bottom: 0;
			background: #fff;
		}

		.catalog-menu__item:hover {
			background: #fff;
		}
		.catalog-menu__item-info-sub-cat-list{
			margin-left: auto;
		}
		.catalog-menu__item-info-sub-cat{
			padding: .35rem .5rem;
			border-radius: .25rem;
			margin-left: .75rem;
			margin-right: 0;
			color:#999;
			font-size: 13px;
			border: 1px solid #eee;


		}


	}








</style>