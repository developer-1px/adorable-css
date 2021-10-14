<script lang="ts">
export let phase = "prod"
export let version
</script>

<div class="version fixed z(9999) layer(bottom+right) p(10/20) font(10) c(#999)">{phase !== "prod" ? `[${phase}]` : ''} {version}</div>