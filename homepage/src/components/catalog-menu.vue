<template>
	<ul class="catalog-menu d-flex flex-column  justify-content-between h-100 m-0 p-0">

		<li v-ripple  class="catalog-menu__item nav-list__item d-flex align-items-center " v-for="(mainNavItem) in catalog"> 

			<div class="catalog-menu__item-img ">
				<div :class="mainNavItem.img"></div>
			</div>
			<div class="catalog-menu__item-info d-flex flex-lg-column align-items-center align-items-lg-start w-100">
				<div class="catalog-menu__item-info-title">{{mainNavItem.title}}</div>
				<div class="catalog-menu__item-info-sub-cat-list small  ">
					<a v-ripple v-for="(subcat) in mainNavItem.subcategories" href="#"  class="catalog-menu__item-info-sub-cat link link--color-grey">{{subcat}}</a>

				</div>
			</div>
		</li>

	</ul>


</template>

<script>

	export default  {
		props: { 
			catalog: {
				type: null,
				default: ""
			}
			
		},
		components: { 
		}
	}
</script>

<style>
.catalog-menu {
	overflow: hidden;
}
.catalog-menu__item:first-child{
	margin-top: .75rem;
}

.catalog-menu__item:last-child{
	padding-bottom: .25rem;
	background: #F8F8F8;

}


.catalog-menu__item:last-child .catalog-menu__item-img {
	color: #999;
}

.catalog-menu__item {
	height: 100%;
	padding: 0 1.5rem;
	cursor: pointer;
}


.catalog-menu__item:hover {
	background: rgba(0,0,0,0.05);
}

.catalog-menu__item-info-title{
	white-space: nowrap; 
	user-select:none;
}


.catalog-menu__item-info-sub-cat{
	margin-right: .5rem;
	white-space: nowrap; 
	user-select:none;
}

.catalog-menu__item-img {
	font-size: 32px;
	color: #FF860F;
	height: 37px;
	margin-right: 1.5rem;
}

@media (max-width: 992px){

	.catalog-menu__item-img {
		font-size: 24px;
		color: #FF860F;
		height: 24px;
		margin-right: .75rem;
	}



	.catalog-menu__item {
		height: 100%;
		min-height: 50px;
		padding: 0 2.5rem 0 .75rem;
		cursor: pointer;
		border-bottom: 1px solid #eee;
		position: relative;

	}


	.catalog-menu__item-info-title{
		margin-right: .5rem;

		font-size:15px;
	}

/*.catalog-menu__item-info-title{
	color:#0d61af;
	}*/
/*.catalog-menu__item:nth-child(1) .catalog-menu__item-info-title, .catalog-menu__item:nth-child(2) .catalog-menu__item-info-title,.catalog-menu__item:nth-child(3) .catalog-menu__item-info-title{
		font-weight: 700;
		}*/
		.catalog-menu__item:after{
			content: "s";
			padding: 7px 0 0 0;
			display: block;
			width: 24px;
			height: 39px;
			background: #fff;
			position: absolute;
			right: 0;
			font-family: "homepage-dns" !important;
			color: #F5891E;
			box-shadow: -8px 0 5px #fff;

		}

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