<template>
	<div class="test">
		<div class="test__hide-btn">Свернуть</div>
		<div v-if="!isFinished" class="first-step">
			<div class="test__title-wrap">
				<div class="test__title">Приветствуем!</div>

			</div>
			<div class="test__subtitle">Выполните задание:</div>
			<div class="issue">
				<div class="issue__title">
					<p>Представьте, что вы не можете разобраться с функциональными особенностями недавно преобретенного
						сматфона. </p>
					<p> Для подобных случаев на нашем сайте предусмотрен функционал, где вы можете задать вопрос
						экспертам.</p>
					<p>Задайте вопрос эксперту, например, как включить GPS, как задать дни недели для будильника итд...
						По
						завершению нажмите кнопку "готово"</p>
				</div>
				<div class="issue__action-buttons">
					<button class="issue__btn issue__btn-ready" @click="issueReady">Готово</button>
					<button class="issue__btn issue__btn-bad-ux" @click="issueReady">Не получается</button>
				</div>
			</div>
		</div>
		<Form v-if="isFinished"></Form>
	</div>
</template>

<script>
	import Form from './Form';

	export default {
		name:       'HelloWorld',
		components: {Form},
		props:      {
			msg: String,
		},
		data:       function() {
			return {
				isFinished: false,
				error:      [],
			}
		},
		methods:    {
			issueReady() {
				// let userAgent = window.navigator.userAgent;
				// window.ym(52268173, 'reachGoal', '2020-02-27-test-ux', {'2020-02-27-test-ux': '003, ответ1, asdfsd 22222 ' + userAgent});
				this.isFinished = true
			},
			stateLog() {

			},
			issueFail() {
				// console.log(true)
			},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.test {


		&__title-wrap {
			display:         flex;
			align-items:     center;
			justify-content: space-between;
			margin-bottom:   12px;
		}

		&__title {
			font-size:   16px;
			font-weight: 700;

		}

		&__hide-btn {
			font-size:   12px;
			cursor:      pointer;
			color:       #666;
			user-select: none;
			margin-bottom: 8px;

			&:hover {
				opacity: .8;
			}
		}

		&__subtitle {
			margin-bottom: 8px;
			font-size:     15px;
		}
	}


	.issue {
		padding:          16px 12px;
		background-color: #f2f2f2;
		border-radius:    8px;

		&__action-buttons {
			display: flex;
		}

		&__title {
			font-size:     14px;
			line-height:   18px;
			margin-bottom: 12px;

			& p {
				margin-bottom: 8px;
			}
		}

		&__btn {
			margin-right:     12px;
			border:           1px solid #ddd;
			background-color: #fff;
			padding:          10px 12px;
			border-radius:    8px;
			font-size:        16px;
			outline:          none;
			cursor:           pointer;
			user-select:      none;

			&:hover {
				opacity: .8;
			}

			&-ready {

			}

			&-bad-ux {
				background-color: #f2f2f2;

			}
		}
	}

</style>
