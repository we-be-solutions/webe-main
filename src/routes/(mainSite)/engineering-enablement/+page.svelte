<script lang="ts">
	import ServicePage from '$lib/components/ServicePage.svelte';
	import { getService } from '$lib/content/site';
</script>

<ServicePage service={getService('engineering-enablement')} />
