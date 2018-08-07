<template>
  <ul class="catalog-menu d-flex flex-column  justify-content-between h-100 m-0 p-0">
    <li class="catalog-menu__item nav-list__item d-flex align-items-center" v-for="(mainNavItem) in catalog"> 
      <div class="catalog-menu__item-img  mr-3">
        <div :class="mainNavItem.img"></div>
      </div>
      <div class="catalog-menu__item-info d-flex flex-column">
        <div class="catalog-menu__item-info-title">{{mainNavItem.title}}</div>
        <div class="catalog-menu__item-info-sub-cat small d-flex">
          <a v-for="(subcat) in mainNavItem.subcategories" href="" class=" mr-2 link link--color-grey">{{subcat}}</a>
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
      
    }
 }
</script>

<style>
.catalog-menu__item {
    height: 100%;
    padding-left: 1.5rem;
}


.catalog-menu__item-img {
  font-size: 32px;
  color: #FF860F;
  height: 32px;
}
</style>