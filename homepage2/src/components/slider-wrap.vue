<template>
	<div class="">
		<ul class="nav nav--horizontal" >
			<li class="nav__link nav__link--horizontal"
			v-for="tab in tabs"
			v-bind:key="tab"
			v-on:click="currentTab = tab">
			<a class="link link--pill link--color-grey " 
			v-bind:class="[{ 'link--pill-active': currentTab === tab }]" >{{ tab }}</a>
		</li>
	</ul>
	<keep-alive>
		<component
		v-bind:is="currentTabComponent"
		class="tab"
		></component>
	</keep-alive>
</div>
</template>

<script>

import testslider from './slider.vue'



export default {

	components: {
		tabArchive: testslider,
		tabPosts:{

			template: '<div>Archive component2</div>' 
		},

	},

	data: function() {
		return {
			currentTab: 'Posts',
			tabs: ['Posts', 'Archive'],

		}
	},





	props: {
		post: {
			type: null
		}
	},




	computed: {
		currentTabComponent: function () {
			return 'tab-' + this.currentTab.toLowerCase()
		}
	},



}
</script>

<style>

</style>