<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<div class="field">
	<label class="label" for={name}>{label}</label>
	<div class="control">
		<slot />
	</div>
</div>
