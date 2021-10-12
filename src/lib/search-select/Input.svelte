<script lang="ts">
	import type { Visibility } from './types';

	export let value: string;
	export let visibility: Visibility;

	function onFocus() {
		visibility = 'revert';
	}
</script>

<div class="container">
	<input
		class="input"
		placeholder="search model"
		bind:value
		on:focus={onFocus}
	/>
	{#if visibility === 'hidden'}
		<div class="icon">&#9660;</div>
	{:else}
		<div class="icon">&#9650;</div>
	{/if}
</div>

<style>
	.container {
		border: 1px solid;
		height: 17px;
		width: 150px;
		margin: auto;
		display: inline-flex;
	}

	.input {
		width: 130px;
		text-align: center;
		border: none;
	}

	.icon {
		margin: auto;
		font-size: xx-small;
	}
</style>
