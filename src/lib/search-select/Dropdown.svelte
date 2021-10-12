<script lang="ts">
	import type { Visibility } from './types';

	export let visibility: Visibility = 'hidden';
</script>

<div class="dropdown" class:is-active={visibility !== 'hidden'}>
	imadropdown
	<!-- <ul class="dropdown-list">
		<slot />
	</ul> -->
</div>

<style>
	.dropdown {
		position: relative;
		margin: auto;
		width: 145px;
	}

	.dropdown-list {
		position: absolute;
		width: 145px;
		list-style-type: none;
		padding-inline-start: 0;
		z-index: 10;
		background-color: white;
		margin-top: 0px;
		max-height: 120px;
		overflow-y: scroll;
		border-style: solid;
		border-width: 2px;
	}
</style>
